// src/routes/like.js
const { Router } = require('express');
const { db } = require('../db');
const { clientIp } = require('../utils/clientIp');
const { adminAuth } = require('../middleware/adminAuth');
const { csvEscape } = require('../utils/csv');

const router = Router();

// GET /api/like/:postId
router.get('/api/like/:postId', (req, res) => {
  const postId = req.params.postId;
  const ip = clientIp(req);

  const count = db.prepare('SELECT COUNT(*) AS c FROM likes WHERE post_id=?').get(postId).c;
  const liked = !!db.prepare('SELECT 1 FROM likes WHERE post_id=? AND ip=?').get(postId, ip);

  res.json({ postId, count, liked });
});

// POST /api/like/:postId
router.post('/api/like/:postId', (req, res) => {
  const postId = req.params.postId;
  const ip = clientIp(req);

  try { db.prepare('INSERT INTO likes(post_id, ip) VALUES(?, ?)').run(postId, ip); } catch (e) {}
  const count = db.prepare('SELECT COUNT(*) AS c FROM likes WHERE post_id=?').get(postId).c;
  const liked = !!db.prepare('SELECT 1 FROM likes WHERE post_id=? AND ip=?').get(postId, ip);

  res.json({ postId, count, liked });
});

// 管理：汇总
router.get('/api/like-admin/summary', adminAuth, (req, res) => {
  const limit  = Math.min(parseInt(req.query.limit || '100', 10), 1000);
  const offset = Math.max(parseInt(req.query.offset || '0', 10), 0);

  const rows = db.prepare(`
    SELECT post_id,
           COUNT(*)        AS count,
           MAX(created_at) AS last_like_at
    FROM likes
    GROUP BY post_id
    ORDER BY count DESC, post_id ASC
    LIMIT ? OFFSET ?;
  `).all(limit, offset);

  const totals = db.prepare(`
    SELECT COUNT(DISTINCT post_id) AS total_posts,
           COUNT(*)                AS total_likes
    FROM likes;
  `).get();

  res.json({ totals, rows });
});

// 管理：明细
router.get('/api/like-admin/detail/:postId', adminAuth, (req, res) => {
  const { postId } = req.params;
  const limit  = Math.min(parseInt(req.query.limit || '100', 10), 5000);
  const offset = Math.max(parseInt(req.query.offset || '0', 10), 0);

  const rows = db.prepare(`
    SELECT ip, created_at
    FROM likes
    WHERE post_id = ?
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?;
  `).all(postId, limit, offset);

  const count = db.prepare(`SELECT COUNT(*) AS c FROM likes WHERE post_id = ?;`).get(postId).c;
  res.json({ postId, count, rows });
});

// 管理：导出
router.get('/api/like-admin/export.csv', adminAuth, (req, res) => {
  const rows = db.prepare(`
    SELECT post_id,
           COUNT(*)        AS count,
           MAX(created_at) AS last_like_at
    FROM likes
    GROUP BY post_id
    ORDER BY count DESC, post_id ASC;
  `).all();

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="likes_summary.csv"');
  res.write('post_id,count,last_like_at\n');

  for (const r of rows) {
    const post = csvEscape(r.post_id);
    const last = csvEscape(r.last_like_at);
    res.write(`${post},${r.count},${last}\n`);
  }
  res.end();
});

module.exports = router;
