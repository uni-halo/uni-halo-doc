import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import type { Theme as ThemeConfig } from 'vitepress';
import './styles/index.css';


// 注册组件
import CustomFooter from './components/CustomFooter.vue';
import CustomUsingExamples from './components/CustomUsingExamples.vue';
import CustomLayout from './components/CustomLayout.vue';
// import CustomBilibiliVideo from "./components/CustomBilibiliVideo.vue";
import CustomIframe from './components/CustomIframe.vue';
import CustomDialog from './components/CustomDialog.vue';
import CustomFriendLinks from './components/CustomFriendLinks.vue';
import CustomTeams from './components/CustomTeams.vue';
import CustomAppTopBanner from './components/CustomAppTopBanner.vue';
import StartSteps from './components/StartSteps.vue';
import CustomUiPreview from './components/CustomUiPreview.vue';

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client';
import '@nolebase/vitepress-plugin-git-changelog/client/style.css';

import { InjectionKey as LinkPreviewInjectionKey, NolebaseInlineLinkPreviewPlugin } from '@nolebase/vitepress-plugin-inline-link-preview/client';
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css';

import {
	InjectionKey as ReadabilitiesInjectionKey,
	NolebaseEnhancedReadabilitiesMenu,
	NolebaseEnhancedReadabilitiesPlugin,
	NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client';
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css';

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

const theme: ThemeConfig = {
	extends: DefaultTheme,
	Layout: () => {
		return h(CustomLayout, null, {
			// 为较宽的屏幕的导航栏添加阅读增强菜单
			'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
			// 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
			'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu)
		});
	},
	enhanceApp({ app }) {
		app.component('CustomAppTopBanner', CustomAppTopBanner);
		app.component('StartSteps', StartSteps);
		app.component('CustomUiPreview', CustomUiPreview);
		app.component('CustomFooter', CustomFooter);
		app.component('CustomUsingExamples', CustomUsingExamples);
		app.component('CustomIframe', CustomIframe);
		app.component('CustomDialog', CustomDialog);
		app.component('CustomFriendLinks', CustomFriendLinks);
		app.component('CustomTeams', CustomTeams);
		// 注册插件
		app.use(NolebaseGitChangelogPlugin);
		app.use(NolebaseInlineLinkPreviewPlugin);
		app.provide(LinkPreviewInjectionKey, {
			// 配置...
		});
		app.use(NolebaseEnhancedReadabilitiesPlugin);
		app.provide(ReadabilitiesInjectionKey, {
			spotlight: {
				defaultToggle: true
			}
			// 其他配置...
		});
	},
	setup() {
		// Get frontmatter and route
		const { frontmatter } = useData();
		const route = useRoute();

		// giscus配置
		giscusTalk({
				repo: 'uni-halo/uni-halo-doc', //仓库
				repoId: 'R_kgDOMTa01A', //仓库ID
				category: 'Announcements', // 讨论分类
				categoryId: 'DIC_kwDOMTa01M4Ckt3n', //讨论分类ID
				mapping: 'pathname',
				inputPosition: 'bottom',
				lang: 'zh-CN',
			},
			{
				frontmatter, route
			},
			//默认值为false，表示未启用（giscus GitHub App 未安装在仓库上时会报错）
			//需要启用时，可在页面序言中使用“comment:true”单独开启
			false
		);
	},
};
export default theme;
