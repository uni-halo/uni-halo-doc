<template>
	<div class='using-examples' v-if='usingExamples.length!==0'>
		<div class='using-examples_head'>
			<h1 class='using-examples_head__title'>使用案例</h1>
			<p class='using-examples_head__subtitle'>
				免费开源，以下站长都在使用
			</p>
			<div>
				<a class='btn-submit-example' href='https://github.com/ialley-workshop-open/uni-halo/issues/23' target='_blank'
					 title='提交我的案例'>提交我的案例</a>
			</div>
		</div>
		<ul class='using-examples_list'>
			<li
				class='using-examples_list__item'
				v-for='(item, index) in usingExamples'
				:key='index'
				:title='item.name'
			>
				<div class='using-examples_list__item_link' :title='item.name' @click='handleToLink(item)'>
					<div class='using_image'>
						<img :src='item.image' :alt='item.name' data-fancybox='gallery' />
					</div>
					<div class='using_name'>{{ item.name }}</div>
					<div class='using_nickname'>（站长：{{ item.nickname }}）</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { AppConfigs } from '../../../src/config';

const usingExamples = ref([]);

const getExamples = () => {
	fetch(AppConfigs.getStaticBaseUrl() + `/data/examples.json?t=${Date.now()}`).then((res) => res.json()).then((res) => {
		usingExamples.value = res;
	}).catch((err) => console.error(err));
};
getExamples();


const handleToLink = (link: any) => {
	if (!link.link.startsWith('http')) return;
	window.open(link.link);
};
</script>

<style scoped lang='less'>
.using-examples {
	width: 100%;
	margin: 0 auto;
	max-width: 1150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding-top: 70px;
	margin-bottom: 26px;

	&_head {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 26px;
		margin-bottom: 32px;

		&__title {
			font-size: 26px;
			color: var(--vp-c-brand);
		}

		&__subtitle {
			margin-top: 12px;
			color: var(--vp-c-text-2);
			font-size: 16px;
		}
	}

	&_list {
		width: 100%;
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 16px;

		&__item {
			margin-top: 0 !important;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border: 1px solid var(--vp-c-bg-soft);
			background-color: var(--vp-c-bg-soft);
			transition: transform 0.3s ease-in-out;
			box-sizing: border-box;
			padding: 24px;
			border-radius: 12px;

			&_link:hover {
				pointer: cursor;
				text-decoration: underline;
				text-decoration-color: #00a0f4;
			}

			&:hover {
				transform: translateY(-4px);
			}

			.using_image {
				width: 100%;
				margin-bottom: 16px;
				border-radius: 50%;
				box-sizing: border-box;
				overflow: hidden;

				> img {
					width: 100%;
					height: 100%;
				}
			}

			.using_name {
				font-size: 18px;
				text-align: center;
				line-height: 22px;
				// color: var(--vp-c-brand);
				color: var(--vp-c-text-2);
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.using_nickname {
				margin-top: 4px;
				font-size: 14px;
				text-align: center;
				line-height: 22px;
				color: var(--vp-c-text-2);
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
}

.btn-submit-example {
	cursor: pointer;
	background-color: var(--vp-button-brand-bg);
	backdrop-filter: blur(6px);
	border-radius: 36px;
	color: #ffffff;
	font-size: 14px;
	padding: 6px 12px;
	box-sizing: border-box;
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
	user-select: none;
	text-decoration: none;
	transition: all 0.35s ease-in-out;
	border: 1px solid rgba(255, 255, 255, 0.35);

	&:hover {
		color: var(--vp-button-brand-hover);
		background-color: var(--vp-button-brand-hover-bg);
	}
}

/* iPad */
@media (max-width: 1368px) {
	.using-examples_list {

	}
}

/* phone */
@media (max-width: 960px) {
	.using-examples_list {

	}
}

/* phone */
@media (max-width: 768px) {
	.using-examples_list {

		&__item {

			.using_image {
				margin-bottom: 12px;
			}

			.using_name {
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 15px;
			}
		}
	}
}

/* phone */
@media (max-width: 500px) {
	.using-examples_list {

		&__item {

			.using_image {
				margin-bottom: 12px;
			}

			.using_name {
				font-size: 15px;
			}
		}
	}
}
</style>
