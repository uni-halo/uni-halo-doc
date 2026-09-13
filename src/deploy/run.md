# 本地运行

本文介绍如何在本地将 `uni-halo` 运行起来。

## 前置条件

- 已完成 [准备工作](preparation.md)（Node ≥ 20、pnpm ≥ 9、依赖已安装）
- 已完成 [应用配置](app-config.md)（后端地址、微信小程序 AppID）
- 已完成 [插件配置](config.md)（Halo 站点已安装并启用配置插件）

## 第一步、下载源码

:::: code-group

```bash [Github]
git clone https://github.com/uni-halo/uni-halo.git
```

```bash [Gitee]
git clone https://gitee.com/uni-halo/uni-halo.git
```

::::

也可以直接下载 [发布版压缩包](https://github.com/uni-halo/uni-halo/releases)。

## 第二步、安装依赖

```bash
cd uni-halo
pnpm install
```

::: warning 注意
项目强制使用 `pnpm`，使用 `npm` / `yarn` 安装会直接报错。
:::

## 第三步、启动开发

```bash
# 微信小程序（推荐，会自动拉起微信开发者工具）
pnpm dev:mp

# H5
pnpm dev

# APP
pnpm dev:app
```

首次运行微信小程序时，如果未自动打开微信开发者工具，请检查 `env/.env` 中的 `WECHAT_DEVTOOLS_CLI_PATH` 是否正确，并确认微信开发者工具已开启服务端口。

## 第四步、验证

启动成功后：

- 微信小程序：在微信开发者工具中预览，确认首页数据正常加载；
- H5：浏览器访问 `http://localhost:5200`。

如果页面提示接口请求失败，通常是 `VITE_SERVER_BASEURL` 配置不正确，或 Halo 站点 / 配置插件未启用，请回查 [应用配置](app-config.md) 与 [插件配置](config.md)。

## 合入前检查

如果你在二次开发，提交代码前建议跑一遍项目自带的质量门禁：

```bash
pnpm type-check && pnpm lint && pnpm test:run
```
