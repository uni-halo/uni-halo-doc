# 发布 APP

该内容会引导您将 uni-halo 发布为原生 APP（Android / iOS）。构建方式基于 [unibest](https://github.com/feige996/unibest) 脚手架，与 unibest 官方文档的[运行发布](https://unibest.tech/base/11-build#发布)一致；如本文未能覆盖你的场景，可直接前往该文档查看。

## 1. 前置准备

1. 安装 [HBuilderX](https://www.dcloud.io/hbuilderx.html)（建议标准版，打包时云打包会自动安装所需插件）
2. 注册 [DCloud 开发者账号](https://dev.dcloud.net.cn/)（云打包、生成证书均需要）
3. 获取属于你自己的 **DCloud AppID**：登录 [DCloud 开发者中心](https://dev.dcloud.net.cn/) → 创建应用 → 获取 AppID

## 2. 配置 AppID

将获取到的 AppID 填入 `env/.env`（或对应环境的 env 文件）中的 `VITE_UNI_APPID` 字段：

```ini
VITE_UNI_APPID = '你的DCloud AppID'
```

![env 配置 VITE_UNI_APPID](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/10-env-VITE_UNI_APPID.png)

::: warning 注意
请勿直接使用项目模板中自带的 AppID（`H5D60B8CD`），打包冲突可能导致打包失败或覆盖他人应用信息。云打包时 DCloud 会校验 AppID 归属。
:::

## 3. 开发调试

```bash
pnpm dev:app
```

构建完成后，打开 HBuilderX → `文件 - 导入 - 从本地目录导入`，选择生成的 `dist/dev/app` 目录：

![HBuilderX 从本地目录导入](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/02-HBuilderX-从本地目录导入.png)

> 若导入后项目类型识别异常，可右键项目 → `重新识别项目类型`。

![重新识别项目类型](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/03-HBuilderX-重新识别项目类型.png)

然后选择 `运行 - 运行到手机或模拟器`，开发时优先使用模拟器；真机调试时选择 `运行到 iOS App 基座`（iOS）或对应 Android 设备：

![运行到 iOS 模拟器基座](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/04-运行到iOS模拟器基座.png)

![选择 iOS 模拟器设备](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/05-选择iOS模拟器设备.png)

如需配置模拟器，可参考 uni-app 官方文档 [安装模拟器](https://uniapp.dcloud.net.cn/tutorial/run/installSimulator.html)。

## 4. 构建生产版本

```bash
pnpm build:app
```

构建产物在 `dist/build/app` 目录。随后在 HBuilderX 中 `文件 - 导入 - 从本地目录导入` 该目录。

## 5. 云打包

在 HBuilderX 中选中项目，点击菜单 `发行 - 原生App-云打包`：

![发行 - 原生App云打包](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/07-发行-原生App云打包.png)

以 Android 为例，在打包面板中：

1. 勾选 `Android（apk包）`
2. 确认 `Android包名`（默认可保持自动生成）
3. 证书选择 `使用云端证书`（正式发布建议生成并使用自有证书，[如何生成证书](https://ask.dcloud.net.cn/article/35985)）
4. 选择 `打正式包`
5. 点击 `打包`，等待云端打包完成（可在 `发行 - 原生App-查看云打包状态` 查看进度）

![云打包配置（Android）](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/08-云打包配置-Android.png)

打包成功后会返回 APK 下载链接，可直接安装测试或分发上架。

::: tip iOS 打包
iOS 需要苹果开发者账号与相关证书（描述文件），并在 macOS 上操作，流程相对复杂。可勾选 `iOS（ipa包）` 并按面板提示填写 iOS 证书信息；详细流程可参考 [DCloud iOS 打包文档](https://ask.dcloud.net.cn/article/198)。
:::

## 6. 打包常见问题

### 6.1 版本不匹配（白屏 / 弹窗提示）

HBuilderX 版本需要与项目依赖的 uni-app SDK 版本匹配。查看 `package.json` 中 `@dcloudio/uni-app` 的版本号（如 `3.0.0-4010420240430001` 表示 SDK 版本 `4.14`）：

![uni-app SDK 版本](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/12-依赖版本-uni-app-SDK.png)

若 HBuilderX 版本低于 SDK 版本，打包或真机运行时可能出现如下提示：

![HBuilderX 版本与 SDK 不匹配](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/13-HBuilderX版本与SDK不匹配.png)

![真机提示版本不匹配](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/14-真机提示-版本不匹配.png)

处理方式：

- 点击 `忽略` 后若可正常使用则无需处理（项目 `manifest.config.ts` 已配置 `app-plus.compatible.ignoreVersion: true`）
- 若出现白屏等异常，请将 HBuilderX 升级到与 uni-app SDK 一致的版本

### 6.2 minSdkVersion 打包解析失败

云打包若出现解析问题，可将 `manifest.config.ts` 中 Android 的 `minSdkVersion` 调低（最低 `21`，不能低于 `21`；项目模板当前为 `21`）：

![Android minSdkVersion 设置](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/11-manifest-Android设置-minSdkVersion.png)

### 6.3 多 HBuilderX 版本共存

如需同时开发其他项目，可安装多个 HBuilderX 版本（macOS 直接重命名应用；Windows 安装到不同目录）：

![Mac 多版本 HBuilderX](https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/docs/app-release/15-Mac多版本HBuilderX.png)

## 7. 应用更新

APP 端内置了升级弹窗组件（`uh-upgrade`），配合插件端的应用信息与版本管理实现应用内更新提示，具体见 [控制台功能 - 应用管理](/plugin/console)。
