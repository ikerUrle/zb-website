<template>
	<section class="flex flex-col gap-2 h-180 px-10 lg:px-20 w-full flex-grow">
		<h1 id="hasiera" class="text-6xl pt-56 lg:(text-8xl pt-66) font-400 text-light-200">{{ header }}</h1>
		<p class="text-2xl lg:text-4xl font-200 text-light-mt-8 max-w-200">
			{{ paragraph }}
		</p>
		<CtaButton class="ml-auto mr-8 mt-8 lg:(mt-auto mb-16)" />
	</section>
</template>

<script setup lang="ts">
import CtaButton from './CtaButton.vue';

const header = "Euskal erromeria taldea"
const paragraph = "Ska, rock zein punk doinuak zuen herriko oholtzara eramaterko irrikitan gaude!"
</script>

<style scoped>
section {
	background-image: url('/zb-website/header.png');
	background-position: right;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
