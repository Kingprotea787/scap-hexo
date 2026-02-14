/**
 * 视频文件管理
 */

const fs = require('fs');
const path = require('path');

const LIVE_VIDEO_DIR = process.env.LIVE_VIDEO_DIR || '/home/wwwroot/scapcomic.com/live';

const VIDEO_EXTS = ['.mp4', '.webm', '.mkv', '.mov'];
const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

// 获取视频列表
function getVideoList() {
  if (!fs.existsSync(LIVE_VIDEO_DIR)) {
    return [];
  }

  const files = fs.readdirSync(LIVE_VIDEO_DIR);

  // 找出所有视频文件
  const videoFiles = files.filter(f =>
    VIDEO_EXTS.includes(path.extname(f).toLowerCase())
  );

  // 构建视频列表，匹配同名封面
  return videoFiles.map(videoFile => {
    const baseName = path.basename(videoFile, path.extname(videoFile));

    // 查找同名封面图片
    const coverFile = files.find(f => {
      const fBase = path.basename(f, path.extname(f));
      const fExt = path.extname(f).toLowerCase();
      return fBase === baseName && IMAGE_EXTS.includes(fExt);
    });

    return {
      name: baseName,
      video: `/live/${videoFile}`,
      cover: coverFile ? `/live/${coverFile}` : null
    };
  });
}

module.exports = {
  getVideoList,
  LIVE_VIDEO_DIR
};
