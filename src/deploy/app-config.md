# 应用配置

`uni-halo` 应用自身的配置集中在 `env/` 目录的环境变量文件中：

```
env/
├── .env                 # 通用配置（所有模式共享）
├── .env.development     # 开发模式（pnpm dev）
├── .env.test            # 测试模式（--mode test）
└── .env.production      # 生产模式（pnpm build）
```

不同命令会按 mode 叠加读取对应文件，`.env` 中的值会被具体模式的值覆盖。

## 1. 必须修改的配置

打开 `env/.env`，重点检查以下几项：

### 1.1 微信小程序 AppID

```ini
VITE_WX_APPID = '你的微信小程序AppID'
```

在微信小程序后台「设置 - 基本设置 - 账号信息 - AppID(小程序ID)」中查看。

### 1.2 后端请求地址

```ini
# 默认后台请求地址（Halo 站点地址）
VITE_SERVER_BASEURL = 'http://localhost:8090'
```

微信小程序还可以按开发者工具的 envVersion 区分三套地址（不配置时回退使用 `VITE_SERVER_BASEURL`）：

```ini
VITE_SERVER_BASEURL__WEIXIN_DEVELOP = 'http://localhost:8090'   # 开发版
VITE_SERVER_BASEURL__WEIXIN_TRIAL = 'http://localhost:8090'     # 体验版
VITE_SERVER_BASEURL__WEIXIN_RELEASE = 'https://你的域名'          # 正式版
```

::: warning 注意
正式版小程序的请求地址必须是 `https` 且已在微信小程序后台配置为合法域名（见 [发布小程序](wx-release.md)）。
:::

### 1.3 微信开发者工具 CLI 路径（可选）

当 `pnpm dev:mp` 无法自动打开微信开发者工具时（常见于自定义安装位置），配置：

```ini
# Windows 示例
WECHAT_DEVTOOLS_CLI_PATH = 'D:\DevUtils\Tencent\微信web开发者工具\cli.bat'
# macOS 示例
# WECHAT_DEVTOOLS_CLI_PATH = '/Applications/wechatwebdevtools.app/Contents/MacOS/cli'
```

## 2. 地图 Key 配置（足迹地图）

「足迹地图」页面使用 uni-app 的 `<map>` 组件，需要向地图服务商申请 Key。**如果你不使用足迹地图，可以跳过本章。**

### 2.1 哪些端需要配 Key

先看清生效范围，可以避免白申请 Key、白折腾配置：

