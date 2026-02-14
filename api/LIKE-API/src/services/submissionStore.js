// 投稿存储服务 - 使用 JSON 文件存储 metadata
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const STORAGE_DIR = path.join(__dirname, '../../storage/submissions');
const METADATA_FILE = path.join(STORAGE_DIR, 'metadata.json');

// 确保目录存在
function ensureDirs() {
  const dirs = [
    STORAGE_DIR,
    path.join(STORAGE_DIR, 'illustration'),
    path.join(STORAGE_DIR, 'article')
  ];
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }
}

// 读取所有 metadata
function readMetadata() {
  ensureDirs();
  if (!fs.existsSync(METADATA_FILE)) {
    return [];
  }
  try {
    const data = fs.readFileSync(METADATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// 写入 metadata
function writeMetadata(data) {
  ensureDirs();
  fs.writeFileSync(METADATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// 生成唯一 ID
function generateId() {
  return crypto.randomBytes(8).toString('hex');
}

// 安全化文件名
function sanitizeFilename(filename) {
  // 移除路径分隔符和特殊字符
  const sanitized = filename
    .replace(/[\/\\:*?"<>|]/g, '_')
    .replace(/\.\./g, '_')
    .trim();

  // 限制长度
  const ext = path.extname(sanitized);
  const name = path.basename(sanitized, ext);
  const maxNameLen = 100;

  if (name.length > maxNameLen) {
    return name.substring(0, maxNameLen) + ext;
  }
  return sanitized;
}

// 创建投稿
function createSubmission({ type, email, title, description, originalFilename, storedPath }) {
  const submissions = readMetadata();

  const submission = {
    id: generateId(),
    type,
    email,
    title: title || 'NaN',
    description: description || 'NaN',
    originalFilename,
    storedPath,
    submittedAt: new Date().toISOString(),
    status: 'pending'
  };

  submissions.push(submission);
  writeMetadata(submissions);

  return submission;
}

// 获取投稿
function getSubmission(id) {
  const submissions = readMetadata();
  return submissions.find(s => s.id === id);
}

// 更新投稿状态
function updateSubmissionStatus(id, status) {
  const submissions = readMetadata();
  const index = submissions.findIndex(s => s.id === id);

  if (index === -1) {
    return null;
  }

  submissions[index].status = status;
  submissions[index].updatedAt = new Date().toISOString();
  writeMetadata(submissions);

  return submissions[index];
}

// 删除投稿 (用于回滚)
function deleteSubmission(id) {
  const submissions = readMetadata();
  const index = submissions.findIndex(s => s.id === id);

  if (index === -1) {
    return false;
  }

  const submission = submissions[index];

  // 删除文件
  if (submission.storedPath && fs.existsSync(submission.storedPath)) {
    fs.unlinkSync(submission.storedPath);
  }

  submissions.splice(index, 1);
  writeMetadata(submissions);

  return true;
}

// 列出所有投稿
function listSubmissions({ status, type, limit = 100, offset = 0 } = {}) {
  let submissions = readMetadata();

  if (status) {
    submissions = submissions.filter(s => s.status === status);
  }
  if (type) {
    submissions = submissions.filter(s => s.type === type);
  }

  // 按时间倒序
  submissions.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

  return {
    total: submissions.length,
    items: submissions.slice(offset, offset + limit)
  };
}

// 获取存储路径
function getStoragePath(type) {
  ensureDirs();
  return path.join(STORAGE_DIR, type);
}

module.exports = {
  createSubmission,
  getSubmission,
  updateSubmissionStatus,
  deleteSubmission,
  listSubmissions,
  getStoragePath,
  sanitizeFilename,
  generateId
};
