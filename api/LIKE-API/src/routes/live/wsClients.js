/**
 * WebSocket 客户端管理
 */

// WebSocket 客户端集合
const wsClients = new Set();

function addClient(ws) {
  wsClients.add(ws);
  broadcastViewerCount();
}

function removeClient(ws) {
  wsClients.delete(ws);
  broadcastViewerCount();
}

function getViewerCount() {
  return wsClients.size;
}

function broadcastMessage(message) {
  const data = JSON.stringify({ type: 'chat', ...message });
  wsClients.forEach(ws => {
    if (ws.readyState === 1) { // WebSocket.OPEN
      ws.send(data);
    }
  });
}

function broadcastViewerCount() {
  const data = JSON.stringify({ type: 'viewerCount', count: wsClients.size });
  wsClients.forEach(ws => {
    if (ws.readyState === 1) {
      ws.send(data);
    }
  });
}

function getClients() {
  return wsClients;
}

module.exports = {
  addClient,
  removeClient,
  getViewerCount,
  broadcastMessage,
  broadcastViewerCount,
  getClients
};
