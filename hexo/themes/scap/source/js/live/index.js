/**
 * 直播页面入口
 * 初始化所有模块
 */

(function() {
  'use strict';

  function init() {
    // 初始化各模块（顺序重要）
    if (window.LiveDanmaku) window.LiveDanmaku.init();
    if (window.LiveChat) window.LiveChat.init();
    if (window.LiveVideo) window.LiveVideo.init();
    if (window.LiveVoice) window.LiveVoice.init();
    if (window.LiveAdmin) window.LiveAdmin.init();
    if (window.LiveSocket) window.LiveSocket.connect();

    console.log('Live 模块初始化完成');
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
