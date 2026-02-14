/**
 * WebSocket 连接管理
 */

(function() {
  'use strict';

  const { state, setState } = window.LiveState;

  const WS_URL = window.location.protocol === 'https:'
    ? `wss://${window.location.host}/ws/live`
    : `ws://${window.location.host}/ws/live`;

  let pollingInterval = null;

  function connect() {
    try {
      const ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        console.log('WebSocket 已连接');
        setState({ ws, reconnectAttempts: 0 });
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          handleMessage(data);
        } catch (e) {
          console.error('消息解析失败:', e);
        }
      };

      ws.onclose = () => {
        console.log('WebSocket 已断开');
        setState({ ws: null, myPeerId: null });

        if (state.isMicActive && window.LiveVoice) {
          window.LiveVoice.stopMicrophone();
        }
        attemptReconnect();
      };

      ws.onerror = (error) => {
        console.error('WebSocket 错误:', error);
      };

      setState({ ws });
    } catch (e) {
      console.error('WebSocket 连接失败:', e);
      startPolling();
    }
  }

  function handleMessage(data) {
    // 保存自己的 peerId
    if (data.type === 'welcome' && data.peerId) {
      setState({ myPeerId: data.peerId });
      console.log('我的 peerId:', data.peerId);
      return;
    }

    // 初始播放状态（新用户进入时）
    if (data.type === 'playback_init') {
      if (window.LiveVideo) {
        window.LiveVideo.handlePlaybackInit(data);
      }
      return;
    }

    // 管理员指令（增量操作）
    if (data.type && data.type.startsWith('cmd_')) {
      if (window.LiveVideo) {
        window.LiveVideo.handleCommand(data);
      }
      return;
    }

    // 语音相关消息
    if (data.type && (data.type.startsWith('voice_') || data.type === 'ice_candidate' || data.type === 'request_offer')) {
      if (window.LiveVoice) {
        window.LiveVoice.handleVoiceMessage(data);
      }
      return;
    }

    // 聊天和其他消息
    if (window.LiveChat) {
      window.LiveChat.handleMessage(data);
    }
  }

  function attemptReconnect() {
    if (state.reconnectAttempts < state.maxReconnectAttempts) {
      setState({ reconnectAttempts: state.reconnectAttempts + 1 });
      const delay = Math.min(1000 * Math.pow(2, state.reconnectAttempts), 30000);
      console.log(`${delay / 1000}秒后尝试重连...`);
      setTimeout(connect, delay);
    } else {
      console.log('WebSocket 重连失败，切换到轮询模式');
      startPolling();
    }
  }

  function startPolling() {
    if (pollingInterval) return;
    pollingInterval = setInterval(() => {
      if (window.LiveChat) {
        window.LiveChat.fetchMessages();
      }
    }, 3000);
  }

  function send(data) {
    if (state.ws && state.ws.readyState === WebSocket.OPEN) {
      state.ws.send(JSON.stringify(data));
    }
  }

  function isConnected() {
    return state.ws && state.ws.readyState === WebSocket.OPEN;
  }

  window.LiveSocket = {
    connect,
    send,
    isConnected
  };
})();
