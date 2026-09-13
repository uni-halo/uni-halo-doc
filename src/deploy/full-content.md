# 完整的部署流程

> 本教程是帮助你安装和使用 `uni-halo`，感谢您的使用和支持，如有什么疑问或者错误的地方，欢迎提出。部署前的准备工作，请您必须阅读和理解以下内容，这里的说明非常重要，请您务必阅读。


::: tip 重要说明

uni-halo v2.0  已经支持通过插件（[UniHalo 配置](https://github.com/ialley-workshop-open/plugin-uni-halo)）配置，无需再本地配置。

:::


## 1. 前置说明

- `uni-halo` 的接口是基于 `Halo 2.0` 应用程序提供的开放接口，所以如果不是使用该程序作为网站的，将无法使用本程序。
- `uni-halo` 基于 `uniapp` 开发，所以需要有 `dcloud开发者账号` ，用于 `登录开发工具` 和 `编译`。
- `uni-halo` 发布到小程序，必须注册一个 `微信小程序账号`，并根据小程序要求进行 `备案`和 `认证`。
- 部署的 `Halo 2.0` 应用程序提供的域名地址必须已经通过 `工信部备案`。
- 部署的 `Halo 2.0` 应用程序提供的域名地址必须支持 `SSL` 访问，也就是 `https://你的域名`。

以上条件均满足的情况下，我们就可以继续往下进行了。

## 2. 相关文档

本教程所有可能使用到的相关的链接。

### uni-halo

- uni-halo 官网：https://uni-halo.925i.cn
- uni-halo 仓库：https://github.com/ialley-workshop-open/uni-halo
- uni-halo 插件：https://www.halo.run/store/apps/app-ryemX


### Halo 应用

- Halo 官网：https://halo.run
- Halo 文档：https://docs.halo.run

### 开发工具

- HBuilder X：https://www.dcloud.io/hbuilderx.html
- 微信开发工具：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
- NodeJS（14+）：https://nodejs.org/zh-cn/download


### 账号申请
- DCloud开发者：https://dev.dcloud.net.cn
- 微信公众平台：https://mp.weixin.qq.com


### 作者推荐

如果有需要购买专业版 `Halo` 或者 `1panel` 的用户，可以通过以下链接，或者购买时使用推荐码可以优惠。

- 优惠链接： https://www.lxware.cn/?code=HJfS5bBK
- 优惠推荐码：HJfS5bBK


## 3. 安装Halo

`uni-halo` 的接口是基于 `Halo` 应用程序提供的开放接口，同时 `uni-halo` 也是专门适配 `Halo` 的移动端开源应用程序。

关于 `Halo` 的安装和使用，本教程不进行赘述，请直接查看 `Halo` 官网相关文档.


![PixPin_2025-08-15_18-09-25.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_18-09-25.png)



## 4. 插件配置

### 4.1 安装插件

`uni-halo` 需要使用到的插件列表如下：

- 配置插件：https://www.halo.run/store/apps/app-ryemX
- 评论组件：https://www.halo.run/store/apps/app-YXyaD
- 搜索组件：https://www.halo.run/store/apps/app-DlacW
- 链接管理：https://www.halo.run/store/apps/app-hfbQg
- 图库管理：https://www.halo.run/store/apps/app-BmQJW
- 瞬间插件：https://www.halo.run/store/apps/app-SnwWD

以上的插件，可以直接访问地址去安装（推荐部署好你自己的 `Halo` 应用后，在应用后的插件中进行搜索安装）相关插件截图，如下：

#### 4.1.1 配置插件（UniHalo）

配置插件是 `uni-halo` 的核心插件，用于配置 `uni-halo` 各项功能。

![PixPin_2025-08-15_18-56-41.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_18-56-41.png)

#### 4.1.2 评论组件

用于给应用提供用户评论功能。

![PixPin_2025-08-15_18-57-35.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_18-57-35.png)


#### 4.1.3 搜索组件

用于给应用提供文章和瞬间的搜索功能。


![PixPin_2025-08-15_18-58-20.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_18-58-20.png)


#### 4.1.4 链接管理

用于提供展示友情链接功能。


![PixPin_2025-08-15_18-58-47.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_18-58-47.png)


#### 4.1.5 图库管理

用于提供 图片图库展示功能。


![PixPin_2025-08-15_18-59-08.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_18-59-08.png)


#### 4.1.6 瞬间插件

用于提供瞬间内容展示功能，与文章不同，更加轻量化的功能，类似日记。


![PixPin_2025-08-15_18-59-28.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_18-59-28.png)



### 4.2 配置插件

#### 4.2.1 配置 TOKEN

这里的 `token` 就是我们应用的 `个人令牌`，往下的我们会介绍如何创建。

重要：因为 token 会暴露在 配置接口中，所以我们不应该给全部的权限，只给 `查看` 的权限，在创建 token 的时候，我们只需要勾选以下的权限：

- UniHalo 配置：`配置管理（UniHalo)`
- 评论组件：`评论查看`
- 搜索组件：-
- 链接管理：`链接查看`
- 图库管理：`图库查看`
- 瞬间插件：`瞬间查看`

#### 4.2.2 创建 TOKEN

1. 进入应用后台 `你的域名/console`
2. 点击左下角头像右边的 `用户图标`

![PixPin_2025-08-15_19-58-05.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_19-58-05.png)

3. 进入页面后，点击菜单 `我的`

![PixPin_2025-08-15_19-58-48.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_19-58-48.png)

4. 点击 `个人令牌`，点击该项后，再点击 `新建` 按钮

![PixPin_2025-08-15_19-59-21.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_19-59-21.png)

5. 在弹出来的新建弹窗中，填写好相关的信息，然后按照上方 `配置 TOKEN` 提到的权限进行勾选，选择完权限后点击 `提交` 按钮，生成我们的 `个人令牌`

![PixPin_2025-08-15_20-00-21.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-00-21.png)

![PixPin_2025-08-15_20-00-52.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-00-52.png)

6. 点击 `复制` 按钮，将 `个人令牌` 复制到剪贴板

![PixPin_2025-08-15_20-01-33.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-01-33.png)

7. 接着点击 左侧底部头像旁边的 `设置图标` 回到我们的管理控制台，点击 `插件 -> UniHalo配置 -> 基本配置` 找到我们的 `Token配置 -> 个人令牌` 填入刚才创建和复制的 `个人令牌`，点击保存即可。

![PixPin_2025-08-15_20-02-04.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-02-04.png)

![PixPin_2025-08-15_20-03-48.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-03-48.png)


#### 4.2.3 审核配置

::: tip 审核模式

为了能够更容易通过审核，增加审核模式：

- 1. 在`UniHalo配置`插件后台开启审核模式；
- 2. 将 `uni-halo` 项目中的 `config/unihalo.mock.json` 拷贝出来（拷贝后删除项目中`unihalo.mock.json`文件）进行修改并上传到您的服务器中，需要在浏览器地址栏可以访问；
- 3. 关于 `uni-halo` 项目中的 `config/unihalo.mock.json`

:::


::: details 审核模拟数据

注意：json文件中不允许包含注释 `// xxx` 部分的内容，如果是复制以下的代码，请一定要删除 注释内容

```json
{
	// 首页页面
  "home": {
		// 首页：轮播图
    "bannerList": [
			{
				"title": "文章标题",
				"desc": "文章描述",
				"cover": "文章封面图",
				"time": "文章日期，如：2024-05-25 08:59:00"
			}
			// 添加更多...
    ],
		// 首页：分类列表（审核模式下，空数据将不会显示分类）
    "categoryList": [
			{
				"title": "分类名称",
				"cover": "分类封面，如：/upload/uni_halo_ad_cover.png",
				"desc": "（可选）描述",
				"time": "（可选）日期，如：2024-05-25 08:59:00"
			}
			// 添加更多...
    ],
		// 首页：文章列表
    "postList": [
			{
				"title": "文章标题",
				"desc": "文章描述",
				"cover": "文章封面图",
				"time": "文章日期，如：2024-05-25 08:59:00"
			}
			// 添加更多...
    ]
  },
	// 分类页面
  "category": {
    "list": [
      {
        "title": "分类名称",
        "cover": "分类封面，如：/upload/uni_halo_ad_cover.png",
        "desc": "（可选）描述",
        "time": "（可选）日期，如：2024-05-25 08:59:00"
      }
			// 添加更多...
    ]
  },
	// 瞬间页面
  "moments": {
    "list": [
      {
        "content": "瞬间内容",
        "time": "日期，如：2024-05-25 08:59:00",
        "images": [
					"图片链接，如：https://xxx/xx.png"
					// 添加更多...
        ]
      }
    ]
  },
	// 图库页面
  "gallery": {
    "list": [
			"图片链接，如：https://xxx/xx.png"
			// 添加更多...
		]
  },
	// 归档页面
  "archives": {
    "list": [
      {
        "title": "文章标题",
        "desc": "文章描述",
        "cover": "文章封面图",
        "time": "文章日期，如：2024-05-25 08:59:00"
      }
			// 添加更多...
    ]
  }
}
```

:::

::: details 注意事项和建议

审核配置主要是用于个人小程序有时候无法通过审核的问题，由于我们的小程序可能已经发布了一些 文章内容可能涉及到一些分享的性质，官方可能不会给过审，所以在提交审核的时候，可以使用该模式。

使用审核模式的时候要注意：

- 数据格式：`uni-halo` 作者提供了一些审核模式的示例数据，按格式参考修改即可，否则有可能解析失败。
- 数据内容：内容方面，作者建议文章简单添加几篇 `个人心情日记` 为内容的文章，瞬间也是一样。

:::

![PixPin_2025-08-15_19-55-15.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_19-55-15.png)

*注：如果你的 网站还没有什么文章内容，可以在提交审核的时候不开启审核模式，直接使用网站的原始内容即可。*


#### 4.2.4 其他配置

其他配置没有特别的要求，如果遇到什么疑问，可以到 `uni-halo交流反馈（QQ群：632969367）` 进行交流。


#### 4.2.5 第三方插件配置

第三方插件可能需要进行购买，才能使用，如果没有购买使用，请忽略。如果已经进行购买，配置的时候，请参考 相关的第三方插件的配置说明文档，如果不会配置，可以联系第三方插件的作者辅助配置。

![PixPin_2025-08-15_20-08-39.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_20-08-39.png)


### 4.2.6 恋爱配置

这里是恋爱页面相关的配置，如果已经开通恋爱功能，可以在这里配置恋爱页面相关的内容。

#### 4.2.6.1 预览

![恋爱配置](https://blog.xiaoxiaomo.cn/upload/uni-halo-p-7.png)

获取相册标识,获取恋爱相册的步骤如下：

1. 登录后台，按下键盘上的 `F12` 键，打开控制台
2. 在控制台找到 `网络` 选项
3. 点击左侧菜单的 `图库`
4. 找到 `网络` 请求中的 `photogroups` 请求，点击它查看预览
5. 找到 `预览` 结果中你需要的分组的 `metadata.name` 的值，复制它并粘贴到组件的恋爱日记分组标识中。

相关截图如下:

![获取恋爱相册](https://img.925i.cn/file/8727f06e0091cdd590583.png)

![配置恋爱相册标识](https://img.925i.cn/file/182602e202e0d450a726c.png)


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


## 9. 发布小程序

### 9.1 配置服务器域名

在 微信小程序后台，找到菜单 `管理-开发管理-服务器域名`

![PixPin_2025-08-15_22-59-38.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_22-59-38.png)

点击 `修改` 按钮后弹出，配置修改的弹窗，分别在 `request合法域名` `uploadFile合法域名`  `downloadFile合法域名` 中填写你的博客域名，点击 `保存并提交` 即可。

![PixPin_2025-08-15_23-03-18.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_23-03-18.png)


### 9.2 预览

在 `HBuilder X` 开发工具中，点击菜单栏 `构建 -> 小程序-微信`

![image-fWTY.png](https://blog.xiaoxiaomo.cn/upload/image-fWTY.png)

接着，在弹窗中点击 `构建` 按钮，等待编译构建

![PixPin_2025-08-15_22-04-17.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_22-04-17.png)

构建完成后会自动打开微信开发工具

![PixPin_2025-08-15_22-28-46.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_22-28-46.png)

点击微信开发工具上方的 `预览` 按钮，等待片刻就可以使用微信扫码预览

![PixPin_2025-08-15_22-30-35.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_22-30-35.png)


### 9.3 部署

在预览没有问题的时候，我们依然在 `微信开发工具` 中，点击右上角的 `上传` 按钮，在弹出的弹窗中，点击 `确定`

![PixPin_2025-08-15_22-33-46.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_22-33-46.png)

接着继续 在弹出弹窗中 继续填写 `版本号` 和 `项目备注`，最后点击 `提交` 按钮，等待片刻上传成功，会显示一个提示。

![PixPin_2025-08-15_22-36-10.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_22-36-10.png)


### 9.4 体验

这里的体验，可以发给其他人进行体验，但是目前还无法搜索到，只能通过二维码发送给其他人体验。

在上一步 `部署` 完成后，我们打开 微信管理后台，找到菜单 `管理-版本管理-开发版本`，找到蓝色的 `体验版` 按钮，点击后可以弹出体验版的二维码，手机扫码后，要是没有问题，就可以往下继续，提交审核。

![PixPin_2025-08-15_22-39-46.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_22-39-46.png)


### 9.5 审核

在微信小程序后台提交审核，找到菜单 `管理-版本管理-开发版本`，点击右侧的 `提交审核` 按钮

![PixPin_2025-08-15_21-51-03.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-51-03.png)

进入审核信息填写界面，填写审核信息，然后点击提交审核即可。

推荐填写：*个人日记小程序，用于记录个人工作和生活*

![PixPin_2025-08-15_21-53-04.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-53-04.png)

![PixPin_2025-08-15_21-55-34.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-15_21-55-34.png)

::: details 提交审核时候的建议

为了能够更容易通过审核，作者建议：

- 1. 在填写审核信息的时候，若您的小程序资质是 `个人资质` 尽可能将您的描述信息写为个人类型的内容，如参考作者的小程序描述：**这里是我的个人日记小程序，用于记录个人的工作和生活。**

- 2. 上传截图的时候，请不要截图有关于社交部分的内容，比如：评论区

- 3. 文章内容可以先将带有分享性质的文章先进行下架，保留一些个人的日志文章等等

:::

### 9.6 上线

等待审核通过，通过后还是在 `管理-版本管理-审核版本` 中可以看到，然后点击发布上线即可。
