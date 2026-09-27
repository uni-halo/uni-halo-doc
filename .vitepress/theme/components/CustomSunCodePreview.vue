<template>
	<div class='sun-code-toggle-btn' @click='handleToggle'>{{ visible ? '收起' : '扫码体验' }}</div>
	<div v-if='visible' class='sun-code-mask' @click='visible = false'></div>
	<div v-if='visible' class='sun-code-card'>
		<img class='sun-code-img' src='https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/gh_qrcode.jpg' alt='uni-halo 小程序太阳码' />
		<p class='sun-code-title'>微信扫码体验小程序</p>
	</div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const visible = ref(false);

function handleToggle() {
	visible.value = !visible.value;
}
</script>

<style scoped>
.sun-code-toggle-btn {
	position: fixed;
	right: 0px;
	top: 50%;
	z-index: 99;
	cursor: pointer;
	transform: translateY(-50%);
	background-color: var(--vp-button-brand-bg);
	backdrop-filter: blur(6px);
	writing-mode: vertical-rl;
	border-radius: 6px 0 0 6px;
	color: var(--vp-button-brand-text, #05080a);
	font-size: 14px;
	padding: 24px 3px;
	box-sizing: border-box;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
	user-select: none;
}

.sun-code-toggle-btn:hover::before {
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

.sun-code-mask {
	position: fixed;
	inset: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.45);
	animation: sunCodeMaskAni 0.2s ease-in-out forwards;
}

.sun-code-card {
	position: fixed;
	right: 48px;
	top: 50%;
	transform: translateY(-50%);
	z-index: 100;
	background-color: #ffffff;
	border-radius: 12px;
	overflow: hidden;
	width: 240px;
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
	color: rgba(0, 0, 0, 0.88);
	animation: sunCodeCardAni 0.25s ease-in-out forwards;
}

.sun-code-img {
	display: block;
	width: 200px;
	height: auto;
	border-radius: 6px;
	cursor: pointer;
}

.sun-code-title {
	margin: 0;
	font-size: 14px;
	font-weight: bold;
}

@keyframes sunCodeMaskAni {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes sunCodeCardAni {
	0% {
		opacity: 0;
		transform: translateY(-50%) translateX(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(-50%) translateX(0);
	}
}

@media screen and (max-width: 768px) {
	.sun-code-toggle-btn {
		display: none;
	}
}
</style>
