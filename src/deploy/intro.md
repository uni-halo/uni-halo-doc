# 部署须知

> 本教程帮助你安装和使用 `uni-halo`，感谢你的使用和支持。部署前请务必阅读并理解以下内容，这里的说明非常重要。

::: tip 重要说明

- uni-halo v3.x 已支持通过插件（[UniHalo 配置](https://github.com/uni-halo/uni-halo-plugin)）完成绝大多数配置，无需再修改源码配置。
- 如果你不想分目录查看教程，可以直接看完整版：[完整的部署流程](full-content.md)。

:::

## 1. 前置说明

- `uni-halo` 的接口基于 `Halo 2.x` 应用提供的开放 API，所以必须使用 Halo 作为站点程序（插件要求 Halo ≥ 2.26）。
- `uni-halo` 基于 `uni-app` + `unibest` 脚手架开发，**无需 HBuilderX**，使用命令行开发即可，但发布微信小程序仍需要 `微信开发者工具`。
- 环境要求：`Node.js >= 20`、`pnpm >= 9`。
- 发布到小程序，必须注册一个 `微信小程序账号`，并根据小程序要求进行 `备案` 和 `认证`。
- 部署的 Halo 站点域名必须已经通过 `工信部备案`。
- 部署的 Halo 站点域名必须支持 `SSL` 访问，也就是 `https://你的域名`。

::: danger ⚠️ 重要提醒：请谨慎选择小程序主体类型

uni-halo 属于博客/资讯内容类小程序。根据微信小程序平台规则，**个人主体的小程序不允许发布时选择「资讯」「文摘」「博客」等 content 类目**，强行发布或后补内容存在被平台**下架、封禁或要求整改**的风险。

因此强烈建议：

- **使用企业、个体工商户等非个人主体**注册小程序账号，并开通对应的内容类目；
- 如果仅有个人主体，请先了解微信官方对个人小程序类目的限制，再决定是否部署，避免运营一段时间后账号被封导致辛苦运营的内容丢失。

微信官方规则可能随时调整，请以 [微信小程序平台常见拒绝情形](https://developers.weixin.qq.com/miniprogram/product/reject.html) 的最新说明为准。因主体类型或类目问题导致的下架、封禁，本项目作者不承担责任。

:::

以上条件均满足的情况下，我们就可以继续往下进行了。

## 2. 相关文档

本教程所有可能使用到的相关链接。

### uni-halo

- uni-halo 官网：https://uni-halo.ialley.cn
- uni-halo 文档：https://uni-halo-doc.ialley.cn
- uni-halo 仓库：https://github.com/uni-halo/uni-halo
- uni-halo 插件：https://github.com/uni-halo/uni-halo-plugin
- 应用市场：https://www.halo.run/store/apps/app-aukgwe3y

### uni-halo 依赖插件（Halo 应用市场）

除核心的 `UniHalo 配置` 插件外，评论、搜索、友链、图库、瞬间、投票、数据看板等能力依赖各自插件，按需安装：

- UniHalo 配置（必须）：https://www.halo.run/store/apps/app-aukgwe3y
- 评论组件：https://www.halo.run/store/apps/app-YXyaD
- 搜索组件：https://www.halo.run/store/apps/app-DlacW
- 链接管理：https://www.halo.run/store/apps/app-hfbQg
- 图库管理：https://www.halo.run/store/apps/app-BmQJW
- 瞬间：https://www.halo.run/store/apps/app-SnwWD
- 投票管理：https://www.halo.run/store/apps/app-veyvzyhv
- 数据看板：https://www.halo.run/store/apps/app-rtnbbgfk

完整清单见 [插件配置 - 安装插件](config.md#_1-安装插件)。

### Halo 应用

- Halo 官网：https://halo.run
- Halo 文档：https://docs.halo.run

### 开发工具

- 微信开发者工具：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
- Node.js（20+）：https://nodejs.org/zh-cn/download
- pnpm：https://pnpm.io/zh/installation

### 账号申请

- 微信公众平台（小程序）：https://mp.weixin.qq.com
- DCloud 开发者（APP 打包时需要）：https://dev.dcloud.net.cn

## 3. 部署流程总览

整体部署分为四个阶段，可以按顺序阅读对应章节：

| 阶段 | 内容 | 文档 |
|------|------|------|
| 一 | 准备工作：账号、环境、源码 | [准备工作](preparation.md) |
| 二 | 安装并配置 Halo 配置插件 | [插件配置](config.md) |
| 三 | 配置应用环境变量并本地运行 | [应用配置](app-config.md) / [本地运行](run.md) |
| 四 | 发布上线 | [发布小程序](wx-release.md) / [发布 APP](app-release.md) |

## 4. 作者推荐

如果有需要购买专业版 `Halo` 或者 `1Panel` 的用户，可以通过以下链接购买，使用推荐码可以优惠。

- 优惠链接：https://www.lxware.cn/?code=HJfS5bBK
- 优惠推荐码：HJfS5bBK
