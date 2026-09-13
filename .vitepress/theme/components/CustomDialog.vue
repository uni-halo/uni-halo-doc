<template>
	<div v-if='data.show' class='custom-dialog-mask' :style='{
		zIndex: props.zIndex,
	}'></div>
	<div v-if='data.show' class='custom-dialog animation' :style='{
		zIndex: props.zIndex + 1,
	}'>
		<div class='custom-dialog-header center'>
			<div class='title'>{{ props.title }}</div>
			<span v-if='props.useClose' class='close' title='关闭' @click='handleConfirm'>+</span>
		</div>
		<div class='custom-dialog-body'>
			<slot name='body'></slot>
		</div>
		<div class='custom-dialog-footer center'>
			<slot name='footer'>
				<XiaoButton :use-animation='true' size='mini' title='确认' type='primary' @click='handleConfirm'></XiaoButton>
				<XiaoButton size='mini' title='取消' @click='handleConfirm'></XiaoButton>
			</slot>
		</div>
	</div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import XiaoButton from './ui/XiaoButton.vue';

type DataType = {
	show: boolean;
};
const emit = defineEmits(['on-close', 'update:show']);
const props = defineProps({
	title: {
		type: String,
		default: '系统通知'
	},
	useClose: {
		type: Boolean,
		default: true
	},
	zIndex: {
		type: Number,
		default: 98
	}
});

const data = ref<DataType>({
	show: true
});

const handleConfirm = (e: any) => {
	emit('on-close', e);
};

</script>

<style scoped>
.custom-dialog-mask {
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.25);
	z-index: 98;
	backdrop-filter: blur(3px);
}

.custom-dialog {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: #ffffff;
	z-index: 99;
	border-radius: 6px;
	overflow: hidden;
	color: rgba(0, 0, 0, 0.88);
	transform-origin: center center;
}

.custom-dialog.animation {
	transform: translate(-50%, -50%) scale(0);
	animation: dialogAni 0.4s ease-in-out forwards, shake 0.35s 1s ease-in-out forwards;
}

@keyframes dialogAni {
	0% {
		transform: translate(-50%, -50%) scale(0);
	}
	100% {
		transform: translate(-50%, -50%) scale(1);
	}
}

@keyframes shake {
	0% {
		transform: translate(-50%, -50%) scale(1) rotateZ(0deg);
	}

	25% {
		transform: translate(-50%, -50%) scale(1) rotateZ(3deg);
	}

	50% {
		transform: translate(-50%, -50%) scale(1) rotateZ(-3deg);
	}

	75% {
		transform: translate(-50%, -50%) scale(1) rotateZ(3deg);
	}

	100% {
		transform: translate(-50%, -50%) scale(1) rotateZ(0deg);
	}
}

.custom-dialog-header {
	position: relative;
	box-sizing: border-box;
	padding: 16px 24px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid rgba(5, 5, 5, 0.06);
}

.custom-dialog-header.center {
	justify-content: center;
}

.custom-dialog-header .title {
	font-size: 16px;
}

.custom-dialog-header .close {
	user-select: none;
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%) rotateZ(45deg);
	font-size: 32px;
	color: #2c2c30;
	cursor: pointer;
}

.custom-dialog-header .close:hover {
	transition: all 0.2s ease-in-out;
	color: rgba(0, 0, 0, 0.88);
}

.custom-dialog-header .close:hover:after {
	transition: all 0.2s ease-in-out;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	border-radius: 3px;
	background-color: rgba(0, 0, 0, 0.06);
	transform: scale(1.2);
	transform-origin: center center;
}

.custom-dialog-body {
	max-height: calc(100vh - 180px);
	box-sizing: border-box;
	padding: 16px 24px;
	overflow: hidden;
	overflow-y: auto;
}

/* 修改垂直滚动条 */
.custom-dialog-body::-webkit-scrollbar {
	width: 8px;
}

/* 修改滚动条轨道背景色 */
.custom-dialog-body::-webkit-scrollbar-track {
	background-color: #f1f1f1;
}

/* 修改滚动条滑块颜色 */
.custom-dialog-body::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.15);
}

/* 修改滚动条滑块悬停时的颜色 */
.custom-dialog-body::-webkit-scrollbar-thumb:hover {
	background-color: rgba(0, 0, 0, 0.35);
}

/* 修改滚动条滑块移动时的颜色 */
.custom-dialog-body::-webkit-scrollbar-thumb:active {
	background-color: rgba(0, 0, 0, 0.55);
}

/* 修改滚动条滑块的圆角 */
.custom-dialog-body::-webkit-scrollbar-thumb {
	border-radius: 3px;
}

.custom-dialog-footer {
	box-sizing: border-box;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	border-top: 1px solid rgba(5, 5, 5, 0.06);
	padding: 16px 24px;
	gap: 0 3px;
}

.custom-dialog-footer.center {
	justify-content: center;
}

@media screen and (max-width: 768px) {
	.custom-dialog {
		width: 100%;
		height: 100%;
	}
}
</style>
