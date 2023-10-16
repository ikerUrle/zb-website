<template>
	<!-- <svg class="absolute -left-4 -right-8 -mt-20 -z-2 !w-full" width="100%" height="629" viewBox="" fill="none" xmlns="http://www.w3.org/2000/svg"> -->
	<!-- 	<path d="M432 0.5L0 80.5L-0.5 629.5L432 534.5V0.5Z" fill="white" fill-opacity="0.34" /> -->
	<!-- </svg> -->
	<section class="relative -mx-4 pt-18 p-4 -mt-10 bottom-0 flex-grow">
	<h2 class="mt-10 mb-2 text-5xl">
		Hurrengo datak
	</h2>
	<ul class="flex flex-row gap-2 overflow-auto p-2">
		<Card v-for="date in dates" :date="date"/>
	</ul>
		<Contact />
	</section>
</template>


<script setup lang="ts">
import type {Date} from '../utils'
import Card from './Card.vue';
import Contact from './Contact.vue';

const dates: Date[] = [
{
		city: "Bilbo",
		prov: "Bizkaia",
		date: "Ekainak 23",
		time: "21:00"
	},
{
		city: "Bilbo",
		prov: "Bizkaia",
		date: "Ekainak 23",
		time: "21:00"
	},
{
		city: "Bilbo",
		prov: "Bizkaia",
		date: "Ekainak 23",
		time: "21:00"
	},
{
		city: "Bilbo",
		prov: "Bizkaia",
		date: "Ekainak 23",
		time: "21:00"
	}
] 

</script>

<style scoped>

section {
	background-image: url('/decor.svg');
	background-position: top;
  background-size: cover; 
  background-repeat: no-repeat;
 /*  background-attachment: fixed; */
	/* background-blend-mode: hard-light; */
	/* background-color: #000; */
}

</style>
