// src/middleware/adminAuth.js
const { ADMIN_TOKEN } = require('../config');

function adminAuth(req, res, next) {
  if (!ADMIN_TOKEN) {
    return res.status(503).json({ error: 'admin API disabled: set LIKE_ADMIN_TOKEN first' });
  }
  const token = req.headers['x-admin-token'] || req.query.token;
  if (token !== ADMIN_TOKEN) return res.status(401).json({ error: 'unauthorized' });
  next();
}

module.exports = { adminAuth };
