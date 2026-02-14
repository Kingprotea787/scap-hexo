// src/routes/commentAdmin.js
const { Router } = require('express');
const { db } = require('../db');
const { adminAuth } = require('../middleware/adminAuth');
const { csvEscape } = require('../utils/csv');

const router = Router();

// GET /api/comment-admin/pending
router.get('/api/comment-admin/pending', adminAuth, (req, res) => {
  const limit  = Math.min(parseInt(req.query.limit || '100', 10), 1000);
  const offset = Math.max(parseInt(req.query.offset || '0', 10), 0);
  const { postId } = req.query;

  let rows, count;
  if (postId) {
    rows = db.prepare(`
      SELECT id, post_id, author, content, ip, created_at
      FROM comments
      WHERE is_approved = 0 AND post_id = ?
      ORDER BY id ASC
      LIMIT ? OFFSET ?;
    `).all(postId, limit, offset);

    count = db.prepare(`SELECT COUNT(*) AS c FROM comments WHERE is_approved = 0 AND post_id = ?;`).get(postId).c;
  } else {
    rows = db.prepare(`
      SELECT id, post_id, author, content, ip, created_at
      FROM comments
      WHERE is_approved = 0
      ORDER BY id ASC
      LIMIT ? OFFSET ?;
    `).all(limit, offset);

    count = db.prepare(`SELECT COUNT(*) AS c FROM comments WHERE is_approved = 0;`).get().c;
  }

  res.json({ count, rows });
});

// POST /api/comment-admin/approve
router.post('/api/comment-admin/approve', adminAuth, (req, res) => {
  const ids = Array.isArray(req.body?.ids) ? req.body.ids.map(x => parseInt(x, 10)).filter(Boolean) : [];
  if (!ids.length) return res.status(400).json({ error: 'ids 不能为空' });

  const stmt = db.prepare(`UPDATE comments SET is_approved = 1 WHERE id = ?;`);
  const txn = db.transaction(_ids => { _ids.forEach(id => stmt.run(id)); });
  txn(ids);

  res.json({ ok: true, approved: ids.length });
});

// POST /api/comment-admin/delete
router.post('/api/comment-admin/delete', adminAuth, (req, res) => {
  const ids = Array.isArray(req.body?.ids) ? req.body.ids.map(x => parseInt(x, 10)).filter(Boolean) : [];
  if (!ids.length) return res.status(400).json({ error: 'ids 不能为空' });

  const stmt = db.prepare(`DELETE FROM comments WHERE id = ?;`);
  const txn = db.transaction(_ids => { _ids.forEach(id => stmt.run(id)); });
  txn(ids);

  res.json({ ok: true, deleted: ids.length });
});

// GET /api/comment-admin/summary
router.get('/api/comment-admin/summary', adminAuth, (req, res) => {
  const limit  = Math.min(parseInt(req.query.limit || '100', 10), 1000);
  const offset = Math.max(parseInt(req.query.offset || '0', 10), 0);

  const rows = db.prepare(`
    SELECT post_id,
           COUNT(*)         AS count,
           SUM(is_approved) AS approved_count,
           MAX(created_at)  AS last_comment_at
    FROM comments
    GROUP BY post_id
    ORDER BY count DESC, post_id ASC
    LIMIT ? OFFSET ?;
  `).all(limit, offset);

  const totals = db.prepare(`
    SELECT COUNT(DISTINCT post_id) AS total_posts,
           COUNT(*)                AS total_comments,
           SUM(is_approved)        AS total_approved
    FROM comments;
  `).get();

  res.json({ totals, rows });
});

// GET /api/comment-admin/detail/:postId
router.get('/api/comment-admin/detail/:postId', adminAuth, (req, res) => {
  const { postId } = req.params;
  const limit  = Math.min(parseInt(req.query.limit || '100', 10), 5000);
  const offset = Math.max(parseInt(req.query.offset || '0', 10), 0);

  const rows = db.prepare(`
    SELECT id, author, content, ip, is_approved, created_at
    FROM comments
    WHERE post_id = ?
    ORDER BY id DESC
    LIMIT ? OFFSET ?;
  `).all(postId, limit, offset);

  const count = db.prepare(`SELECT COUNT(*) AS c FROM comments WHERE post_id = ?;`).get(postId).c;
  res.json({ postId, count, rows });
});

// GET /api/comment-admin/export.csv
router.get('/api/comment-admin/export.csv', adminAuth, (req, res) => {
  const rows = db.prepare(`
    SELECT post_id,
           COUNT(*)         AS count,
           SUM(is_approved) AS approved_count,
           MAX(created_at)  AS last_comment_at
    FROM comments
    GROUP BY post_id
    ORDER BY count DESC, post_id ASC;
  `).all();

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="comments_summary.csv"');
  res.write('post_id,count,approved_count,last_comment_at\n');

  for (const r of rows) {
    const post = csvEscape(r.post_id);
    const last = csvEscape(r.last_comment_at);
    res.write(`${post},${r.count},${r.approved_count},${last}\n`);
  }
  res.end();
});

module.exports = router;
