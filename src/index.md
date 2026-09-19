---
layout: home

title: uni-halo 官方文档
titleTemplate: 一个免费开源可多端编译的移动端博客源码丨微信小程序丨APP应用丨Halo微信小程序丨uni-halo v3.x

hero:
  name: UNI-HALO
  text: 跨平台移动端 · 不止小程序
  tagline: 基于 uni-app + Halo 2.x API 跨平台移动端应用。
  image:
    src: /logo.png
    alt: uni-halo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/introduction
    - theme: alt
      text: 部署指南
      link: /deploy/intro
    - theme: alt
      text: Github
      link: https://github.com/uni-halo/uni-halo

features:
  - icon: { src: /icons/puzzle.svg, wrap: true }
    title: 插件配置
    details: 后台动态配置，改内容不改代码
  - icon: { src: /icons/boxes.svg, wrap: true }
    title: 多端编译
    details: 一套源码，小程序 / APP / H5
  - icon: { src: /icons/heart.svg, wrap: true }
    title: 恋爱日记
    details: 特色功能，相册（密码锁定）/ 清单 / 故事，前台模板开箱即用
  - icon: { src: /icons/user-round.svg, wrap: true }
    title: 账号登录
    details: 账号密码 / 微信一键登录，移动端直接管理内容
  - icon: { src: /icons/palette.svg, wrap: true }
    title: 精美界面
    details: wot-ui + UnoCSS，好看又好改
  - icon: { src: /icons/key-round.svg, wrap: true }
    title: 免费开源
    details: 应用与插件全部开源
  - icon: { src: /icons/code-xml.svg, wrap: true }
    title: 开发技术
    details: Vue3 + TypeScript + Vite
---


<StartSteps></StartSteps>

<CustomUiPreview
	title="界面预览"
	subtitle="主界面 / 特色功能 / 主题模板，一览 uni-halo 的界面设计"
	:groups="[
		{
			key: 'main',
			label: '主界面',
			items: [
				{ name: '首页', file: '首页.png' },
				{ name: '分类', file: '分类.png' },
				{ name: '图库', file: '图库.png' },
				{ name: '瞬间', file: '瞬间.png' },
				{ name: '博主', file: '博主.png' }
			]
		},
		{
			key: 'love',
			label: '特色功能',
			items: [
				{ name: '恋爱主页', file: '恋爱日记.png' },
				{ name: '恋爱相册', file: '恋爱相册.png' },
				{ name: '恋爱清单', file: '恋爱清单.png' },
				{ name: '我们的故事', file: '恋爱故事.png' }
			]
		},
		{
			key: 'template',
			label: '主题模板',
			items: [
				{ name: '恋爱日记主页', file: '前台模板.png', dir: 'plugin/v3.x' },
				{ name: '恋爱相册', file: '前台模板-恋爱相册.png', dir: 'plugin/v3.x' },
				{ name: '恋爱清单', file: '前台模板-恋爱清单.png', dir: 'plugin/v3.x' },
				{ name: '我们的故事', file: '前台模板-恋爱故事.png', dir: 'plugin/v3.x' }
			]
		}
	]"
	:link="{ label: '查看全部界面预览', href: '/design/pages' }"
>
</CustomUiPreview>

<CustomUsingExamples title="精选案例" :limit="5"></CustomUsingExamples>

<CustomFooter></CustomFooter>
