<template>
	<div class="custom-iframe">
		<iframe :src="src"></iframe>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["src"]);
const src = ref(props?.src || "https://www.xiaoxiaomo.cn");
</script>

<style scoped lang="less">
.custom-iframe {
	width: 100%;
	height: 600px;

	> iframe {
		width: 100%;
		height: 100%;
	}
}

/* iPad */
@media (max-width: 1368px) {
}
/* phone */
@media (max-width: 960px) {
}
/* phone */
@media (max-width: 768px) {
}
/* phone */
@media (max-width: 500px) {
}
</style>
