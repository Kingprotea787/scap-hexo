/**
 * 数据库操作模块
 */

const { db } = require('../../db');

// 检查表是否有 video_id 列
function hasVideoIdColumn() {
  try {
    const columns = db.prepare(`PRAGMA table_info(live_messages)`).all();
    return columns.some(col => col.name === 'video_id');
  } catch (e) {
    return false;
  }
}

// 初始化表结构
function initTable() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS live_messages (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      username    TEXT NOT NULL,
      content     TEXT NOT NULL,
      ip          TEXT,
      created_at  INTEGER NOT NULL DEFAULT (strftime('%s', 'now') * 1000)
    );
    CREATE INDEX IF NOT EXISTS idx_live_messages_created ON live_messages(created_at DESC);
  `);

  // 添加 video_id 列（如果不存在）
  if (!hasVideoIdColumn()) {
    try {
      db.exec(`ALTER TABLE live_messages ADD COLUMN video_id TEXT DEFAULT 'global'`);
      db.exec(`CREATE INDEX IF NOT EXISTS idx_live_messages_video ON live_messages(video_id)`);
      console.log('已添加 video_id 列');
    } catch (e) {
      console.error('添加 video_id 列失败:', e);
    }
  }
}

// 插入消息
const insertMessage = db.prepare(`
  INSERT INTO live_messages (video_id, username, content, ip, created_at)
  VALUES (?, ?, ?, ?, ?)
`);

// 获取历史消息
function getHistory(videoId, limit = 50) {
  return db.prepare(`
    SELECT id, video_id, username, content, created_at as timestamp
    FROM live_messages
    WHERE video_id = ?
    ORDER BY id DESC
    LIMIT ?
  `).all(videoId, limit);
}

// 删除视频的所有消息
function deleteVideoMessages(videoId) {
  db.prepare(`DELETE FROM live_messages WHERE video_id = ?`).run(videoId);
}

// 获取所有视频的首条消息时间
function getFirstMessageTimes() {
  return db.prepare(`
    SELECT video_id, MIN(created_at) as first_time
    FROM live_messages
    GROUP BY video_id
  `).all();
}

module.exports = {
  db,
  initTable,
  insertMessage,
  getHistory,
  deleteVideoMessages,
  getFirstMessageTimes
};
