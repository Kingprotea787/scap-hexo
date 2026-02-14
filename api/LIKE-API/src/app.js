// src/app.js
const express = require('express');

const likeRoutes = require('./routes/like');
const commentRoutes = require('./routes/comment');
const commentAdminRoutes = require('./routes/commentAdmin');
const ranktgaRoutes = require('./routes/ranktga');
const bgmlistRoutes = require('./routes/bgm-list');
const bgmimportRoutes = require('./routes/bgm-import');
const bgmRoutes = require('./routes/bgm');
const voteRoutes = require('./routes/vote');
const { router: liveRoutes } = require('./routes/live/index');

function createApp() {
  const app = express();

  app.use(express.json({ limit: '32kb' }));
  app.set('trust proxy', true);

  // 挂载路由
  app.use(likeRoutes);
  app.use(commentRoutes);
  app.use(commentAdminRoutes);
  app.use(ranktgaRoutes);
  app.use(bgmRoutes);
  app.use(bgmlistRoutes);
  app.use(bgmimportRoutes);
  app.use(voteRoutes);
  app.use(liveRoutes);

  // 健康检查
  app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

  return app;
}

module.exports = { createApp };