| 发布端 | 是否需要配置 Key | 说明 |
|--------|------------------|------|
| H5 | 需要 | 在 `env/.env.local` 填腾讯 Key 或高德 JSKEY，配置后重启/重新构建 H5 即可生效 |
| App（Android / iOS / 鸿蒙） | 需要 | 额外要在 HBuilderX 的 `App模块配置` 里勾选 `Maps` 并在 `App SDK 配置` 填对应 Key，详见 [发布 APP - 足迹地图的模块与 Key](app-release.md#_6-2-足迹地图的模块与-key) |
| 微信小程序 | **不需要** | `<map>` 组件的底图由微信平台直接提供（腾讯地图），不用你申请 Key、也不用填环境变量 |
| 只发布微信小程序 | **完全不用配** | 只发小程序时，整套地图 Key 配置都可以跳过，`env/.env.local` 保持为空即可 |

::: tip 一句话结论
**只发微信小程序 → 一个 Key 都不用配；只发 H5 → 配一个腾讯 Key；发 App → 配 Key + 勾模块。**
:::

### 2.2 严禁把 Key 提交到公开仓库

::: danger 高危
地图 Key 是**付费凭据**，等同于账号密码。仓库一旦公开，任何人都能从源码里翻出你的 Key 并拿去调用图商接口，产生的后果由你承担：

- 配额被他人盗刷，超额后图商侧直接停服，线上足迹地图白屏；
- 付费调用产生的费用由你的账号结算；
- 高德 / 腾讯会对异常调用做风控，你的 Key 可能被永久封禁。

因此，**任何情况下都不要把真实 Key 写进会被提交到 Git 仓库的文件**，包括 `env/.env`、`manifest.config.ts`、示例代码、文档片段、截图、Issue 与聊天记录。
:::

正确的做法是把真实 Key 放进 **`env/.env.local`**：

- 项目已在 `.gitignore` 中写入 `env/.env.local`，该文件**不会被 Git 追踪**，本地放着也安全；
- `env/.env` 只保留空字符串占位，用于让其他人 fork 后知道有哪些配置项；
- Vite 的加载优先级为 `.env.local` > `.env`，并且 `.env.local` 对所有 mode 生效（开发、测试、生产都能读到），所以只需维护一份。

配置方式：复制一份 `env/.env.local`（没有就新建），把 `env/.env` 末尾「地图业务（足迹功能）」那几项复制进去，再填真实值：

```ini
# env/.env.local（此文件不会被提交）
VITE_FOOTPRINT_MAP_TENCENT_KEY = '你的腾讯地图 Key'
# 或者用高德（以下四项按需填写）
VITE_FOOTPRINT_MAP_AMAP_ANDROID_KEY = '你的高德 Android Key'
VITE_FOOTPRINT_MAP_AMAP_IOS_KEY = '你的高德 iOS Key'
VITE_FOOTPRINT_MAP_AMAP_JSKEY = '你的高德 Web端(JS API) Key'
VITE_FOOTPRINT_MAP_AMAP_SECURITY_JS_CODE = '你的高德安全密钥'
```

配置完成后建议做一次自查：

```bash
# 确认 env/.env.local 处于忽略状态（应输出 env/.env.local）
git check-ignore -v env/.env.local

# 提交前确认暂存区里没有任何 Key
git status --short && git diff --cached
```

::: warning 已经提交过怎么办
`.gitignore` 只对**未追踪**的文件生效，已经进过 Git 历史的文件删掉本地副本也还在仓库里。发现 Key 已经提交过，请按以下顺序处理：

1. 先到图商控制台**重置（重新生成）Key**，让旧 Key 立即失效，这一步最重要；
2. 再执行 `git rm --cached env/.env.local` 从索引中移除，之后补 commit；
3. 仅靠 `git commit` 删文件无法清除历史记录，如果仓库已经推送到公开平台，联系平台方清理或按平台流程重写历史；切勿抱着「历史里看不到就行」的侥幸心理。
:::

### 2.3 腾讯地图与高德地图怎么选

`manifest.config.ts` 已经处理好了分支逻辑：**同一端同一时刻只输出一个图商节点**（腾讯优先，高德兜底），Key 为空则不写入对应节点，因此两套 Key 不需要同时配置。

| 配置项 | 生效端 | 申请入口 | 注意事项 |
|--------|--------|----------|----------|
| `VITE_FOOTPRINT_MAP_TENCENT_KEY` | App（Android / iOS / 鸿蒙）、H5 | [腾讯位置服务 - Key 管理](https://lbs.qq.com/dev/console/key/manage) | App 端走 web 方案，HBuilderX 需 4.31+，**不需要勾选 `Maps` 模块**；**申请时「页面域名白名单」必须留空**；HBuilderX 4.36+ 起同一个 Key 可同时用于 H5 |
| `VITE_FOOTPRINT_MAP_AMAP_ANDROID_KEY` | App（Android） | [高德开放平台控制台](https://console.amap.com/dev/key/app) | 原生 SDK 方案，**需在 HBuilderX 的 `App模块配置` 勾选 `Maps`**；申请的**包名 + SHA1 签名必须与云打包配置一致** |
| `VITE_FOOTPRINT_MAP_AMAP_IOS_KEY` | App（iOS） | [高德开放平台控制台](https://console.amap.com/dev/key/app) | 同样需勾选 `Maps`；申请的 **Bundle ID 必须与打包配置一致** |
| `VITE_FOOTPRINT_MAP_AMAP_JSKEY` | H5 | [高德开放平台控制台](https://console.amap.com/dev/key/app) | 服务平台需选「Web端（JS API）」，HBuilderX 3.6.0+ |
| `VITE_FOOTPRINT_MAP_AMAP_SECURITY_JS_CODE` | H5 | [高德开放平台控制台](https://console.amap.com/dev/key/app) | 2021-12-02 之后申请的 Key 必须搭配安全密钥，否则地图无法渲染 |

::: tip 选哪个更省事
**只发微信小程序**：什么都不用配，`env/.env.local` 保持空即可，因为 `<map>` 底图由微信提供。

**只跑 H5**：填一个腾讯 Key 就够，不用勾任何模块。

**要发 App 包**：腾讯 Key 只需一个，且不需要勾选 `Maps` 模块、不受包名与签名约束，是最省事的路径；用高德则必须勾选 `Maps` 模块，并保证云打包的包名、签名、Bundle ID 与申请时完全一致，否则真机地图不显示。
:::

### 2.4 关于 Key 泄露风险的官方建议

腾讯官方在文档中明确提示：安卓 / iOS 端写在 `manifest.json` 里的 Key 仅用于展示地图，**建议把该 Key 的所有 API 配额设为 0**，避免 Key 泄露后产生额外资源消耗。这一点对「H5 + 腾讯」同样适用，因为 H5 的 Key 会明文出现在页面请求中。

另外需要了解：

- 三方地图 / 定位服务属于**商业收费**服务，正式商用需向服务商购买商业授权（公益类应用可申请豁免），详见 uni-app 官方文档的商业授权说明；
- 高德 H5 的 `securityJsCode` 支持「代理服务器转发」和「明文设置」两种方式，前者安全性更高，详见 [高德 JS API 安全密钥使用](https://lbs.amap.com/api/jsapi-v2/guide/abc/prepare)。

### 2.5 配置没生效怎么排查

1. Key 写在 `env/.env.local` 后需要**重启开发服务**（`pnpm dev` / `pnpm dev:app`），改 `manifest.config.ts` 同理；
2. 构建产物 `src/manifest.json` 是由 `manifest.config.ts` 生成的（已被 `.gitignore` 忽略），可以打开它确认 `h5.sdkConfigs.maps` 与 `app-plus.distribute.sdkConfigs.maps` 下是否出现了你配置的图商节点；
3. App 端提示「打包时未添加 map 模块」，说明当前走的是高德原生 SDK 而 HBuilderX 里没勾选 `Maps` 模块，去 `dist/build/app/manifest.json` 的 `App模块配置` 勾上，或改用腾讯 Key（不需要勾模块）绕过；
4. 模块勾了、Key 也填了，但真机地图仍空白，检查高德申请的包名 + SHA1 签名 / Bundle ID 是否与云打包配置完全一致；
5. 地图能显示但位置偏移，检查坐标是否为 `gcj02`（除谷歌地图外，uni-app `<map>` 组件统一使用国测局坐标）。

### 2.6 参考文档

配置过程中建议以以下官方文档为准，本项目只是把常见路径做了一层封装：

- [map 地图组件](https://uniapp.dcloud.net.cn/component/map.html) —— 各平台支持情况、地图服务商差异、腾讯 Key 的申请与安全建议
- [manifest.json 应用配置 - App SDK 配置（maps）](https://uniapp.dcloud.net.cn/collocation/manifest.html) —— `sdkConfigs.maps` 的字段含义与完整示例
- [manifest.json 应用配置 - H5 SDK 配置（maps）](https://uniapp.dcloud.net.cn/collocation/manifest.html#h5) —— H5 端 `tencent` / `amap` / `google` / `bmap` 节点与版本要求
- [地图（App 原生地图模块）](https://uniapp.dcloud.net.cn/tutorial/app-maps.html) —— App 端高德 / 百度地图的申请与模块勾选
- [App 模块配置](https://uniapp.dcloud.net.cn/tutorial/app-modules.html) —— 模块标识表与「打包时未添加 xxx 模块」的成因
- [Geolocation 定位与商业授权](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic) —— 三方地图的收费与授权风险
- [uni.chooseLocation](https://uniapp.dcloud.net.cn/api/location/choose-location.html) —— 为什么 App 端 Key 只用于展示地图
- [环境变量（.env）](https://uniapp.dcloud.net.cn/tutorial/env.html) —— `.env` 与 `.env.local` 的加载规则

## 3. 其他配置项

| 配置项 | 说明 |
|--------|------|
| `VITE_APP_TITLE` | 应用名称，默认 `uni-halo` |
| `VITE_APP_PORT` | 本地开发服务器端口，默认 `5200` |
| `VITE_UNI_APPID` | uni-app 应用标识（DCloud 分配），默认使用项目自带的即可 |
| `VITE_APP_PUBLIC_BASE` | H5 部署的 base 路径，部署在域名根路径时保持 `/` |
| `VITE_APP_PROXY_ENABLE` / `VITE_APP_PROXY_PREFIX` | H5 代理开关与前缀，默认关闭 |
| `VITE_AUTH_MODE` | 认证模式：`single` 单 token / `double` 双 token，默认 `single` |
| `VITE_DELETE_CONSOLE` | 生产构建是否移除 console/debugger |
| `VITE_SHOW_SOURCEMAP` | 生产构建是否开启 sourcemap |

::: tip 说明
访问令牌不再通过环境变量配置：移动端登录后使用的令牌由 `UniHalo 配置` 插件签发，登录能力与权限在插件设置中控制，详见 [插件指南 - 移动端登录](/plugin/mobile-login)。
:::

## 4. 配置生效方式

- 修改 `.env` / `.env.local` 后重启开发服务即可生效；
- 应用的大部分页面内容（轮播、公告、友链、恋爱日记等）**不走环境变量**，而是在 Halo 后台的配置插件中维护，见 [插件配置](config.md)。
