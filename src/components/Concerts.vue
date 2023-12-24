<template>
	<section class="px-4 lg:(px-20)">
		<h2 id="kontzertuak" class="pt-26 lg:pt-36 mb-8 text-5xl font-bold text-red-700 uppercase">
			Hurrengo datak
		</h2>
		<ConcertList :vertical="false" />
	</section>
</template>


<script setup lang="ts">
import ConcertList from './ConcertList.vue';

</script>

<style scoped>
section {
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
