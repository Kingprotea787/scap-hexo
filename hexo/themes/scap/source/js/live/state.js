/**
 * 集中状态管理
 */

const state = {
  // 视频相关
  currentVideoId: 'global',
  isFullscreen: false,
  isPlaying: false,

  // WebSocket
  ws: null,
  myPeerId: null,
  reconnectAttempts: 0,
  maxReconnectAttempts: 5,

  // 语音相关
  isMicActive: false,
  isMuted: false,
  localStream: null,
  peerConnections: {},
  voiceUsers: new Map(),

  // 消息去重
  processedMessageIds: new Set(),

  // 管理员
  isAdmin: false
};

const subscribers = new Set();

function getState() {
  return state;
}

function setState(updates) {
  Object.assign(state, updates);
  notify();
}

function subscribe(fn) {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}

function notify() {
  subscribers.forEach(fn => fn(state));
}

// 导出
window.LiveState = {
  state,
  getState,
  setState,
  subscribe
};
