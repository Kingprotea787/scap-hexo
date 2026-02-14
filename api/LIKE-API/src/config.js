// src/config.js
const path = require('path');

module.exports = {
  PORT: process.env.PORT || 3000,
  ADMIN_TOKEN: process.env.LIKE_ADMIN_TOKEN || null,
  SUBMISSION_ADMIN_TOKEN: process.env.SUBMISSION_ADMIN_TOKEN || 'scapcomic',
  DB_PATH: path.join(process.cwd(), 'likes.db'),

  // SMTP 邮件配置 - 从环境变量读取
  SMTP: {
    host: process.env.SMTP_HOST || 'smtp.qq.com',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_SECURE !== 'false',
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
    from: process.env.SMTP_FROM || '',
    adminEmail: process.env.SUBMISSION_ADMIN_EMAIL || ''
  }
};
