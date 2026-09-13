<template>
	<Layout>
		<template #aside-outline-after>
			<div  class='recommend-container'>
				<p class='item-title'>在线体验</p>
				<p class='item-desc'>uni-halo 小程序版本演示</p>
				<img alt='小莫唐尼' class='ad-image' data-fancybox='gallery' src='https://img.925i.cn/file/a0c1a95b49b5db7f78248.png' />
				<img alt='官方交流群（QQ）' class='ad-image' data-fancybox='gallery' src='https://img.925i.cn/file/b83b9e79695779c4344f3.png' />
<!--				<p class='item-title' style='margin-top: 24px;'>图图小绘（壁纸表情小程序）</p>-->
<!--				<p v-if='false' class='item-desc' style='margin-bottom: -6px;'>一个文案图库表情包小程序</p>-->
<!--				<div v-if='false' class='ad-image border'>-->
<!--					<img alt='图图小绘（微信小程序）' data-fancybox='gallery' src='https://img.925i.cn/file/6fadeb1cb095944954a59.jpg' />-->
<!--				</div>-->
<!--				<img  alt='图图小绘（微信小程序）' class='ad-image' data-fancybox='gallery' src='https://img.925i.cn/file/d316c4724f2dd3cac685c.jpg' />-->
<!--				<p class='item-title' style='margin-top: 24px;'>秒懂文案馆（微信公众号）</p>-->
<!--				<p v-if='false' class='item-desc' style='margin-bottom: -6px;'>一个内容丰富的微信公众号</p>-->
<!--				<img alt='秒懂文案馆（微信公众号）' class='ad-image border no-padding' data-fancybox='gallery'-->
<!--						 src='/mdwag.png' />-->
			</div>
		</template>
		<template #not-found>
			<div class='NotFound'>
				<p class='code'>404</p>
				<h1 class='title'>啊偶，页面找不到了</h1>
				<div class='divider'></div>
				<blockquote class='quote'>您访问的地址不存在或者已经被删除，如果您有需要，请发送邮件到 <a href='mailto:studio@925i.cn'>studio@925i.cn</a>获取支持.
				</blockquote>
				<div class='action'><a aria-label='返回主页' class='link' href='/'> 返回主页 </a></div>
			</div>
		</template>
		<template #layout-top>
			<CustomAppTopBanner></CustomAppTopBanner>
			<CustomDialog v-if='dialogShow' title='站长推荐' :zIndex='100' @on-close='handleClose'>
				<template #body>
					<div class='recommend-app'>
						<div v-if='false' class='recommend-app-item pink'>
							<img alt='uni-halo 小程序版本演示' class='recommend-app-cover' data-fancybox='gallery'
									 src='https://img.925i.cn/file/6fadeb1cb095944954a59.jpg' />
							<div class='recommend-app-text'>
								<p><strong style='font-size: 18px'>《图图小绘》</strong>- 微信小程序打造个性化的利器！</p>
								<p> 丰富多样的壁纸、头像和表情包资源免费下载。</p>
								<p> 精心分享聊天、朋友圈以及个性签名等类型文案！</p>
							</div>
						</div>
						<div v-if='false' class='recommend-app-item pink'>
							<img alt='秒懂文案馆' class='recommend-app-cover' data-fancybox='gallery' src='/mdwag_qrcode.jpg' />
							<div class='recommend-app-text'>
								<p><strong style='font-size: 18px'>《秒懂文案馆》</strong>- 微信公众号文案！</p>
								<p> 分享文案、头像、壁纸、表情包等内容。</p>
							</div>
						</div>
						<template v-if='ads.dialog.length!==0'>
							<a v-for='(ad,index) in ads.dialog.filter(x=>x.types.includes("text-image"))' :key='index' :href='ad.link' :title='ad.title'
								 target='_blank'>
								<div class='recommend-app-item ad'>
									<img :alt='ad.title' class='recommend-app-cover ad' :src='ad.cover' />
									<div class='recommend-app-text ad'>
										<p class='hot'><strong style='font-size: 18px'>{{ ad.title }}</strong></p>
										<p v-html='ad.description'></p>
									</div>
								</div>
							</a>
							<div v-for='(ad,index) in ads.dialog.filter(x=>x.types.includes("image"))' :key='index'>
								<div class='recommend-app-item ad'>
									<div class='recommend-app-text ad' style='width:100%;padding-left: 0'>
										<div :style='{
											display: "flex",
											justifyContent: "space-between",
											marginBottom: "10px",
										}'>
											<strong style='font-size: 18px'>{{ ad.title }}</strong>
											<a :href='ad.link' target='_blank' :title='ad.title'>
												<XiaoButton size='mini' type='primary' title='点击查看详情'></XiaoButton>
											</a>
										</div>
										<img :alt='ad.title' class='recommend-app-cover ad' :style='{
											width:"100%",height:ad.coverHeight,
										}' :src='ad.cover' data-fancybox='gallery' />
									</div>
								</div>
							</div>
						</template>
					</div>
				</template>
				<template #footer>
					<XiaoButton size='mini' :title='useShowOnce?"本次访问不再提示":"一天内不再显示"' @click='handleConfirm'></XiaoButton>
					<XiaoButton :use-animation='true' size='mini' title='知道啦，我会记得关注滴' type='primary' @click='handleClose'></XiaoButton>
				</template>
			</CustomDialog>
			<CustomAppPreview></CustomAppPreview>
			<CustomDialog v-if='validKnowTokenDialog.show' :use-close='false' :zIndex='100' title='重要提示'>
				<template #body>
					<div class='valid-token'>
						<div class='valid-token-content'>
							<div style='font-weight: bold;margin-bottom: 6px;font-size: 15px;'>亲爱的 uni-halo 用户：</div>
							<p>感谢您使用 uni-halo（以下称：本应用），为了保障您的 Halo博客 账号安全，我们需要提示您一些重要的内容。</p>
							<p>由于最新版本的 uni-halo 已经通过 UniHalo配置插件设置 TOKEN，部分使用本应用的用户会创建一个带有较高权限的 TOKEN，可能会遇到 TOKEN
								泄露的风险， 在您使用本应用之前时，请务必阅读并同意以下内容。</p>
							<ul class='valid-token-content-list'>
								<li>1. 您的 TOKEN 是您在使用 uni-halo 程序的时候，部分接口请求需要的凭证。</li>
								<li>2. 您的 TOKEN 在提供给 uni-halo 的时候，会通过明文方式在 uni-halo 的 配置接口中返回。</li>
								<li>3. 为了保障您的账号安全，uni-halo 推荐您创建token给 uni-halo 使用的时候，不要给全部的权限。</li>
								<li>4. 我会详细阅读 uni-halo 小程序的使用文档，确保我不会创建带有其他权限的 TOKEN。</li>
								<li>5. 我已经知晓 TOKEN 在 uni-halo 中使用的安全性，并自己承担不按照要求配置带来的泄露风险。</li>
							</ul>
						</div>
						<div v-if='!isUseVaildInput' class='valid-input-wrapper'>
							<div class='valid-input-wrapper-label'>
								<span class='valid-input-wrapper-tip'>{{ validKnowTokenDialog.validText }}</span>
							</div>
						</div>
						<div v-else class='valid-input-wrapper'>
							<div class='valid-input-wrapper-label'>
								请在下方输入框中输入：<span class='valid-input-wrapper-tip'>{{ validKnowTokenDialog.validText }}</span>
							</div>
							<input class='valid-input-wrapper-input' v-model='validKnowTokenDialog.validTextValue' type='text' placeholder='请输入提示内容以确认'
										 @input='onValidTokenInput' />
							<div v-if='!validKnowTokenDialog.valid.ok' class='valid-input-error'>
								{{ validKnowTokenDialog.valid.msg }}
							</div>
						</div>
					</div>
				</template>
				<template #footer>
					<XiaoButton :use-animation='true' size='mini' title='我已经知晓，TOKEN 泄露的风险' type='primary'
											@click='handleConformValidKnowTokenDialog'></XiaoButton>
				</template>
			</CustomDialog>
		</template>
		<template #sidebar-nav-after>
			<div v-if='ads.asideNavAfter.length!==0' class='recommend-container sidebar-nav-ads'>
				<p class='item-title'>站长推荐：点击图片查看详情</p>
				<template v-for='ad in ads.asideNavAfter'>
					<a v-if='ad.link' :href='ad.link' :title='ad.title' target='_blank'>
						<img :alt='ad.title' class='ad-image border no-padding'
								 :src='ad.cover' />
					</a>
					<img v-else :alt='ad.title' class='ad-image border no-padding'
							 :src='ad.cover' data-fancybox='gallery' />
				</template>
			</div>
		</template>

		<template #nav-bar-content-after>
			<slot name='nav-bar-content-after' />
		</template>
		<template #nav-screen-content-after>
			<slot name='nav-screen-content-after' />
		</template>
		<template #nav-bar-title-after>
			<span class='app-version'>2.0.10</span>
		</template>
		<template #home-hero-info-after>
			<CustomHomeStars></CustomHomeStars>
		</template>
	</Layout>
