// src/routes/comment.js
const { Router } = require('express');
const { db } = require('../db');
const { clientIp } = require('../utils/clientIp');
const { allowPost } = require('../utils/rateLimit');

const router = Router();
const MAX_SAFE = Number.MAX_SAFE_INTEGER;

// GET /api/comment/:postId
router.get('/api/comment/:postId', (req, res) => {
  const { postId } = req.params;
  const limit  = Math.min(Math.max(parseInt(req.query.limit || '20', 10) || 20, 1), 50);
  const before = parseInt(req.query.before || `${MAX_SAFE}`, 10) || MAX_SAFE;

  const rows = db.prepare(`
    SELECT id, post_id, author, content, created_at
    FROM comments
    WHERE post_id = ? AND id < ?
    ORDER BY id DESC
    LIMIT ?;
  `).all(postId, before, limit);

  const nextBefore = rows.length ? rows[rows.length - 1].id : null;

  res.json({
    comments: rows.map(r => ({
      id: r.id,
      postId: r.post_id,
      author: r.author || '匿名',
      content: r.content,
      createdAt: r.created_at
    })),
    nextBefore
  });
});

// POST /api/comment/:postId
router.post('/api/comment/:postId', (req, res) => {
  const { postId } = req.params;
  let { author = '', content = '' } = req.body || {};

  author  = String(author).trim().slice(0, 40);
  content = String(content).trim();

  if (!content) return res.status(400).json({ error: '内容不能为空' });
  if (content.length > 1000) return res.status(400).json({ error: '内容太长（最多1000字）' });

  const ip = clientIp(req);
  if (!allowPost(ip)) return res.status(429).json({ error: '发布过于频繁，请稍后再试' });

  const info = db.prepare(`
    INSERT INTO comments (post_id, author, content, ip, is_approved)
    VALUES (?, ?, ?, ?, 0);
  `).run(postId, author || null, content, ip);

  const row = db.prepare(`
    SELECT id, post_id, author, content, created_at, is_approved
    FROM comments WHERE id = ?;
  `).get(info.lastInsertRowid);

  res.status(201).json({
    id: row.id,
    postId: row.post_id,
    author: row.author || '匿名',
    content: row.content,
    createdAt: row.created_at,
    approved: !!row.is_approved
  });
});

module.exports = router;
