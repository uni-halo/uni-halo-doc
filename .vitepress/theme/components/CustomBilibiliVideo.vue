<template>
    <div class="bilibili-video">
        <iframe class="video-iframe" src="//player.bilibili.com/player.html?aid=518764151&cid=926513203&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    </div>
</template>

<script setup lang="ts">
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
