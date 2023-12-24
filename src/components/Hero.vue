<template>
	<section id="hasiera" class="flex flex-col gap-2 h-180 px-10 lg:(px-20 pt-6) w-full flex-grow">
		<img src="/zb-website/logo-header2.svg" class="w-60 lg:(w-80 -ml-16 -mt-2) -ml-4 mt-4">
		<h1 class="text-6xl pt-36 lg:(text-8xl pt-36) font-400 text-light-200">{{ header }}</h1>
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
@media (max-width: 430px) {
	section {
		background-image: url('/zb-website/header.webp') !important;
		background-position: 90% -50% !important;
	}
}
section {

	background-image: url('/zb-website/header2.webp');
	background-position: right;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
