/**
 * 消息缓存管理
 */

const database = require('./database');

const MAX_CACHE_SIZE = 100;

// 内存中的消息缓存（按视频分组）
const messageCacheByVideo = new Map();

// 视频评论区首条消息时间缓存
const videoFirstMessageTime = new Map();

// 获取视频的消息缓存
function getVideoCache(videoId) {
  if (!messageCacheByVideo.has(videoId)) {
    messageCacheByVideo.set(videoId, []);
  }
  return messageCacheByVideo.get(videoId);
}

// 添加消息到缓存
function addToCache(videoId, message) {
  const cache = getVideoCache(videoId);
  cache.push(message);
  if (cache.length > MAX_CACHE_SIZE) {
    cache.shift();
  }
}

// 清空视频缓存
function clearVideoCache(videoId) {
  messageCacheByVideo.delete(videoId);
}

// 获取首条消息时间
function getFirstMessageTime(videoId) {
  return videoFirstMessageTime.get(videoId);
}

// 设置首条消息时间
function setFirstMessageTime(videoId, timestamp) {
  if (!videoFirstMessageTime.has(videoId)) {
    videoFirstMessageTime.set(videoId, timestamp);
  }
}

// 删除首条消息时间记录
function deleteFirstMessageTime(videoId) {
  videoFirstMessageTime.delete(videoId);
}

// 获取所有首条消息时间
function getAllFirstMessageTimes() {
  return videoFirstMessageTime;
}

// 初始化缓存
function initCache() {
  // 初始化首条消息时间缓存
  try {
    const firstMessages = database.getFirstMessageTimes();
    firstMessages.forEach(row => {
      if (row.video_id) {
        videoFirstMessageTime.set(row.video_id, row.first_time);
      }
    });
  } catch (e) {
    console.error('初始化首条消息时间缓存失败:', e);
  }

  // 初始化消息缓存
  try {
    const recent = database.db.prepare(`
      SELECT id, video_id, username, content, created_at as timestamp
      FROM live_messages
      ORDER BY id DESC
      LIMIT 500
    `).all();

    recent.reverse().forEach(msg => {
      addToCache(msg.video_id, msg);
    });
  } catch (e) {
    console.error('初始化消息缓存失败:', e);
  }
}

module.exports = {
  getVideoCache,
  addToCache,
  clearVideoCache,
  getFirstMessageTime,
  setFirstMessageTime,
  deleteFirstMessageTime,
  getAllFirstMessageTimes,
  initCache
};
