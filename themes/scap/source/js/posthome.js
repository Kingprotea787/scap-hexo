  // 初始化 Swiper
  const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,  // 循环模式
    autoplay: {
      delay: 5000,  // 每 5 秒自动切换（与原有逻辑类似）
      disableOnInteraction: false,  // 用户交互后继续自动播放
    },
    pagination: {
      el: '.swiper-pagination',  // 分页点
      clickable: true,  // 可点击分页
    },
    navigation: {
      nextEl: '.swiper-button-next',  // 下一张按钮
      prevEl: '.swiper-button-prev',  // 上一张按钮
    },
    // 其他选项：如 direction: 'horizontal' (默认)，effect: 'slide' 等
  });