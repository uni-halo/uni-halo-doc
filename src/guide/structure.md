# 目录结构

本文介绍 uni-halo 应用与配置插件的目录结构，帮助您快速了解项目组成。

## uni-halo 应用

```
uni-halo
├── env/                    # 环境变量配置（.env / .env.development / .env.test / .env.production）
├── hermes/                 # 工程规范文档（架构、代码规范、请求分层、发布流程等）
├── scripts/                # 构建/发布脚本（小程序上传、版本号 bump 等）
├── src/
│   ├── api/                # 接口层（Halo / uni-halo 插件接口封装）
│   ├── components/         # 全局组件（uh-* 为业务组件）
│   ├── config/             # 应用配置（appConfig / appSettings 等）
│   ├── hooks/              # 组合式函数（数据加载、上传、点赞、设置弹窗等）
│   ├── http/               # 请求封装（alova 实例、拦截器、异常处理）
│   ├── layouts/            # 页面布局
│   ├── locale/             # 国际化语言包（zh-Hans / en）
│   ├── pages/              # 主包页面（tabbar 页面：首页、分类、图库、瞬间、我的）
│   ├── pages-blog/         # 分包页面（文章、归档、搜索、恋爱日记、友链、公告等）
│   ├── static/             # 静态资源
│   ├── App.vue             # 应用入口
│   └── main.ts             # 应用启动
├── manifest.config.ts      # 应用清单配置（事实源，生成 src/manifest.json）
├── pages.config.ts         # 路由/页面配置（事实源，生成 src/pages.json）
├── uno.config.ts           # UnoCSS 配置
└── vite.config.ts          # 构建配置
```

### 关键约定

- **生成物不手改**：`src/pages.json`、`src/manifest.json`、`src/types/*.d.ts` 由 `*.config.ts` 生成，手改会被覆盖
- **页面配置**：新增页面请在 `pages.config.ts` 中配置，或在页面 `.vue` 文件中使用 `definePage` 宏
- **平台差异**：使用条件编译（`#ifdef`）处理各端差异

### 主包页面（src/pages）

| 目录 | 说明 |
|------|------|
| pages/tabbar/home | 首页（轮播图、分类导航、最新文章） |
| pages/tabbar/category | 分类 |
| pages/tabbar/gallery | 图库 |
| pages/tabbar/moments | 瞬间 |
| pages/tabbar/mine | 我的 |
| pages/auth | 登录 / 注册 |
| pages/maintenance | 维护模式页面 |

### 分包页面（src/pages-blog）

| 目录 | 说明 |
|------|------|
| articles / article-detail / archives | 文章列表 / 文章详情 / 归档 |
| category-articles / tags / tag-detail | 分类文章 / 标签列表 / 标签文章 |
| search | 文章搜索 |
| friend-links | 友情链接（展示与申请） |
| love | 恋爱日记（列表、相册、故事） |
| favorites | 收藏 |
| about / contact / disclaimers | 关于 / 联系 / 免责声明 |
| notice | 公告（列表与详情） |
| banner-detail | 轮播图详情 |
| data-visual | 数据可视化 |
| moment-detail | 瞬间详情 |
| votes / vote-detail | 投票 |
| setting | 应用设置 |

## uni-halo-plugin 插件

```
uni-halo-plugin
├── src/main/java/cn/ialley/unihalo/
│   ├── endpoint/           # REST API 端点（公开/管理端接口）
│   ├── scheme/             # 扩展模型（Banner、Notice、LoveAlbum、MiniProgramLink 等）
│   ├── services/           # 业务服务层
│   ├── reconciler/         # 资源协调器（Halo Reconciler 机制）
│   ├── finders/            # 模板查过滤器
│   ├── captcha/            # 验证码服务
│   └── utils/              # 工具类（Token 管理、邮件、配置装配等）
├── src/main/resources/
│   ├── extensions/         # 插件声明（setting.yaml 表单、角色模板、反向代理等）
│   └── plugin.yaml         # 插件元数据
├── ui/                     # 控制台前端（Vue3 + TypeScript）
│   └── src/views/          # 管理页面（横幅、友链、公告、恋爱、审核、应用版本等）
└── build.gradle            # 构建配置（Java 21，依赖 Halo 2.26 平台）
```

更多插件细节请参考 [插件指南](/plugin/intro)。
