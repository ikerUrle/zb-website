<template>
	<div class="flex flex-col p-4 py-8 pr-16 border-l-4 border-red-500 text-4xl bg-dark-800/70">
		<span class="flex gap-2 text-4xl mb-2">
		<h3 class="font-semi">
			{{date.city}}
		</h3>
			<p class="font-thin text-dark-100">({{date.prov}})</p>
		</span>
		<h4 class="font-thin">
			{{date.date}}
		</h4>
	</div>

</template>


<script setup lang="ts">
import type {Date} from '../utils'

type Props = {
	date: Date,
}

defineProps<Props>()
</script>
