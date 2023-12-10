<template>
	<div class="card relative flex flex-col p-4 py-8 pr-16 text-4xl bg-dark-800/70"
		:style="` background-image: url('/zb-website/cards/${i}.png');`">
		<span class="lg:hidden z-1 font-semi pt-40 pr-20 whitespace-pre flex flex-col">
			<span class="font-thin">
				{{ date.city }}
			</span>
			<span>
				{{ date.date }}
			</span>
		</span>
		<span class="<lg:hidden lg:visible z-1 font-semi pt-60 pr-20 whitespace-pre">
			{{ date.city }} | {{ date.date }}
		</span>
		<div class="gradient-overlay" />
	</div>
</template>


<script setup lang="ts">
import type { Date } from '../utils'

type Props = {
	date: Date,
	index: number
}

const props = defineProps<Props>()

const numImages = 6
const i = props.index % numImages;

</script>
<style>
.card {
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
}

.gradient-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(171, 171, 171, 0.2), rgba(71, 71, 71, 0.8));
}
</style>
