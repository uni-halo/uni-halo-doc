# 调试预览

该内容会引导您进行发布微信小程序前的预览工作。

## 域名白名单

由于微信小程序的限制，您必须将您的域名添加到微信小程序的域名白名单中，否则无法正常访问，一般配置如下内容：

- 接口请求地址：一般为你的博客域名（也就是 `config/token.config.js` 中的 `BASE_API` 字段的值）
- 图片、文件、视频等静态资源下载地址；
- uniapp 官方统计地址：`https://tongji.dcloud.io`

具体操作，登录微信小程序后台 `https://mp.weixin.qq.com/` ，找到 `开发管理-服务器域名` ，点击右上角的修改按钮，开始配置，如图所示：

![https://img.925i.cn/file/a9d3d25a1d2b4df39624f.png](https://img.925i.cn/file/a9d3d25a1d2b4df39624f.png)

## 打包步骤

开始之前，您必须已经完成 `部署指南` 前面的步骤，否则以下步骤可能无法继续进行。

:::warning 再次提示
同时再次说明，您填写在 `token.config.js` 中的 `BASE_API` 字段的值，必须是携带 `https` 协议的，这很重要，因为微信小程序上线发布必须是该协议，且必须是已经通过国内备案！
:::

### 第 1 步、修改配置

- 1. 重新获取应用 `uni-app应用标识（AppId）`，项目根目录下找到 `manifest.json` 点击 `基础配置` 找到 `uni-app应用标识（AppId）` 右侧的 `重新获取` 按钮并点击重新获取即可， 如图所示：

![https://img.925i.cn/file/91da5f8b16c19a24bc524.png](https://img.925i.cn/file/91da5f8b16c19a24bc524.png)

- 2. 登录注册好的微信小程序后台 [`微信公众平台`](https://mp.weixin.qq.com/)

找到左侧菜单 `设置-帐号信息`下的 `AppID(小程序ID)` 复制该值，如图所示：

![https://img.925i.cn/file/b0bebb03a839adb53d1e5.png](https://img.925i.cn/file/b0bebb03a839adb53d1e5.png)

- 3. 回到 `HBuilder X` 开发工具中，在 `uni-halo` 项目根目录下找到 `manifest.json` ，点击 `微信小程序配置` 找到 `微信小程序AppID` 输入框，粘贴刚才复制的内容（此步骤不操作，无法在开发者工具中调试），如图所示：

![https://img.925i.cn/file/de0bf50c9958c39ce6845.png](https://img.925i.cn/file/de0bf50c9958c39ce6845.png)

- 4. 配置微信小程序的业务域名，也就是 api 接口白名单，

登录微信小程序后台，找到 `开发管理-开发设置` 如图所示：

![https://img.925i.cn/file/db81a7b8cfaa4ee669cf8.png](https://img.925i.cn/file/db81a7b8cfaa4ee669cf8.png)

向下滚动，找到 `服务器域名` 点击右侧修改按钮，将您的域名（也就是在 [博客信息配置](/deploy/config.html#二、博客信息配置) 中的 `BASE_API` 字段的值分别写入 `request合法域名` `uploadFile合法域名` 和 `downloadFile合法域名` 列表中，点击保存即可，如图所示：

![https://img.925i.cn/file/de06474bb735a49b59205.png](https://img.925i.cn/file/de06474bb735a49b59205.png)

- 5. 打开微信开发者工具，设置-安全-服务端口，（此步骤未操作无法跳转开发者工具运行）

![https://img.925i.cn/file/ec9df22ccaabee84e5f4e.jpg](https://img.925i.cn/file/ec9df22ccaabee84e5f4e.jpg)

### 第 2 步、编译并预览

- 1. 在 `HBuilder X` 菜单栏点击 `运行` ，选择 `运行到小程序模拟器 -> 微信开发者工具-uni-halo-2.0`，如图所示：

![https://img.925i.cn/file/196f7d6975ad0963b4868.png](https://img.925i.cn/file/196f7d6975ad0963b4868.png)

- 2. 在弹出的窗口中，可以直接预览您的小程序

说明：在最下方 `页面路径` ，可以查看到当先访问的页面位置，如果有想要修改的地方，可以在 `HBuilder X` 开发工具中找到对应文件进行更改操作。

![https://img.925i.cn/file/d0f731b66652e31719d62.png](https://img.925i.cn/file/d0f731b66652e31719d62.png)

- 3. 在电脑端中预览没有问题后，建议选择 `真机调试`，点击后会生成二维码，在操作时可以选择对应平台的调试二维码，在实机中模拟调试才会发现更多需要修改的问题，如图所示：

![https://img.925i.cn/file/f061107dc2421882d2102.png](https://img.925i.cn/file/f061107dc2421882d2102.png)

