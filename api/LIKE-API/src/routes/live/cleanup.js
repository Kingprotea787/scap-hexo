/**
 * 过期消息清理
 */

const database = require('./database');
const cache = require('./cache');

const EXPIRE_TIME = 12 * 60 * 60 * 1000; // 12小时

// 清理过期评论
function cleanupExpiredMessages() {
  const now = Date.now();
  const firstMessageTimes = cache.getAllFirstMessageTimes();

  firstMessageTimes.forEach((firstTime, videoId) => {
    if (now - firstTime > EXPIRE_TIME) {
      try {
        database.deleteVideoMessages(videoId);
        cache.deleteFirstMessageTime(videoId);
        cache.clearVideoCache(videoId);
        console.log(`已清理视频 ${videoId} 的过期评论`);
      } catch (e) {
        console.error(`清理视频 ${videoId} 评论失败:`, e);
      }
    }
  });
}

// 检查视频是否过期
function isVideoExpired(videoId) {
  const firstTime = cache.getFirstMessageTime(videoId);
  return firstTime && Date.now() - firstTime > EXPIRE_TIME;
}

// 启动定时清理
function startCleanupInterval() {
  // 每分钟检查一次
  setInterval(cleanupExpiredMessages, 60 * 1000);
  // 启动时也检查一次
  cleanupExpiredMessages();
}

module.exports = {
  cleanupExpiredMessages,
  isVideoExpired,
  startCleanupInterval,
  EXPIRE_TIME
};
