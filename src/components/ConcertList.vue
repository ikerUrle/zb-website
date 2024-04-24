<template>
	<ul class="flex flex-row gap-4 overflow-auto pb-2 flex-grow" :class="{ '!flex-col': vertical }">
		<Card v-for="(date, index) in filteredDates" :date="date" :index="index" />
	</ul>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import { dates } from '../utils';
import { computed } from 'vue';

type Props = {
	vertical: boolean,
}

defineProps<Props>()

const filteredDates = computed(() => dates.filter((x) => (x.date && new Date(x.date) > new Date()) || x.extra))

</script>