</template>

<script lang='ts' setup>
import { nextTick, onMounted, reactive, ref } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { checkPropertyInWindow } from '../../../src/utils';
import { AppConfigs } from '../../../src/config';
import XiaoButton from './ui/XiaoButton.vue';
import CustomAppPreview from './CustomAppPreview.vue';
import CustomHomeStars from './CustomHomeStars.vue';
import CustomAppTopBanner from './CustomAppTopBanner.vue';


const { Layout } = DefaultTheme;
const data = useData();

const dialogShow = ref(false);
const isUseVaildInput = ref(false);

function handleComputedDiffHour(time1: any, time2: any) {
	const _time1 = new Date(time1).getTime();
	const _time2 = new Date(time2).getTime();
// 计算两个时间的时间戳差值
	const diff = Math.abs(_time2 - _time1);
// 将时间戳差值转换为小时
	const diffHours = Math.floor(diff / (1000 * 60 * 60));
	return diffHours;
}

const DIALOG_KEY: string = 'dialog_wx_show';
const CONFETTI_GLOBAL_KEY: string = 'CONFETTI_GLOBAL_VISIBLE';

const useShowOnce = ref<boolean>(true);

const checkShow = () => {
	let dialogInfo = localStorage.getItem(DIALOG_KEY);
	if (dialogInfo) {
		dialogInfo = JSON.parse(dialogInfo);
		const diffHour = handleComputedDiffHour(dialogInfo.time, new Date().getTime());
		dialogShow.value = diffHour > 12;
	} else {
		dialogShow.value = true;
	}

	if (!dialogShow.value) {
		handleCheckShowValidKnowTokenDialog();
	}
};
const checkShowOnce = () => {
	let dialogInfo = sessionStorage.getItem(DIALOG_KEY);
	if (dialogInfo) {
		dialogShow.value = false;
	} else {
		dialogShow.value = true;
	}
	if (!dialogShow.value) {
		handleCheckShowValidKnowTokenDialog();
	}
};

