import { defineConfig } from 'vitepress';
import path from 'path';
import mdItCustomAttrs from 'markdown-it-custom-attrs';
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite';
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it';

export default defineConfig({
	base:'/',
	vite: {
		plugins: [
			GitChangelog({
				// 填写在此处填写您的仓库链接
				repoURL: () => 'https://github.com/nolebase/integrations'
			}),
			GitChangelogMarkdownSection()
		],
		optimizeDeps: {
			exclude: [
				'@nolebase/vitepress-plugin-inline-link-preview/client',
				'@nolebase/vitepress-plugin-enhanced-readabilities/client',
				'vitepress',
				'@nolebase/ui'
			]
		},
		ssr: {
			noExternal: [
				// 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
				'@nolebase/vitepress-plugin-inline-link-preview',
				'@nolebase/vitepress-plugin-enhanced-readabilities',
				'@nolebase/ui'
			]
		}
	},
	lang: 'zh-CN',
	appearance: 'dark',
	title: 'uni-halo',
	description:
		'一个优雅、清新、漂亮的移动端博客应用，基于 uniapp + halo2.x API 实现一款现代化的开源博客 / CMS 系统API开发的多端应用。uni-halo小程序、uni-halo微信小程序、uni-halo博客小程序、halo小程序、halo博客小程序、halo微信小程序。',
	head: [
		['meta', { name: 'author', content: '小莫唐尼' }],
		[
			'meta',
			{
				name: 'keywords',
				content:
					'uniapp, 小莫唐尼, halo, vue, uni-halo, uni-halo docs, uni-halo小程序, uni-app,halo开源博客,多端应用,uni-halo小程序,uni-halo微信小程序,uni-halo博客小程序,halo小程序,halo博客小程序,halo微信小程序。'
			}
		],
		['link', { rel: 'icon', type: 'image', href: '/logo.png' }],
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
			}
		],
		['link', { rel: 'icon', href: '/favicon.ico' }],
		[
			'link',
			{
				rel: 'stylesheet',
				href: './libs/canvas-confetti/fancybox.css'
			}
		],
		[
			'script',
			{
				src: './libs/canvas-confetti/fancybox.umd.js'
			}
		],
		[
			'script',
			{
				src: './libs/canvas-confetti/confetti.browser.min.js'
			}
		],
		[
			'script',
			{},
			`
				var _hmt = _hmt || [];
				(function() {
					var hm = document.createElement("script");
					hm.src = "https://hm.baidu.com/hm.js?6f486d3fdf5617866c907b540abfc368";
					var s = document.getElementsByTagName("script")[0];
					s.parentNode.insertBefore(hm, s);
				})();
			`
		],
		[
			'script',
			{},
			`
				!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"K5cHoyhHua9HOUCN",ck:"K5cHoyhHua9HOUCN",autoTrack:true,hashMode:true});
			`
		],
		[
			'script',
			{},
			`
				!(function(c,i,e,b){
				var h=i.createElement("script");
				var f=i.getElementsByTagName("script")[0];
				h.type="text/javascript";
				h.crossorigin=true;
				h.onload=function(){new c[b]["Monitor"]().init({id:"K5cUWbRPcIDRH8No",sendSuspicious:true,sendSpaPv:true});};
				f.parentNode.insertBefore(h,f);h.src=e;})(window,document,"https://sdk.51.la/perf/js-sdk-perf.min.js","LingQue");
			`
		],
		[
			'script',
			{},
			`
			  (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "lfzkgpgvjk");
			`
		],
		[
			'script',
			{
				src: './libs/notify.min.js'
			}
		]
	],
	srcDir: `${path.resolve(process.cwd())}/src`,
	themeConfig: {
		logo: '/logo.png',
		// editLink: {
		// 	text: '为此页提供修改建议',
		// 	pattern: 'https://github.com/ialley-workshop-open/uni-halo-doc/tree/main/:path'
		// },
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/ialley-workshop-open/uni-halo'
			},
			{
				icon: 'gitee',
				link: 'https://gitee.com/ialley-workshop-open/uni-halo'
			},
			{
				icon: {
					svg: `<svg t="1733452624509" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5220" width="200" height="200"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m-147.911111 813.511111l-71.111111-17.066667 2.844444-14.222222c25.6-99.555556 76.8-187.733333 147.911111-258.844444-22.755556-36.977778-19.911111-85.333333 8.533334-119.466667 34.133333-36.977778 88.177778-45.511111 130.844444-17.066667 42.666667 28.444444 56.888889 82.488889 34.133333 128-19.911111 42.666667-68.266667 62.577778-113.777777 54.044445-68.266667 62.577778-116.622222 142.222222-139.377778 233.244444v11.377778zM768 605.866667c-48.355556 85.333333-139.377778 136.533333-236.088889 136.533333-14.222222 0-28.444444 0-45.511111-2.844444l-14.222222-2.844445 11.377778-71.111111 14.222222 2.844444c85.333333 14.222222 170.666667-28.444444 210.488889-105.244444 39.822222-76.8 25.6-170.666667-36.977778-230.4-65.422222-65.422222-170.666667-76.8-250.311111-25.6-79.644444 51.2-110.933333 153.6-73.955556 241.777778l5.688889 14.222222-68.266667 28.444444-5.688888-14.222222c-14.222222-31.288889-19.911111-68.266667-19.911112-102.4 0-113.777778 71.111111-216.177778 179.2-256 108.088889-39.822222 227.555556-8.533333 301.511112 79.644445 73.955556 82.488889 85.333333 207.644444 28.444444 307.2z" fill="#98989F" p-id="5221" data-spm-anchor-id="a313x.search_index.0.i2.4aa03a81IWYR4m" class="selected"></path></svg>`
				},
				link: 'https://www.xiaoxiaomo.cn'
			}
		],
		search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索文档',
						buttonAriaLabel: '搜索文档'
					},
					modal: {
						noResultsText: '无法找到相关结果',
						resetButtonTitle: '清除查询条件',
						displayDetails: '禁用详细视图',
						backButtonTitle: '返回',
						footer: {
							selectText: '选择',
							navigateText: '切换',
							closeText: '关闭'
						}
					}
				}
				// locales: {
				// 	zh: {
				// 		translations: {
				// 			button: {
				// 				buttonText: "搜索文档",
				// 				buttonAriaLabel: "搜索文档",
				// 			},
				// 			modal: {
				// 				noResultsText: "无法找到相关结果",
				// 				resetButtonTitle: "清除查询条件",
				// 				footer: {
				// 					selectText: "选择",
				// 					navigateText: "切换",
				// 				},
				// 			},
				// 		},
				// 	},
				// },
			}
		},

		// algolia: {
		//   appId: 'Y93HSGWS5S',
		//   apiKey: '55af29e9571ea6fe09352c04fdc309e9',
		//   indexName: 'ialley-workshop'
		// },
		footer: {
			message: '根据 AGPL-3.0 协议开源·请遵循协议',
			copyright:
				'Copyright © 2022-<span id="siteEndYear"></span> <a href="/" target="_self" title="uni-halo">UNI-HALO</a>丨AGPL-3.0丨<a href="https://www.xiaoxiaomo.cn/" target="_blank" title="小莫唐尼个人主页">小莫唐尼</a>丨<a target="_blank" title="51la网站统计" href="https://v6.51.la/s/GPZ3G9xLtawiqLD"><img class="s-51la-image" src="https://sdk.51.la/icon/1-1.png"></a>'
		},
		nav: [
			{
				text: '🔥Halo & 1Panel 专业版优惠',
				link: 'https://www.lxware.cn/?code=HJfS5bBK'
			},
			{
				text: '部署指南',
				link: '/deploy/intro',
				activeMatch: '/deploy/'
			},
			{
				text: '设计指南',
				link: '/design/intro',
				activeMatch: '/design/'
			},
			{
				text: '常见问题',
				link: '/problem/questions',
				activeMatch: '/questions/'
			},
			{
				text: '友情链接',
				link: '/links/friend-links',
				activeMatch: '/friend-links/'
			},
			{
				text: '相关链接',
				items: [
					{
						text: '作者主页',
						link: 'https://www.xiaoxiaomo.cn/'
					},
					{
						text: '作者博客',
						link: 'https://blog.xiaoxiaomo.cn'
					},
					{
						text: '配置插件',
						link: 'https://github.com/ialley-workshop-open/plugin-uni-halo'
					},
					{
						text: '源码仓库',
						link: 'https://github.com/ialley-workshop-open/uni-halo'
					},
					{
						text: '应用市场',
						link: 'https://www.halo.run/store/apps/app-ryemX'
					}
				]
			},
			{
				text: '赞助打赏',
				link: '/other/donate'
			}
		],
		sidebar: {
			'/design/': [
				{
					text: '设计指南',
					items: [
						{
							text: '项目介绍',
							link: '/design/intro'
						},
						{
							text: '目录说明',
							link: '/design/folder'
						},
						{
							text: '相关技术',
							link: '/design/technology'
						},
						{
							text: '界面预览',
							link: '/design/pages'
						},
						{
							text: '视频介绍',
							link: '/design/video'
						}
					]
				}
			],
			'/deploy/': [
				{
					text: '部署指南',
					items: [
						{
							text: '部署须知',
							link: '/deploy/intro'
						},
						{
							text: '插件配置',
							link: '/deploy/config'
						},
						{
							text: '准备工作',
							link: '/deploy/preparation'
						},
						{
							text: '发布小程序',
							link: '/deploy/wx-release'
						},
						{
							text: '完全流程',
							link: '/deploy/full-content'
						}
						// {
						// 	text: '应用发布（APP）',
						// 	link: '/deploy/app-release'
						// },
						// {
						// 	text: '应用更新',
						// 	link: '/deploy/app-update'
						// }
					]
				}
			],
			'/contributor/': [
				{
					text: '贡献指南',
					items: [
						{
							text: '贡献指南',
							link: '/contributor/index'
						}
					]
				}
			],
			'/other/': [
				{
					text: '其他',
					items: [
						{
							text: '赞助',
							link: '/other/donate'
						},
						{
							text: '致谢',
							link: '/other/thanks'
						}
					]
				}
			],
			'/links': [
				{
					text: '友情链接',
					items: [
						{
							text: '友情链接',
							link: '/links/friend-links'
						}
					]
				}
			],
			'/problem': [
				{
					text: '常见问题',
					items: [
						{
							text: '常见问题',
							link: '/problem/questions'
						}
					]
				}
			]
		},
		outlineTitle: '内容目录',
		docFooter: {
			prev: '上一篇',
			next: '下一篇'
		}
	},
	// ,vue: {
	//   template: {
	//     compilerOptions: {
	//       isCustomElement: tag => tag.startsWith('Custom')
	//     }
	//   }
	// }
	markdown: {
		//行号显示
		lineNumbers: true,
		image: {
			lazyLoading: true
		},
		config: md => {
			// use more markdown-it plugins!
			md.use(mdItCustomAttrs, 'image', {
				'data-fancybox': 'gallery'
			});
			md.use(InlineLinkPreviewElementTransform);
		}
	},
	sitemap: {
		hostname: 'https://uni-halo.925i.cn'
	}
});
