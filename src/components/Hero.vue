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

/* 430px ??*/

@media (max-width: 640px) {
	/* Mobile danak */
	section {
		/* background-position: 0px -100px;  */
	}
}

@media (min-width: 640px) and (max-width: 768px) {
	/* sm*/
	section {
	background-image: url('/zb-website/sm.png') !important;
		/* background-position: 0px -200px ;  */
	}
}
@media (min-width: 768px) and (max-width: 1024px) {
	/* Tablet md */
	section {
	background-image: url('/zb-website/sm.png') !important;
		/* background-position: 0px -200px ;  */
	}
}

@media (min-width: 1024px) and (max-width: 1280px) {
	/* Laptop lg*/
	section {
		background-image: url('/zb-website/xl.png') !important;
		/* background-position: 0px -250px ;  */
	}
}
@media (min-width: 1280px) and (max-width:1536px) {
	/* xl*/
	section {
		background-image: url('/zb-website/xl.png') !important;
		/* background-position: -200px 0px ;  */
	}
}
@media (min-width: 1536px) {
	/* 2xl*/
	section {
		background-image: url('/zb-website/2xl.png') !important;
		/* background-position: 0px 0px ;  */
	}
}
section {
	background-image: url('/zb-website/base.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-color: #000;
}


</style>
