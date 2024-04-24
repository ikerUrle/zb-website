<template>
	<section class="z-2 px-4 lg:(px-8) bg-dark-500 rounded-tl-8 w-full flex flex-col justify-between h-50dvh">
		<h2 id="kontzertuak" class="py-6 text-lg font-regular xl:text-xl">
			Hurrengo kontzertuak
		</h2>
		<ConcertList :vertical="false" />
	</section>
</template>


<script setup lang="ts">
import ConcertList from './ConcertList.vue';
</script>
