# 插件配置

当前为应用和插件的配置指南。`uni-halo` 的页面内容与功能开关主要由配套的 `UniHalo 配置` 插件管理，在 Halo 后台配置即可，无需修改源码。

## 1. 安装插件

`uni-halo` 需要使用到的插件列表如下（插件 ID 与应用内实际检测的一致，未安装或启用时对应页面会展示「插件不可用」提示）：

| 插件 | 插件 ID | 说明 | 是否必须 | 应用市场 |
|------|---------|------|----------|----------|
| UniHalo 配置 | `uni-halo` | 核心插件：页面配置、横幅、公告、友链（小程序）、恋爱日记、移动端登录、恋爱日记前台模板 | 必须 | https://www.halo.run/store/apps/app-aukgwe3y |
| 评论组件 | `PluginCommentWidget` | 文章评论与评论验证码 | 按需 | https://www.halo.run/store/apps/app-YXyaD |
| 搜索组件 | `PluginSearchWidget` | 文章搜索 | 按需 | https://www.halo.run/store/apps/app-DlacW |
| 链接管理 | `PluginLinks` | 友情链接页「站点」Tab 的友链数据 | 按需 | https://www.halo.run/store/apps/app-hfbQg |
| 图库管理 | `PluginPhotos` | 图库页的照片与分组数据 | 按需 | https://www.halo.run/store/apps/app-BmQJW |
| 瞬间 | `PluginMoments` | 瞬间页与瞬间详情 | 按需 | https://www.halo.run/store/apps/app-SnwWD |
| 投票管理 | `vote` | 投票中心与投票详情 | 按需 | https://www.halo.run/store/apps/app-veyvzyhv |
| 数据看板 | `data-statistics` | 数据统计页的可视化图表 | 按需 | https://www.halo.run/store/apps/app-rtnbbgfk |
| 项目集 | `portfolio` | 项目集模块，用于展示项目与作品集（含文章内项目卡片） | 按需 | https://github.com/liuyiwuqing/halo-plugin-portfolio |
| 豆瓣 | `plugin-douban` | 豆瓣模块，用于展示豆瓣影书记录（含文章内豆瓣卡片） | 按需 | https://github.com/chengzhongxue/plugin-douban |
| 轻言 | `hitokoto-hub` | 首页一言模块，用于展示随机句子并支持点赞 | 按需 | https://github.com/puresky-git/plugin-hitokoto-hub |
| 智阅全能AI助手 | `summaraidGPT` | App 端 AI 助手：AI 对话、站内检索与页面跳转（需同时安装启用 AI 基座插件） | 按需 | https://www.halo.run/store/apps/app-OWBzA |

以上插件可以直接访问应用市场地址安装，也推荐部署好你自己的 Halo 应用后，在应用后台的插件市场中搜索安装。

