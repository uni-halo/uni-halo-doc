# 完整流程

> 本页将完整的部署流程串联在一起，方便一页看完。各步骤的详细说明请点击对应链接查看。

## 一、前置条件

- 已部署 Halo 2.x 站点（≥ 2.26），域名已备案并支持 `https`
- 本地已安装 `Node.js >= 20`、`pnpm >= 9`
- 已注册微信小程序账号并完成认证

详见 [部署须知](intro.md)。

## 二、安装依赖与插件

### 2.1 Halo 站点安装插件

在 Halo 后台插件市场安装并启用以下插件（其余按需）：

- **UniHalo 配置插件**（必须）：https://www.halo.run/store/apps/app-aukgwe3y
- **评论组件**：https://www.halo.run/store/apps/app-YXyaD
- **搜索组件**：https://www.halo.run/store/apps/app-DlacW
- **链接管理**：https://www.halo.run/store/apps/app-hfbQg
- **图库管理**：https://www.halo.run/store/apps/app-BmQJW
- **瞬间**：https://www.halo.run/store/apps/app-SnwWD
- **投票管理**：https://www.halo.run/store/apps/app-veyvzyhv
- **数据看板**：https://www.halo.run/store/apps/app-rtnbbgfk

完整清单（含插件 ID 与对应功能）见 [插件配置 - 安装插件](config.md#_1-安装插件)。

### 2.2 本地准备源码

```bash
git clone https://github.com/uni-halo/uni-halo.git
cd uni-halo
pnpm install
```

详见 [准备工作](preparation.md)。

## 三、配置

### 3.1 配置插件

在 Halo 后台 `插件管理 - Uni Halo` 中完成基本设置、安全控制、平台接入、主题组件、主题模板等配置，详见 [插件配置](config.md)。

### 3.2 配置应用

修改 `env/.env`：

```ini
VITE_WX_APPID = '你的微信小程序AppID'
VITE_SERVER_BASEURL = 'http://localhost:8090'
VITE_SERVER_BASEURL__WEIXIN_RELEASE = 'https://你的域名'
```

详见 [应用配置](app-config.md)。

### 3.3 配置地图 Key（使用足迹地图时必做）

::: danger 切勿把地图 Key 提交到公开仓库
地图 Key 是付费凭据，公开仓库里的 Key 会被他人盗刷，导致配额耗尽、地图停服或账号被风控。请把真实 Key 写在**不会被 Git 追踪**的 `env/.env.local`，`env/.env` 只保留空占位，并优先采用腾讯 Key（无需勾选模块、不受包名签名约束）。
:::

```ini
# env/.env.local（此文件不会被提交）
VITE_FOOTPRINT_MAP_TENCENT_KEY = '你的腾讯地图 Key'
```

详细说明、图商选择、泄露应急处理与官方参考文档，见 [应用配置 - 地图 Key 配置](app-config.md#_2-地图-key-配置-足迹地图)。

## 四、本地运行验证

```bash
pnpm dev:mp
```

微信开发者工具打开后确认首页数据正常加载，详见 [本地运行](run.md)。

## 五、发布小程序

1. 微信小程序后台配置服务器域名（request / uploadFile / downloadFile 合法域名）；
2. `pnpm build:mp` 构建生产版本；
3. 微信开发者工具中预览 → 上传；
4. 后台生成体验版二维码体验；
5. 提交审核 → 审核通过后发布上线。

详见 [发布小程序](wx-release.md)。

## 六、发布 APP（可选）

APP 发布流程见 [发布 APP](app-release.md)。
