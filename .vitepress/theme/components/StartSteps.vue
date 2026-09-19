<template>
	<div class="start-steps">
		<h2 class="start-steps-title">部署流程</h2>
		<p class="start-steps-tagline">从零开始，让 Halo 站点拥有一款精美的多端应用</p>
		<div class="start-steps-grid">
			<div v-for="(step, index) in steps" :key="index" class="start-step-card">
				<div class="start-step-num">{{ index + 1 }}</div>
				<div class="start-step-body">
					<div class="start-step-name">{{ step.title }}</div>
					<div class="start-step-desc">{{ step.desc }}</div>
					<a :href="step.link" class="start-step-link">查看文档 →</a>
				</div>
			</div>
		</div>
		<div class="start-steps-action">
			<a href="/deploy/full-content" class="start-steps-cta">阅读完整部署流程 →</a>
		</div>
	</div>
</template>

<script setup>
const steps = [
	{
		title: '安装配置插件',
		desc: '在 Halo 后台插件市场安装 UniHalo 配置插件并启用，完成基础配置',
		link: '/deploy/config'
	},
	{
		title: '下载应用源码',
		desc: '克隆或下载发布包，使用 pnpm 安装依赖（Node ≥ 20）',
		link: '/deploy/preparation'
	},
	{
		title: '编译发布',
		desc: 'pnpm dev:mp 本地预览，pnpm build:mp 构建，上传微信后台发布',
		link: '/deploy/wx-release'
	}
];
</script>

<style scoped>
.start-steps {
	margin: 4rem auto 3rem;
	padding: 0 1.5rem;
	max-width: 1152px;
	text-align: center;
}

.start-steps-title {
	margin: 0 0 0.5rem;
	border-top: none;
	font-size: 26px;
	font-weight: 600;
	line-height: 1.4;
	letter-spacing: 0;
	color: var(--vp-c-brand);
}

.start-steps-tagline {
	margin: 12px 0 2rem;
	color: var(--vp-c-text-2);
	font-size: 16px;
}

.start-steps-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}

@media (max-width: 768px) {
	.start-steps-grid {
		grid-template-columns: 1fr;
	}
}

.start-step-card {
	display: flex;
	align-items: flex-start;
	gap: 0.9rem;
	padding: 1.25rem 1.25rem 1.1rem;
	border: 1px solid var(--vp-c-divider);
	border-radius: 12px;
	background: var(--vp-c-bg-soft);
	text-align: left;
	transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.start-step-card:hover {
	border-color: var(--vp-c-brand);
	transform: translateY(-2px);
	box-shadow: 0 8px 24px var(--vp-c-brand-dimm);
}

.start-step-num {
	flex-shrink: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	border-radius: 999px;
	background: var(--vp-c-brand);
	color: #05080a;
	font-weight: 700;
	font-size: 0.95rem;
}

.start-step-name {
	margin-bottom: 0.35rem;
	font-weight: 700;
	font-size: 1rem;
}

.start-step-desc {
	margin-bottom: 0.75rem;
	color: var(--vp-c-text-2);
	font-size: 0.85rem;
	line-height: 1.6;
}

.start-step-link {
	font-size: 0.85rem;
	font-weight: 600;
	color: var(--vp-c-brand);
	text-decoration: none;
}

.start-step-link:hover {
	text-decoration: underline;
}

.start-steps-action {
	margin-top: 2rem;
}

.start-steps-cta {
	display: inline-block;
	padding: 0.55rem 1.75rem;
	border-radius: 999px;
	background: var(--vp-c-brand);
	color: #05080a;
	font-weight: 600;
	font-size: 0.95rem;
	text-decoration: none;
	transition: background-color 0.25s, transform 0.25s;
}

.start-steps-cta:hover {
	background: var(--vp-c-brand-dark);
	transform: translateY(-1px);
}
</style>
