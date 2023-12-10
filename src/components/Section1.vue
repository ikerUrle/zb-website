<template>
	<section class="flex flex-col gap-2 h-180 font-noirden p-10 lg:p-20 pt-40 w-full flex-grow">
		<h1 id="hasiera" class="text-6xl lg:text-8xl font-bold text-gray-300">{{ header }}</h1>
		<p class="text-2xl lg:text-4xl font-light mt-8 max-w-200">
			{{ paragraph }}
		</p>
		<CtaButton class="ml-auto mr-8 mt-4 mt-auto" />
	</section>
</template>

<script setup lang="ts">
import CtaButton from './CtaButton.vue';

const header = "Euskal erromeria taldea"
const paragraph = "Ska, rock zein punk doinuak zuen herriko oholtzara eramaterko irrikitan gaude!"
</script>

<style scoped>
section {
	/* If you add url in "layout" it breaks WTF */
	background-image: url('/zb-website/header.png');
	background-position: right;
  background-size: cover; 
  background-repeat: no-repeat;
}
</style>
