<template>
	<ul class="flex flex-row gap-2 overflow-auto p-2 pb-4" :class="{ '!flex-col': vertical }">
		<Card v-for="(date, index) in dates" :date="date" :index="index" />
	</ul>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import { dates } from '../utils';

type Props = {
	vertical: boolean,
}

defineProps<Props>()

</script>
