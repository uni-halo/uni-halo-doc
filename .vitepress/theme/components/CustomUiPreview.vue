<template>
	<div class="ui-preview">
		<!-- 标题区（参考精选案例：居中） -->
		<div v-if="title || subtitle" class="ui-preview-head">
			<h2 v-if="title" class="ui-preview-title">{{ title }}</h2>
			<p v-if="subtitle" class="ui-preview-subtitle">{{ subtitle }}</p>
		</div>

		<!-- 分段器（单组时隐藏） -->
		<div v-if="groups.length > 1" class="ui-preview-tabs" role="tablist">
			<button
				v-for="group in groups"
				:key="group.key"
				class="ui-preview-tab"
				:class="{ active: activeKey === group.key }"
				role="tab"
				:aria-selected="activeKey === group.key"
				type="button"
				@click="activeKey = group.key"
			>
				{{ group.label }}
			</button>
		</div>

		<!-- 截图展示 -->
		<div v-for="group in groups" v-show="activeKey === group.key" :key="group.key" class="ui-preview-panel" role="tabpanel">
			<div class="ui-preview-grid" :class="{ 'is-two': group.items.length % 2 === 0 }">
				<figure v-for="item in group.items" :key="item.name" class="ui-preview-item">
					<img
						class="ui-preview-img"
						:src="`${CDN_BASE}/${item.dir || 'app/v3.x'}/${encodeURIComponent(item.file)}`"
						:alt="item.name"
						loading="lazy"
					/>
					<figcaption class="ui-preview-name">{{ item.name }}</figcaption>
				</figure>
			</div>
		</div>

		<p v-if="footer" class="ui-preview-footer">{{ footer }}</p>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface PreviewItem {
	name: string;
	file: string;
	/** 所在目录，默认 app/v3.x */
	dir?: string;
}

interface PreviewGroup {
	key: string;
	label: string;
	items: PreviewItem[];
}

const props = withDefaults(
	defineProps<{
		groups: PreviewGroup[];
		/** 标题（居中显示，参考精选案例样式） */
		title?: string;
		/** 副标题（居中显示） */
		subtitle?: string;
		footer?: string;
	}>(),
	{
		title: '',
		subtitle: '',
		footer: ''
	}
);

const CDN_BASE = 'https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static/screenshots';
// 默认选中第一组，避免首屏空白
const activeKey = ref(props.groups[0]?.key ?? '');
</script>

<style scoped>
.ui-preview {
	max-width: 1150px;
	margin: 40px auto 24px;
	padding: 0 24px;
	box-sizing: border-box;
}

/* 标题区：参考精选案例的居中头部设计 */
.ui-preview-head {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 28px;
	text-align: center;
}

.ui-preview-title {
	margin: 0;
	padding: 0;
	border: none;
	font-size: 26px;
	font-weight: 600;
	line-height: 1.4;
	color: var(--vp-c-brand);
}

.ui-preview-subtitle {
	margin: 12px 0 0;
	font-size: 16px;
	color: var(--vp-c-text-2);
}

.ui-preview-tabs {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 8px;
	margin-bottom: 20px;
}

.ui-preview-tab {
	padding: 6px 18px;
	border: 1px solid var(--vp-c-divider);
	border-radius: 999px;
	background: var(--vp-c-bg);
	color: var(--vp-c-text-2);
	font-size: 14px;
	cursor: pointer;
	transition: all 0.2s ease;
}

.ui-preview-tab:hover {
	color: var(--vp-c-brand-1);
	border-color: var(--vp-c-brand-1);
}

.ui-preview-tab.active {
	background: var(--vp-c-brand-1);
	border-color: var(--vp-c-brand-1);
	color: var(--vp-button-brand-text, #fff);
}

.ui-preview-grid {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 16px;
}

.ui-preview-grid.is-two {
	grid-template-columns: repeat(4, 1fr);
}

.ui-preview-item {
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
}

.ui-preview-img {
	width: 100%;
	border-radius: 12px;
	border: 1px solid var(--vp-c-divider);
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.ui-preview-item:hover .ui-preview-img {
	transform: translateY(-4px);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.ui-preview-name {
	font-size: 13px;
	color: var(--vp-c-text-2);
}

.ui-preview-footer {
	margin-top: 16px;
	font-size: 13px;
	color: var(--vp-c-text-3);
	text-align: center;
}

@media screen and (max-width: 960px) {
	.ui-preview-grid {
		grid-template-columns: repeat(3, 1fr);
	}

	.ui-preview-grid.is-two {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen and (max-width: 640px) {
	.ui-preview-grid,
	.ui-preview-grid.is-two {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
