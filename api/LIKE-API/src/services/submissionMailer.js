// 投稿邮件服务
const nodemailer = require('nodemailer');
const { SMTP } = require('../config');

// 检查是否配置了 SMTP
function isConfigured() {
  return !!(SMTP.host && SMTP.user && SMTP.pass);
}

// 创建 transporter
function createTransporter() {
  if (!isConfigured()) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP.host,
    port: SMTP.port,
    secure: SMTP.secure,
    auth: {
      user: SMTP.user,
      pass: SMTP.pass
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
    from: SMTP.from,
    to,
    subject,
    html
  });

  return result;
}

// 发送新投稿通知给管理员
async function notifyAdmin(submission) {
  if (!SMTP.adminEmail) {
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
    to: SMTP.adminEmail,
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
