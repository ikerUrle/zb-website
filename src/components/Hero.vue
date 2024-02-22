<template>
	<section id="hasiera" class="flex pt-10 flex-col gap-2 w-full flex-grow">

		<div class="pl-8 flex flex-col gap-4">

		<img src="/zb-website/logo-lerro.svg" class="<sm:w-full sm:w-100 pr-4" alt="Zirkinik bez logoa">
		<h1 class="text-lg font-400 text-light-200 border-t border-light-500 pt-2">{{ header }}</h1>
		</div>
	</section>
</template>

<script setup lang="ts">
const header = "Euskal erromeria taldea"
</script>

<style scoped>
@media (max-width: 430px) {
	section {
	background-image: url('/zb-website/header.png') !important;
	background-position: 0px -100px !important; 
	}
}
section {
	background-image: url('/zb-website/header2.webp');
	background-position: 0px -100px !important; 
	background-size: cover;
	background-repeat: no-repeat;
	background-color: #07236A;
}
</style>
