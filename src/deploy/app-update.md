# 应用更新配置

该配置，只适用于 编译为安卓或者 IOS 时候，其他平台无需配置

## 一、服务端配置（uniCloud）

说明：这里可以使用 [uniCloud](https://unicloud.dcloud.net.cn/pages/login/login) 云空间服务管理我们的应用版本，[uniCloud 教程](https://uniapp.dcloud.net.cn/uniCloud/)
<br/>

- 1、按照 uniCloud 教程注册登录后（可使用原来的 DCloud 账号登录），这里推荐创建阿里云的云服务空间（主要是免费），到此我们的云空间就创建完成了（这里可以跳过，使用下方`3`的时候，也可以新建，创建完成后点击详情进入云空间找到`前端托管`开通云空间服务 您可以配置自己的域名，这个域名是用于后台管理的，也可以使用默认的域名；
- 2、接下来：我们需要在插件市场下载一个项目版本管理的程序 [uni-admin](https://ext.dcloud.net.cn/plugin?id=3268)，然后将项目上传至我们的云空间，关于 `uni-admin` 项
- 3、找到在`uni-admin`项目下`uniCloud`目录，右键`云服务空间空间初始化向导`，选择一个云服务空间，然后一直下一步下一步就行；
- 4、初始化完成后，我们需要把`uni-admin`项目部署，右键 `uni-admin` 选择 `发行-上传网站到服务器`，选择刚才的云空间确定上传，等待上传完成就好了；
- 5、回到云服务空间后台，此时打开默认域名地址就可以访问我们的搭建的版本升级管理后台了。

## 二、客户端配置（uni-halo）

客户端配置升级组件，`uni-halo`在开发的时候就已经配置好了升级组件[uni-upgrade-center - App](https://ext.dcloud.net.cn/plugin?id=4542)，所以此处不需要再操作导入，我么只需要操作的是：

- 1、找到 uni-halo 项目根目录下的 `uniCloud`文件夹，右键`关联云空间或项目`，选择你在上一步`服务端配置（uniCloud）`中创建的云空间名称
- 2、找到 uni-halo 项目根目录下的 `uniCloud/cloudfunctions`文件夹，右键选择`上传所有云函数、公共模块及actions`和`下载所有云函数、公共模块及actions`
- 3、找到 uni-halo 项目根目录下的 `uniCloud/database`文件夹，右键选择`上传所有DB Scheme及扩展校验函数`即可
- 4、若中途有提示函数存在，或者需要覆盖的情况，直接覆盖即可！

::: warning 新版本发行更新注意事项

- 应用程序，客户端（uni-halo）端每次更新的时候，一定要记得修改 应用的版本号，
- 并且每次版本必须大于当前已发布的版本，版本号在`manifest.json`文件中的`应用版本名称`和`应用版本号`

:::
