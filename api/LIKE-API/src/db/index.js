// src/db/index.js
const Database = require('better-sqlite3');
const { DB_PATH } = require('../config');

const db = new Database(DB_PATH);

// 点赞表
db.exec(`
  CREATE TABLE IF NOT EXISTS likes (
    post_id    TEXT NOT NULL,
    ip         TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (post_id, ip)
  );
`);

// 提名表 ranktga
db.exec(`
  CREATE TABLE IF NOT EXISTS ranktga (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    author      TEXT,
    content     TEXT NOT NULL,
    type        TEXT NOT NULL,
    created_at  TEXT NOT NULL DEFAULT (datetime('now')),
    ip          TEXT
  );
`);

// 评论表
db.exec(`
  CREATE TABLE IF NOT EXISTS comments (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id     TEXT NOT NULL,
    author      TEXT,
    content     TEXT NOT NULL,
    created_at  TEXT NOT NULL DEFAULT (datetime('now')),
    ip          TEXT,
    is_approved INTEGER NOT NULL DEFAULT 0
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS nom_votes (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    category   TEXT NOT NULL,     -- Anime/Comic/Game/Novel
    title      TEXT NOT NULL,     -- 作品标题（作为定位键）
    ip         TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

// 自动迁移：老表补字段
try {
  const cols = db.prepare(`PRAGMA table_info(comments);`).all();
  const hasApproved = cols.some(c => c.name === 'is_approved');
  if (!hasApproved) {
    db.exec(`ALTER TABLE comments ADD COLUMN is_approved INTEGER NOT NULL DEFAULT 0;`);
  }
} catch (e) {
  console.error('comments auto-migrate failed:', e);
}

// 索引
db.exec(`
  CREATE INDEX IF NOT EXISTS idx_comments_postid_id           ON comments(post_id, id DESC);
  CREATE INDEX IF NOT EXISTS idx_comments_postid_id_approved  ON comments(post_id, id, is_approved);
`);

module.exports = { db };
