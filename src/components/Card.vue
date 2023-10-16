<template>
	<div class="flex flex-col p-4 py-8 pr-16 border-l-4 border-red-500 text-4xl bg-dark-800/70">
		<span class="flex gap-2 text-4xl">
		<h3>
			{{date.city}}
		</h3>
			<p>({{date.prov}})</p>
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
