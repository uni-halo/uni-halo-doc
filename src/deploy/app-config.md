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

## 2. 其他配置项

| 配置项 | 说明 |
|--------|------|
| `VITE_APP_TITLE` | 应用名称，默认 `uni-halo` |
| `VITE_APP_PORT` | 本地开发服务器端口，默认 `5200` |
| `VITE_UNI_APPID` | uni-app 应用标识（DCloud 分配），默认使用项目自带的即可 |
| `VITE_APP_PUBLIC_BASE` | H5 部署的 base 路径，部署在域名根路径时保持 `/` |
| `VITE_APP_HALO_TOKEN` | 在 Halo 个人中心生成的 token（按需） |
| `VITE_APP_PROXY_ENABLE` / `VITE_APP_PROXY_PREFIX` | H5 代理开关与前缀，默认关闭 |
| `VITE_AUTH_MODE` | 认证模式：`single` 单 token / `double` 双 token，默认 `single` |
| `VITE_DELETE_CONSOLE` | 生产构建是否移除 console/debugger |
| `VITE_SHOW_SOURCEMAP` | 生产构建是否开启 sourcemap |

## 3. 配置生效方式

- 修改 `.env` 后重启开发服务即可生效；
- 应用的大部分页面内容（轮播、公告、友链、恋爱日记等）**不走环境变量**，而是在 Halo 后台的配置插件中维护，见 [插件配置](config.md)。
