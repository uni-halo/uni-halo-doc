<script setup lang='ts'>
import { VPTeamMembers, VPTeamPage, VPTeamPageTitle } from 'vitepress/theme';
import { onMounted, ref } from 'vue';
import { AppConfigs } from '../../../src/config';

const members = ref([]);
const contributors = ref([]);

const getTeams = () => {
	fetch(AppConfigs.getStaticBaseUrl() + `/data/team.json?t=${Date.now()}`).then(res => res.json()).then(res => {
		contributors.value = res.contributors.filter(item=>item.visible);
		members.value = res.members.filter(item => item.visible);
	}).catch(err => {
		console.error('日志：获取团队信息失败，', err);
	});
};

onMounted(() => {
	getTeams();
	members.value = shuffleArray(members.value);
	contributors.value = shuffleArray(contributors.value);
});

function shuffleArray(array) {
	const firstFive = array.slice(0, 3);
	const remaining = array.slice(3);

	for (let i = firstFive.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[firstFive[i], firstFive[j]] = [firstFive[j], firstFive[i]];
	}

	for (let i = remaining.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[remaining[i], remaining[j]] = [remaining[j], remaining[i]];
	}
	return firstFive.concat(remaining);
}
</script>

<template>
	<VPTeamPage>
		<VPTeamPageTitle>
			<template #title>
				<span class='team-title'>核心团队</span>
			</template>
			<template #lead>
				核心开发团队，排名不分先后
			</template>
		</VPTeamPageTitle>
		<VPTeamMembers
			:members='members'
		/>
		<VPTeamPageTitle>
			<template #title>
				<span class='team-title'>社区贡献</span>
			</template>
			<template #lead>
				参与贡献者，排名不分先后
			</template>
		</VPTeamPageTitle>
		<VPTeamMembers
			:members='contributors'
		/>
	</VPTeamPage>
</template>

<style scoped>
.team-title {
	user-select: none;
	position: relative;
	background: var(--vp-home-hero-name-background);
	background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 26px;
}

.team-title:hover {
	background: none;
	-webkit-text-fill-color: #ffffff;
}

.team-title:hover::before {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-image: var(--vp-home-hero-image-background-image);
	filter: blur(24px);
	z-index: -1;
}


.VPTeamPage {
	margin-top: 0 !important;
}

</style>

<style>

/* 需要隐藏贡献记录,团队页面 */
.VPPage {
	#贡献者, #页面历史, .vp-nolebase-git-changelog, .vp-nolebase-git-changelog {
		display: none !important;
	}
}
</style>
