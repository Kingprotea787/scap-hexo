# Claude Code 执行任务：投稿页面 + 审核邮件闭环

## 0. 执行模式（必须遵守）

你是代码执行代理，不是方案顾问。  
本任务要求你直接改代码并自动调试，直到全部验收通过。

- 不要只给计划，必须落地实现。
- 遇到报错要继续修复并重试，不要中途停止。
- 除非缺少必须凭证（如真实 SMTP 密码），否则不要向用户提问。
- 如果缺少 SMTP 凭证，先实现可运行的开发模式（本地日志邮件/测试邮箱），并保留生产配置入口。

---

## 1. 目标

在当前项目中新增一个“投稿页面”，支持两类投稿：

1. 插画投稿（illustration）
2. 文章投稿（article）

投稿体验要接近主流网盘上传：

- 拖拽上传
- 上传进度
- 文件信息显示
- 成功/失败提示

并实现审核闭环：

- 用户投稿时必须填写邮箱
- 管理方能收到新投稿通知
- 管理方审核通过后，系统可给投稿邮箱发送通过邮件

---

## 2. 项目上下文（按此路径实施）

- 前端（Hexo）根目录：`/Users/mac/Documents/SCAPHexo/hexo`
- 后端 API 目录：`/Users/mac/Documents/SCAPHexo/api/LIKE-API`

请把新增功能接入现有结构，不要新起独立项目。

---

## 3. 必做功能

### 3.1 投稿页面（前端）

新增页面入口（可命名为“投稿”或 `contribute`）：

- 两个清晰入口：`插画投稿`、`文章投稿`
- 同一页面内可切换 tab，或两个上传卡片
- 必填项：
  - 投稿类型（illustration/article）
  - 邮箱
  - 标题
  - 作品说明
  - 文件
- 上传时显示：
  - 文件名
  - 文件大小
  - 上传进度条
  - 上传状态

### 3.2 YAML 驱动的投稿说明

把投稿需求文案放在 YAML 文件中，后续可手工编辑：

- 文件：`/Users/mac/Documents/SCAPHexo/hexo/source/_data/submission.yml`
- 页面渲染时读取该 YAML 内容展示“投稿须知/要求”

YAML 至少包含：

- 页面标题/描述
- 插画投稿要求
- 文章投稿要求
- 文件格式与大小限制
- 审核说明文案

### 3.3 上传与存储（后端）

新增投稿 API，接收 multipart/form-data 上传。

存储规则：

- 插画文件存入：`/Users/mac/Documents/SCAPHexo/api/LIKE-API/storage/submissions/illustration/`
- 文章文件存入：`/Users/mac/Documents/SCAPHexo/api/LIKE-API/storage/submissions/article/`
- 每条投稿保存 metadata（JSON 或 SQLite 均可），至少包含：
  - id
  - type
  - email
  - title
  - description
  - originalFilename
  - storedPath
  - submittedAt（ISO 时间）
  - status（pending/approved/rejected）

### 3.4 投稿日期记录

投稿创建时间必须在 metadata 中持久化，字段名固定为：

- `submittedAt`

### 3.5 邮件流程

实现两段邮件能力：

1. 新投稿通知（发给管理员邮箱）
2. 审核通过通知（发给用户邮箱）

建议环境变量：

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `SUBMISSION_ADMIN_EMAIL`
- `SUBMISSION_ADMIN_TOKEN`（用于审核接口鉴权）

### 3.6 审核接口

提供管理员审核通过接口（至少一条）：

- 接口行为：把投稿状态改为 `approved`，并发送通过邮件给投稿用户
- 鉴权：使用 `SUBMISSION_ADMIN_TOKEN`（header 或 bearer）

---

## 4. 建议新增文件（可等价调整）

前端（Hexo）：

- `/Users/mac/Documents/SCAPHexo/hexo/source/contribute.md`
- `/Users/mac/Documents/SCAPHexo/hexo/themes/scap/layout/contribute.ejs`
- `/Users/mac/Documents/SCAPHexo/hexo/themes/scap/source/css/contribute.styl`
- `/Users/mac/Documents/SCAPHexo/hexo/themes/scap/source/js/contribute.js`
- `/Users/mac/Documents/SCAPHexo/hexo/source/_data/submission.yml`

后端（LIKE-API）：

- `/Users/mac/Documents/SCAPHexo/api/LIKE-API/src/routes/submission.js`（或 `routes/submission/index.js`）
- `/Users/mac/Documents/SCAPHexo/api/LIKE-API/src/services/submissionStore.js`
- `/Users/mac/Documents/SCAPHexo/api/LIKE-API/src/services/submissionMailer.js`
- `/Users/mac/Documents/SCAPHexo/api/LIKE-API/storage/submissions/.gitkeep`

并在：

- `/Users/mac/Documents/SCAPHexo/api/LIKE-API/src/app.js`

挂载新路由。

---

## 5. API 规范（最低要求）

### 5.1 提交投稿

- `POST /api/submission`
- `Content-Type: multipart/form-data`

字段：

- `type`: `illustration` 或 `article`
- `email`: 合法邮箱
- `title`: 字符串，必填
- `description`: 字符串，必填
- `file`: 上传文件

成功返回：

- `201`
- 包含 `id`、`type`、`submittedAt`、`status`

### 5.2 审核通过

- `POST /api/submission/:id/approve`
- 需管理员 token

成功返回：

- `200`
- 包含更新后的状态 `approved`

---

## 6. 安全与健壮性要求

- 文件名做安全处理，防路径穿越。
- 限制可上传后缀和 MIME。
- 限制单文件大小（按 YAML 或默认值）。
- 目录不存在时自动创建。
- 上传失败要回滚 metadata（避免脏记录）。
- 返回错误信息给前端，但不要暴露服务器敏感路径。

---

## 7. 自动调试与完成标准（关键）

你必须执行“实现 -> 运行 -> 修复 -> 重跑”循环，直到全部通过。

### 7.1 需要补齐的测试

至少新增后端自动化测试，覆盖：

1. `illustration` 正常投稿成功，文件写入正确目录
2. `article` 正常投稿成功，文件写入正确目录
3. 非法邮箱被拒绝
4. 非法 type 被拒绝
5. metadata 包含 `submittedAt`
6. 审核通过接口可把状态改为 `approved`
7. 审核通过会触发邮件发送（测试中 mock）

### 7.2 必跑命令（直到通过）

在实现后反复执行，直到全绿：

1. `npm --prefix /Users/mac/Documents/SCAPHexo/api/LIKE-API test`
2. `npm --prefix /Users/mac/Documents/SCAPHexo/hexo run build`

若失败：

- 读取报错
- 最小改动修复
- 重新运行同一命令
- 继续直到通过

---

## 8. 验收清单（全部满足才算完成）

- [ ] 页面存在两个投稿入口：插画/文章
- [ ] 页面上传体验具备网盘式核心交互（拖拽、进度、状态）
- [ ] 邮箱为必填且有效性校验生效
- [ ] 投稿文件按类型分目录存储
- [ ] 每条投稿都有 `submittedAt`
- [ ] 投稿需求文案来自 `submission.yml`
- [ ] 新投稿可通知管理员
- [ ] 审核通过可邮件回复用户
- [ ] API 自动化测试全部通过
- [ ] Hexo 构建成功

---

## 9. 完成后输出格式

完成时请输出：

1. 修改的文件清单
2. 新增接口清单
3. 测试结果摘要
4. 还需人工配置的环境变量（如 SMTP）

