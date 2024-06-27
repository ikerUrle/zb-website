<template>
	<ul class="flex flex-row gap-4 items-center overflow-auto pb-4 mb-2 flex-grow" client:load >
		<Card v-for="(date, index) in filteredDates" :date="date" :index="index" />
	</ul>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import { dates } from '../utils';
import { computed } from 'vue';

const filteredDates = computed(() => dates.filter((x) => (x.date && new Date(x.date) > new Date()) || x.extra))

</script>
