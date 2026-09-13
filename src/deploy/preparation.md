# 准备工作

这里将会介绍，部署前需要准备的工作

## 5. 准备账号

### 5.1 说明

在之前的 `前置说明` 中提到，要注册两个账号，分别是 `微信小程序账号` 和 `dcloud开发者账号`。

- 微信小程序账号：用于小程序的部署和上线
- dcloud开发者账号：用于登录 `HBuilder X` 开发工具和编译 `uni-halo` 源码为微信小程序

### 5.2 注册 微信小程序账号

访问 https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN 进行注册，填写所需要的资料即可。


### 5.3 注册 dcloud开发者账号

访问 https://dev.dcloud.net.cn/ 进行注册，填写所需要的资料即可。


## 6. 开发环境

开发环境主要分为三个内容，分别是：

- 依赖安装：安装 `nodejs 14+` 版本，用于后续使用 `npm` 安装 `uni-halo` 需要的依赖。
- 源码编译：安装 `HBuilder X` 开发工具，对 `uni-halo` 源码编译 为 `微信小程序` 或者其他平台的源码。
- 预览部署：安装 `微信开发工具`

### 6.1 安装 Nodejs

如果你本地已经有 `nodejs` 环境，可以忽略跳过安装，安装方法和教程，这里不进行赘述，可以询问 AI 工具，或者参考一些其他 nodejs 安装教程进行安装即可。（搜索/提问关键字 xxx系统安装 nodejs ）

下载地址：https://nodejs.org/zh-cn/download

![PixPin_2025-08-15_20-14-46.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-14-46.png)

### 6.2 安装 微信开发工具

访问 下载安装包/免安装包，到本地电脑，具体的安装过程，如有不懂的地方可以询问 AI，或者搜索相关的教程。

![PixPin_2025-08-15_20-38-44.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-38-44.png)


### 6.3 安装 HBuilder X

#### 6.3.1 安装

访问 下载安装包/免安装包，到本地电脑，具体的安装过程，如有不懂的地方可以询问 AI，或者搜索相关的教程。

![PixPin_2025-08-15_20-30-52.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-30-52.png)


#### 6.3.2 登录账号

如果是zip免安装版本，解压后，找到 `HBuilderX.exe` 文件双击运行打开即可，同时还可以提前登录 之前注册的 `dcloud开发者账号`。

![PixPin_2025-08-15_20-34-10.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-34-10.png)


#### 6.3.3 关联 微信开发工具

配置关联打开 `微信开发工具`，为了可以快速在 `HBuilder X` 工具中快速启动 `微信开发工具`。

1. 找到 `微信开发工具` 的安装路径（根路径）
2. 在打开的 `HBuilder X` 界面顶部菜单中，找到 `工具-设置-运行配置`，接着找到 `微信开发工具路径`，将路径复制粘贴过来，或者点击后面的浏览按钮选择路径。

![PixPin_2025-08-15_20-45-50.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-45-50.png)



## 7. 准备源码


### 7.1 下载源码

下载源码的方式有很多种方式，但是最终下载到本地的源码都是一样的。

- 下载方式-克隆：需要了解git
- 下载方式-Fork：需要了解git
- 下载方式-zip：直接下载压缩包到本地，本教程使用该方式。

#### 7.1.1 Gitee

仓库地址：https://gitee.com/ialley-workshop-open/uni-halo

![PixPin_2025-08-15_20-55-29.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-55-29.png)

![PixPin_2025-08-15_20-56-25.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-56-25.png)


#### 7.1.2 Github

仓库地址：https://github.com/ialley-workshop-open/uni-halo

![PixPin_2025-08-15_20-57-29.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-57-29.png)

![PixPin_2025-08-15_20-57-54.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-57-54.png)


### 7.2 导入源码

将我们下载好的源码 zip 文件进行解压，然后导入到 `HBuilder X` 开发工具中。

![PixPin_2025-08-15_21-13-15.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-13-15.png)

点击 `HBuilder X` 左上角的 `文件-导入-从本地文件夹导入`

![image.png](https://blog.xiaoxiaomo.cn/upload/image.png)

![PixPin_2025-08-15_21-18-42.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-18-42.png)

![PixPin_2025-08-15_21-20-40.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-20-40.png)

### 7.3 安装依赖

使用鼠标右键点击项目文件夹名称，点击 `在终端打开`

![image-wSkT.png](https://blog.xiaoxiaomo.cn/upload/image-wSkT.png)

在打开的终端中，输入 `npm install`

![PixPin_2025-08-15_21-26-56.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-26-56.png)

![PixPin_2025-08-15_21-28-16.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-28-16.png)


## 8. 修改配置

### 8.1 修改 uniapp AppID

![PixPin_2025-08-15_21-31-19.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-31-19.png)


### 8.2 修改 微信小程序 AppID

1. 先登录微信小程序的后台，找到 `账号设置`

![PixPin_2025-08-15_21-33-55.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-33-55.png)

2. 点击 `基本设置` 往下滚动，找到 `账号信息-AppID(小程序ID)` 并复制

![PixPin_2025-08-15_21-36-28.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-36-28.png)

3. 回到 `HBuilder X` 开发工具，刚才的配置中找到 `微信小程序配置`，将刚才复制的 `AppID` 粘贴到右侧的输入框中。

![PixPin_2025-08-15_21-39-14.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-39-14.png)


### 8.3 修改 域名

将你的 `Halo` 博客的域名复制，然后回到 `HBuilder X` 工具中，找到项目文件 `config -> uhalo.config.js`
将你的域名，填写到 `BASE_API` 中。

![PixPin_2025-08-15_21-45-47.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-45-47.png)