onMounted(() => {
	if (useShowOnce.value) {
		setTimeout(checkShowOnce, 500);
	} else {
		setTimeout(checkShow, 500);
	}

	// 	设置网页底部的年份
	const currentYear = new Date().getFullYear();
	const siteEndYear = document.getElementById('siteEndYear');
	if (siteEndYear) {
		siteEndYear.textContent = currentYear.toString();
	}

	handleShowNotify();
	handleShowGlobalConfetti();
});

// function handleShowConfetti(event: any) {
// 	if (checkPropertyInWindow('confetti')) {
// 		// @ts-ignore
// 		confetti({
// 			zIndex: 9999, particleCount: 50,
// 			origin: { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight }
// 		});
// 	}
// }

function handleShowGlobalConfetti() {
	if (sessionStorage.getItem(CONFETTI_GLOBAL_KEY)) return;
	sessionStorage.setItem(CONFETTI_GLOBAL_KEY, 'visible');
	let duration = 5 * 1000;
	let animationEnd = Date.now() + duration;
	let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

	function randomInRange(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	let interval = setInterval(function() {
		let timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			return clearInterval(interval);
		}

		let particleCount = 50 * (timeLeft / duration);

		if (checkPropertyInWindow('confetti')) {
			// @ts-ignore
			confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
			// @ts-ignore
			confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
		}
	}, 250);
}


function handleSaveDialogInfo(dialogInfo: any) {
	dialogInfo = dialogInfo || { time: new Date().getTime() };
	localStorage.setItem(DIALOG_KEY, JSON.stringify(dialogInfo));
}

function handleSaveDialogInfoOnce(dialogInfo: any) {
	dialogInfo = dialogInfo || { time: new Date().getTime() };
	sessionStorage.setItem(DIALOG_KEY, JSON.stringify(dialogInfo));
}

function handleConfirm(e: any, dialogInfo: unknown) {
	if (useShowOnce.value) {
		handleSaveDialogInfoOnce(dialogInfo);
	} else {
		handleSaveDialogInfo(dialogInfo);
	}
	// handleShowConfetti(e);
	setTimeout(() => {
		dialogShow.value = false;

		handleCheckShowValidKnowTokenDialog();
	}, 100);
}

