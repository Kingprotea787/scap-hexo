#!/usr/bin/env bash
set -euo pipefail

USER="deployer"
HOST="47.112.201.115"
PORT=22
DEST="/home/wwwroot/scapcomic.com"

# 切到项目根目录
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
HEXO_DIR="$ROOT_DIR/hexo"
SRC_DIR="$HEXO_DIR/public/"

cd "$HEXO_DIR"

echo "构建 Hexo 静态站点..."
npx hexo clean && npx hexo g

if [ ! -d "$SRC_DIR" ]; then
  echo "未找到 $SRC_DIR，请先运行 hexo g"
  exit 1
fi

echo "整理 HTML 文件（非 index.html → 目录/index.html）..."
find "$SRC_DIR" -maxdepth 1 -type f -name "*.html" ! -name "index.html" | while read -r file; do
  filename=$(basename "$file" .html)
  mkdir -p "$SRC_DIR/$filename"
  mv "$file" "$SRC_DIR/$filename/index.html"
  echo "  - $file → $SRC_DIR/$filename/index.html"
done

EXTRA_DIR="$ROOT_DIR/append/extraframer"
if [ -d "$EXTRA_DIR" ]; then
  echo "复制 extraframer 子文件夹到 public/ ..."
  find "$EXTRA_DIR" -mindepth 1 -maxdepth 1 -type d | while read -r dir; do
    dirname=$(basename "$dir")
    cp -r "$dir" "$SRC_DIR/$dirname"
    echo "  - $dir → $SRC_DIR/$dirname"
  done
else
  echo "未找到 $EXTRA_DIR，跳过"
fi

LIVE_DIR="$ROOT_DIR/append/live"
if [ -d "$LIVE_DIR" ]; then
  echo "复制 live 视频文件夹到 public/live/ ..."
  mkdir -p "$SRC_DIR/live"
  cp -r "$LIVE_DIR"/* "$SRC_DIR/live/"
  chmod 644 "$SRC_DIR/live"/*
  echo "  - $LIVE_DIR → $SRC_DIR/live/"
else
  echo "未找到 $LIVE_DIR，跳过"
fi

echo "部署到 $USER@$HOST:$DEST ..."
rsync -avzc --delete -e "ssh -p $PORT" "$SRC_DIR" "$USER@$HOST:$DEST/"

echo "Hexo 部署完成"
