// src/routes/bgm.js
const { Router } = require('express');

const router = Router();

// POST /api/bgm-search
router.post('/api/bgm-search', async (req, res) => {
  try {
    const { keyword, filter } = req.body || {};
    if (!keyword) return res.status(400).json({ error: 'keyword is required' });

    // Only work for node 18+
    const response = await fetch('https://api.bgm.tv/v0/search/subjects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'NominationApp/1.0 (student_project_demo)'
      },
      body: JSON.stringify({ keyword, filter })
    });

    if (!response.ok) {
      console.error('Bangumi API Error Status:', response.status);
      return res.status(response.status).json({ error: 'Upstream API Error' });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy Search Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
