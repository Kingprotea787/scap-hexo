(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const maxScaleDown = 0.2; // 最多缩到 80%
  const maxRadius    = 30;  // 圆角最大 30px
  let ticking = false;

  // 兼容各浏览器的滚动位置获取
  const getScrollY = () =>
    window.pageYOffset ??
    document.documentElement.scrollTop ??
    document.body.scrollTop ??
    0;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const scrollY    = getScrollY();
      const heroHeight = hero.offsetHeight || 1;
      const ratio  = Math.min(scrollY / heroHeight, 1);
      const scale  = 1 - maxScaleDown * ratio;
      const radius = maxRadius * ratio;

      hero.style.transform    = `scale(${scale})`;
      hero.style.borderRadius = `${radius}px`;

      ticking = false;
    });
  };

  // 监听“页面”滚动
  window.addEventListener('scroll', onScroll, { passive: true });

  // 首次计算（避免初始就有滚动时样式不对）
  onScroll();
})();
