# 配置指南

当前为应用和插件配置指南。

## 4. 插件配置

### 4.1 安装插件

`uni-halo` 需要使用到的插件列表如下：

- 配置插件：https://www.halo.run/store/apps/app-ryemX
- 评论组件：https://www.halo.run/store/apps/app-YXyaD
- 搜索组件：https://www.halo.run/store/apps/app-DlacW
- 链接管理：https://www.halo.run/store/apps/app-hfbQg
- 图库管理：https://www.halo.run/store/apps/app-BmQJW
- 瞬间插件：https://www.halo.run/store/apps/app-SnwWD
- 投票管理：https://www.halo.run/store/apps/app-veyvzyhv

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

#### 4.1.7 投票管理

用于提供投票功能, 可以在文章中添加投票功能, 并可以在投票管理中查看投票结果。

![PixPin_2025-08-24_21-27-45.png](https://blog.xiaoxiaomo.cn/upload/PixPin_2025-08-24_21-27-45.png)

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
