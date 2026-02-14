/**
 * WebSocket 服务器
 */

const { WebSocketServer } = require('ws');
const { getClientIp } = require('../../utils/clientIp');
const database = require('./database');
const cache = require('./cache');
const wsClients = require('./wsClients');
const voice = require('./voice');
const playback = require('./playback');

let peerIdCounter = 0;
let wssInstance = null;

function generatePeerId() {
  return `peer_${++peerIdCounter}_${Date.now()}`;
}

// 创建 WebSocket 服务器
function createWsServer(server) {
  const wss = new WebSocketServer({ server, path: '/ws/live' });
  wssInstance = wss;

  wss.on('connection', (ws, req) => {
    const ip = getClientIp({ headers: req.headers, socket: req.socket });
    const peerId = generatePeerId();
    ws.peerId = peerId;
    ws.isAlive = true;
    ws.isAdmin = false;

    console.log('WebSocket 客户端连接:', ip, peerId);

    // 添加到客户端列表
    wsClients.addClient(ws);

    // 发送 welcome 消息
    ws.send(JSON.stringify({
      type: 'welcome',
      peerId: peerId
    }));

    // 发送当前播放状态（初始化用）
    ws.send(JSON.stringify({
      type: 'playback_init',
      ...playback.getPlaybackState()
    }));

    // 发送历史消息
    try {
      const history = database.db.prepare(`
        SELECT id, username, content, created_at as timestamp
        FROM live_messages
        ORDER BY id DESC
        LIMIT 50
      `).all();

      ws.send(JSON.stringify({
        type: 'history',
        messages: history.reverse()
      }));

      // 发送当前语音用户列表
      const voiceUsers = voice.getVoiceUsers();
      if (voiceUsers.size > 0) {
        const users = Array.from(voiceUsers.entries()).map(([pid, data]) => ({
          peerId: pid,
          username: data.username
        }));
        ws.send(JSON.stringify({
          type: 'voice_users',
          users: users
        }));

        // 通知所有正在语音的用户向新用户发送 offer
        voiceUsers.forEach((userData) => {
          if (userData.ws.readyState === 1) {
            userData.ws.send(JSON.stringify({
              type: 'request_offer',
              targetPeerId: peerId
            }));
          }
        });
      }
    } catch (e) {
      console.error('发送历史消息失败:', e);
    }

    // 处理消息
    ws.on('message', (data) => {
      try {
        const msg = JSON.parse(data.toString());

        // 处理语音信令
        if (msg.type && (msg.type.startsWith('voice_') || msg.type === 'ice_candidate' || msg.type === 'mute_status')) {
          voice.handleVoiceSignaling(ws, msg, peerId, wss);
          return;
        }

        // 处理聊天消息
        if (msg.type === 'chat') {
          handleChatMessage(ws, msg, ip, wss);
          return;
        }

        // 处理管理员控制指令
        if (msg.type && msg.type.startsWith('admin_')) {
          handleAdminCommand(ws, msg, wss);
          return;
        }
      } catch (e) {
        console.error('消息处理失败:', e);
      }
    });

    // 处理 pong
    ws.on('pong', () => {
      ws.isAlive = true;
    });

    // 处理断开
    ws.on('close', () => {
      console.log('WebSocket 客户端断开:', ip, peerId);
      voice.handleUserDisconnect(ws, peerId, wss);
      wsClients.removeClient(ws);
    });

    // 处理错误
    ws.on('error', (err) => {
      console.error('WebSocket 错误:', err);
      voice.handleUserDisconnect(ws, peerId, wss);
      wsClients.removeClient(ws);
    });
  });

  // 心跳检测
  const heartbeatInterval = setInterval(() => {
    wss.clients.forEach(ws => {
      if (ws.isAlive === false) {
        voice.handleUserDisconnect(ws, ws.peerId, wss);
        wsClients.removeClient(ws);
        return ws.terminate();
      }
      ws.isAlive = false;
      ws.ping();
    });
  }, 30000);

  wss.on('close', () => {
    clearInterval(heartbeatInterval);
  });

  return wss;
}

// 处理管理员控制指令
function handleAdminCommand(ws, msg, wss) {
  // 验证管理员密钥
  if (!msg.adminKey || !playback.verifyAdminKey(msg.adminKey)) {
    ws.send(JSON.stringify({ type: 'error', message: '无管理员权限' }));
    return;
  }

  ws.isAdmin = true;

  switch (msg.type) {
    case 'admin_select_video':
      playback.selectVideo(msg.videoId, msg.videoUrl);
      // 广播切换视频指令
      broadcastCommand({
        type: 'cmd_switch_video',
        videoId: msg.videoId,
        videoUrl: msg.videoUrl
      }, ws);
      break;

    case 'admin_play':
      playback.play(msg.currentTime);
      // 广播播放指令
      broadcastCommand({
        type: 'cmd_play',
        currentTime: msg.currentTime
      }, ws);
      break;

    case 'admin_pause':
      playback.pause(msg.currentTime);
      // 广播暂停指令
      broadcastCommand({
        type: 'cmd_pause',
        currentTime: msg.currentTime
      }, ws);
      break;

    case 'admin_seek':
      playback.seek(msg.time);
      // 广播跳转指令
      broadcastCommand({
        type: 'cmd_seek',
        time: msg.time
      }, ws);
      break;

    case 'admin_back':
      playback.backToSelector();
      // 广播返回选择页指令
      broadcastCommand({
        type: 'cmd_back'
      }, ws);
      break;
  }
}

// 广播指令给所有客户端（除了发送者）
function broadcastCommand(data, excludeWs) {
  if (!wssInstance) return;
  const message = JSON.stringify(data);
  wssInstance.clients.forEach(client => {
    if (client !== excludeWs && client.readyState === 1) {
      client.send(message);
    }
  });
}

// 处理聊天消息
function handleChatMessage(ws, msg, ip, wss) {
  const content = String(msg.content).slice(0, 500);
  const username = String(msg.username || '匿名').slice(0, 20);
  const videoId = msg.videoId || 'global';
  const timestamp = msg.timestamp || Date.now();

  try {
    // 记录首条消息时间
    cache.setFirstMessageTime(videoId, timestamp);

    // 保存到数据库
    const result = database.insertMessage.run(videoId, username, content, ip, timestamp);

    const message = {
      type: 'chat',
      id: result.lastInsertRowid,
      videoId,
      username,
      content,
      timestamp
    };

    // 更新缓存
    cache.addToCache(videoId, message);

    // 广播给所有人（除了发送者）
    voice.broadcastToAll(wss, message, ws);
  } catch (e) {
    console.error('保存消息失败:', e);
  }
}

module.exports = {
  createWsServer
};
