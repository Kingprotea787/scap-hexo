/**
 * 播放状态管理（同步直播）
 */

// 当前播放状态
let playbackState = {
  videoId: null,        // 当前视频ID
  videoUrl: null,       // 视频URL
  isPlaying: false,     // 是否播放中
  currentTime: 0,       // 当前时间戳
  updatedAt: Date.now() // 状态更新时间
};

// 管理员密钥
const ADMIN_KEY = 'scapcomic';

// 验证管理员密钥
function verifyAdminKey(key) {
  return key === ADMIN_KEY;
}

// 获取当前播放状态（计算实时时间）
function getPlaybackState() {
  if (playbackState.isPlaying && playbackState.videoId) {
    // 计算当前实际播放时间
    const elapsed = (Date.now() - playbackState.updatedAt) / 1000;
    return {
      ...playbackState,
      currentTime: playbackState.currentTime + elapsed
    };
  }
  return { ...playbackState };
}

// 选择视频
function selectVideo(videoId, videoUrl) {
  playbackState = {
    videoId,
    videoUrl,
    isPlaying: false,
    currentTime: 0,
    updatedAt: Date.now()
  };
  return getPlaybackState();
}

// 播放
function play(currentTime) {
  playbackState = {
    ...playbackState,
    isPlaying: true,
    currentTime: currentTime !== undefined ? currentTime : playbackState.currentTime,
    updatedAt: Date.now()
  };
  return getPlaybackState();
}

// 暂停
function pause(currentTime) {
  playbackState = {
    ...playbackState,
    isPlaying: false,
    currentTime: currentTime !== undefined ? currentTime : playbackState.currentTime,
    updatedAt: Date.now()
  };
  return getPlaybackState();
}

// 跳转
function seek(time) {
  playbackState = {
    ...playbackState,
    currentTime: time,
    updatedAt: Date.now()
  };
  return getPlaybackState();
}

// 返回选择页面
function backToSelector() {
  playbackState = {
    videoId: null,
    videoUrl: null,
    isPlaying: false,
    currentTime: 0,
    updatedAt: Date.now()
  };
  return getPlaybackState();
}

module.exports = {
  ADMIN_KEY,
  verifyAdminKey,
  getPlaybackState,
  selectVideo,
  play,
  pause,
  seek,
  backToSelector
};
