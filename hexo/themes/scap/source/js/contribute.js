// 投稿页面 JavaScript
(function() {
  'use strict';

  const API_BASE = 'https://scapcomic.com';

  // 3D 走马灯自动滚动
  const coverFlow = document.getElementById('coverFlow');
  if (coverFlow) {
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // 像素/帧

    function autoScroll() {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= coverFlow.scrollWidth - coverFlow.clientWidth) {
        scrollAmount = 0;
      }
      coverFlow.scrollLeft = scrollAmount;
      requestAnimationFrame(autoScroll);
    }

    autoScroll();

    // 鼠标悬停时暂停
    coverFlow.addEventListener('mouseenter', () => {
      coverFlow.style.animationPlayState = 'paused';
    });

    coverFlow.addEventListener('mouseleave', () => {
      coverFlow.style.animationPlayState = 'running';
    });
  }

  // 成功弹窗
  const successModal = document.getElementById('successModal');
  const successClose = document.getElementById('successClose');

  function showSuccessModal() {
    successModal.classList.add('show');
  }

  function hideSuccessModal() {
    successModal.classList.remove('show');
  }

  if (successClose) {
    successClose.addEventListener('click', hideSuccessModal);
  }

  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        hideSuccessModal();
      }
    });
  }

  // Tab 切换
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(`panel-${type}`).classList.add('active');
    });
  });

  // 初始化每个上传表单
  document.querySelectorAll('.upload-form').forEach(initForm);

  function initForm(form) {
    const type = form.dataset.type;
    const dropzone = form.querySelector('.dropzone');
    const fileInput = form.querySelector('input[type="file"]');
    const dropzoneContent = dropzone.querySelector('.dropzone-content');
    const filePreview = dropzone.querySelector('.file-preview');
    const previewThumb = filePreview.querySelector('.preview-thumb');
    const fileName = filePreview.querySelector('.file-name');
    const fileSize = filePreview.querySelector('.file-size');
    const removeBtn = filePreview.querySelector('.remove-file');
    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('.submit-btn');
    const progressContainer = form.querySelector('.progress-container');
    const progressFill = form.querySelector('.progress-fill');
    const progressText = form.querySelector('.progress-text');
    const submitStatus = form.querySelector('.submit-status');

    let selectedFile = null;

    // 文件大小限制 (bytes)
    const maxSize = type === 'illustration' ? 20 * 1024 * 1024 : 10 * 1024 * 1024;

    // 点击选择文件
    dropzone.addEventListener('click', (e) => {
      if (e.target.closest('.remove-file')) return;
      fileInput.click();
    });

    // 文件选择
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        handleFile(fileInput.files[0]);
      }
    });

    // 拖拽事件
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        handleFile(e.dataTransfer.files[0]);
      }
    });

    // 移除文件
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearFile();
    });

    // 邮箱验证
    emailInput.addEventListener('input', () => {
      validateEmail();
      updateSubmitState();
    });

    emailInput.addEventListener('blur', validateEmail);

    // 表单提交
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      await submitForm();
    });

    function handleFile(file) {
      // 验证文件大小
      if (file.size > maxSize) {
        showStatus(`文件过大，最大允许 ${formatSize(maxSize)}`, 'error');
        return;
      }

      // 验证文件类型
      const allowedTypes = type === 'illustration'
        ? ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
        : ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'text/markdown'];

      const allowedExts = type === 'illustration'
        ? ['.jpg', '.jpeg', '.png', '.gif', '.webp']
        : ['.pdf', '.doc', '.docx', '.txt', '.md'];

      const ext = '.' + file.name.split('.').pop().toLowerCase();

      if (!allowedExts.includes(ext)) {
        showStatus(`不支持的文件格式，请上传 ${allowedExts.join('、')} 格式`, 'error');
        return;
      }

      selectedFile = file;

      // 显示预览
      dropzoneContent.hidden = true;
      filePreview.hidden = false;
      dropzone.classList.add('has-file');

      fileName.textContent = file.name;
      fileSize.textContent = formatSize(file.size);

      // 图片预览
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewThumb.innerHTML = `<img src="${e.target.result}" alt="预览">`;
        };
        reader.readAsDataURL(file);
      } else {
        // 文档图标
        const icons = {
          '.pdf': '📄',
          '.doc': '📝',
          '.docx': '📝',
          '.txt': '📃',
          '.md': '📋'
        };
        previewThumb.innerHTML = `<span class="file-icon">${icons[ext] || '📁'}</span>`;
      }

      hideStatus();
      updateSubmitState();
    }

    function clearFile() {
      selectedFile = null;
      fileInput.value = '';
      dropzoneContent.hidden = false;
      filePreview.hidden = true;
      dropzone.classList.remove('has-file');
      previewThumb.innerHTML = '';
      updateSubmitState();
    }

    function validateEmail() {
      const email = emailInput.value.trim();
      const errorMsg = emailInput.parentElement.querySelector('.error-msg');

      if (!email) {
        emailInput.classList.remove('invalid');
        errorMsg.textContent = '';
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        emailInput.classList.add('invalid');
        errorMsg.textContent = '请输入有效的邮箱地址';
        return false;
      }

      emailInput.classList.remove('invalid');
      errorMsg.textContent = '';
      return true;
    }

    function validateForm() {
      const emailValid = validateEmail();
      if (!emailValid) {
        emailInput.focus();
        return false;
      }
      if (!selectedFile) {
        showStatus('请选择要上传的文件', 'error');
        return false;
      }
      return true;
    }

    function updateSubmitState() {
      const emailValid = emailInput.value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
      submitBtn.disabled = !emailValid || !selectedFile;
    }

    async function submitForm() {
      const formData = new FormData();
      formData.append('type', type);
      formData.append('email', emailInput.value.trim());
      formData.append('title', form.querySelector('input[name="title"]').value.trim() || '');
      formData.append('description', form.querySelector('textarea[name="description"]').value.trim() || '');
      formData.append('file', selectedFile);

      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
      submitBtn.textContent = '上传中...';
      progressContainer.hidden = false;
      hideStatus();

      try {
        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const percent = Math.round((e.loaded / e.total) * 100);
            progressFill.style.width = percent + '%';
            progressText.textContent = percent + '%';
          }
        });

        const response = await new Promise((resolve, reject) => {
          xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(JSON.parse(xhr.responseText));
            } else {
              try {
                const err = JSON.parse(xhr.responseText);
                reject(new Error(err.error || '上传失败'));
              } catch {
                reject(new Error('上传失败'));
              }
            }
          };
          xhr.onerror = () => reject(new Error('网络错误'));
          xhr.open('POST', `${API_BASE}/api/submission`);
          xhr.send(formData);
        });

        // 显示成功弹窗
        showSuccessModal();

        // 重置表单
        form.reset();
        clearFile();

      } catch (error) {
        showStatus(error.message || '上传失败，请稍后重试', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.textContent = '提交投稿';
        progressContainer.hidden = true;
        progressFill.style.width = '0';
        updateSubmitState();
      }
    }

    function showStatus(message, type) {
      submitStatus.textContent = message;
      submitStatus.className = `submit-status ${type}`;
      submitStatus.hidden = false;
    }

    function hideStatus() {
      submitStatus.hidden = true;
    }

    function formatSize(bytes) {
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    }
  }
})();
