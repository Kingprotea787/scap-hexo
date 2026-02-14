// js/player.js  —— 统一播放器 + 用 class 切换图标
(() => {
  // ===== 基础 DOM =====
  const playerRoot = document.querySelector('.music-player');
  if (!playerRoot) return;

  const albumImg = playerRoot.querySelector('.album-art img');
  const titleEl  = playerRoot.querySelector('.track-info .title');
  const descWrap = playerRoot.querySelector('.track-info .description .marquee-content');
  const playBtn  = playerRoot.querySelector('.player-btn.play-pause');

  // 注意：你原来已经写了用 .playing 类切换图标的 CSS，
  // 所以这里不再直接改 icon 的 display，而只切换 class。
  const setPlayButtonState = (isPlaying) => {
    playBtn.setAttribute('aria-pressed', String(isPlaying));
    playBtn.classList.toggle('playing', isPlaying); 
  };

  // ===== 全局 Audio =====
  const audio = new Audio();
  audio.preload = 'auto';

  // ===== 从卡片收集播放列表 =====
  const cardNodes = Array.from(document.querySelectorAll('.card[data-audio]'));
  const playlist = cardNodes.map(card => {
    const src   = card.getAttribute('data-audio');               // 必须有
    const img   = card.querySelector('img')?.getAttribute('src') || '';
    const title = card.querySelector('h3')?.textContent?.trim()   || 'Untitled';
    // 允许没有 .description
    const desc  = card.querySelector('.description')?.textContent?.trim() || '';
    return { src, img, title, desc, el: card };
  }).filter(i => !!i.src);

  let current = -1;

  const setMarquee = (text) => {
    const spans = descWrap?.querySelectorAll('.desc-text') || [];
    spans.forEach(s => s.textContent = text || '');
  };

  const updateUIForTrack = ({img, title, desc}) => {
    if (albumImg) {
      albumImg.src = img || '';
      albumImg.alt = title || 'Album Art';
    }
    if (titleEl) titleEl.textContent = title || '';
    setMarquee(desc || '');
    playerRoot.classList.add('active'); // 如果你的样式用到 .active 显示播放器
  };

  async function loadTrack(index, autoPlay = true) {
    if (index < 0 || index >= playlist.length) return;
    current = index;

    const item = playlist[index];
    updateUIForTrack(item);

    const absolute = new URL(item.src, window.location.href).href;
    if (audio.src !== absolute) {
      audio.src = item.src; // 相对路径由浏览器解析
    }

    try {
      if (autoPlay) {
        await audio.play();            // 需要用户手势已触发（点卡片或按钮）
        setPlayButtonState(true);
      } else {
        setPlayButtonState(false);
      }
    } catch {
      // 被自动播放策略拦截
      setPlayButtonState(false);
    }

    // 卡片高亮
    cardNodes.forEach(c => c.classList.remove('playing'));
    item.el.classList.add('playing');
  }

  // ===== 事件绑定 =====

  // 点击卡片：切换到该曲目；如果已经是当前曲目就切换播放/暂停
  cardNodes.forEach((card, i) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', async () => {
      if (current === i) {
        if (audio.paused) {
          try { await audio.play(); setPlayButtonState(true); } 
          catch { setPlayButtonState(false); }
        } else {
          audio.pause();
          setPlayButtonState(false);
        }
      } else {
        loadTrack(i, true);
      }
    });
  });

  // 播放/暂停按钮
  playBtn?.addEventListener('click', async () => {
    // 还没选过曲目，默认第一首
    if (current < 0 && playlist.length > 0) {
      return loadTrack(0, true);
    }
    if (audio.paused) {
      try { await audio.play(); setPlayButtonState(true); }
      catch { setPlayButtonState(false); }
    } else {
      audio.pause();
      setPlayButtonState(false);
    }
  });

  // 音频事件
  audio.addEventListener('play',  () => setPlayButtonState(true));
  audio.addEventListener('pause', () => setPlayButtonState(false));
  audio.addEventListener('ended', () => {
    if (!playlist.length) return;
    const next = (current + 1) % playlist.length;
    loadTrack(next, true);
  });

  // 初始
  setPlayButtonState(false);
})();
