/**
 * 语音信令处理
 */

// 语音用户管理
const voiceUsers = new Map(); // peerId -> { ws, username }
// 静音用户
const mutedUsers = new Set(); // peerId

function getVoiceUsers() {
  return voiceUsers;
}

function getMutedUsers() {
  return mutedUsers;
}

// 处理语音信令
function handleVoiceSignaling(ws, msg, peerId, wss) {
  switch (msg.type) {
    case 'voice_start':
      voiceUsers.set(peerId, { ws, username: msg.username });

      // 广播给所有人
      broadcastToAll(wss, {
        type: 'voice_start',
        username: msg.username,
        peerId: peerId
      }, ws);

      // 向所有未静音的用户发送 offer
      wss.clients.forEach(client => {
        if (client !== ws && client.readyState === 1 && !mutedUsers.has(client.peerId)) {
          ws.send(JSON.stringify({
            type: 'request_offer',
            targetPeerId: client.peerId
          }));
        }
      });
      break;

    case 'voice_stop':
      voiceUsers.delete(peerId);
      broadcastToAll(wss, {
        type: 'voice_stop',
        username: msg.username,
        peerId: peerId
      }, ws);
      break;

    case 'mute_status':
      if (msg.muted) {
        mutedUsers.add(peerId);
      } else {
        mutedUsers.delete(peerId);
        // 取消静音时，请求所有语音用户向此用户发送 offer
        voiceUsers.forEach((userData) => {
          if (userData.ws.readyState === 1) {
            userData.ws.send(JSON.stringify({
              type: 'request_offer',
              targetPeerId: peerId
            }));
          }
        });
      }
      break;

    case 'voice_offer':
    case 'voice_answer':
    case 'ice_candidate':
      // 转发给目标用户
      if (msg.to) {
        let targetWs = null;
        wss.clients.forEach(client => {
          if (client.peerId === msg.to) {
            targetWs = client;
          }
        });

        if (targetWs && targetWs.readyState === 1) {
          targetWs.send(JSON.stringify({
            ...msg,
            from: peerId
          }));
        }
      }
      break;
  }
}

// 用户断开时清理
function handleUserDisconnect(ws, peerId, wss) {
  if (voiceUsers.has(peerId)) {
    const userData = voiceUsers.get(peerId);
    voiceUsers.delete(peerId);

    broadcastToAll(wss, {
      type: 'voice_stop',
      username: userData.username,
      peerId: peerId
    }, ws);
  }
  mutedUsers.delete(peerId);
}

// 广播给所有客户端（除了发送者）
function broadcastToAll(wss, data, excludeWs) {
  const message = JSON.stringify(data);
  wss.clients.forEach(client => {
    if (client !== excludeWs && client.readyState === 1) {
      client.send(message);
    }
  });
}

module.exports = {
  getVoiceUsers,
  getMutedUsers,
  handleVoiceSignaling,
  handleUserDisconnect,
  broadcastToAll
};
