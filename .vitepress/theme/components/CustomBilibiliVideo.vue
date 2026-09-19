<template>
    <div class="bilibili-video">
        <iframe v-if="src" class="video-iframe" :src="src" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
</template>

<script setup lang="ts">
// B 站视频地址（aid/cid 待新视频更新后填入），为空时不渲染 iframe
const src = '';
</script>

<style scoped lang="less">
.bilibili-video {
    width: 100%;
		height: 400px;
    .video-iframe {
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
