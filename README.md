# SCAP 项目

SCAP 动漫网站的完整项目，包含前端（Hexo）和后端（API）。

## 自动提交提醒

**重要：每次修改代码后，必须执行 git commit 和 push 同步到 GitHub。**

修改完成后执行：
```bash
cd /Users/mac/Documents/SCAPHexo
git add -A
git commit -m "描述本次修改内容"
git push
```

## 项目结构

```
.
├── api/            # 后端 API（Node.js + Express）
├── append/         # 额外静态资源
│   ├── extraframer/
│   └── live/       # 直播视频文件
├── deploy/         # 部署脚本
│   ├── api.sh      # 后端部署
│   └── hexo.sh     # 前端部署
├── hexo/           # Hexo 前端项目
│   ├── source/     # 页面源文件和数据
│   ├── themes/scap/# 自定义主题
│   └── _config.yml # Hexo 配置
└── README.md
```

## 部署

```bash
./deploy/hexo.sh   # 构建并部署前端
./deploy/api.sh    # 同步并重启后端
```

## 服务器信息

- 主机: 47.112.201.115
- 静态站点用户: deployer
- API 用户: kingprotea
- 静态站点目录: /home/wwwroot/scapcomic.com
- API 目录: /home/kingprotea/like-api
