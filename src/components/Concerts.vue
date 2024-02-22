<template>
	<section class="z-2 px-4 bg-dark-500 rounded-tl-8 w-full flex flex-col justify-between">
		<h2 id="kontzertuak" class="py-6 text-lg font-regular ">
			Hurrengo kontzertuak
		</h2>
		<ConcertList :vertical="false" />
	</section>
</template>


<script setup lang="ts">
import ConcertList from './ConcertList.vue';
</script>