::: tip 说明
其中 **UniHalo 配置插件是核心插件**，必须安装并启用；其余插件按需安装，对应功能（评论、搜索、友链、图库、瞬间、投票、数据看板、项目集、豆瓣、轻言、AI 助手）才会可用。插件的安装与启用请参考 [Halo 插件文档](https://docs.halo.run/user-guide/plugins)。
:::

## 2. 配置插件

安装并启用插件后，在 Halo 后台依次进入 `插件管理`，找到 `Uni Halo` 插件，点击进入配置页面。配置分为以下几个分组：

### 2.1 基本设置（featureConfig）

| 配置项 | 说明 |
|--------|------|
| 审核结果邮件通知 | 开启后，友链申请审核通过/拒绝时向申请人邮箱发送通知（复用 Halo 系统设置的邮件通知器 SMTP 配置；申请未填邮箱则不发送） |
| 邮件署名 | 审核邮件标题与正文中的站点名称，默认 `uni-halo` |

### 2.2 安全控制（safetyConfig）

验证码配置，用于防止暴力/垃圾提交：

| 配置项 | 说明 |
|--------|------|
| 开启验证码 | 总开关。关闭后所有功能都不要求验证码 |
| 生效范围 | 可分别控制三类场景是否需要验证码：链接申请提交、恋爱相册解锁、恋爱模块解锁 |
| 验证码类型 | 图形字符（可设置字符长度，默认 4）或算术题（可设置运算数范围，默认 10） |

### 2.3 平台接入（integrationConfig）

第三方插件接入配置，当前包含：AI 助手（智阅全能AI助手）。

**AI 助手（aiAssistant）**：对接 [智阅全能AI助手](https://www.halo.run/store/apps/app-OWBzA)（`summaraidGPT`）插件，为 App 端提供 AI 对话、站内检索与页面跳转能力。用户在 App 内向 AI 助手提问，AI 检索站内内容后可自动跳转到对应页面（如文章、动态、投票中心等）。

插件要求：

- 安装并启用 **智阅全能AI助手** 插件（要求 Halo ≥ 2.25.0）
- 该插件的 AI 能力依赖 **AI 基座** 插件，需一并安装启用，并在其设置中完成大模型接入（API 令牌、模型选择等）
- 未安装或未启用时，App 端不显示 AI 助手入口

配置项：

| 配置项 | 说明 |
|--------|------|
| 启用移动端 AI 助手 | 总开关，默认开启。关闭后 App 端不再显示 AI 助手入口 |
| 对话提示词 | 追加在 Agent 提示词之后的站点自定义提示词，如站点特色、回答风格要求等，可留空 |
| Agent 提示词 | App 端跳转协议提示词，内置完整的页面清单（含常用别名）与动作块协议，**非必要不要修改** |

#### 智阅全能AI助手插件侧的提示词

App 端 AI 助手走智阅全能AI助手插件的 Agent 对话接口，但**无需在其插件设置中配置任何提示词**：

- 其「模型人设」等提示词针对网页端摘要与前台助手，App 端不依赖这些配置
- App 端的提示词体系完全由下方 UniHalo 插件的两个提示词字段控制
- 只需保证该插件与 AI 基座插件已启用、大模型接入可用即可

#### UniHalo 插件侧的提示词

**对话提示词**（可留空）：留空时插件下发配置会自动拼接【站点信息】段（应用名称、博主昵称、简介、主页、邮箱、社交账号等）；填写后会追加在站点信息之后。

**Agent 提示词**（表单默认值如下，与 App 端内置提示词保持一致）：

<details>
<summary>Agent 提示词默认值（点击展开）</summary>

```text
你是 App 端的 AI 助手。本请求来自 UniHalo App 端（非浏览器网页端），后续所有约定均以此身份为前提。
除正常回答用户问题外，你还可以引导用户在 App 内跳转到对应页面。

## 页面跳转协议
当用户要求打开、查看、跳转某个页面，且你能确定所需参数时，在回答正文之后另起一行，原样输出动作块（不要用代码块包裹，不要附加其他解释）：
匹配到唯一目标时输出单对象：
@@UNI_HALO_APP_ACTION@@ {"action":"navigate","name":"页面名称","type":"跳转类型","url":"/页面路径?参数"}
存在多个候选（如多篇文章、多个可能页面）时输出数组，按匹配度从高到低排序，最多 5 个：
@@UNI_HALO_APP_ACTION@@ [{"action":"navigate","name":"页面名称","type":"跳转类型","url":"/页面路径?参数"},...]
name 为页面名称：固定页面用清单中冒号前的名称或括号内任一别名；详情类页面（笔记/动态/公告/Banner/投票/项目集/用户主页）用对应内容的标题。
跳转类型只有两种：tabbar 页面用 switchTab，其余页面用 navigateTo。

## 页面清单
每行格式为「名称（别名1、别名2）：路径」，用户说法命中名称或任一别名即视为匹配到该页面。
### tabbar 页面（type 固定为 switchTab，不带参数）
- 首页（主页、站点首页）：/pages/tabbar/home/home
- 分类（分类页、文章分类）：/pages/tabbar/category/category
- 图库（图片库、图集、照片墙）：/pages/tabbar/gallery/gallery
- 动态（动态墙、朋友圈、moment）：/pages/tabbar/moments/moments
- 博主（博主页面、博主主页、关于博主、博主信息、站长）：/pages/tabbar/blogger/blogger

### 普通页面（type 固定为 navigateTo，不带参数）
- 笔记列表（文章列表、所有文章、全部笔记、博客文章）：/pages-blog/articles/articles
- 归档（文章归档、时间线、归档页）：/pages-blog/archives/archives
- 标签列表（标签、标签云、标签页）：/pages-blog/tags/tags
- 搜索（搜索页、站内搜索）：/pages-blog/search/search
- 收藏（我的收藏、收藏夹、收藏页）：/pages-blog/favorites/favorites
- 友情链接（友链、友链页）：/pages-blog/friend-links/friend-links
- 联系博主（联系站长、联系我们、联系方式）：/pages-blog/contact/contact
- 公告列表（公告、通知、公告页）：/pages-blog/notice/notice
- 投票列表（投票中心、投票页、投票）：/pages-blog/votes/votes
- 恋爱主页（恋爱、恋爱首页、恋爱小屋）：/pages-blog/love/love
- 恋爱清单（清单、愿望清单、恋爱清单页）：/pages-blog/love/list
- 恋爱故事（故事、恋爱日记、故事列表）：/pages-blog/love/stories
- 相册列表（恋爱相册、相册、照片）：/pages-blog/love/album
- 项目集列表（项目集、作品集、项目展示）：/pages-blog/portfolio/portfolio
- 豆瓣（豆瓣页、书影音、豆瓣动态）：/pages-blog/douban/douban
- 数据可视化（数据统计、统计页、数据大屏）：/pages-blog/data-visual/data-visual
- 偏好设置（设置、设置页、偏好）：/pages-blog/setting/setting
- 关于项目（关于、关于页、关于本站）：/pages-blog/about-project/about-project
- 免责声明（声明、免责声明页）：/pages-blog/disclaimer/disclaimer
- 用户协议（协议、用户协议页）：/pages-blog/user-agreement/user-agreement
- 隐私政策（隐私、隐私政策页）：/pages-blog/privacy-policy/privacy-policy

### 带参数页面（type 固定为 navigateTo，url 必须携带参数）
- 笔记详情（文章详情）：/pages-blog/article-detail/article-detail?name=<笔记的 metadata.name>
- 动态详情：/pages-blog/moment-detail/moment-detail?name=<动态的 metadata.name>
- 公告详情：/pages-blog/notice/detail?name=<公告的 metadata.name>
- Banner 详情：/pages-blog/banner-detail/banner-detail?name=<Banner 的 metadata.name>
- 投票详情：/pages-blog/vote-detail/vote-detail?name=<投票的 metadata.name>
- 项目集详情：/pages-blog/portfolio/detail?slug=<项目的 slug>
- 分类文章列表（分类页文章、某分类下的文章）：/pages-blog/category-articles/category-articles?name=<分类的 metadata.name>
- 标签文章列表（标签页文章、某标签下的文章）：/pages-blog/tag-articles/tag-articles?name=<标签的 metadata.name>
- 用户主页（用户空间、个人主页、TA的主页）：/pages-blog/user-profile/user-profile?username=<用户的 metadata.name>

## 约束
- 用户要求打开任何页面、文章、动态、公告等内容时，一律先从「页面清单」中匹配目标（命中名称或任一别名即算匹配），然后按清单中的路径直接输出动作块；禁止把清单外的页面当作目标，禁止输出「已找到站点 xx 页面」这类清单之外的结果。
- 打开详情类内容（笔记/动态/公告/投票/项目集等）时，先用检索类工具拿到该内容的 metadata.name / slug，再与清单中对应详情页路径拼装成 url 输出动作块；匹配到多个内容时全部作为候选输出；无法确定参数时禁止输出动作块，只做文字回答。
- App 端没有浏览器环境：禁止调用 open_halo_resource、open_current_page_link、open_comment_area、draft_comment、submit_comment 这类浏览器动作工具；所有跳转一律通过动作块输出。
- 检索类工具（站内搜索、最新文章、知识库检索等）可以正常使用，用于获取跳转所需的 metadata.name / slug。
- 仅允许跳转上述清单中的站内页面，清单之外的请求（含外部网页）一律不输出动作块。
- type 必须按清单标注选择，不要自行判断；name 必须输出，不要省略。
```

</details>

::: warning 保持默认
Agent 提示词中的页面清单、动作块格式与 App 端解析器严格对应，修改后可能导致跳转失败。如需恢复，将该表单内容清空即可（App 端会回退使用内置默认提示词）。
:::

::: tip 提示词工作方式
- App 端仅在**新会话首轮**下发 Agent 提示词与对话提示词，后续轮次随每条消息附带轻量的协议备注（来源声明与动作块格式模板）约束输出格式，因此修改提示词后仅对新会话生效。
- Agent 提示词**留空时 App 端回退使用内置默认提示词**；建议保持默认值不做改动，自定义后如遇跳转异常可清空恢复。
:::

### 2.4 主题组件（themeWidgetConfig）

控制插件向**主题前台页面**注入的组件行为，当前包含：悬浮信息卡片。

**悬浮信息卡片（floatProfileWidget）**：开启后向主题页面注入悬浮卡片（用于展示小程序太阳码）。

| 配置项 | 说明 |
|--------|------|
| 在主题显示悬浮窗 | 总开关 |
| 太阳码图片 | 选择一张小程序太阳码图片（Halo 附件） |
| 小程序名称 / 描述 | 太阳码下方显示的文字，可分别设置字号与颜色 |
| 显示范围 | 全部页面 / 仅以下路径显示 / 以下路径不显示（路径模式支持 `*`、`**` 通配，如 `/archives/**`） |
| 显示位置 | 九宫格锚点位置（左上、右下、居中等） |
| 水平/垂直偏移 | 相对锚点的微调（px，可填负数） |
| 卡片宽度 | 默认 220px |
| 开启拖拽 / 允许关闭 | 交互行为开关 |
| 默认状态 | 卡片 / 最小化小球 |
| 记住关闭状态 | 开启后访客关闭后同浏览器下次访问不再显示 |
| 小程序申请 | 开启后卡片底部显示「申请」「友链信息」按钮 |

**恋爱日记主题页（loveDiaryTheme）**：在站点前台注册恋爱日记页面路由并渲染插件内置模板，主题可直接展示，也可整页接管。详见 [插件指南 - 恋爱日记前台模板](/plugin/love-template)。

### 2.5 主题模板（themeTemplateConfig）

控制插件内置的**主题前台模板页面**，当前包含：恋爱日记主题页。

| 配置项 | 说明 |
|--------|------|
| 启用恋爱日记主题页 | 总开关，**默认关闭**。关闭时插件不注册任何前台路由、不注入任何资源 |
| 页面路径 - 恋爱日记首页 | 默认 `/love`。以 `/` 开头 = 绝对完整路径；留空 = 不注册该页 |
| 页面路径 - 恋爱故事 / 恋爱相册 / 恋爱清单 | 默认 `stories` / `albums` / `daily`。不以 `/` 开头 = 相对首页路径的子段（默认解析为 `/love/stories`）；以 `/` 开头 = 绝对路径；留空 = 不注册该页 |
| 页面外壳 | 跟随主题布局（复用主题的页头页脚与整体外壳）/ 独立页面（不依赖主题的 layout 契约，用于主题未适配时兜底） |
| 强调色 | 恋爱页强调色（按钮、解锁表单、图标高亮等），默认 `#f83856`，同时作为前端 CSS 变量默认值 |
| 首页显示各模块最新 3 条 | 开启后首页在各模块入口下方显示最近 3 条内容预览 |

::: tip 说明
恋爱日记主题页的背景图取自 **通用配置 → 页面设置 → 恋爱日记页**；相册查看密码在 **控制台 → 恋爱管理 → 恋爱相册** 中维护，锁定与解锁行为由服务端保证。
:::

### 2.6 移动端登录（loginConfig）

移动端登录能力的总开关与微信登录配置，详见 [插件指南 - 移动端登录](/plugin/mobile-login)：

| 配置项 | 说明 |
|--------|------|
| 开启登录能力 | 总开关，默认关闭。关闭时移动端不展示任何登录入口 |
| 登录方式 | 分别控制「账号密码登录」「微信小程序一键登录」两个入口 |
| 微信小程序密钥 | 微信登录需要：填写小程序 AppSecret（`$formkit: secret` 输入，保存后不回显） |
| 自动注册用户名前缀 | 微信首次登录自动注册的用户名前缀，默认 `unihalo` |
| 权限策略 / 登录后默认角色 | 控制移动端令牌的权限上限 |
| 令牌有效期（天） | 登录令牌的有效天数，默认 30 |

::: tip 更多配置
除以上分组外，页面内容（横幅、公告、友链、恋爱日记、应用信息等）在插件的**控制台管理页面**中维护，详见 [插件指南 - 控制台功能](/plugin/console)。
:::
