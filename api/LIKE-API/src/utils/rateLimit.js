// src/utils/rateLimit.js
const RATE_WINDOW_SEC = 60;
const RATE_MAX_POSTS = 5;

const buckets = new Map(); // ip -> { start, count }
const nowSec = () => Math.floor(Date.now() / 1000);

function allowPost(ip) {
  const t = nowSec();
  const b = buckets.get(ip) || { start: t, count: 0 };
  if (t - b.start >= RATE_WINDOW_SEC) { b.start = t; b.count = 0; }
  b.count += 1;
  buckets.set(ip, b);
  return b.count <= RATE_MAX_POSTS;
}

module.exports = { allowPost };
