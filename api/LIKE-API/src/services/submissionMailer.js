// 投稿邮件服务
const nodemailer = require('nodemailer');

// 从环境变量读取配置
const config = {
  host: process.env.SMTP_HOST || '',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  user: process.env.SMTP_USER || '',
  pass: process.env.SMTP_PASS || '',
  from: process.env.SMTP_FROM || 'noreply@scapcomic.com',
  adminEmail: process.env.SUBMISSION_ADMIN_EMAIL || ''
};

// 检查是否配置了 SMTP
function isConfigured() {
  return !!(config.host && config.user && config.pass);
}

// 创建 transporter
function createTransporter() {
  if (!isConfigured()) {
    return null;
  }

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass
    }
  });
}

// 发送邮件
async function sendMail({ to, subject, html }) {
  const transporter = createTransporter();

  if (!transporter) {
    // 开发模式：打印到控制台
    console.log('[DEV MAIL] To:', to);
    console.log('[DEV MAIL] Subject:', subject);
    console.log('[DEV MAIL] Body:', html);
    return { messageId: 'dev-' + Date.now(), dev: true };
  }

  const result = await transporter.sendMail({
    from: config.from,
    to,
    subject,
    html
  });

  return result;
}

// 发送新投稿通知给管理员
async function notifyAdmin(submission) {
  const adminEmail = config.adminEmail;

  if (!adminEmail) {
    console.log('[MAIL] No admin email configured, skipping notification');
    return null;
  }

  const typeLabel = submission.type === 'illustration' ? '插画' : '文章';

  const html = `
    <h2>新投稿通知</h2>
    <p>收到一条新的${typeLabel}投稿：</p>
    <ul>
      <li><strong>ID:</strong> ${submission.id}</li>
      <li><strong>类型:</strong> ${typeLabel}</li>
      <li><strong>邮箱:</strong> ${submission.email}</li>
      <li><strong>标题:</strong> ${submission.title}</li>
      <li><strong>说明:</strong> ${submission.description}</li>
      <li><strong>文件名:</strong> ${submission.originalFilename}</li>
      <li><strong>提交时间:</strong> ${submission.submittedAt}</li>
    </ul>
    <p>请登录后台审核。</p>
  `;

  return sendMail({
    to: adminEmail,
    subject: `[SCAP] 新${typeLabel}投稿 - ${submission.title || submission.originalFilename}`,
    html
  });
}

// 发送审核通过通知给用户
async function notifyApproval(submission) {
  const typeLabel = submission.type === 'illustration' ? '插画' : '文章';

  const html = `
    <h2>投稿审核通过</h2>
    <p>您好！</p>
    <p>您提交的${typeLabel}作品已通过审核：</p>
    <ul>
      <li><strong>标题:</strong> ${submission.title}</li>
      <li><strong>文件名:</strong> ${submission.originalFilename}</li>
      <li><strong>提交时间:</strong> ${submission.submittedAt}</li>
    </ul>
    <p>感谢您的投稿！您的作品将会在我们的网站上展示。</p>
    <p>—— SCAP 团队</p>
  `;

  return sendMail({
    to: submission.email,
    subject: `[SCAP] 您的${typeLabel}投稿已通过审核`,
    html
  });
}

// 发送审核拒绝通知给用户
async function notifyRejection(submission, reason = '') {
  const typeLabel = submission.type === 'illustration' ? '插画' : '文章';

  const html = `
    <h2>投稿审核结果</h2>
    <p>您好！</p>
    <p>很抱歉，您提交的${typeLabel}作品未能通过审核：</p>
    <ul>
      <li><strong>标题:</strong> ${submission.title}</li>
      <li><strong>文件名:</strong> ${submission.originalFilename}</li>
      <li><strong>提交时间:</strong> ${submission.submittedAt}</li>
    </ul>
    ${reason ? `<p><strong>原因:</strong> ${reason}</p>` : ''}
    <p>如有疑问，请联系我们。</p>
    <p>—— SCAP 团队</p>
  `;

  return sendMail({
    to: submission.email,
    subject: `[SCAP] 您的${typeLabel}投稿审核结果`,
    html
  });
}

module.exports = {
  isConfigured,
  sendMail,
  notifyAdmin,
  notifyApproval,
  notifyRejection
};
