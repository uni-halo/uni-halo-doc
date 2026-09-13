# 贡献指南

感谢你对 uni-halo 的关注！本项目欢迎各种形式的贡献，共同维护，逐步完善，将项目做得更强。

## 项目组成

uni-halo 由多个仓库组成，请按贡献内容选择对应仓库：

| 仓库 | 内容 | 技术栈 |
|------|------|--------|
| [uni-halo](https://github.com/uni-halo/uni-halo) | 移动端应用源码 | uni-app + Vue3 + TypeScript |
| [uni-halo-plugin](https://github.com/uni-halo/uni-halo-plugin) | Halo 配置插件（Java 后端 + 控制台前端） | Java 21 + Vue3 |
| [uni-halo-doc](https://github.com/uni-halo/uni-halo-doc) | 本文档站 | VitePress |
| [uni-halo-static](https://github.com/uni-halo/uni-halo-static) | 静态资源（图片、截图等） | - |
| [uni-halo-website](https://github.com/uni-halo/uni-halo-website) | 项目官网 | React + Vite |

## 贡献流程

1. Fork 对应仓库到自己的账号下；
2. 从 `main` 分支拉取功能分支进行开发；
3. 提交 PR 到原仓库的 `main` 分支，并在描述中说明改动内容。

## 提交规范

- commit message 遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 规范，如 `feat: xxx`、`fix: xxx`、`docs: xxx`
- 应用仓库（uni-halo）提交前请通过质量门禁：`pnpm type-check && pnpm lint && pnpm test:run`

## 反馈问题

- 提交 issues：[Github Issues](https://github.com/uni-halo/uni-halo/issues)
- QQ 交流群：632969367
- 微信交流群：由于微信交流群时效性太短，有需要的话可以先加入 QQ 群，再邀请进微信群

## 贡献者

感谢以下所有给 uni-halo 贡献过代码的[开发者](https://github.com/uni-halo/uni-halo/graphs/contributors)。

<a href="https://github.com/uni-halo/uni-halo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=uni-halo/uni-halo" />
</a>
