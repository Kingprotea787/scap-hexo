/**
 * Live 路由入口
 */

const express = require('express');
const router = express.Router();

const database = require('./database');
const cache = require('./cache');
const cleanup = require('./cleanup');
const videos = require('./videos');
const wsClients = require('./wsClients');
const wsServer = require('./wsServer');
const playback = require('./playback');
const { getClientIp } = require('../../utils/clientIp');

// 初始化
database.initTable();
cache.initCache();
cleanup.startCleanupInterval();

// 获取历史消息
router.get('/api/live/history', (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit) || 50, 100);
    const videoId = req.query.videoId || 'global';

    // 检查是否过期
    if (cleanup.isVideoExpired(videoId)) {
      database.deleteVideoMessages(videoId);
      cache.deleteFirstMessageTime(videoId);
      cache.clearVideoCache(videoId);
      return res.json({ messages: [], expired: true });
    }

    const messages = database.getHistory(videoId, limit);
    res.json({ messages: messages.reverse() });
  } catch (e) {
    console.error('获取历史消息失败:', e);
    res.status(500).json({ error: '获取历史消息失败' });
  }
});

// 获取视频列表
router.get('/api/live/videos', (req, res) => {
  try {
    const videoList = videos.getVideoList();
    res.json({ videos: videoList });
  } catch (e) {
    console.error('获取视频列表失败:', e);
    res.status(500).json({ error: '获取视频列表失败' });
  }
});

// 获取当前播放状态
router.get('/api/live/playback', (req, res) => {
  try {
    res.json(playback.getPlaybackState());
  } catch (e) {
    console.error('获取播放状态失败:', e);
    res.status(500).json({ error: '获取播放状态失败' });
  }
});

// 管理员验证
router.post('/api/live/admin/verify', (req, res) => {
  try {
    const { key } = req.body;
    if (playback.verifyAdminKey(key)) {
      res.json({ success: true });
    } else {
      res.status(401).json({ error: '密钥错误' });
    }
  } catch (e) {
    res.status(500).json({ error: '验证失败' });
  }
});

// 轮询获取新消息
router.get('/api/live/messages', (req, res) => {
  try {
    const since = parseInt(req.query.since) || 0;
    const videoId = req.query.videoId || 'global';
    const videoCache = cache.getVideoCache(videoId);

    const messages = since > 0
      ? videoCache.filter(m => m.id > since)
      : videoCache.slice(-20);

    res.json({
      messages,
      viewerCount: wsClients.getViewerCount(),
      lastId: videoCache.length > 0 ? videoCache[videoCache.length - 1].id : 0
    });
  } catch (e) {
    console.error('获取消息失败:', e);
    res.status(500).json({ error: '获取消息失败' });
  }
});

// HTTP 发送消息（降级方案）
router.post('/api/live/send', (req, res) => {
  try {
    const { content, username, videoId: reqVideoId } = req.body;
    const videoId = reqVideoId || 'global';

    if (!content || typeof content !== 'string') {
      return res.status(400).json({ error: '消息内容不能为空' });
    }

    if (content.length > 500) {
      return res.status(400).json({ error: '消息过长' });
    }

    const ip = getClientIp(req);
    const timestamp = Date.now();
    const safeUsername = (username || '匿名').slice(0, 20);

    // 记录首条消息时间
    cache.setFirstMessageTime(videoId, timestamp);

    // 保存到数据库
    const result = database.insertMessage.run(videoId, safeUsername, content.slice(0, 500), ip, timestamp);

    const message = {
      id: result.lastInsertRowid,
      videoId,
      username: safeUsername,
      content: content.slice(0, 500),
      timestamp
    };

    // 更新缓存
    cache.addToCache(videoId, message);

    // 广播给 WebSocket 客户端
    wsClients.broadcastMessage(message);

    res.json({ success: true, message });
  } catch (e) {
    console.error('发送消息失败:', e);
    res.status(500).json({ error: '发送消息失败' });
  }
});

// 导出
module.exports = {
  router,
  createWsServer: wsServer.createWsServer,
  playback,
  wsHandlers: {
    addClient: wsClients.addClient,
    removeClient: wsClients.removeClient,
    getViewerCount: wsClients.getViewerCount
  }
};
