/**
 * 管理员模式
 */

(function() {
  'use strict';

  const { state, setState } = window.LiveState;

  let adminBtn, adminModal, adminInput, adminCancel, adminConfirm;
  let adminKey = null; // 当前标签页的管理员密钥

  function init() {
    createAdminButton();
    createAdminModal();
    bindEvents();
  }

  // 创建管理员按钮（电源键图标）
  function createAdminButton() {
    adminBtn = document.createElement('button');
    adminBtn.className = 'admin-btn';
    adminBtn.title = '管理员模式';
    adminBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
      </svg>
    `;
    document.body.appendChild(adminBtn);
  }

  // 创建管理员验证弹窗
  function createAdminModal() {
    adminModal = document.createElement('div');
    adminModal.className = 'admin-modal';
    adminModal.innerHTML = `
      <div class="admin-dialog">
        <h4>管理员验证</h4>
        <input type="password" id="adminKeyInput" placeholder="输入管理员密钥" autocomplete="off">
        <div class="admin-actions">
          <button class="admin-cancel">取消</button>
          <button class="admin-confirm">确认</button>
        </div>
        <p class="admin-status"></p>
      </div>
    `;
    document.body.appendChild(adminModal);

    adminInput = adminModal.querySelector('#adminKeyInput');
    adminCancel = adminModal.querySelector('.admin-cancel');
    adminConfirm = adminModal.querySelector('.admin-confirm');
  }

  function bindEvents() {
    adminBtn.addEventListener('click', () => {
      if (isAdmin()) {
        // 已是管理员，点击退出
        exitAdmin();
      } else {
        showAdminModal();
      }
    });

    adminCancel.addEventListener('click', hideAdminModal);
    adminConfirm.addEventListener('click', verifyAdmin);
    adminInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') verifyAdmin();
    });
    adminModal.addEventListener('click', (e) => {
      if (e.target === adminModal) hideAdminModal();
    });
  }

  function showAdminModal() {
    adminInput.value = '';
    adminModal.classList.add('show');
    adminModal.querySelector('.admin-status').textContent = '';
    adminInput.focus();
  }

  function hideAdminModal() {
    adminModal.classList.remove('show');
  }

  async function verifyAdmin() {
    const key = adminInput.value.trim();
    if (!key) return;

    const statusEl = adminModal.querySelector('.admin-status');
    statusEl.textContent = '验证中...';

    try {
      const res = await fetch('/api/live/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key })
      });

      if (res.ok) {
        adminKey = key;
        setState({ isAdmin: true });
        hideAdminModal();
        updateAdminUI();
        // 通知视频模块更新UI
        if (window.LiveVideo) {
          window.LiveVideo.updateAdminMode(true);
        }
      } else {
        statusEl.textContent = '密钥错误';
        statusEl.style.color = '#f44336';
      }
    } catch (e) {
      statusEl.textContent = '验证失败';
      statusEl.style.color = '#f44336';
    }
  }

  function exitAdmin() {
    adminKey = null;
    setState({ isAdmin: false });
    updateAdminUI();
    if (window.LiveVideo) {
      window.LiveVideo.updateAdminMode(false);
    }
  }

  function updateAdminUI() {
    if (isAdmin()) {
      adminBtn.classList.add('active');
      adminBtn.title = '退出管理员模式';
    } else {
      adminBtn.classList.remove('active');
      adminBtn.title = '管理员模式';
    }
  }

  function isAdmin() {
    return !!adminKey;
  }

  function getAdminKey() {
    return adminKey;
  }

  // 发送管理员指令
  function sendAdminCommand(type, data = {}) {
    if (!isAdmin()) return;
    if (window.LiveSocket) {
      window.LiveSocket.send({
        type,
        adminKey,
        ...data
      });
    }
  }

  window.LiveAdmin = {
    init,
    isAdmin,
    getAdminKey,
    sendAdminCommand
  };
})();
