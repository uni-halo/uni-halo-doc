# 发布部署

该内容会引导您将源码打包为安卓 APP。

## 打包步骤

开始之前，您必须已经完成 `部署指南` 前面的步骤，否则以下步骤可能无法继续进行。

:::warning 提示
当前应用仅在安卓平台下进行测试（作者无 ios），若您需要打包为 ios 应用，还请您自行测试后继续。
:::

### 第 1 步、修改配置

- 1. 重新获取应用 `uni-app应用标识（AppId）`，项目根目录下找到 `manifest.json` 点击 `基础配置` 找到 `uni-app应用标识（AppId）` 右侧的 `重新获取` 按钮并点击重新获取即可， 如图所示：

![https://img.925i.cn/file/91da5f8b16c19a24bc524.png](https://img.925i.cn/file/91da5f8b16c19a24bc524.png)

- 2. 修改 APP 信息，项目根目录下找到 `manifest.json`， 点击 `基础配置` ，修改 `应用名称` `应用描述` `应用版本名称` `应用版本号` 内容，如图所示：

![https://img.925i.cn/file/d67522429ef06312e7462.png](https://img.925i.cn/file/d67522429ef06312e7462.png)

- 3. 修改 APP 图标，项目根目录下找到 `manifest.json` 点击 `App图标配置` 在 `自动生成图标` 右侧的 `浏览` 按钮并点击选择您的图片，，接着点击 `自动生成所有图标并替换` 按钮即可，如图所示：

![https://img.925i.cn/file/e67ba2e6af86f49e44ed5.png](https://img.925i.cn/file/e67ba2e6af86f49e44ed5.png)

### 第 2 步、准备证书

证书分为两种，一种是直接使用 测试证书，测试正式无需申请和创建，只需要在编译的时候勾选即可。

- 1. 测试证书：公共测试证书的选择，如图所示：

![https://img.925i.cn/file/d3b37e58b51fd5b0cf79f.png](https://img.925i.cn/file/d3b37e58b51fd5b0cf79f.png)

- 2. 自有证书：自有证书需要自己创建，自有证书同时也更安全一些，具体的操作 请查看 [自有证书生成](https://ask.dcloud.net.cn/article/35777)，请参考 uni-app 官方说明，自有证书需要自行填写以下的内容，如图所示：

![https://img.925i.cn/file/ce5f7c9e67ff585f9ec2f.png](https://img.925i.cn/file/ce5f7c9e67ff585f9ec2f.png)

### 第 3 步、编译并发布

- 1. 在 `HBuilder X` 开发工具右键 `uni-halo` 项目名称，选择 `发行 -> 原生App-云打包`，如图所示：

![https://img.925i.cn/file/217b892717f7fd55b8358.png](https://img.925i.cn/file/217b892717f7fd55b8358.png)

- 2. 在弹出的发行信息框中，选择您的打包的应用类型，安卓还是 ios，并选择填写相关的证书信息，[证书说明](/deploy/app-release.html#第-2-步、准备证书)，如图所示：

![https://img.925i.cn/file/704b01cfbd3f112d50a3e.png](https://img.925i.cn/file/704b01cfbd3f112d50a3e.png)

- 3. 填写完相关的证书信息后，点击右下角的打包即可，等待打包完成即可在 `HBuilder X` 控制台中输出应用打包完成后的所在目录，如图所示：

![https://img.925i.cn/file/dfae688e8fb8a1037c5b6.png](https://img.925i.cn/file/dfae688e8fb8a1037c5b6.png)

### 第 4 步、应用更新（可不使用）

更新是指，当前的 APP 发布后，用户可以在线升级，具体操作方式请查看[版本更新说明](/deploy/app-update.html)

待补充...
