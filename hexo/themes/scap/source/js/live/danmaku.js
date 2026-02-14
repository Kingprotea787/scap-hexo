/**
 * 弹幕渲染
 */

(function() {
  'use strict';

  let danmakuLayer;

  function init() {
    danmakuLayer = document.getElementById('danmakuLayer');
  }

  function show(text) {
    if (!danmakuLayer) return;

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

  function clear() {
    if (danmakuLayer) {
      danmakuLayer.innerHTML = '';
    }
  }

  window.LiveDanmaku = {
    init,
    show,
    clear
  };
})();
