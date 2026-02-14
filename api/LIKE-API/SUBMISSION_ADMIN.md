# 投稿管理员操作指南

## 环境变量配置

在服务器上配置以下环境变量（`/home/kingprotea/like-api/.env` 或系统环境变量）：

```bash
# 管理员 Token（用于 API 鉴权）
SUBMISSION_ADMIN_TOKEN=your-secure-admin-token-here

# 管理员邮箱（接收新投稿通知）
SUBMISSION_ADMIN_EMAIL=admin@scapcomic.com

# SMTP 邮件配置（可选，未配置时邮件会打印到控制台）
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SMTP_FROM=noreply@scapcomic.com
```

## API 接口

### 1. 查看所有投稿

```bash
curl -H "Authorization: Bearer your-admin-token" \
  "https://scapcomic.com/api/submissions"
```

可选参数：
- `status`: 筛选状态 (`pending`, `approved`, `rejected`)
- `type`: 筛选类型 (`illustration`, `article`)
- `limit`: 每页数量（默认 100）
- `offset`: 偏移量（默认 0）

示例：
```bash
# 查看待审核的插画投稿
curl -H "Authorization: Bearer your-admin-token" \
  "https://scapcomic.com/api/submissions?status=pending&type=illustration"
```

### 2. 查看单个投稿详情

```bash
curl -H "Authorization: Bearer your-admin-token" \
  "https://scapcomic.com/api/submission/{投稿ID}"
```

### 3. 审核通过

```bash
curl -X POST \
  -H "Authorization: Bearer your-admin-token" \
  "https://scapcomic.com/api/submission/{投稿ID}/approve"
```

审核通过后会自动发送邮件通知投稿者。

### 4. 审核拒绝

```bash
curl -X POST \
  -H "Authorization: Bearer your-admin-token" \
  -H "Content-Type: application/json" \
  -d '{"reason": "拒绝原因"}' \
  "https://scapcomic.com/api/submission/{投稿ID}/reject"
```

## 投稿文件存储位置

- 插画：`/home/kingprotea/like-api/storage/submissions/illustration/`
- 文章：`/home/kingprotea/like-api/storage/submissions/article/`
- 元数据：`/home/kingprotea/like-api/storage/submissions/metadata.json`

## 元数据结构

```json
{
  "id": "唯一ID",
  "type": "illustration 或 article",
  "email": "投稿者邮箱",
  "title": "作品标题",
  "description": "作品说明",
  "originalFilename": "原始文件名",
  "storedPath": "服务器存储路径",
  "submittedAt": "提交时间（ISO格式）",
  "status": "pending/approved/rejected",
  "updatedAt": "更新时间（审核后）"
}
```

## 使用示例

### 1. 查看所有待审核投稿

```bash
curl -H "Authorization: Bearer your-admin-token" \
  "https://scapcomic.com/api/submissions?status=pending" | jq
```

### 2. 审核通过某个投稿

```bash
# 假设投稿 ID 为 abc123def456
curl -X POST \
  -H "Authorization: Bearer your-admin-token" \
  "https://scapcomic.com/api/submission/abc123def456/approve"
```

### 3. 批量审核（使用脚本）

```bash
#!/bin/bash
TOKEN="your-admin-token"
API="https://scapcomic.com/api"

# 获取所有待审核投稿
SUBMISSIONS=$(curl -s -H "Authorization: Bearer $TOKEN" "$API/submissions?status=pending")

# 遍历并审核
echo "$SUBMISSIONS" | jq -r '.items[].id' | while read id; do
  echo "审核投稿: $id"
  curl -X POST -H "Authorization: Bearer $TOKEN" "$API/submission/$id/approve"
done
```

## 注意事项

1. **Token 安全**：请妥善保管 `SUBMISSION_ADMIN_TOKEN`，不要泄露
2. **文件备份**：定期备份 `storage/submissions/` 目录
3. **邮件测试**：首次配置 SMTP 后，建议先测试邮件发送功能
4. **日志查看**：使用 `sudo /root/.nvm/versions/node/v22.19.0/bin/pm2 logs like-api` 查看运行日志