function handleClose(e: any) {
	// handleShowConfetti(e);
	setTimeout(() => {
		dialogShow.value = false;
		handleCheckShowValidKnowTokenDialog();
	}, 100);
}

const ads = ref({
	dialog: [],
	asideNavAfter: []
});


function getAds() {
	fetch(AppConfigs.getStaticBaseUrl() + `/data/ads.json?t=${Date.now()}`).then(res => res.json()).then(res => {
		ads.value = res;
		ads.value.dialog = ads.value.dialog.filter(x => x.visible && new Date(x.expire).getTime() >= new Date().getTime());
		ads.value.asideNavAfter = ads.value.asideNavAfter.filter(x => x.visible && new Date(x.expire).getTime() >= new Date().getTime());
	}).catch(err => console.log(err));
}

getAds();

function sleep(time: number) {
	return new Promise(resolve => setTimeout(resolve, time));
}

function handleShowNotify() {

	// @ts-ignore
	if (!checkPropertyInWindow('Notify') || window.Notify == undefined) return;

	if (sessionStorage.getItem('NOTIFY_SHOW')) {
		return;
	}
	nextTick(async () => {
		const notifyRes = await fetch(AppConfigs.getStaticBaseUrl() + `/data/notify.json?t=${Date.now()}`).then(res => res.json());
		await sleep(notifyRes.sleep);
		// @ts-ignore
		const notify = new Notify({
			...{
				requireInteraction: !localStorage.getItem('NOTIFY_SHOW'),
				onclick: () => {
					if (notifyRes.link) {
						window.open(notifyRes.link, '_blank');
					}
				}
			},
			...notifyRes
		});
		if (notifyRes.enable) {
			notify.show();
			sessionStorage.setItem('NOTIFY_SHOW', 'visible');
			localStorage.setItem('NOTIFY_SHOW', 'visible');
		}
	});
}


const validKnowTokenDialog = reactive({
	show: false,
	validText: '我已知晓TOKEN的泄露风险，并同意使用uni-halo应用',
	validTextValue: '',
	valid: {
		ok: true,
		msg: ''
	}
});

const onValidTokenInput = () => {
	validKnowTokenDialog.valid.ok = true;
	validKnowTokenDialog.valid.msg = '';
};

const handleCheckShowValidKnowTokenDialog = () => {
	if (localStorage.getItem('uni_halo_VALID_KNOW_TOKEN')) return;
	validKnowTokenDialog.show = true;
};

const handleConformValidKnowTokenDialog = () => {
	if(isUseVaildInput.value){
		if (!validKnowTokenDialog.validTextValue || validKnowTokenDialog.validTextValue !== validKnowTokenDialog.validText) {
			validKnowTokenDialog.valid = {
				ok: false,
				msg: '提示：请输入提示内容以确认您已知晓 TOKEN 的泄露风险'
			};
			return;
		}
		alert('您已知晓 TOKEN 的泄露风险,后续将不再提示，感谢您的使用');
	}
	validKnowTokenDialog.valid.ok = true;
	validKnowTokenDialog.show = false;
	localStorage.setItem('uni_halo_VALID_KNOW_TOKEN', 'visible');


	// @ts-ignore
	if (checkPropertyInWindow('Notify') && window.Notify != undefined) {
		nextTick(async () => {
			// @ts-ignore
			const notify = new Notify({
				title: '消息通知',
				body: '您已知晓 TOKEN 的泄露风险,后续将不再提示，感谢您的使用',
				enable: true,
				badge: 'https://uni-halo.925i.cn/logo.png',
				icon: 'https://uni-halo.925i.cn/logo.png',
				autoClose: true,
				sleep: 5000,
				requireInteraction: false
			});
			if (notify) {
				notify.show();
			}
		});
	}
};

</script>


<style lang='less' scoped>
.sidebar-nav-ads {
	display: flex;
	flex-direction: column;

	.item-title {
		padding-left: 0;
	}

	.item-title::before {
		display: none;
	}
}

