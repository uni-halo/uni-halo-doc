# 插件介绍

[uni-halo-plugin](https://github.com/uni-halo/uni-halo-plugin) 是 `uni-halo` 移动端应用的**配套配置插件**，运行在 Halo 2.x 站点上，为小程序提供后台配置管理能力。

- 插件名称：Uni Halo
- 插件市场：https://www.halo.run/store/apps/app-ryemX
- 源码仓库：https://github.com/uni-halo/uni-halo-plugin
- 环境要求：Halo ≥ 2.26，Java 21+（仅开发构建时需要）

## 插件能做什么

### 1. 应用配置管理

提供页面级别的配置能力，小程序端无需改代码即可动态调整内容：

- **横幅（Banner）管理**：配置首页等位置的轮播图，支持关联文章/瞬间/相册等候选内容
- **公告（Notice）管理**：公告类型与公告内容的维护，小程序端弹窗/列表展示
- **友链（MiniProgramLink）管理**：友链分组、友链信息、用户投稿申请与审核（支持审核结果邮件通知）
- **恋爱日记管理**：恋爱相册（支持加密解锁）、恋爱清单、我们的故事
- **应用信息与版本管理**：应用信息展示、应用版本记录（用于检查更新）
- **审核配置**：友链投稿等内容的候选与审核策略

### 2. 插件设置（Setting 表单）

提供四大配置分组：基本设置、安全控制（验证码）、平台接入（第三方插件）、主题展示（悬浮窗），详见 [插件配置](/deploy/config)。

### 3. 公开数据接口

插件为小程序端提供专属 REST API（轮播、公告、友链、恋爱数据、验证码等）。

## 技术架构

```
uni-halo-plugin
├── Java 后端（src/main/java）
│   ├── endpoint/    REST API 端点（公开接口 + 管理接口）
│   ├── scheme/      扩展模型（Banner、Notice、LoveAlbum、MiniProgramLink 等）
│   ├── services/    业务服务层
│   ├── reconciler/  资源协调器（数据初始化与终结处理）
│   └── captcha/     验证码服务（图形字符 / 算术题）
├── 控制台前端（ui/）  Vue3 + TypeScript，随插件打包
└── plugin.yaml       插件元数据与设置声明
```

## 安装与使用

1. 在 Halo 后台插件市场搜索 `UniHalo` 安装，或从 [Releases](https://github.com/uni-halo/uni-halo-plugin/releases) 下载 jar 包手动安装；
2. 启用插件后进入插件控制台，进行内容管理（见 [控制台功能](console.md)）；
3. 在插件设置中完成参数配置（见 [插件配置](/deploy/config)）。

## 开发与构建

```bash
# 本地启动 Halo 开发服务器（自动加载插件）
./gradlew haloServer

# 开发控制台前端
cd ui && pnpm install && pnpm dev

# 构建插件 jar（产物在 build/libs）
./gradlew build
```
