// src/index.js
const http = require('http');
const { PORT } = require('./config');
const { createApp } = require('./app');
const { createWsServer } = require('./routes/live/index');

const app = createApp();
const server = http.createServer(app);

// 创建 WebSocket 服务器（live 模块）
createWsServer(server);

server.listen(PORT, () => {
  console.log('Like/Comment API listening on :' + PORT);
  console.log('WebSocket 服务已启动: /ws/live');
});
