/**
 * 聊天消息管理
 */

(function() {
  'use strict';

  const { state, setState } = window.LiveState;

  // DOM 元素
  let chatInput, sendBtn, chatMessages, viewerCount;
  let nicknameModal, nicknameInput, nicknameCancel, nicknameConfirm;
  let nicknameText, editNicknameBtn;

  function init() {
    chatInput = document.getElementById('chatInput');
    sendBtn = document.getElementById('sendBtn');
    chatMessages = document.getElementById('chatMessages');
    viewerCount = document.getElementById('viewerCount');
    nicknameModal = document.getElementById('nicknameModal');
    nicknameInput = document.getElementById('nicknameInput');
    nicknameCancel = document.getElementById('nicknameCancel');
    nicknameConfirm = document.getElementById('nicknameConfirm');
    nicknameText = document.getElementById('nicknameText');
    editNicknameBtn = document.getElementById('editNicknameBtn');

    updateNicknameDisplay();
    bindEvents();
    loadHistory();
  }

  function bindEvents() {
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // 昵称弹窗
    nicknameCancel.addEventListener('click', hideNicknameModal);
    nicknameConfirm.addEventListener('click', saveNickname);
    nicknameModal.addEventListener('click', (e) => {
      if (e.target === nicknameModal) hideNicknameModal();
    });
    nicknameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') saveNickname();
    });
    editNicknameBtn.addEventListener('click', showNicknameModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nicknameModal.classList.contains('show')) {
        hideNicknameModal();
      }
    });
  }

  function handleMessage(data) {
    switch (data.type) {
      case 'chat':
        // 只显示当前视频的消息
        if (data.videoId && data.videoId !== state.currentVideoId) {
          return;
        }
        // 去重
        if (data.id && state.processedMessageIds.has(data.id)) {
          return;
        }
        if (data.id) {
          state.processedMessageIds.add(data.id);
          if (state.processedMessageIds.size > 500) {
            const first = state.processedMessageIds.values().next().value;
            state.processedMessageIds.delete(first);
          }
        }
        addMessage(data, true, false);
        if (state.isFullscreen && window.LiveDanmaku) {
          window.LiveDanmaku.show(data.content);
        }
        break;

      case 'viewerCount':
        updateViewerCount(data.count);
        break;

      case 'history':
        if (data.messages) {
          data.messages.forEach(msg => {
            if (msg.id) state.processedMessageIds.add(msg.id);
            addMessage(msg, false, false);
          });
        }
        break;
    }
  }

  function sendMessage() {
    const content = chatInput.value.trim();
    if (!content) return;

    const tempId = `temp_${Date.now()}_${Math.random()}`;
    const message = {
      type: 'chat',
      content: content,
      username: getUsername(),
      videoId: state.currentVideoId,
      timestamp: Date.now(),
      tempId: tempId
    };

    // 本地立即显示
    addMessage(message, true, true);
    if (state.isFullscreen && window.LiveDanmaku) {
      window.LiveDanmaku.show(content);
    }

    // 发送到服务器
    if (window.LiveSocket && window.LiveSocket.isConnected()) {
      window.LiveSocket.send(message);
    } else {
      fetch('/api/live/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      }).catch(e => console.error('发送失败:', e));
    }

    chatInput.value = '';
  }

  function addMessage(msg, animate = true, isLocal = false) {
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

  function loadHistory() {
    fetch(`/api/live/history?videoId=${encodeURIComponent(state.currentVideoId)}`)
      .then(res => res.json())
      .then(data => {
        if (data.messages) {
          data.messages.forEach(msg => {
            if (msg.id) state.processedMessageIds.add(msg.id);
            addMessage(msg, false, false);
          });
        }
      })
      .catch(e => console.log('加载历史消息失败:', e));
  }

  function fetchMessages() {
    fetch(`/api/live/messages?videoId=${encodeURIComponent(state.currentVideoId)}`)
      .then(res => res.json())
      .then(data => {
        if (data.messages) {
          data.messages.forEach(msg => addMessage(msg, true, false));
        }
        if (data.viewerCount !== undefined) {
          updateViewerCount(data.viewerCount);
        }
      })
      .catch(e => console.error('获取消息失败:', e));
  }

  function switchVideo(videoId) {
    setState({ currentVideoId: videoId });
    clearMessages();
    loadHistory();
  }

  function clearMessages() {
    chatMessages.innerHTML = '';
    state.processedMessageIds.clear();
  }

  function updateViewerCount(count) {
    viewerCount.textContent = `${count} 人在线`;
  }

  function updateNicknameDisplay() {
    nicknameText.textContent = getUsername();
  }

  function showNicknameModal() {
    nicknameInput.value = getUsername();
    nicknameModal.classList.add('show');
    nicknameInput.focus();
    nicknameInput.select();
  }

  function hideNicknameModal() {
    nicknameModal.classList.remove('show');
  }

  function saveNickname() {
    const newName = nicknameInput.value.trim();
    if (newName && newName.length <= 20) {
      localStorage.setItem('live_username', newName);
      updateNicknameDisplay();
      updateMyUsernames(newName);
    }
    hideNicknameModal();
  }

  function updateMyUsernames(newName) {
    document.querySelectorAll('.chat-message .username.is-me').forEach(el => {
      el.textContent = newName;
    });
  }

  function getUsername() {
    let username = localStorage.getItem('live_username');
    if (!username) {
      username = '观众' + Math.floor(Math.random() * 10000);
      localStorage.setItem('live_username', username);
    }
    return username;
  }

  window.LiveChat = {
    init,
    handleMessage,
    fetchMessages,
    switchVideo,
    getUsername,
    showNicknameModal
  };
})();
