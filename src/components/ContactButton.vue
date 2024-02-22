<template>
	<li class="flex-grow border-1 border-#989898 rounded-8 py-2 whitespace-pre" >
		<a :href="link"
			class="flex flex w-full gap-2 items-center justify-center text-#989898 font-200 text-base">
			<span :class="icon" class="text-2xl" />
			{{ text }}
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
