// src/routes/vote.js
const { Router } = require('express');
const { db } = require('../db');
const { clientIp } = require('../utils/clientIp');

const router = Router();
const MAX_PER_IP_PER_CAT = 3;
const CATS = new Set(['Anime', 'Comic', 'Game', 'Novel']);

function normalizeCat(cat){
  const x = String(cat || '').trim();
  if (x === 'Manga') return 'Comic';
  return x;
}

function normalizeTitle(t){
  // 你可以按需要更激进，比如统一空格、去首尾、限制长度
  return String(t || '').trim().slice(0, 200);
}

// GET /api/vote/:category?title=xxx
router.get('/api/vote/:category', (req, res) => {
  const category = normalizeCat(req.params.category);
  if (!CATS.has(category)) return res.status(400).json({ error: 'bad category' });

  const title = normalizeTitle(req.query.title);
  if (!title) return res.status(400).json({ error: 'title required' });

  const ip = clientIp(req);

  const count = db.prepare(
    'SELECT COUNT(*) AS c FROM nom_votes WHERE category=? AND title=?'
  ).get(category, title).c;

  const voted = !!db.prepare(
    'SELECT 1 FROM nom_votes WHERE category=? AND title=? AND ip=?'
  ).get(category, title, ip);

  const used = db.prepare(
    'SELECT COUNT(*) AS c FROM nom_votes WHERE category=? AND ip=?'
  ).get(category, ip).c;

  res.json({ category, title, count, voted, used, remaining: Math.max(0, MAX_PER_IP_PER_CAT - used) });
});

// POST /api/vote/:category?title=xxx
router.post('/api/vote/:category', (req, res) => {
  const category = normalizeCat(req.params.category);
  if (!CATS.has(category)) return res.status(400).json({ error: 'bad category' });

  const title = normalizeTitle(req.query.title);
  if (!title) return res.status(400).json({ error: 'title required' });

  const ip = clientIp(req);

  const used = db.prepare(
    'SELECT COUNT(*) AS c FROM nom_votes WHERE category=? AND ip=?'
  ).get(category, ip).c;

  if (used >= MAX_PER_IP_PER_CAT) {
    return res.status(429).json({ error: `本类最多投 ${MAX_PER_IP_PER_CAT} 票` });
  }

  db.prepare('INSERT INTO nom_votes(category, title, ip) VALUES(?, ?, ?)').run(category, title, ip);

  const count = db.prepare(
    'SELECT COUNT(*) AS c FROM nom_votes WHERE category=? AND title=?'
  ).get(category, title).c;

  const voted = !!db.prepare(
    'SELECT 1 FROM nom_votes WHERE category=? AND title=? AND ip=?'
  ).get(category, title, ip);

  const used2 = db.prepare(
    'SELECT COUNT(*) AS c FROM nom_votes WHERE category=? AND ip=?'
  ).get(category, ip).c;

  res.json({ category, title, count, voted, used: used2, remaining: Math.max(0, MAX_PER_IP_PER_CAT - used2) });
});
// DELETE /api/vote/:category?title=xxx  (撤销一票：只撤销该IP对该title的一条记录)
router.delete('/api/vote/:category', (req, res) => {
  const category = normalizeCat(req.params.category);
  if (!CATS.has(category)) return res.status(400).json({ error: 'bad category' });

  const title = normalizeTitle(req.query.title);
  if (!title) return res.status(400).json({ error: 'title required' });

  const ip = clientIp(req);

  // 先找一条该IP投过的记录（只撤销一票）
  const row = db.prepare(
    'SELECT id FROM nom_votes WHERE category=? AND title=? AND ip=? ORDER BY id DESC LIMIT 1'
  ).get(category, title, ip);

  if (!row) {
    // 没投过就不能撤销
    return res.status(409).json({ error: 'no vote to undo' });
  }

  db.prepare('DELETE FROM nom_votes WHERE id=?').run(row.id);

  const count = db.prepare(
    'SELECT COUNT(*) AS c FROM nom_votes WHERE category=? AND title=?'
  ).get(category, title).c;

  const voted = !!db.prepare(
    'SELECT 1 FROM nom_votes WHERE category=? AND title=? AND ip=?'
  ).get(category, title, ip);

  const used = db.prepare(
    'SELECT COUNT(*) AS c FROM nom_votes WHERE category=? AND ip=?'
  ).get(category, ip).c;

  res.json({ category, title, count, voted, used, remaining: Math.max(0, MAX_PER_IP_PER_CAT - used) });
});

module.exports = router;
