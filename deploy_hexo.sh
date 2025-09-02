#!/usr/bin/env bash
set -euo pipefail

USER="root"                           # 服务器用户名
HOST="47.112.201.115"                 # 例：47.112.201.115
PORT=22                               # SSH 端口
DEST="/www/wwwroot/scapcomic.com"     # 服务器目录
SRC_DIR="./public/"                   # 本地 Hexo 构建目录

echo " 构建 Hexo 静态站点..."
hexo clean && hexo g

if [ ! -d "$SRC_DIR" ]; then
  echo " 未找到 $SRC_DIR，请先运行 hexo g"
  exit 1
fi

echo " 整理 HTML 文件（非 index.html → 目录/index.html）..."
find "$SRC_DIR" -maxdepth 1 -type f -name "*.html" ! -name "index.html" | while read -r file; do
  filename=$(basename "$file" .html)             # 去掉扩展名
  mkdir -p "$SRC_DIR/$filename"                  # 创建目录
  mv "$file" "$SRC_DIR/$filename/index.html"     # 移动文件
  echo "  - 已整理: $file → $SRC_DIR/$filename/index.html"
done

echo " 部署到 $USER@$HOST:$DEST ..."
rsync -avz --delete -e "ssh -p $PORT" "$SRC_DIR" "$USER@$HOST:$DEST/"

echo " 部署完成，可以访问: http://$HOST"

