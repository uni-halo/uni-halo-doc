# 准备工作

这里将介绍部署前需要准备的工作：账号、开发环境和源码。

## 1. 准备账号

### 1.1 说明

根据前置说明，需要准备以下账号：

- 微信小程序账号：用于小程序的部署和上线
- DCloud 开发者账号：仅在打包 APP 时需要

### 1.2 注册微信小程序账号

访问 https://mp.weixin.qq.com 进行注册，填写所需资料即可。

### 1.3 注册 DCloud 开发者账号

访问 https://dev.dcloud.net.cn/ 进行注册，打包 APP 时使用。

## 2. 开发环境

uni-halo v3.x 基于 `unibest` 脚手架，**全程命令行开发，无需 HBuilderX**。需要安装：

- Node.js（>= 20）
- pnpm（>= 9）
- 微信开发者工具（发布小程序用）

### 2.1 安装 Node.js

如果本地已有 Node.js 环境（`node -v` 输出 >= 20），可以跳过。

下载地址：https://nodejs.org/zh-cn/download

### 2.2 安装 pnpm

```bash
npm install -g pnpm
```

### 2.3 安装微信开发者工具

访问 https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html 下载安装即可。

::: tip 提示
微信开发者工具中需要开启「设置 - 安全设置 - 服务端口」，以便命令行工具能够自动拉起开发者工具。
:::

## 3. 准备源码

### 3.1 下载源码

:::: code-group

```bash [Github]
git clone https://github.com/uni-halo/uni-halo.git
```

```bash [Gitee]
git clone https://gitee.com/uni-halo/uni-halo.git
```

::::

也可以直接下载 [发布版压缩包](https://github.com/uni-halo/uni-halo/releases)。

### 3.2 安装依赖

进入项目目录，使用 pnpm 安装依赖（项目强制使用 pnpm）：

```bash
cd uni-halo
pnpm install
```

## 4. 准备 Halo 站点

uni-halo 依赖 Halo 站点提供的数据与接口，部署前请确保：

1. 已部署 Halo 2.x 站点（版本 ≥ 2.26），可参考 [Halo 官方文档](https://docs.halo.run/getting-started/install)；
2. 站点域名已完成备案并支持 `https` 访问；
3. 已安装并启用 `UniHalo 配置` 插件，具体见 [插件配置](config.md)。

## 5. 修改配置

uni-halo v3.x 的配置分为两部分：

- **应用环境变量**：在 `env/.env` 中配置 AppID 与后端地址，详见 [应用配置](app-config.md)；
- **插件配置**：在 Halo 后台的插件配置页面进行，详见 [插件配置](config.md)。

其中微信小程序 AppID 需要在微信小程序后台「设置 - 基本设置 - 账号信息」中查看，填写到 `env/.env` 的 `VITE_WX_APPID` 中。
