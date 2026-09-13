<template>
	<div class='donate-toggle-btn' @click='handleToggleVisible'>{{ visible ? '收起赞助' : '赞助打赏' }}</div>
	<div v-if='visible' class='donate-dialog' :class='{ visible }'>
		<div class='donate-panel'>
			<p class='donate-tip'>
				如果您的赞助需要在<a href='/other/donate/' class='donate-link'>赞助列表</a>中展示，请在赞助时提供备注信息（昵称、留言等）
			</p>
			<div class='donate-qrcode-container'>
				<div class='donate-qrcode' v-for='(item, index) in rewards' :key='index'>
					<img class='donate-qrcode-img' :src='item.image' :alt='item.name' data-fancybox='gallery' />
				</div>
			</div>
			<a href='/other/donate/' class='donate-more-link'>查看完整赞助页 →</a>
		</div>
	</div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const visible = ref(false);

const rewards = [
	{
		name: '支付宝',
		image: 'https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/author/rewards/ZFBRewardCode.png'
	},
	{
		name: '微信',
		image: 'https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/author/rewards/WXRewardCode.png'
	},
	{
		name: 'QQ',
		image: 'https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/author/rewards/QQRewardCode.png'
	}
];

function handleToggleVisible() {
	visible.value = !visible.value;
}
</script>

<style scoped>
.donate-toggle-btn {
	position: fixed;
	right: 0px;
	top: calc(50% - 180px);
	z-index: 99;
	cursor: pointer;
	transform: translateY(-50%);
	background-color: var(--vp-button-brand-bg);
	backdrop-filter: blur(6px);
	writing-mode: vertical-rl;
	border-radius: 6px 0 0 6px;
	color: var(--vp-button-brand-text, #05080a);
	font-size: 14px;
	padding: 36px 3px;
	box-sizing: border-box;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
	user-select: none;
}

.donate-toggle-btn:hover::before {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-image: var(--vp-home-hero-image-background-image);
	filter: blur(30px);
	z-index: -1;
}

/* 弹窗面板：与「赞助打赏/收起赞助」按钮垂直居中对齐 */
.donate-dialog {
	position: fixed;
	right: -440px;
	top: calc(50% - 180px);
	transform: translateY(-50%);
	z-index: 99;
	overflow: hidden;
	max-height: 80vh;
	box-sizing: border-box;
	border-radius: 16px;
	box-shadow:
		0 8px 32px rgba(0, 0, 0, 0.16),
		0 2px 8px rgba(0, 0, 0, 0.1);
}

.donate-dialog.visible {
	animation: donateAniRight 0.2s ease-in-out forwards;
}

.donate-panel {
	position: relative;
	width: 460px;
	padding: 16px;
	box-sizing: border-box;
	background-color: var(--vp-c-bg);
}

/* 暗色模式阴影 */
.dark .donate-dialog {
	box-shadow:
		0 8px 32px rgba(0, 0, 0, 0.55),
		0 2px 8px rgba(0, 0, 0, 0.4);
	border-color: var(--vp-c-bg-soft);
}

.donate-tip {
	margin-bottom: 12px;
	padding: 8px 10px;
	border-radius: 8px;
	background-color: var(--vp-c-brand-soft);
	color: var(--vp-c-text-1);
	font-size: 13px;
	line-height: 1.6;
}

.donate-link {
	color: var(--vp-c-brand-1);
	font-weight: 600;
	text-decoration: none;
}

.donate-link:hover {
	text-decoration: underline;
}

.donate-qrcode-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
}

.donate-qrcode {
	background-color: #ffffff;
	border-radius: 12px;
	overflow: hidden;
	width: calc((100% - 20px) / 3);
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
}

.donate-qrcode-img {
	cursor: pointer;
	width: 100%;
}

.donate-more-link {
	display: block;
	margin-top: 12px;
	text-align: center;
	color: var(--vp-c-brand-1);
	font-size: 14px;
	font-weight: 600;
	text-decoration: none;
}

.donate-more-link:hover {
	text-decoration: underline;
}

@keyframes donateAniRight {
	0% {
		right: -440px;
	}
	100% {
		right: 42px;
	}
}

@media screen and (max-width: 768px) {
	.donate-toggle-btn {
		display: none;
	}
}
</style>
