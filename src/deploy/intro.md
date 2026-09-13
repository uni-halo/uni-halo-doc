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

以上条件均满足的情况下，我们就可以继续往下进行了。

## 2. 相关文档

本教程所有可能使用到的相关链接。

### uni-halo

- uni-halo 官网：https://uni-halo.ialley.cn
- uni-halo 文档：https://uni-halo-doc.ialley.cn
- uni-halo 仓库：https://github.com/uni-halo/uni-halo
- uni-halo 插件：https://github.com/uni-halo/uni-halo-plugin
- 应用市场：https://www.halo.run/store/apps/app-ryemX

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
