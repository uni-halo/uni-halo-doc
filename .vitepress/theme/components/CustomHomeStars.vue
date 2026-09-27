<template>
	<div class='home-star'>
		<a href='https://github.com/uni-halo/uni-halo' target='_blank' title='Github stars'>
			<img
				alt='GitHub Repo stars'
				src='https://img.shields.io/github/stars/uni-halo/uni-halo?logo=github&color=%234d80f0&link=https://github.com/uni-halo/uni-halo'
			/>
		</a>
		<a href='https://github.com/uni-halo/uni-halo/stargazers' target='_blank' title='Github forks'>
			<img alt='GitHub forks' src='https://img.shields.io/github/forks/uni-halo/uni-halo'>
		</a>
		<a href='https://github.com/uni-halo/uni-halo' target='_blank' title='Github license'>
			<img alt='GitHub' src='https://img.shields.io/github/license/uni-halo/uni-halo?logo=github' />
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

