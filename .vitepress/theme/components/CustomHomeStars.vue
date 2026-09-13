<template>
	<div class='home-star'>
		<a href='https://github.com/ialley-workshop-open/uni-halo' target='_blank' title='Github stars'>
			<img
				alt='GitHub Repo stars'
				src='https://img.shields.io/github/stars/ialley-workshop-open/uni-halo?logo=github&color=%234d80f0&link=https://github.com/ialley-workshop-open/uni-halo'
			/>
		</a>
		<a href='https://github.com/ialley-workshop-open/uni-halo/stargazers' target='_blank' title='Github forks'>
			<img alt='GitHub forks' src='https://img.shields.io/github/forks/ialley-workshop-open/uni-halo'>
		</a>
		<a href='https://github.com/ialley-workshop-open/uni-halo/stargazers' target='_blank' title='Gitee stars'>
			<img src='https://gitee.com/ialley-workshop-open/uni-halo/badge/star.svg?theme=gray' alt='star' />
		</a>
		<a href='https://github.com/ialley-workshop-open/uni-halo/releases' target='_blank' title='Github Release'>
			<img alt='GitHub Release' src='https://img.shields.io/github/v/release/ialley-workshop-open/uni-halo'>
		</a>
		<a href='https://github.com/ialley-workshop-open/uni-halo' target='_blank' title='Github license'>
			<img alt='GitHub' src='https://img.shields.io/github/license/ialley-workshop-open/uni-halo?logo=github' />
		</a>
	</div>
</template>

<script setup lang='ts'>
</script>

<style>
.home-star {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-top: 24px;
	flex-wrap: wrap;
	gap: 12px;
}

@media screen and (max-width: 768px) {
	.home-star {
		justify-content: center;
	}
}

</style>

