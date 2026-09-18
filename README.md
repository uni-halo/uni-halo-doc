<p align="center">
    <a href="https://uni-halo.ialley.cn" target="_blank" rel="noopener noreferrer">
        <img width="100" src="https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/logo.png" alt="uni-halo logo" />
    </a>
</p>

<p align="center"><b style="font-size: 20px;color: #10B5FB">uni-halo 官方文档仓库</b></p>
<br />
<p align="center"><b>【uni-halo v3.x】</b> 基于 Halo2.X API 多端项目，值得一试。</p>
<p align="center"><b style="font-size: 14px;color: #10B5FB">正式支持 Halo2.X 版本，免费开源</b></p>


<br />
<p align="center">
	<a href="https://www.xiaoxiaomo.cn">作者主页</a>
	<a href="https://blog.xiaoxiaomo.cn">作者博客</a>
	<a href="https://uni-halo.ialley.cn">官网主页</a>
	<a href="https://uni-halo-doc.ialley.cn">官方文档</a>
	<a href="https://github.com/uni-halo/uni-halo">仓库地址</a>
	<a href="https://github.com/uni-halo/uni-halo-plugin">插件仓库</a>
</p>

---

如果您觉得这个项目对您有帮助，可以帮作者买杯饮料鼓励鼓励，同时为了项目能够持续发展，可以根据您的喜好支持一下本项目哦，非常感谢您的支持，作者也会更有动力持续维护和更新新的功能哦~

|                                                 支付宝                                                 |                                                微信                                                 |                                                QQ                                                 |
|:---------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------:|
| ![支付宝赞助](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/author/rewards/ZFBRewardCode.png) | ![微信赞助](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/author/rewards/WXRewardCode.png) | ![QQ赞助](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/author/rewards/QQRewardCode.png) |

## 一、项目介绍

本仓库是 [uni-halo](https://github.com/uni-halo/uni-halo) 的官方文档（基于 [VitePress](https://vitepress.dev/) 构建），在线访问：[https://uni-halo-doc.ialley.cn](https://uni-halo-doc.ialley.cn)。

文档覆盖应用介绍、部署指南、插件使用与配置、更新日志等内容。

### 应用简介

基于 Halo 2.x 提供的 API 接口，为多端应用提供的一套开源的博客应用。

- 完全免费开源，包括程序源码、插件源码
- 页面支持插件配置，改内容不改代码
- 使用最新流行的技术栈
- 支持特色功能，恋爱日记
- 支持账号登录、注册与移动端内容管理
- 支持编译为 小程序（推荐）、APP、H5

### 部分截图

|首页|分类|博主|
|:--:|:--:|:--:|
|![首页](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/screenshots/app/v3.x/首页.png)|![分类](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/screenshots/app/v3.x/分类.png)|![博主](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/screenshots/app/v3.x/博主.png)|

### 恋爱日记

- 在 uni-halo 中，我们为您准备了一个恋爱日记的模块，您可以在其中记录您的恋爱故事，分享给您的朋友们。恋爱相册支持查看密码（页内解锁），管理员也可以直接在移动端管理相册、日记与故事。请扫示例小程序，在线体验恋爱日记的功能。

![恋爱日记](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/screenshots/app/v3.x/恋爱日记.jpg)

<br/>

### 功能介绍

- 基础功能：文章列表、分类、标签、详情、归档、搜索、公告、图库与我的收藏、瞬间、友情链接（支持投稿申请）、投票中心、数据看板、联系博主、偏好设置

- 特色功能：恋爱日记，精心为您设计了秀恩爱的模块，秀出关于你们的故事、情侣甜蜜相册（支持查看密码，页内解锁）、恋爱记录清单，为您的恋爱保驾护航。配套插件还内置恋爱日记前台模板，站点主题装上插件即可直接展示。

- 登录管理：账号密码登录、注册、微信一键登录与微信绑定，按角色控制可见内容，管理员可在移动端直接管理恋爱相册、恋爱日记、恋爱故事与瞬间内容。

- 其他：站点维护模式页、公告通知、应用版本检查更新、数据统计可视化。

## 二、配套插件

### 下载地址

- 代码仓库：[https://github.com/uni-halo/uni-halo-plugin](https://github.com/uni-halo/uni-halo-plugin)
- 仓库版本：[https://github.com/uni-halo/uni-halo-plugin/releases](https://github.com/uni-halo/uni-halo-plugin/releases)
- 应用市场：[https://www.halo.run/store/apps/app-ryemX](https://www.halo.run/store/apps/app-ryemX)

### 使用方式

直接下载安装插件，在插件市场安装即可，安装完成后，需要配置插件，配置完成后，即可使用插件提供的功能。详细配置请阅读 [插件配置文档](https://uni-halo-doc.ialley.cn/deploy/config)。

## 三、文档目录说明

- `src/guide/`：应用介绍、技术栈、项目结构与常见问题
- `src/deploy/`：部署指南（准备、运行、应用与小程序发布、插件配置）
- `src/plugin/`：插件介绍、控制台功能、恋爱日记前台模板、移动端登录
- `src/update/`：版本更新日志
- `src/links/`、`src/contributor/`、`src/other/`：友情链接、贡献者、赞助与致谢

## 四、本地开发

```bash
# 安装依赖
pnpm install

# 启动文档站开发服务
pnpm dev

# 构建产物
pnpm build
```

## 五、使用交流

- 提交 issues：[Github Issues](https://github.com/uni-halo/uni-halo/issues)
- QQ 交流群：632969367

![QQ交流群](https://blog.xiaoxiaomo.cn/upload/qun.png)

<br/>

## 🎉 加入我们

uni-halo 还在持续更新中，本项目欢迎您的参与，共同维护，逐步完善，将项目做得更强。项目采用 Apache License 2.0 开源协议，本着一切免费的原则，原则上不会收取任何费用及版权，可以放心使用。

如果你想加入我们，可以多提供一些好的建议或者提交 pr，我们将会非常乐意接受您的建议和意见。

<br/>

## 🔍 开源许可

uni-halo 使用 Apache License 2.0 协议开源，请遵守开源协议。
