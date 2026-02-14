// src/config.js
const path = require('path');

module.exports = {
  PORT: process.env.PORT || 3000,
  ADMIN_TOKEN: process.env.LIKE_ADMIN_TOKEN || null,
  SUBMISSION_ADMIN_TOKEN: process.env.SUBMISSION_ADMIN_TOKEN || 'scapcomic',
  DB_PATH: path.join(process.cwd(), 'likes.db'),
};
