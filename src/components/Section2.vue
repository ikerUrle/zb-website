<template>
	<!-- <svg class="absolute -left-4 -right-8 -mt-20 -z-2 !w-full" width="100%" height="629" viewBox="" fill="none" xmlns="http://www.w3.org/2000/svg"> -->
	<!-- 	<path d="M432 0.5L0 80.5L-0.5 629.5L432 534.5V0.5Z" fill="white" fill-opacity="0.34" /> -->
	<!-- </svg> -->
	<section class="relative -mx-4 pt-18 p-4 -mt-10 bottom-0 flex-grow">
	<h2 class="mt-10 mb-2 text-5xl">
		Hurrengo datak
	</h2>
		<Concerts :vertical="false" />
		<Contact />
	</section>
</template>


<script setup lang="ts">
import {dates} from '../utils'
import Card from './Card.vue';
import Concerts from './Concerts.vue';
import Contact from './Contact.vue';

</script>

<style scoped>

section {
	background-image: url('/zb-website/decor.svg');
	background-position: top;
  background-size: cover; 
  background-repeat: no-repeat;
 /*  background-attachment: fixed; */
	/* background-blend-mode: hard-light; */
	/* background-color: #000; */
}

</style>
