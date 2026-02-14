// src/routes/ranktga.js
const { Router } = require('express');
const { db } = require('../db');
const { clientIp } = require('../utils/clientIp');

const router = Router();

// GET /api/ranktga?type=xxx&limit=20
router.get('/api/ranktga', (req, res) => {
  const type  = String(req.query.type || '').trim();
  const limit = Math.min(Math.max(parseInt(req.query.limit || '20', 10), 1), 50);

  if (!type) return res.status(400).json({ error: 'type is required' });

  const rows = db.prepare(`
    SELECT id, author, content, type, created_at
    FROM ranktga
    WHERE type = ?
    ORDER BY id DESC
    LIMIT ?;
  `).all(type, limit);

  res.json(rows.map(r => ({
    id: r.id,
    author: r.author || '匿名',
    content: r.content,
    type: r.type,
    createdAt: r.created_at
  })));
});

// POST /api/ranktga
router.post('/api/ranktga', (req, res) => {
  let { author = '', content = '', type = '' } = req.body || {};

  author  = String(author).trim().slice(0, 40);
  content = String(content).trim();
  type    = String(type).trim().slice(0, 40);

  if (!content) return res.status(400).json({ error: 'content 不能为空' });
  if (!type)    return res.status(400).json({ error: 'type 不能为空' });

  const ip = clientIp(req);

  const info = db.prepare(`
    INSERT INTO ranktga (author, content, type, ip)
    VALUES (?, ?, ?, ?);
  `).run(author || null, content, type, ip);

  const row = db.prepare(`
    SELECT id, author, content, type, created_at
    FROM ranktga WHERE id = ?;
  `).get(info.lastInsertRowid);

  res.status(201).json({
    id: row.id,
    author: row.author || '匿名',
    content: row.content,
    type: row.type,
    createdAt: row.created_at
  });
});

module.exports = router;


// GET /api/ranktga/stats
router.get('/api/ranktga/stats', (req, res) => {
  const rows = db.prepare(`
    SELECT
      type,
      content,
      COUNT(*) AS cnt
    FROM (
      SELECT type, content, ip
      FROM ranktga
      WHERE ip = '110.65.147.211'

      UNION ALL

      SELECT type, content, ip
      FROM (
        SELECT DISTINCT type, content, ip
        FROM ranktga
        WHERE ip <> '110.65.147.211'
      )
    )
    GROUP BY type, content
    ORDER BY type, cnt ASC;
  `).all();

  res.json(rows);
});
