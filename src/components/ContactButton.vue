<template>
	<li class="" >
		<a :href="link"
			class="flex flex w-full gap-2 items-center justify-center font-200">
			<span :class="icon" class="" />
			<!-- {{ text }} -->
		</a>
		<!-- <div class="gradient-overlay" /> -->
	</li>
</template>

<script setup lang="ts">

type Props = {
	text: string,
	icon: string,
	link: string,
}

defineProps<Props>()

</script>

<style scoped>
/* li { */
/* 	background-position: center; */
/* 	background-size: cover; */
/* 	background-repeat: no-repeat; */
/* } */
/**/
/* .gradient-overlay { */
/* 	position: absolute; */
/* 	top: 0; */
/* 	left: 0; */
/* 	width: 100%; */
/* 	height: 100%; */
/* 	background: linear-gradient(rgba(171, 171, 171, 0.2), rgba(71, 71, 71, 0.8)); */
/* } */
/**/
/* li:hover .gradient-overlay { */
/* 	background: linear-gradient(rgba(171, 171, 171, 0.8), rgba(71, 71, 71, 0.8)); */
/* } */
</style>
