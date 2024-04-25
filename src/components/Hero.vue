<template>
	<section id="hasiera" class="flex pt-10 flex-col gap-2 w-full flex-grow">
		<div class="pl-8 flex flex-col gap-4 pt-8 lg:pt-8 2xl:pt-16">
			<img src="/zb-website/logo-lerro.svg" class="<sm:w-full sm:w-100 lg:w-200 pr-4" alt="Zirkinik bez logoa">
			<div class="flex flex-col gap-2 border-t border-neutral-400 pt-2 text-light-200">
				<h1 class="text-xl font-500 text-neutral-400 xl:text-2xl">{{ header }} </h1>
				<Contact class="text-4xl xl:text-4xl text-neutral-300"/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Contact from './Contact.vue';
const header = "Euskal erromeria taldea"
</script>

<style scoped>

@media (max-width: 430px) {
	section {
		background-position: 0px -100px; 
	}
}

@media (min-width: 430px) and (max-width: 1024px) {
	section {
		background-position: 0px -200px ; 
	}
}

@media (min-width: 1024px) and (max-width: 1440px) {
	section {
		background-position: 0px -500px ; 
	}
}
@media (min-width: 1440px) and (max-width:2800px) {
	section {
		background-position: 0px -700px ; 
	}
}
@media (min-width: 2800px) {
	section {
		background-position: 0px -1600px ; 
	}
}
section {
	background-image: url('/zb-website/header.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-color: #000;
}
</style>
