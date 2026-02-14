/**
 * WebRTC 语音通话 + 音量可视化
 */

(function() {
  'use strict';

  const { state, setState } = window.LiveState;

  // DOM 元素
  let micBtn, muteBtn, voiceIndicator, voiceUsersDiv;

  // 音频分析器
  let audioContext = null;
  let localAnalyser = null;
  let remoteAnalysers = new Map(); // peerId -> { analyser, dataArray }
  let remoteGainNodes = new Map(); // peerId -> GainNode
  let volumeAnimationId = null;

  // 语音音量增益（1.0 = 原始音量，2.0 = 2倍）
  const VOICE_GAIN = 3.0;

  // 语音用户信息（包含时间戳）
  // peerId -> { username, joinTime }
  const voiceUserInfo = new Map();

  // 缓存早到的 ICE candidate
  // peerId -> candidate[]
  const pendingCandidates = new Map();

  // WebRTC 配置
  const rtcConfig = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' }
    ]
  };

  function init() {
    micBtn = document.getElementById('micBtn');
    muteBtn = document.getElementById('muteBtn');
    voiceIndicator = document.getElementById('voiceIndicator');
    voiceUsersDiv = document.getElementById('voiceUsers');

    bindEvents();
  }

  function bindEvents() {
    micBtn.addEventListener('click', toggleMicrophone);
    muteBtn.addEventListener('click', toggleMute);
  }

  async function toggleMicrophone() {
    if (state.isMicActive) {
      stopMicrophone();
    } else {
      await startMicrophone();
    }
  }

  function toggleMute() {
    const isMuted = !state.isMuted;
    setState({ isMuted });

    muteBtn.classList.toggle('active', isMuted);
    muteBtn.title = isMuted ? '取消静音' : '静音（不接收他人语音）';

    // 通过 GainNode 控制静音
    remoteGainNodes.forEach(gainNode => {
      gainNode.gain.value = isMuted ? 0 : VOICE_GAIN;
    });

    if (window.LiveSocket) {
      window.LiveSocket.send({
        type: 'mute_status',
        muted: isMuted
      });
    }
  }

  async function startMicrophone() {
    try {
      micBtn.classList.add('connecting');

      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        },
        video: false
      });

      setState({ localStream, isMicActive: true });

      // 创建音频分析器
      setupLocalAnalyser(localStream);

      micBtn.classList.remove('connecting');
      micBtn.classList.add('active');
      micBtn.title = '关闭麦克风';

      // 通知服务器
      if (window.LiveSocket && window.LiveChat) {
        window.LiveSocket.send({
          type: 'voice_start',
          username: window.LiveChat.getUsername()
        });
      }

      // 添加自己到语音用户列表（带时间戳）
      const username = window.LiveChat.getUsername();
      state.voiceUsers.set(state.myPeerId, username);
      voiceUserInfo.set(state.myPeerId, {
        username,
        joinTime: Date.now()
      });
      updateVoiceIndicator();

      // 启动音量动画
      startVolumeAnimation();

      console.log('麦克风已开启');
    } catch (e) {
      console.error('无法获取麦克风权限:', e);
      micBtn.classList.remove('connecting');
      alert('无法获取麦克风权限，请检查浏览器设置');
    }
  }

  // 设置本地音频分析器
  function setupLocalAnalyser(stream) {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    // 确保 AudioContext 处于运行状态
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    const source = audioContext.createMediaStreamSource(stream);
    localAnalyser = audioContext.createAnalyser();
    localAnalyser.fftSize = 256;
    localAnalyser.smoothingTimeConstant = 0.8;
    source.connect(localAnalyser);
  }

  // 获取音量级别 (0-100)
  function getVolumeLevel(analyser) {
    if (!analyser) return 0;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(dataArray);

    // 计算平均音量
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i];
    }
    const avg = sum / dataArray.length;

    // 映射到 0-100
    return Math.min(100, Math.round(avg * 100 / 128));
  }

  // 启动音量动画
  function startVolumeAnimation() {
    if (volumeAnimationId) return;

    function updateVolumes() {
      // 更新所有语音用户的音量条
      state.voiceUsers.forEach((username, peerId) => {
        const volumeBar = document.getElementById(`volume-${peerId}`);
        if (!volumeBar) return;

        let volume = 0;
        if (peerId === state.myPeerId && localAnalyser) {
          volume = getVolumeLevel(localAnalyser);
        } else if (remoteAnalysers.has(peerId)) {
          const { analyser } = remoteAnalysers.get(peerId);
          volume = getVolumeLevel(analyser);
        }

        // 更新音量条宽度和颜色
        const fill = volumeBar.querySelector('.volume-fill');
        if (fill) {
          fill.style.width = `${volume}%`;
        }
      });

      volumeAnimationId = requestAnimationFrame(updateVolumes);
    }

    updateVolumes();
  }

  // 停止音量动画
  function stopVolumeAnimation() {
    if (volumeAnimationId) {
      cancelAnimationFrame(volumeAnimationId);
      volumeAnimationId = null;
    }
  }

  function stopMicrophone() {
    if (state.localStream) {
      state.localStream.getTracks().forEach(track => track.stop());
    }

    // 关闭所有 peer 连接
    Object.keys(state.peerConnections).forEach(peerId => {
      if (state.peerConnections[peerId]) {
        state.peerConnections[peerId].close();
        delete state.peerConnections[peerId];
      }
    });

    // 清理本地分析器
    localAnalyser = null;

    // 从语音用户列表移除自己
    state.voiceUsers.delete(state.myPeerId);
    voiceUserInfo.delete(state.myPeerId);

    setState({ localStream: null, isMicActive: false });

    micBtn.classList.remove('active', 'connecting');
    micBtn.title = '开启麦克风';

    // 通知服务器
    if (window.LiveSocket && window.LiveChat) {
      window.LiveSocket.send({
        type: 'voice_stop',
        username: window.LiveChat.getUsername()
      });
    }

    updateVoiceIndicator();

    // 如果没有语音用户了，停止动画
    if (state.voiceUsers.size === 0) {
      stopVolumeAnimation();
    }

    console.log('麦克风已关闭');
  }

  // 创建发送方连接
  async function createSenderConnection(targetPeerId) {
    if (!state.localStream || !state.isMicActive) return;
    if (state.peerConnections[targetPeerId]) return;

    console.log('创建发送连接到:', targetPeerId);

    const pc = new RTCPeerConnection(rtcConfig);
    state.peerConnections[targetPeerId] = pc;

    state.localStream.getTracks().forEach(track => {
      pc.addTrack(track, state.localStream);
    });

    pc.onicecandidate = (event) => {
      if (event.candidate && window.LiveSocket) {
        window.LiveSocket.send({
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

    try {
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      if (window.LiveSocket) {
        window.LiveSocket.send({
          type: 'voice_offer',
          offer: pc.localDescription,
          to: targetPeerId
        });
      }
    } catch (e) {
      console.error('创建 offer 失败:', e);
      closePeerConnection(targetPeerId);
    }
  }

  // 创建接收方连接
  async function createReceiverConnection(senderPeerId, offer) {
    if (state.isMuted) return;

    console.log('创建接收连接从:', senderPeerId);

    if (state.peerConnections[senderPeerId]) {
      state.peerConnections[senderPeerId].close();
    }

    const pc = new RTCPeerConnection(rtcConfig);
    state.peerConnections[senderPeerId] = pc;

    pc.onicecandidate = (event) => {
      if (event.candidate && window.LiveSocket) {
        window.LiveSocket.send({
          type: 'ice_candidate',
          candidate: event.candidate,
          to: senderPeerId
        });
      }
    };

    pc.ontrack = (event) => {
      console.log('收到远程音频流:', senderPeerId);

      // 确保 AudioContext 存在
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      // 使用 Web Audio API 增益音频
      const stream = event.streams[0];
      const source = audioContext.createMediaStreamSource(stream);

      // 创建增益节点
      const gainNode = audioContext.createGain();
      gainNode.gain.value = VOICE_GAIN;
      remoteGainNodes.set(senderPeerId, gainNode);

      // 创建分析器
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.8;

      // 连接：source -> analyser -> gain -> destination
      source.connect(analyser);
      analyser.connect(gainNode);
      gainNode.connect(audioContext.destination);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      remoteAnalysers.set(senderPeerId, { analyser, dataArray });

      // 确保动画在运行
      startVolumeAnimation();
    };

    pc.onconnectionstatechange = () => {
      console.log(`接收连接状态 ${senderPeerId}:`, pc.connectionState);
      if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
        closePeerConnection(senderPeerId);
      }
    };

    try {
      await pc.setRemoteDescription(new RTCSessionDescription(offer));
      // 补加缓存的 ICE candidate
      flushPendingCandidates(senderPeerId);
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      if (window.LiveSocket) {
        window.LiveSocket.send({
          type: 'voice_answer',
          answer: pc.localDescription,
          to: senderPeerId
        });
      }
    } catch (e) {
      console.error('处理 offer 失败:', e);
      closePeerConnection(senderPeerId);
    }
  }

  function closePeerConnection(peerId) {
    if (state.peerConnections[peerId]) {
      state.peerConnections[peerId].close();
      delete state.peerConnections[peerId];
    }

    // 清理远程分析器和增益节点
    remoteAnalysers.delete(peerId);
    if (remoteGainNodes.has(peerId)) {
      remoteGainNodes.get(peerId).disconnect();
      remoteGainNodes.delete(peerId);
    }
    // 清理缓存的 candidate
    pendingCandidates.delete(peerId);
  }

  // 补加缓存的 ICE candidate
  function flushPendingCandidates(peerId) {
    const pending = pendingCandidates.get(peerId);
    if (pending && state.peerConnections[peerId]) {
      pending.forEach(candidate => {
        state.peerConnections[peerId].addIceCandidate(new RTCIceCandidate(candidate))
          .catch(e => console.error('补加 ICE candidate 失败:', e));
      });
      pendingCandidates.delete(peerId);
    }
  }

  // 处理语音消息
  async function handleVoiceMessage(data) {
    switch (data.type) {
      case 'voice_start':
        state.voiceUsers.set(data.peerId, data.username);
        voiceUserInfo.set(data.peerId, {
          username: data.username,
          joinTime: Date.now()
        });
        updateVoiceIndicator();
        startVolumeAnimation();
        if (state.isMicActive && data.peerId !== state.myPeerId) {
          createSenderConnection(data.peerId);
        }
        break;

      case 'voice_stop':
        state.voiceUsers.delete(data.peerId);
        voiceUserInfo.delete(data.peerId);
        remoteAnalysers.delete(data.peerId);
        updateVoiceIndicator();
        closePeerConnection(data.peerId);
        if (state.voiceUsers.size === 0) {
          stopVolumeAnimation();
        }
        break;

      case 'voice_offer':
        if (!state.isMuted && data.from !== state.myPeerId) {
          await createReceiverConnection(data.from, data.offer);
        }
        break;

      case 'voice_answer':
        if (state.peerConnections[data.from]) {
          try {
            await state.peerConnections[data.from].setRemoteDescription(
              new RTCSessionDescription(data.answer)
            );
            // 补加缓存的 ICE candidate
            flushPendingCandidates(data.from);
          } catch (e) {
            console.error('设置 answer 失败:', e);
          }
        }
        break;

      case 'ice_candidate':
        if (data.candidate) {
          if (state.peerConnections[data.from]) {
            // 连接已存在，直接添加
            try {
              await state.peerConnections[data.from].addIceCandidate(
                new RTCIceCandidate(data.candidate)
              );
            } catch (e) {
              console.error('添加 ICE 候选失败:', e);
            }
          } else {
            // 连接还没建好，缓存起来
            if (!pendingCandidates.has(data.from)) {
              pendingCandidates.set(data.from, []);
            }
            pendingCandidates.get(data.from).push(data.candidate);
            console.log('缓存 ICE candidate:', data.from);
          }
        }
        break;

      case 'voice_users':
        state.voiceUsers.clear();
        voiceUserInfo.clear();
        if (data.users) {
          data.users.forEach((u, index) => {
            state.voiceUsers.set(u.peerId, u.username);
            voiceUserInfo.set(u.peerId, {
              username: u.username,
              joinTime: Date.now() + index // 保持服务器返回的顺序
            });
          });
        }
        updateVoiceIndicator();
        if (state.voiceUsers.size > 0) {
          startVolumeAnimation();
        }
        break;

      case 'request_offer':
        if (state.isMicActive && data.targetPeerId !== state.myPeerId) {
          createSenderConnection(data.targetPeerId);
        }
        break;
    }
  }

  function updateVoiceIndicator() {
    if (state.voiceUsers.size > 0) {
      voiceIndicator.classList.add('active');
      voiceIndicator.textContent = `${state.voiceUsers.size}人语音中`;

      voiceUsersDiv.classList.add('active');
      voiceUsersDiv.innerHTML = '';

      // 按加入时间排序
      const sortedUsers = Array.from(voiceUserInfo.entries())
        .sort((a, b) => a[1].joinTime - b[1].joinTime);

      sortedUsers.forEach(([peerId, info]) => {
        const isMe = peerId === state.myPeerId;
        const userDiv = document.createElement('div');
        userDiv.className = 'voice-user';
        userDiv.innerHTML = `
          <span class="voice-username${isMe ? ' is-me' : ''}">${escapeHtml(info.username)}</span>
          <div class="volume-bar" id="volume-${peerId}">
            <div class="volume-fill"></div>
          </div>
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

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // 页面卸载时清理
  window.addEventListener('beforeunload', () => {
    if (state.isMicActive) {
      stopMicrophone();
    }
  });

  window.LiveVoice = {
    init,
    handleVoiceMessage,
    stopMicrophone
  };
})();
