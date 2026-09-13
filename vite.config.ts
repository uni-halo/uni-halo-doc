import { defineConfig } from 'vite';
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite';
import path from 'path';

export default defineConfig({
	base: '/',
	plugins: [
		GitChangelog({
			repoURL: () => 'https://github.com/ialley-workshop-open/uni-halo-doc'
		}),
		GitChangelogMarkdownSection()
	],
	optimizeDeps: {
		exclude: [
			'@nolebase/vitepress-plugin-inline-link-preview/client',
			'@nolebase/vitepress-plugin-enhanced-readabilities/client',
			'vitepress'
		],
	},
	ssr: {
		noExternal: [
			// 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
			'@nolebase/vitepress-plugin-inline-link-preview',
			'@nolebase/vitepress-plugin-enhanced-readabilities',
		],
	},
	server: {
		host: '0.0.0.0',
		open: true
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		}
	}
});
