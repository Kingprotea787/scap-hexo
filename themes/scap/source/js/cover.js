(() => {
  const container = document.querySelector('.cover-flow');
  if (!container) return;

  // —— 媒体查询：宽高比 ≤ 1:1 视为“窄屏/竖屏” —— //
  const mql = window.matchMedia('(max-aspect-ratio: 1/1)');
  const getParams = () => ({
    isNarrow: mql.matches,
    baseScale: mql.matches ? 0.82 : 1.0,   // 窄屏整体缩小
    sensitivity: mql.matches ? 10 : 1       // 滑动灵敏度降为 1/3（分母 ×3）
  });

  // 透视放在 wrapper（或父元素）上，才能作用到 img 的 3D 变换
  const wrapper = container.closest('.cover-flow-wrapper') || container.parentElement;
  if (wrapper) {
    wrapper.style.setProperty('perspective', '1200px', 'important');
    wrapper.style.setProperty('perspective-origin', '50% 50%', 'important');
    wrapper.style.setProperty('transform-style', 'preserve-3d', 'important');
  }

  const items = Array.from(container.querySelectorAll('li:not(.placeholder)'));
  const imgs  = items.map(li => li.querySelector('img')).filter(Boolean);
  if (!imgs.length) return;

  // 确保 img 能做 3D 变换
  imgs.forEach(img => {
    img.style.setProperty('transform-origin', '50% 50%', 'important');
    img.style.setProperty('backface-visibility', 'hidden', 'important');
    img.style.setProperty('transform-style', 'preserve-3d', 'important');
  });

  let ticking = false;

  function update() {
    const { baseScale, sensitivity } = getParams();

    const viewW   = container.clientWidth;
    const mid     = viewW / 2;
    const scrollX = container.scrollLeft;

    items.forEach((li, i) => {
      const img = imgs[i];
      if (!img) return;

      // 用容器坐标：offsetLeft - scrollLeft
      const center = li.offsetLeft + li.offsetWidth / 2 - scrollX;

      // 分母 × sensitivity：灵敏度降低到 1/sensitivity
      const halfRange = (viewW * 0.5) * sensitivity;
      const n = Math.max(-1, Math.min(1, (center - mid) / halfRange)); // [-1,1]
      const score = 1 - Math.abs(n); // 0~1，越靠中越大

      // —— 角度&深度（可按需微调，但这两项不因窄屏而变）——
      const rotY  = -45 * 0.8 * n;     // ~ ±36°
      const z     = 120 * score;       // 向外凸一点
      const shift = n * 0.25;          // 横向微偏移
      const sc    = baseScale * (1 + 0.35 * score); // 叠加基础缩放

      const t = `translateX(${shift}px) rotateY(${rotY}deg) translateZ(${z}px) scale(${sc})`;
      img.style.setProperty('transform', t, 'important');

      // 层级：中间在最上
      li.style.zIndex = String(100 + Math.round(score * 100));
    });

    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  container.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });

  // 监听媒体查询变化（横竖屏切换等）
  if (typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', requestUpdate);
  } else if (typeof mql.addListener === 'function') { // 兼容旧内核
    mql.addListener(requestUpdate);
  }

  // 初始渲染
  update();
})();