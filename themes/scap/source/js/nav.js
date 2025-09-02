//nav.js
// Global variables
const overlay = document.getElementById('overlay');
const content = document.getElementById('content');
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navItem = document.querySelector('nav ul li');
const width = window.innerWidth;  
console.log(`当前窗口宽度：${width}px`); 
let ticking = false;

// Mobile Menu Toggle
mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
    overlay.classList.add('active');
    content.classList.add('blur');
    } else {
    overlay.classList.remove('active');
    content.classList.remove('blur');
    }
});

function toggleMobileSubmenu(event, submenuId) {
  const btn = event.currentTarget;
  const submenu = document.getElementById(submenuId);
  if (!submenu) return;

  // 只收拢同一层的其它已展开子菜单
  const container = btn.closest('li')?.parentElement;
  if (container) {
    container.querySelectorAll('.mobile-submenu.open').forEach(el => {
      if (el !== submenu) {
        el.classList.remove('open');
        const b = el.parentElement.querySelector('.submenu-toggle[aria-controls="'+ el.id +'"]');
        b && b.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const isOpen = submenu.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(isOpen));

  // 不阻止默认：button 没有导航默认行为，保持清爽
  // event.preventDefault();  // 不需要
  event.stopPropagation();    // 避免冒泡影响其它监听
}

// document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`);