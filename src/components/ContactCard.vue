<template>
	<li class="relative flex flex-col w-full" :style="`background-image: url('/zb-website/contact/${image}.webp')`">
		<a :href="link"
			class="flex flex-col gap-2 z-1 items-center py-10 text-light-600 font-200 text-3xl">
			<span :class="icon" class="text-6xl" />
			{{ text }}
		</a>
		<div class="gradient-overlay" />
	</li>
</template>

<script setup lang="ts">

type Props = {
	image: string,
	text: string,
	icon: string,
	link: string,
}

defineProps<Props>()

</script>

<style scoped>
li {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

.gradient-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(171, 171, 171, 0.2), rgba(71, 71, 71, 0.8));
}

li:hover .gradient-overlay {
	background: linear-gradient(rgba(171, 171, 171, 0.8), rgba(71, 71, 71, 0.8));
}
</style>
