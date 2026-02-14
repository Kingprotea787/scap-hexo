// 投稿路由
const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const store = require('../services/submissionStore');
const mailer = require('../services/submissionMailer');
const { SUBMISSION_ADMIN_TOKEN } = require('../config');

const router = Router();

// 允许的文件类型
const ALLOWED_TYPES = {
  illustration: {
    mimes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    exts: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
    maxSize: 20 * 1024 * 1024 // 20MB
  },
  article: {
    mimes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'text/markdown',
      'application/octet-stream' // 某些系统对 .md 文件的 MIME
    ],
    exts: ['.pdf', '.doc', '.docx', '.txt', '.md'],
    maxSize: 10 * 1024 * 1024 // 10MB
  }
};

// 邮箱验证正则
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 管理员 token 验证
function adminAuth(req, res, next) {
  if (!SUBMISSION_ADMIN_TOKEN) {
    return res.status(500).json({ error: 'Admin token not configured' });
  }

  const authHeader = req.headers.authorization;
  const providedToken = authHeader?.startsWith('Bearer ')
    ? authHeader.slice(7)
    : req.headers['x-admin-token'];

  if (providedToken !== SUBMISSION_ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
}

// 配置 multer 存储
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const type = req.body.type;
    if (!type || !ALLOWED_TYPES[type]) {
      return cb(new Error('Invalid type'));
    }
    const dir = store.getStoragePath(type);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const sanitized = store.sanitizeFilename(file.originalname);
    const ext = path.extname(sanitized);
    const name = path.basename(sanitized, ext);
    const uniqueName = `${Date.now()}-${store.generateId()}-${name}${ext}`;
    cb(null, uniqueName);
  }
});

// 文件过滤
const fileFilter = (req, file, cb) => {
  const type = req.body.type;

  if (!type || !ALLOWED_TYPES[type]) {
    return cb(new Error('Invalid submission type'), false);
  }

  const config = ALLOWED_TYPES[type];
  const ext = path.extname(file.originalname).toLowerCase();

  // 检查扩展名
  if (!config.exts.includes(ext)) {
    return cb(new Error(`File type not allowed. Allowed: ${config.exts.join(', ')}`), false);
  }

  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 20 * 1024 * 1024 // 最大 20MB (具体限制在路由中检查)
  }
});

// POST /api/submission - 提交投稿
router.post('/api/submission', (req, res, next) => {
  upload.single('file')(req, res, async (err) => {
    // 处理 multer 错误
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large' });
      }
      return res.status(400).json({ error: err.message });
    }

    try {
      const { type, email, title, description } = req.body;
      const file = req.file;

      // 验证必填字段
      if (!type || !['illustration', 'article'].includes(type)) {
        if (file) fs.unlinkSync(file.path);
        return res.status(400).json({ error: 'Invalid type. Must be "illustration" or "article"' });
      }

      if (!email || !EMAIL_REGEX.test(email)) {
        if (file) fs.unlinkSync(file.path);
        return res.status(400).json({ error: 'Invalid email address' });
      }

      if (!file) {
        return res.status(400).json({ error: 'File is required' });
      }

      // 检查文件大小
      const config = ALLOWED_TYPES[type];
      if (file.size > config.maxSize) {
        fs.unlinkSync(file.path);
        return res.status(400).json({
          error: `File too large. Max size for ${type}: ${config.maxSize / 1024 / 1024}MB`
        });
      }

      // 创建投稿记录
      const submission = store.createSubmission({
        type,
        email,
        title: title || '',
        description: description || '',
        originalFilename: file.originalname,
        storedPath: file.path
      });

      // 异步发送管理员通知 (不阻塞响应)
      mailer.notifyAdmin(submission).catch(err => {
        console.error('[MAIL] Failed to notify admin:', err.message);
      });

      res.status(201).json({
        id: submission.id,
        type: submission.type,
        submittedAt: submission.submittedAt,
        status: submission.status
      });

    } catch (error) {
      // 回滚：删除已上传的文件
      if (req.file) {
        try {
          fs.unlinkSync(req.file.path);
        } catch {}
      }
      console.error('[SUBMISSION] Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

// POST /api/submission/:id/approve - 审核通过
router.post('/api/submission/:id/approve', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const submission = store.getSubmission(id);

    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    if (submission.status === 'approved') {
      return res.status(400).json({ error: 'Already approved' });
    }

    const updated = store.updateSubmissionStatus(id, 'approved');

    // 发送通过邮件
    mailer.notifyApproval(updated).catch(err => {
      console.error('[MAIL] Failed to notify approval:', err.message);
    });

    res.json({
      id: updated.id,
      status: updated.status,
      updatedAt: updated.updatedAt
    });

  } catch (error) {
    console.error('[SUBMISSION] Approve error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/submission/:id/reject - 审核拒绝
router.post('/api/submission/:id/reject', adminAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    const submission = store.getSubmission(id);

    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    if (submission.status === 'rejected') {
      return res.status(400).json({ error: 'Already rejected' });
    }

    const updated = store.updateSubmissionStatus(id, 'rejected');

    // 发送拒绝邮件
    mailer.notifyRejection(updated, reason).catch(err => {
      console.error('[MAIL] Failed to notify rejection:', err.message);
    });

    res.json({
      id: updated.id,
      status: updated.status,
      updatedAt: updated.updatedAt
    });

  } catch (error) {
    console.error('[SUBMISSION] Reject error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/submission/:id - 获取投稿详情 (管理员)
router.get('/api/submission/:id', adminAuth, (req, res) => {
  const { id } = req.params;
  const submission = store.getSubmission(id);

  if (!submission) {
    return res.status(404).json({ error: 'Submission not found' });
  }

  // 不返回存储路径
  const { storedPath, ...safe } = submission;
  res.json(safe);
});

// GET /api/submission/:id/file - 获取投稿文件 (管理员)
router.get('/api/submission/:id/file', adminAuth, (req, res) => {
  const { id } = req.params;
  const submission = store.getSubmission(id);

  if (!submission) {
    return res.status(404).json({ error: 'Submission not found' });
  }

  if (!fs.existsSync(submission.storedPath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  res.sendFile(submission.storedPath);
});

// GET /api/submissions - 列出投稿 (管理员)
router.get('/api/submissions', adminAuth, (req, res) => {
  const { status, type, limit, offset } = req.query;

  const result = store.listSubmissions({
    status,
    type,
    limit: limit ? parseInt(limit, 10) : 100,
    offset: offset ? parseInt(offset, 10) : 0
  });

  // 不返回存储路径
  result.items = result.items.map(({ storedPath, ...safe }) => safe);

  res.json(result);
});

module.exports = router;
