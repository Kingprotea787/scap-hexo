/**
 * 视频选择与播放（同步直播模式）
 */

(function() {
  'use strict';

  const { state, setState } = window.LiveState;

  // DOM 元素
  let video, videoWrapper, fullscreenBtn, backBtn;
  let videoSelector, videoGrid;

  // 防止事件循环
  let ignoreEvents = false;

  function init() {
    video = document.getElementById('liveVideo');
    videoWrapper = document.getElementById('videoWrapper');
    fullscreenBtn = document.getElementById('fullscreenBtn');
    backBtn = document.getElementById('backBtn');
    videoSelector = document.getElementById('videoSelector');
    videoGrid = document.getElementById('videoGrid');

    // 普通用户无控制条
    video.removeAttribute('controls');

    bindEvents();
    loadVideoList();
  }

  function bindEvents() {
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    video.addEventListener('dblclick', toggleFullscreen);

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.isFullscreen) {
        exitFullscreen();
      }
    });

    // 返回按钮（仅管理员可用）
    backBtn.addEventListener('click', () => {
      if (isAdmin()) {
        sendAdminCommand('admin_back');
      }
    });

    // 管理员视频事件
    video.addEventListener('play', onVideoPlay);
    video.addEventListener('pause', onVideoPause);
    video.addEventListener('seeked', onVideoSeeked);
  }

  function isAdmin() {
    return window.LiveAdmin && window.LiveAdmin.isAdmin();
  }

  function sendAdminCommand(type, data = {}) {
    if (window.LiveAdmin) {
      window.LiveAdmin.sendAdminCommand(type, data);
    }
  }

  // ==================== 管理员事件 ====================

  function onVideoPlay() {
    if (ignoreEvents || !isAdmin()) return;
    sendAdminCommand('admin_play', { currentTime: video.currentTime });
  }

  function onVideoPause() {
    if (ignoreEvents || !isAdmin()) return;
    sendAdminCommand('admin_pause', { currentTime: video.currentTime });
  }

  let seekTimeout = null;
  function onVideoSeeked() {
    if (ignoreEvents || !isAdmin()) return;
    clearTimeout(seekTimeout);
    seekTimeout = setTimeout(() => {
      sendAdminCommand('admin_seek', { time: video.currentTime });
    }, 300);
  }

  // ==================== 初始化（新用户进入） ====================

  function handlePlaybackInit(data) {
    // 管理员不需要初始化同步
    if (isAdmin()) return;

    console.log('收到播放初始化:', data);

    // 没有视频在播放
    if (!data.videoId) {
      showVideoSelector();
      return;
    }

    // 加载视频
    ignoreEvents = true;
    video.src = data.videoUrl;
    video.style.display = 'block';
    videoSelector.style.display = 'none';
    fullscreenBtn.style.display = 'block';

    setState({ isPlaying: true, currentVideoId: data.videoId });

    // 切换评论区
    if (window.LiveChat) {
      window.LiveChat.switchVideo(data.videoId);
    }

    // 等待视频加载后跳转到指定时间并播放
    video.addEventListener('loadedmetadata', function onLoaded() {
      video.removeEventListener('loadedmetadata', onLoaded);
      video.currentTime = data.currentTime || 0;

      if (data.isPlaying) {
        // 尝试静音播放（绕过自动播放限制）
        video.muted = true;
        video.play().then(() => {
          // 播放成功后尝试取消静音
          video.muted = false;
        }).catch((e) => {
          console.log('自动播放失败:', e);
          // 显示提示让用户点击播放
          showPlayHint();
        });
      }
      ignoreEvents = false;
    });

    video.load();
  }

  // 显示播放提示
  function showPlayHint() {
    let hint = document.getElementById('playHint');
    if (!hint) {
      hint = document.createElement('div');
      hint.id = 'playHint';
      hint.className = 'play-hint';
      hint.innerHTML = `
        <div class="play-hint-content">
          <svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <p>点击播放</p>
        </div>
      `;
      hint.addEventListener('click', () => {
        video.muted = false;
        video.play().catch(() => {});
        hint.remove();
      });
      videoWrapper.appendChild(hint);
    }
  }

  // ==================== 增量指令处理 ====================

  function handleCommand(data) {
    // 管理员不处理指令（自己发的）
    if (isAdmin()) return;

    ignoreEvents = true;

    switch (data.type) {
      case 'cmd_switch_video':
        // 切换视频
        video.src = data.videoUrl;
        video.style.display = 'block';
        videoSelector.style.display = 'none';
        fullscreenBtn.style.display = 'block';
        setState({ isPlaying: true, currentVideoId: data.videoId });

        if (window.LiveChat) {
          window.LiveChat.switchVideo(data.videoId);
        }

        video.addEventListener('loadedmetadata', function onLoaded() {
          video.removeEventListener('loadedmetadata', onLoaded);
          video.currentTime = 0;
          ignoreEvents = false;
        });
        video.load();
        break;

      case 'cmd_play':
        if (data.currentTime !== undefined) {
          video.currentTime = data.currentTime;
        }
        video.muted = true;
        video.play().then(() => {
          video.muted = false;
        }).catch((e) => {
          console.log('播放失败:', e);
          showPlayHint();
        });
        ignoreEvents = false;
        break;

      case 'cmd_pause':
        video.pause();
        if (data.currentTime !== undefined) {
          video.currentTime = data.currentTime;
        }
        ignoreEvents = false;
        break;

      case 'cmd_seek':
        video.currentTime = data.time;
        ignoreEvents = false;
        break;

      case 'cmd_back':
        showVideoSelector();
        ignoreEvents = false;
        break;

      default:
        ignoreEvents = false;
    }
  }

  // ==================== 管理员模式 ====================

  function updateAdminMode(isAdminMode) {
    if (isAdminMode) {
      video.setAttribute('controls', '');
      if (state.isPlaying) {
        backBtn.style.display = 'block';
      }
    } else {
      video.removeAttribute('controls');
      backBtn.style.display = 'none';
    }
  }

  // ==================== 视频列表 ====================

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
      item.addEventListener('click', () => selectVideo(v));
      videoGrid.appendChild(item);
    });
  }

  // 选择视频（仅管理员）
  function selectVideo(v) {
    if (!isAdmin()) return;

    // 管理员直接播放
    ignoreEvents = true;
    video.src = v.video;
    video.style.display = 'block';
    videoSelector.style.display = 'none';
    fullscreenBtn.style.display = 'block';
    backBtn.style.display = 'block';
    setState({ isPlaying: true, currentVideoId: v.name });

    if (window.LiveChat) {
      window.LiveChat.switchVideo(v.name);
    }

    // 通知服务器
    sendAdminCommand('admin_select_video', {
      videoId: v.name,
      videoUrl: v.video
    });

    ignoreEvents = false;
  }

  // 显示视频选择器
  function showVideoSelector() {
    ignoreEvents = true;
    video.pause();
    video.src = '';
    video.style.display = 'none';
    videoSelector.style.display = 'flex';
    fullscreenBtn.style.display = 'none';
    backBtn.style.display = 'none';

    setState({ isPlaying: false, currentVideoId: 'global' });

    if (window.LiveChat) {
      window.LiveChat.switchVideo('global');
    }
    ignoreEvents = false;
  }

  // ==================== 全屏 ====================

  function toggleFullscreen() {
    if (state.isFullscreen) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }

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
    setState({ isFullscreen: true });
    updateFullscreenIcon();
  }

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
    setState({ isFullscreen: false });
    updateFullscreenIcon();
  }

  function handleFullscreenChange() {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
    const isFs = !!fullscreenElement;
    setState({ isFullscreen: isFs });
    if (!isFs) {
      videoWrapper.classList.remove('fullscreen');
    }
    updateFullscreenIcon();
  }

  function updateFullscreenIcon() {
    const icon = state.isFullscreen
      ? '<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>'
      : '<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>';
    fullscreenBtn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">${icon}</svg>`;
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  window.LiveVideo = {
    init,
    isFullscreen: () => state.isFullscreen,
    loadVideoList,
    updateAdminMode,
    handlePlaybackInit,
    handleCommand
  };
})();
