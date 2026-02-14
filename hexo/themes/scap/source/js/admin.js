// 管理员页面 JavaScript
(function() {
  'use strict';

  const API_BASE = 'https://scapcomic.com';
  const ADMIN_TOKEN = sessionStorage.getItem('adminToken');

  // 如果没有 token，跳转回投稿页面
  if (!ADMIN_TOKEN) {
    window.location.href = '/contribute/';
    return;
  }

  let currentStatus = 'all';
  let currentType = 'all';
  let submissions = [];

  // 初始化
  init();

  function init() {
    setupEventListeners();
    loadSubmissions();
  }

  function setupEventListeners() {
    // 状态筛选
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentStatus = btn.dataset.status;
        renderSubmissions();
      });
    });

    // 类型筛选
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentType = btn.dataset.type;
        renderSubmissions();
      });
    });

    // 预览弹窗关闭
    const previewModal = document.getElementById('previewModal');
    const previewClose = document.getElementById('previewClose');

    previewClose.addEventListener('click', () => {
      previewModal.classList.remove('show');
    });

    previewModal.addEventListener('click', (e) => {
      if (e.target === previewModal) {
        previewModal.classList.remove('show');
      }
    });

    // 确认弹窗
    const confirmModal = document.getElementById('confirmModal');
    const confirmCancel = document.getElementById('confirmCancel');

    confirmCancel.addEventListener('click', () => {
      confirmModal.classList.remove('show');
    });

    confirmModal.addEventListener('click', (e) => {
      if (e.target === confirmModal) {
        confirmModal.classList.remove('show');
      }
    });
  }

  async function loadSubmissions() {
    const container = document.getElementById('submissionsContainer');
    container.innerHTML = '<div class="loading">加载中...</div>';

    try {
      const response = await fetch(`${API_BASE}/api/submissions?limit=1000`, {
        headers: {
          'Authorization': `Bearer ${ADMIN_TOKEN}`
        }
      });

      if (!response.ok) {
        throw new Error('加载失败');
      }

      const data = await response.json();
      submissions = data.items || [];
      renderSubmissions();

    } catch (error) {
      container.innerHTML = `<div class="empty-state">加载失败：${error.message}</div>`;
    }
  }

  function renderSubmissions() {
    const container = document.getElementById('submissionsContainer');

    // 筛选
    let filtered = submissions;

    if (currentStatus !== 'all') {
      filtered = filtered.filter(s => s.status === currentStatus);
    }

    if (currentType !== 'all') {
      filtered = filtered.filter(s => s.type === currentType);
    }

    if (filtered.length === 0) {
      container.innerHTML = '<div class="empty-state">暂无投稿</div>';
      return;
    }

    container.innerHTML = filtered.map(submission => createSubmissionCard(submission)).join('');

    // 绑定事件
    bindCardEvents();
  }

  function createSubmissionCard(submission) {
    const statusClass = `status-${submission.status}`;
    const statusText = {
      pending: '待审核',
      approved: '已通过',
      rejected: '已拒绝'
    }[submission.status];

    const typeText = submission.type === 'illustration' ? '插画' : '文章';
    const date = new Date(submission.submittedAt).toLocaleString('zh-CN');

    const title = submission.title !== 'NaN' && submission.title ? submission.title : '无标题';
    const description = submission.description !== 'NaN' && submission.description ? submission.description : '';

    const isPending = submission.status === 'pending';

    let previewSection = '';
    if (submission.type === 'illustration') {
      previewSection = `
        <div class="submission-preview">
          <img src="${API_BASE}/api/submission/${submission.id}/file"
               alt="预览"
               class="preview-image"
               data-id="${submission.id}">
        </div>
      `;
    }

    return `
      <div class="submission-card" data-id="${submission.id}">
        <div class="submission-header">
          <div class="submission-info">
            <div class="submission-id">ID: ${submission.id}</div>
            <div class="submission-title">${title}</div>
            <div class="submission-meta">
              <span>📧 ${submission.email}</span>
              <span>📁 ${typeText}</span>
              <span>🕒 ${date}</span>
              <span class="status-badge ${statusClass}">${statusText}</span>
            </div>
          </div>
        </div>
        <div class="submission-body">
          ${description ? `<div class="submission-description">${description}</div>` : ''}
          <div class="submission-file">
            <span class="file-icon">📎</span>
            <span>${submission.originalFilename}</span>
          </div>
          ${previewSection}
        </div>
        <div class="submission-actions">
          ${submission.type === 'illustration' ?
            `<button class="action-btn btn-preview" data-id="${submission.id}">预览</button>` :
            `<button class="action-btn btn-download" data-id="${submission.id}">下载</button>`
          }
          <button class="action-btn btn-approve" data-id="${submission.id}" ${!isPending ? 'disabled' : ''}>
            ${isPending ? '通过' : '已通过'}
          </button>
          <button class="action-btn btn-reject" data-id="${submission.id}" ${!isPending ? 'disabled' : ''}>
            ${isPending ? '拒绝' : '已拒绝'}
          </button>
        </div>
      </div>
    `;
  }

  function bindCardEvents() {
    // 预览图片点击
    document.querySelectorAll('.preview-image').forEach(img => {
      img.addEventListener('click', () => {
        showPreview(img.dataset.id);
      });
    });

    // 预览按钮
    document.querySelectorAll('.btn-preview').forEach(btn => {
      btn.addEventListener('click', () => {
        showPreview(btn.dataset.id);
      });
    });

    // 下载按钮
    document.querySelectorAll('.btn-download').forEach(btn => {
      btn.addEventListener('click', () => {
        downloadFile(btn.dataset.id);
      });
    });

    // 通过按钮
    document.querySelectorAll('.btn-approve').forEach(btn => {
      if (!btn.disabled) {
        btn.addEventListener('click', () => {
          confirmAction('approve', btn.dataset.id);
        });
      }
    });

    // 拒绝按钮
    document.querySelectorAll('.btn-reject').forEach(btn => {
      if (!btn.disabled) {
        btn.addEventListener('click', () => {
          confirmAction('reject', btn.dataset.id);
        });
      }
    });
  }

  function showPreview(id) {
    const modal = document.getElementById('previewModal');
    const content = document.getElementById('previewContent');
    content.innerHTML = `<img src="${API_BASE}/api/submission/${id}/file" alt="预览">`;
    modal.classList.add('show');
  }

  function downloadFile(id) {
    const submission = submissions.find(s => s.id === id);
    if (!submission) return;

    const link = document.createElement('a');
    link.href = `${API_BASE}/api/submission/${id}/file`;
    link.download = submission.originalFilename;
    link.click();
  }

  function confirmAction(action, id) {
    const modal = document.getElementById('confirmModal');
    const title = document.getElementById('confirmTitle');
    const message = document.getElementById('confirmMessage');
    const rejectReasonContainer = document.getElementById('rejectReasonContainer');
    const okBtn = document.getElementById('confirmOk');

    const submission = submissions.find(s => s.id === id);
    if (!submission) return;

    if (action === 'approve') {
      title.textContent = '确认通过';
      message.textContent = `确定要通过这个投稿吗？通过后会发送邮件通知投稿者。`;
      rejectReasonContainer.style.display = 'none';
    } else {
      title.textContent = '确认拒绝';
      message.textContent = `确定要拒绝这个投稿吗？`;
      rejectReasonContainer.style.display = 'block';
    }

    modal.classList.add('show');

    // 移除旧的事件监听器
    const newOkBtn = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);

    newOkBtn.addEventListener('click', async () => {
      modal.classList.remove('show');
      await performAction(action, id);
    });
  }

  async function performAction(action, id) {
    try {
      const url = `${API_BASE}/api/submission/${id}/${action}`;
      const options = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ADMIN_TOKEN}`,
          'Content-Type': 'application/json'
        }
      };

      if (action === 'reject') {
        const reason = document.getElementById('rejectReason').value.trim();
        options.body = JSON.stringify({ reason });
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('操作失败');
      }

      // 重新加载数据
      await loadSubmissions();

    } catch (error) {
      alert('操作失败：' + error.message);
    }
  }

})();
