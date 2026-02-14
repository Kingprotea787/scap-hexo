/**
 * 直播页面 JavaScript
 * 功能：视频播放、弹幕、实时聊天、语音通话
 */

(function() {
  'use strict';

  // DOM 元素
  const video = document.getElementById('liveVideo');
  const videoWrapper = document.getElementById('videoWrapper');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const backBtn = document.getElementById('backBtn');
  const danmakuLayer = document.getElementById('danmakuLayer');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  const chatMessages = document.getElementById('chatMessages');
  const viewerCount = document.getElementById('viewerCount');
  const videoSelector = document.getElementById('videoSelector');
  const videoGrid = document.getElementById('videoGrid');
  const nicknameModal = document.getElementById('nicknameModal');
  const nicknameInput = document.getElementById('nicknameInput');
  const nicknameCancel = document.getElementById('nicknameCancel');
  const nicknameConfirm = document.getElementById('nicknameConfirm');
  const nicknameText = document.getElementById('nicknameText');
  const editNicknameBtn = document.getElementById('editNicknameBtn');
  const micBtn = document.getElementById('micBtn');
  const muteBtn = document.getElementById('muteBtn');
  const voiceIndicator = document.getElementById('voiceIndicator');

  // 状态
  let isFullscreen = false;
  let isPlaying = false;
  let ws = null;
  let reconnectAttempts = 0;
  const maxReconnectAttempts = 5;
  let myPeerId = null;
  let currentVideoId = 'global'; // 当前视频ID

  // 消息去重
  const processedMessageIds = new Set();

  // 语音相关状态
  let localStream = null;
  let peerConnections = {}; // peerId -> RTCPeerConnection
  let isMicActive = false;
  let isMuted = false;
  let voiceUsers = new Map(); // peerId -> username

  // WebSocket 服务器地址
  const WS_URL = window.location.protocol === 'https:'
    ? `wss://${window.location.host}/ws/live`
    : `ws://${window.location.host}/ws/live`;

  // WebRTC 配置 - 添加 TURN 服务器
  const rtcConfig = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' }
    ]
  };

  // 初始化
  function init() {
    updateNicknameDisplay();
    bindEvents();
    connectWebSocket();
    loadChatHistory();
    loadVideoList();
  }

  // 更新昵称显示
  function updateNicknameDisplay() {
    nicknameText.textContent = getUsername();
  }

  // 绑定事件
  function bindEvents() {
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    backBtn.addEventListener('click', showVideoSelector);
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    video.addEventListener('dblclick', toggleFullscreen);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (nicknameModal.classList.contains('show')) {
          hideNicknameModal();
        } else if (isFullscreen) {
          exitFullscreen();
        }
      }
    });

    // 昵称弹窗事件
    nicknameCancel.addEventListener('click', hideNicknameModal);
    nicknameConfirm.addEventListener('click', saveNickname);
    nicknameModal.addEventListener('click', (e) => {
      if (e.target === nicknameModal) hideNicknameModal();
    });
    nicknameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') saveNickname();
    });
    editNicknameBtn.addEventListener('click', showNicknameModal);

    // 麦克风和静音按钮
    micBtn.addEventListener('click', toggleMicrophone);
    muteBtn.addEventListener('click', toggleMute);
  }

  // ==================== 语音功能 ====================

  // 切换麦克风
  async function toggleMicrophone() {
    if (isMicActive) {
      stopMicrophone();
    } else {
      await startMicrophone();
    }
  }

  // 切换静音（不接收他人语音）
  function toggleMute() {
    isMuted = !isMuted;
    muteBtn.classList.toggle('active', isMuted);
    muteBtn.title = isMuted ? '取消静音' : '静音（不接收他人语音）';

    // 静音/取消静音所有远程音频
    document.querySelectorAll('audio[id^="audio-"]').forEach(audio => {
      audio.muted = isMuted;
    });

    // 通知服务器静音状态
    sendWsMessage({
      type: 'mute_status',
      muted: isMuted
    });
  }

  // 开启麦克风
  async function startMicrophone() {
    try {
      micBtn.classList.add('connecting');

      // 获取麦克风权限
      localStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        },
        video: false
      });

      isMicActive = true;
      micBtn.classList.remove('connecting');
      micBtn.classList.add('active');
      micBtn.title = '关闭麦克风';

      // 通知服务器开始语音
      sendWsMessage({
        type: 'voice_start',
        username: getUsername()
      });

      console.log('麦克风已开启');
    } catch (e) {
      console.error('无法获取麦克风权限:', e);
      micBtn.classList.remove('connecting');
      alert('无法获取麦克风权限，请检查浏览器设置');
    }
  }

  // 关闭麦克风
  function stopMicrophone() {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
      localStream = null;
    }

    // 关闭所有发送方向的 peer 连接
    Object.keys(peerConnections).forEach(peerId => {
      if (peerConnections[peerId]) {
        peerConnections[peerId].close();
        delete peerConnections[peerId];
      }
    });

    isMicActive = false;
    micBtn.classList.remove('active', 'connecting');
    micBtn.title = '开启麦克风';

    // 通知服务器停止语音
    sendWsMessage({
      type: 'voice_stop',
      username: getUsername()
    });

    console.log('麦克风已关闭');
  }

  // 创建到某个监听者的 PeerConnection（我是发送方）
  async function createSenderConnection(targetPeerId) {
    if (!localStream || !isMicActive) return;
    if (peerConnections[targetPeerId]) return;

    console.log('创建发送连接到:', targetPeerId);

    const pc = new RTCPeerConnection(rtcConfig);
    peerConnections[targetPeerId] = pc;

    // 添加本地音频轨道
    localStream.getTracks().forEach(track => {
      pc.addTrack(track, localStream);
    });

    // ICE 候选
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        sendWsMessage({
          type: 'ice_candidate',
          candidate: event.candidate,
          to: targetPeerId
        });
      }
    };

    pc.onconnectionstatechange = () => {
      console.log(`连接状态 ${targetPeerId}:`, pc.connectionState);
      if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
        closePeerConnection(targetPeerId);
      }
    };

    // 创建 offer
    try {
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      sendWsMessage({
        type: 'voice_offer',
        offer: pc.localDescription,
        to: targetPeerId
      });
    } catch (e) {
      console.error('创建 offer 失败:', e);
      closePeerConnection(targetPeerId);
    }
  }

  // 创建接收方 PeerConnection（我是接收方）
  async function createReceiverConnection(senderPeerId, offer) {
    if (isMuted) return; // 静音状态不接收

    console.log('创建接收连接从:', senderPeerId);

    // 如果已有连接，先关闭
    if (peerConnections[senderPeerId]) {
      peerConnections[senderPeerId].close();
    }

    const pc = new RTCPeerConnection(rtcConfig);
    peerConnections[senderPeerId] = pc;

    // ICE 候选
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        sendWsMessage({
          type: 'ice_candidate',
          candidate: event.candidate,
          to: senderPeerId
        });
      }
    };

    // 接收远程音频流
    pc.ontrack = (event) => {
      console.log('收到远程音频流:', senderPeerId);
      let audio = document.getElementById(`audio-${senderPeerId}`);
      if (!audio) {
        audio = document.createElement('audio');
        audio.id = `audio-${senderPeerId}`;
        audio.autoplay = true;
        audio.muted = isMuted;
        document.body.appendChild(audio);
      }
      audio.srcObject = event.streams[0];
    };

    pc.onconnectionstatechange = () => {
      console.log(`接收连接状态 ${senderPeerId}:`, pc.connectionState);
      if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
        closePeerConnection(senderPeerId);
      }
    };

    try {
      await pc.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      sendWsMessage({
        type: 'voice_answer',
        answer: pc.localDescription,
        to: senderPeerId
      });
    } catch (e) {
      console.error('处理 offer 失败:', e);
      closePeerConnection(senderPeerId);
    }
  }

  // 关闭 PeerConnection
  function closePeerConnection(peerId) {
    if (peerConnections[peerId]) {
      peerConnections[peerId].close();
      delete peerConnections[peerId];
    }
    const audio = document.getElementById(`audio-${peerId}`);
    if (audio) audio.remove();
  }

  // 处理语音相关的 WebSocket 消息
  async function handleVoiceMessage(data) {
    switch (data.type) {
      case 'voice_start':
        // 有人开始语音
        voiceUsers.set(data.peerId, data.username);
        updateVoiceIndicator();

        // 如果我也在语音，向新用户发送我的音频
        if (isMicActive && data.peerId !== myPeerId) {
          createSenderConnection(data.peerId);
        }
        break;

      case 'voice_stop':
        voiceUsers.delete(data.peerId);
        updateVoiceIndicator();
        closePeerConnection(data.peerId);
        break;

      case 'voice_offer':
        // 收到语音 offer，创建接收连接
        if (!isMuted && data.from !== myPeerId) {
          await createReceiverConnection(data.from, data.offer);
        }
        break;

      case 'voice_answer':
        // 收到 answer
        if (peerConnections[data.from]) {
          try {
            await peerConnections[data.from].setRemoteDescription(
              new RTCSessionDescription(data.answer)
            );
          } catch (e) {
            console.error('设置 answer 失败:', e);
          }
        }
        break;

      case 'ice_candidate':
        if (peerConnections[data.from] && data.candidate) {
          try {
            await peerConnections[data.from].addIceCandidate(
              new RTCIceCandidate(data.candidate)
            );
          } catch (e) {
            console.error('添加 ICE 候选失败:', e);
          }
        }
        break;

      case 'voice_users':
        // 同步当前语音用户列表
        voiceUsers.clear();
        if (data.users) {
          data.users.forEach(u => voiceUsers.set(u.peerId, u.username));
        }
        updateVoiceIndicator();
        break;

      case 'request_offer':
        // 服务器请求我向某人发送 offer（我在语音中，新用户加入）
        if (isMicActive && data.targetPeerId !== myPeerId) {
          createSenderConnection(data.targetPeerId);
        }
        break;
    }
  }

  // 更新语音指示器
  function updateVoiceIndicator() {
    const voiceUsersDiv = document.getElementById('voiceUsers');

    if (voiceUsers.size > 0) {
      voiceIndicator.classList.add('active');
      voiceIndicator.textContent = `${voiceUsers.size}人语音中`;

      // 更新语音用户列表
      voiceUsersDiv.classList.add('active');
      voiceUsersDiv.innerHTML = '';
      voiceUsers.forEach((username, peerId) => {
        const userDiv = document.createElement('div');
        userDiv.className = 'voice-user';
        userDiv.innerHTML = `
          <div class="voice-wave">
            <span></span><span></span><span></span>
          </div>
          <span>${escapeHtml(username)}</span>
        `;
        voiceUsersDiv.appendChild(userDiv);
      });
    } else {
      voiceIndicator.classList.remove('active');
      voiceIndicator.textContent = '';
      voiceUsersDiv.classList.remove('active');
      voiceUsersDiv.innerHTML = '';
    }
  }

  // ==================== WebSocket ====================

  function sendWsMessage(data) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(data));
    }
  }

  // 连接 WebSocket
  function connectWebSocket() {
    try {
      ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        console.log('WebSocket 已连接');
        reconnectAttempts = 0;
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
        myPeerId = null;
        if (isMicActive) {
          stopMicrophone();
        }
        attemptReconnect();
      };

      ws.onerror = (error) => {
        console.error('WebSocket 错误:', error);
      };
    } catch (e) {
      console.error('WebSocket 连接失败:', e);
      startPolling();
    }
  }

  // 尝试重连
  function attemptReconnect() {
    if (reconnectAttempts < maxReconnectAttempts) {
      reconnectAttempts++;
      const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000);
      console.log(`${delay / 1000}秒后尝试重连...`);
      setTimeout(connectWebSocket, delay);
    } else {
      console.log('WebSocket 重连失败，切换到轮询模式');
      startPolling();
    }
  }

  // 轮询模式
  let pollingInterval = null;
  function startPolling() {
    if (pollingInterval) return;
    pollingInterval = setInterval(fetchMessages, 3000);
  }

  function fetchMessages() {
    fetch(`/api/live/messages?videoId=${encodeURIComponent(currentVideoId)}`)
      .then(res => res.json())
      .then(data => {
        if (data.messages) {
          data.messages.forEach(msg => addChatMessage(msg, true, false));
        }
        if (data.viewerCount !== undefined) {
          updateViewerCount(data.viewerCount);
        }
      })
      .catch(e => console.error('获取消息失败:', e));
  }

  // 处理收到的消息
  function handleMessage(data) {
    // 保存自己的 peerId
    if (data.type === 'welcome' && data.peerId) {
      myPeerId = data.peerId;
      console.log('我的 peerId:', myPeerId);
      return;
    }

    // 语音相关消息
    if (data.type && (data.type.startsWith('voice_') || data.type === 'ice_candidate' || data.type === 'request_offer')) {
      handleVoiceMessage(data);
      return;
    }

    switch (data.type) {
      case 'chat':
        // 只显示当前视频的消息
        if (data.videoId && data.videoId !== currentVideoId) {
          return;
        }
        // 检查是否是自己发的消息（通过 id 去重）
        if (data.id && processedMessageIds.has(data.id)) {
          return; // 跳过已处理的消息
        }
        if (data.id) {
          processedMessageIds.add(data.id);
          // 限制缓存大小
          if (processedMessageIds.size > 500) {
            const first = processedMessageIds.values().next().value;
            processedMessageIds.delete(first);
          }
        }
        addChatMessage(data, true, false);
        if (isFullscreen) {
          showDanmaku(data.content);
        }
        break;
      case 'viewerCount':
        updateViewerCount(data.count);
        break;
      case 'history':
        if (data.messages) {
          data.messages.forEach(msg => {
            if (msg.id) processedMessageIds.add(msg.id);
            addChatMessage(msg, false, false);
          });
        }
        break;
    }
  }

  // 发送消息
  function sendMessage() {
    const content = chatInput.value.trim();
    if (!content) return;

    const tempId = `temp_${Date.now()}_${Math.random()}`;
    const message = {
      type: 'chat',
      content: content,
      username: getUsername(),
      videoId: currentVideoId,
      timestamp: Date.now(),
      tempId: tempId
    };

    // 本地立即显示
    addChatMessage(message, true, true);
    if (isFullscreen) {
      showDanmaku(content);
    }

    // 发送到服务器
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    } else {
      fetch('/api/live/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      }).catch(e => console.error('发送失败:', e));
    }

    chatInput.value = '';
  }

  // 添加聊天消息
  function addChatMessage(msg, animate = true, isLocal = false) {
    const div = document.createElement('div');
    div.className = 'chat-message';
    if (!animate) {
      div.style.animation = 'none';
    }

    const time = new Date(msg.timestamp || Date.now());
    const timeStr = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;
    const currentUser = getUsername();
    const isMine = isLocal || msg.username === currentUser;

    const usernameSpan = document.createElement('span');
    usernameSpan.className = 'username' + (isMine ? ' is-me' : '');
    usernameSpan.textContent = msg.username || '匿名';

    if (isMine) {
      usernameSpan.style.cursor = 'pointer';
      usernameSpan.title = '点击修改昵称';
      usernameSpan.addEventListener('click', showNicknameModal);
    }

    const metaDiv = document.createElement('div');
    metaDiv.className = 'meta';
    metaDiv.appendChild(usernameSpan);

    const timeSpan = document.createElement('span');
    timeSpan.className = 'time';
    timeSpan.textContent = timeStr;
    metaDiv.appendChild(timeSpan);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    contentDiv.textContent = msg.content;

    div.appendChild(metaDiv);
    div.appendChild(contentDiv);

    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    while (chatMessages.children.length > 200) {
      chatMessages.removeChild(chatMessages.firstChild);
    }
  }

  // 显示弹幕
  function showDanmaku(text) {
    const danmaku = document.createElement('div');
    danmaku.className = 'danmaku-item';
    danmaku.textContent = text;

    const top = Math.random() * 70 + 5;
    danmaku.style.top = `${top}%`;

    const colors = ['#fff', '#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181', '#aa96da'];
    danmaku.style.color = colors[Math.floor(Math.random() * colors.length)];

    const duration = Math.max(8, text.length * 0.3 + 5);
    danmaku.style.animationDuration = `${duration}s`;

    danmakuLayer.appendChild(danmaku);

    danmaku.addEventListener('animationend', () => {
      danmaku.remove();
    });
  }

  // 更新在线人数
  function updateViewerCount(count) {
    viewerCount.textContent = `${count} 人在线`;
  }

  // 加载聊天历史
  function loadChatHistory() {
    fetch(`/api/live/history?videoId=${encodeURIComponent(currentVideoId)}`)
      .then(res => res.json())
      .then(data => {
        if (data.messages) {
          data.messages.forEach(msg => {
            if (msg.id) processedMessageIds.add(msg.id);
            addChatMessage(msg, false, false);
          });
        }
      })
      .catch(e => console.log('加载历史消息失败:', e));
  }

  // 加载视频列表
  function loadVideoList() {
    fetch('/api/live/videos')
      .then(res => res.json())
      .then(data => {
        if (data.videos && data.videos.length > 0) {
          renderVideoGrid(data.videos);
        } else {
          videoGrid.innerHTML = '<p class="no-videos">暂无视频</p>';
        }
      })
      .catch(e => {
        console.log('加载视频列表失败:', e);
        videoGrid.innerHTML = '<p class="no-videos">加载失败</p>';
      });
  }

  // 渲染视频网格
  function renderVideoGrid(videos) {
    videoGrid.innerHTML = '';
    videos.forEach(v => {
      const item = document.createElement('div');
      item.className = 'video-item';
      item.innerHTML = `
        <div class="video-cover" style="background-image: url('${v.cover || ''}')">
          ${!v.cover ? '<span class="no-cover">无封面</span>' : ''}
          <div class="play-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="video-name">${escapeHtml(v.name)}</div>
      `;
      item.addEventListener('click', () => playVideo(v));
      videoGrid.appendChild(item);
    });
  }

  // 播放视频
  function playVideo(v) {
    video.src = v.video;
    video.style.display = 'block';
    videoSelector.style.display = 'none';
    fullscreenBtn.style.display = 'block';
    backBtn.style.display = 'block';
    isPlaying = true;

    // 切换到该视频的评论区
    currentVideoId = v.name;
    clearChatMessages();
    loadChatHistory();

    video.play().catch(e => console.log('自动播放失败:', e));
  }

  // 显示视频选择器
  function showVideoSelector() {
    video.pause();
    video.src = '';
    video.style.display = 'none';
    videoSelector.style.display = 'flex';
    fullscreenBtn.style.display = 'none';
    backBtn.style.display = 'none';
    isPlaying = false;

    // 切换回全局评论区
    currentVideoId = 'global';
    clearChatMessages();
    loadChatHistory();
  }

  // 清空聊天消息
  function clearChatMessages() {
    chatMessages.innerHTML = '';
    processedMessageIds.clear();
  }

  // 显示昵称修改弹窗
  function showNicknameModal() {
    nicknameInput.value = getUsername();
    nicknameModal.classList.add('show');
    nicknameInput.focus();
    nicknameInput.select();
  }

  // 隐藏昵称弹窗
  function hideNicknameModal() {
    nicknameModal.classList.remove('show');
  }

  // 保存昵称
  function saveNickname() {
    const newName = nicknameInput.value.trim();
    if (newName && newName.length <= 20) {
      localStorage.setItem('live_username', newName);
      updateNicknameDisplay();
      updateMyUsernames(newName);
    }
    hideNicknameModal();
  }

  // 更新页面上自己的用户名
  function updateMyUsernames(newName) {
    document.querySelectorAll('.chat-message .username.is-me').forEach(el => {
      el.textContent = newName;
    });
  }

  // 切换全屏
  function toggleFullscreen() {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }

  // 进入全屏
  function enterFullscreen() {
    if (videoWrapper.requestFullscreen) {
      videoWrapper.requestFullscreen();
    } else if (videoWrapper.webkitRequestFullscreen) {
      videoWrapper.webkitRequestFullscreen();
    } else if (videoWrapper.mozRequestFullScreen) {
      videoWrapper.mozRequestFullScreen();
    } else if (videoWrapper.msRequestFullscreen) {
      videoWrapper.msRequestFullscreen();
    }
    videoWrapper.classList.add('fullscreen');
    isFullscreen = true;
    updateFullscreenIcon();
  }

  // 退出全屏
  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    videoWrapper.classList.remove('fullscreen');
    isFullscreen = false;
    updateFullscreenIcon();
  }

  // 处理全屏变化
  function handleFullscreenChange() {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
    isFullscreen = !!fullscreenElement;
    if (!isFullscreen) {
      videoWrapper.classList.remove('fullscreen');
    }
    updateFullscreenIcon();
  }

  // 更新全屏图标
  function updateFullscreenIcon() {
    const icon = isFullscreen
      ? '<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>'
      : '<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>';
    fullscreenBtn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">${icon}</svg>`;
  }

  // 获取用户名
  function getUsername() {
    let username = localStorage.getItem('live_username');
    if (!username) {
      username = '观众' + Math.floor(Math.random() * 10000);
      localStorage.setItem('live_username', username);
    }
    return username;
  }

  // HTML 转义
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // 页面卸载时清理
  window.addEventListener('beforeunload', () => {
    if (isMicActive) {
      stopMicrophone();
    }
  });

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
