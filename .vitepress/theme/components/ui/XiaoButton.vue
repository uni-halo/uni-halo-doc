<template>
	<div :class='calcButtonClass' class='xiao-button' :style='calcButtonStyle'>
		<slot>{{ title }}</slot>
	</div>
</template>

<script lang='ts' setup>
import { computed } from 'vue';

const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	type: {
		type: String,
		default: 'default'
	},
	size: {
		type: String,
		default: 'medium'
	},
	useAnimation: {
		type: Boolean,
		default: false
	},
	bgColor: {
		type: String,
		default: ''
	},
	color: {
		type: String,
		default: ''
	}
});

const calcButtonClass = computed(() => {
	let classList = [];
	if (props.useAnimation) {
		classList.push('animation');
	}
	return classList.concat([props.type, props.size]);
});

const calcButtonStyle = computed(() => {
	let styles = {};
	if (props.bgColor) {
		styles['background-color'] = props.bgColor;
	}
	if (props.color) {
		styles['color'] = props.color;
	}
	return styles;
});

</script>

<style scoped>
.xiao-button {
	margin: 2px 3px;
	user-select: none;
	border: 1px solid #dcdfe6;
	color: #606266;
	border-radius: 3px;
	padding: 12px 20px;
	font-size: 14px;
	box-sizing: border-box;
	transition: transform 0.05s ease-in-out;
	cursor: pointer;
	transform-origin: center center;
	line-height: 1;
}

.xiao-button.primary {
	color: #fff;
	background-color: #409eff;
	border-color: #409eff;
}

.xiao-button.success {
	color: #fff;
	background-color: #67c23a;
	border-color: #67c23a;
}

.xiao-button.danger {
	color: #fff;
	background-color: #f56c6c;
	border-color: #f56c6c;
}

.xiao-button.warning {
	color: #fff;
	background-color: #e6a23c;
	border-color: #e6a23c;
}

.xiao-button.medium {
	padding: 10px 20px;
	font-size: 14px;
}

.xiao-button.small {
	padding: 9px 15px;
	font-size: 13px;
}

.xiao-button.mini {
	padding: 7px 15px;
	font-size: 12px;
}

.xiao-button:active,
.xiao-button:focus {
	transform: scale(0.96);
}

.xiao-button.animation:hover {
	animation: btnShake 1s ease-in-out infinite;
}

@keyframes btnShake {
	0% {
		transform: scale(1.04) rotateZ(0deg);
	}

	25% {
		transform: scale(1.04) rotateZ(3deg);
	}

	50% {
		transform: scale(1.04) rotateZ(-3deg);
	}

	75% {
		transform: scale(1.04) rotateZ(3deg);
	}

	100% {
		transform: scale(1.04) rotateZ(0deg);
	}
}
</style>