.hot {
	color: #FF4C07;
	padding-left: 22px;
	position: relative;

	&:before {
		content: '';
		width: 26px;
		height: 26px;
		background-image: url("/icons/hot.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: absolute;
		left: -6px;
		top: 50%;
		transform: translateY(-55%);
		animation: hot 2s linear infinite;
	}
}

@keyframes hot {
	0% {
	}
	50% {
	}
	100% {
	}
}

.recommend-container {
	/* padding: 16px; */
	font-size: 14px;
}

.item-title {
	position: relative;
	padding-left: 12px;
	color: #85b8f6;
	font-weight: bold;
}

.item-title::before {
	content: '';
	width: 5px;
	height: 14px;
	position: absolute;
	left: 0px;
	top: 50%;
	transform: translateY(-50%);
	background-color: #85b8f6;
	border-radius: 3px;
}

.item-desc {
}

.recommend-container p {
	cursor: pointer;
	margin: 3px 0;
}

.recommend-container {
	color: rgb(135 143 160);
}

.recommend-container img {
	/* width: 150px; */
	border-radius: 6px;
}

.ad-image {
	box-sizing: border-box;
	margin-top: 12px;
	cursor: pointer;

	&.border {
		border-radius: 3px;
		padding: 12px;
		border: 1px solid rgba(247, 247, 247, 1);
		background-color: #ffffff;
	}

	> img {
		width: 100%;
	}

	&.no-padding {
		padding: 0 !important;
	}
}

.NotFound {
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	.code {
		line-height: 64px;
		font-size: 64px;
		font-weight: 600;
	}

	.title {
		padding-top: 12px;
		letter-spacing: 2px;
		line-height: 20px;
		font-size: 20px;
		font-weight: 700;
	}

	.divider {
		margin: 24px auto 18px;
		width: 64px;
		height: 1px;
		background-color: var(--vp-c-divider);
	}

	.quote {
		margin: 0 auto;
		max-width: 256px;
		font-size: 14px;
		font-weight: 500;
		color: var(--vp-c-text-2);
	}

	.action {
		padding-top: 20px;

		.link {
			display: inline-block;
			border: 1px solid var(--vp-c-brand);
			border-radius: 16px;
			padding: 3px 16px;
			font-size: 14px;
			font-weight: 500;
			color: var(--vp-c-brand);
			transition: border-color 0.25s, color 0.25s;
		}
	}
}

.recommend-app {
	display: flex;
	flex-direction: column;
	gap: 24px;

	&-item {
		display: flex;
		align-items: center;
		gap: 0 12px;
		padding: 24px;
		transition: all 0.15s ease-in-out;
		border-radius: 6px;
		border: 1px solid #10b981;

		&:hover {
			transform: translateY(-2px);

			&.pink {
				background-color: rgba(7, 192, 96, 0.75);
				border-color: #ffffff;
				color: #fff;
			}
		}
	}

	&-cover {
		width: 120px;
		height: 120px;
		border-radius: 6px;
		object-fit: cover;
	}

	&-text {
		padding-left: 24px;
		line-height: 1.6em;
		font-size: 14px;

		p + p {
			margin-top: 12px;
		}
	}
}

.app-version {
	height: 20px;
	display: inline-flex;
	align-items: center;
	color: var(--vp-c-brand);
	font-size: 10px;
	margin-left: 4px;
	background-color: azure;
	padding: 0 4px;
	border-radius: 4px;
	font-weight: 700;
}


.valid-token {
	max-width: 680px;
	font-size: 14px;
	line-height: 2em;
}

.valid-token-content {
	font-size: 14px;
	//font-weight: bold;
}

.valid-token-content p {
	text-indent: 2em;
}

.valid-token-content-list {
	margin-top: 12px;
	box-sizing: border-box;
	list-style: none;
	padding: 12px;
	border: 1px solid red;
	border-radius: 6px;
	font-size: 14px;
	font-weight: normal;
	color: red;
	background-color: rgba(255, 0, 0, 0.035);
}

.valid-input-wrapper {
	margin-top: 22px;
}

.valid-input-wrapper-label {
	box-sizing: border-box;
	padding: 12px;
	border: 1px solid green;
	border-radius: 6px;
	font-size: 14px;
	font-weight: normal;
	color: green;
	background-color: rgba(0, 255, 0, 0.035);
}

.valid-input-wrapper-tip {
	padding-bottom: 3px;
	border-bottom: 2px dashed red;
}

.valid-input-wrapper-input {
	width: 100%;
	margin-top: 6px;
	border-radius: 6px;
	border: 1px solid #333;
	padding: 3px 12px;
	font-size: 14px;
	font-weight: normal;
	color: #333;
}

.valid-input-wrapper-input::placeholder {
	color: #666;
}

.valid-input-error {
	margin-top: 2px;
	color: red;
	font-size: 12px;
	font-weight: normal;
}
</style>
