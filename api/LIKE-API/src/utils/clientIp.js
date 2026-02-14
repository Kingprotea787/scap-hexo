// src/utils/clientIp.js
function clientIp(req) {
  return (req.ip || req.connection?.remoteAddress || '').toString();
}

// 支持 WebSocket 和 HTTP 请求
function getClientIp(req) {
  // Express 请求
  if (req.ip) {
    return req.ip;
  }

  // 从 headers 获取（代理场景）
  const headers = req.headers || {};
  const forwarded = headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const realIp = headers['x-real-ip'];
  if (realIp) {
    return realIp;
  }

  // 直连
  if (req.connection?.remoteAddress) {
    return req.connection.remoteAddress;
  }

  if (req.socket?.remoteAddress) {
    return req.socket.remoteAddress;
  }

  return '';
}

module.exports = { clientIp, getClientIp };
