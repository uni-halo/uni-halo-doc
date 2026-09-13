<template>
	<div class='toggle-visible-btn' @click='handleToggleVisible'>{{ visible ? '收起预览' : '在线预览' }}</div>
	<div v-if='visible' class='custom-dialog' :class='[computedAniPosition]'>
		<div class='app-qrcode-container' :class='{"visible":visible}'>
			<div class='app-qrcode'>
				<img class='app-qrcode-img' src='https://blog.xiaoxiaomo.cn/upload/mp_qrcode.jpg' alt='微信小程序二维码' data-fancybox='gallery' />
				<h3 class='app-qrcode-title'>微信扫码预览小程序</h3>
			</div>
			<div class='app-qrcode'>
				<img class='app-qrcode-img' src='https://blog.xiaoxiaomo.cn/upload/app-h5-qrcode.png' alt='H5二维码' data-fancybox='gallery' />
				<h3 class='app-qrcode-title'>手机扫码预览H5版</h3>
			</div>
		</div>
		<iframe sandbox='allow-scripts allow-same-origin' class='app-iframe' src='https://blog.xiaoxiaomo.cn/uni-halo' frameborder='0'></iframe>
	</div>

</template>

<script lang='ts' setup>
import { computed, ref } from 'vue';
import { checkPropertyInWindow } from '../../../src/utils';

const visible = ref(false);
const isInitVisible = ref(true);
const animation = ref<'right' | 'bottom'>('right');
const computedAniPosition = computed(() => {
	if (animation.value === 'bottom') {
		return `bottom animation-bottom`;
	}
	if (animation.value === 'right') {
		return `right animation-right`;
	}
});


function handleToggleVisible(event: any) {
	visible.value = !visible.value;
	handleShowConfetti(event);
}

function handleShowConfetti(event: any) {
	if (!isInitVisible.value) return;
	// @ts-ignore
	if (checkPropertyInWindow("confetti")) {
		// @ts-ignore
		confetti({
			zIndex: 9999,
			particleCount: 100,
			angle: 180,
			spread: 75,
			origin: { x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight }
		});
	}
	setTimeout(() => {
		isInitVisible.value = false;
	}, isInitVisible.value ? 500 : 0);
}

</script>

<style scoped>
#customConfetti {
	visibility: hidden;
}

.toggle-visible-btn {
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
	color: #ffffff;
	font-size: 14px;
	padding: 36px 3px;
	box-sizing: border-box;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
	user-select: none;
}

.toggle-visible-btn:hover::before {
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

.custom-dialog {
	height: 80vh;
	position: fixed;
	z-index: 99;
	overflow: hidden;
	color: rgba(0, 0, 0, 0.88);
	font-size: 16px;
	margin: 0;
	box-sizing: border-box;
	display: flex;
	align-items: flex-end;
	gap: 0 12px;
	padding-left: 12px;
	padding-bottom: 12px;
}

.custom-dialog.right {
	right: -366px;
	top: 50%;
	transform: translateY(-50%);
}

.custom-dialog.bottom {
	right: 36px;
	bottom: -100%;
	transform: translateY(50%);
}

.app-iframe {
	width: 360px;
	height: 100%;
	overflow: hidden;
	overflow-y: auto;
	background-image: url("/images/iPhone13.png");
	background-repeat: no-repeat;
	background-size: 100% 100%;
	border-radius: 30px;
	padding: 48px 13px 36px;
}

.custom-dialog.animation-bottom {
	animation: dialogAniBottom 0.4s ease-in-out forwards;
}

.custom-dialog.animation-right {
	animation: dialogAniRight 0.2s ease-in-out forwards;
}

.app-qrcode-container {
	height: 100%;
	display: none;
	opacity: 0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px 0;
}

.app-qrcode-container.visible {
	display: flex;
	animation: qrcodeAni 0.5s ease-in-out forwards;
	animation-delay: 1.5s;
}

.app-qrcode {
	background-color: #ffffff;
	border-radius: 12px;
	overflow: hidden;
	width: 220px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
}


.app-qrcode-img {
	cursor: pointer;
}

.app-qrcode-title {
}

@keyframes dialogAniRight {
	0% {
		right: -366px;
	}
	100% {
		right: 36px;
	}
}

@keyframes dialogAniBottom {
	0% {
		bottom: -100%;
	}
	100% {
		bottom: 50%;
	}
}

@media screen and (max-width: 768px) {
	.custom-dialog {
		width: 100%;
		height: 100%;
	}

	.toggle-visible-btn {
		display: none;
	}
}

@keyframes qrcodeAni {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
