// src/routes/bgm-list.js
const { Router } = require('express');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const router = Router();
const DATA_FILE = path.join(__dirname, '../../data/bgm.yml');

// GET /api/bgm-list
router.get('/api/bgm-list', (req, res) => {
  try {
    if (!fs.existsSync(DATA_FILE)) return res.json([]);
    const list = yaml.load(fs.readFileSync(DATA_FILE, 'utf8')) || [];
    res.json(Array.isArray(list) ? list : []);
  } catch (e) {
    console.error('List Error:', e);
    res.status(500).json({ error: 'Read failed' });
  }
});

module.exports = router;
