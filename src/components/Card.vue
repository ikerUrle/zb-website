<template>
	<li class=" relative flex flex-col gap-2"
		>
		<div
			:style="`background-image: url('/zb-website/cards/${i}.webp');`"
			class="card rounded-4"
			>
		</div>


		<!-- <img :src="`/zb-website/cards/${i}.webp`" height="220" width=""> -->
		<span class="pl-1 whitespace-pre flex flex-col ">
			<span class="text-base font-thin text-#787878">
				{{ date.date }}
			</span>
			<span class="text-sm text-#A9A8A8 text-xl">
				{{ date.city || " "}}
			</span>
		</span>
		<!-- <span class="<lg:hidden lg:visible z-1 font-semi pt-60 pr-20 whitespace-pre"> -->
		<!-- 	{{ date.city }} | {{ date.date }} -->
		<!-- </span> -->
		<!-- <div class="gradient-overlay" /> -->
	</li>
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
	width:120px !important;
	height:220px !important;
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
