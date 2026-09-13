# 技术栈

这里将会介绍本项目使用到的相关技术，帮助您了解本项目和二次开发的可能性。

## 应用技术栈

### 核心框架

- [**uni-app**](https://uniapp.dcloud.net.cn/)

采用主流的多端框架 `uni-app` 进行开发，一套源码可编译为微信小程序、APP、H5 等多端应用。

官方文档：https://uniapp.dcloud.net.cn/

- [**unibest**](https://unibest.tech/)

本项目基于 `unibest` 脚手架搭建，它是集成了工程化、类型安全、规范化的 uniapp 最佳实践模板。

官方文档：https://unibest.tech/

- [**Vue3 + TypeScript + Vite**](https://cn.vuejs.org/)

使用 Vue3 组合式 API 与 TypeScript 开发，Vite 提供极速的开发与构建体验。

### UI 与样式

- [**wot-ui**](https://wot-ui.cn/)

uniapp 生态中 UI 非常美观的组件库，本项目使用其 v2 版本。

官方文档：https://wot-ui.cn/

- [**UnoCSS**](https://unocss.dev/)

即时原子化 CSS 引用引擎，项目 UI 样式优先使用原子类。

官方文档：https://unocss.dev/

### 数据与网络

- [**alova**](https://alova.js.org/zh-CN/)

请求策略库，配合 `@alova/adapter-uniapp` 适配器处理接口请求。

官方文档：https://alova.js.org/zh-CN/

- [**pinia**](https://pinia.vuejs.org/zh/)

Vue 官方推荐的状态管理库，配合 `pinia-plugin-persistedstate` 实现状态持久化。

### 其他依赖

- [**mp-html**](https://github.com/jin-yufeng/mp-html)

强大的小程序富文本组件，用于文章详情等 markdown 内容渲染。

- [**z-paging**](https://z-paging.zxlee.cn/)

分页组件，用于文章列表等场景的加载更多与下拉刷新。

- [**dayjs**](https://day.js.org/zh-CN/)

轻量级日期处理库。

- [**vue-i18n**](https://kazupon.github.io/vue-i18n/zh/)

国际化支持，内置中文/英文语言包。

## 插件技术栈

配置插件 [uni-halo-plugin](https://github.com/uni-halo/uni-halo-plugin) 使用：

- **Java 21 + Gradle**：插件后端，基于 [Halo 插件开发规范](https://docs.halo.run/developer-guide/plugin/introduction)（要求 Halo ≥ 2.26）
- **Vue3 + TypeScript**：插件控制台前端（`ui/` 目录），随插件一起打包

## 相关技术文档

- Halo 官方文档：https://docs.halo.run
- uni-app 官方文档：https://uniapp.dcloud.net.cn/
