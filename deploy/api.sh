#!/usr/bin/env bash
set -euo pipefail

REMOTE="kingprotea@47.112.201.115"
REMOTE_DIR="/home/kingprotea/like-api"
API_DIR="$(cd "$(dirname "$0")/.." && pwd)/api/LIKE-API"

echo "同步 API 后端代码..."
rsync -avz --progress \
  --exclude node_modules \
  --exclude "*.log" \
  --exclude "*.db" \
  -e "ssh" \
  "$API_DIR/" \
  "$REMOTE:$REMOTE_DIR/"

echo "远端：重启服务..."
ssh "$REMOTE" bash -s <<'EOF'
  set -euo pipefail
  cd /home/kingprotea/like-api

  # 重启 PM2
  echo "  重启 like-api ..."
  sudo /root/.nvm/versions/node/v22.19.0/bin/pm2 restart like-api

  # 健康检查
  sleep 2
  STATUS=$(curl -sf -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/api/health || echo "000")
  if [ "$STATUS" = "200" ]; then
    echo "  健康检查通过"
  else
    echo "  健康检查失败 (HTTP $STATUS)，查看日志："
    sudo /root/.nvm/versions/node/v22.19.0/bin/pm2 logs like-api --lines 20 --nostream
    exit 1
  fi
EOF

echo "API 部署完成"
