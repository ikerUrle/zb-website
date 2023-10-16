<template>
	<div
		class="p-4"
		:class="{'bg-dark-600/54' : isMenuOpen}">

	<div class="flex justify-between items-center sticky top-0 text-red-500" >
	<img src="/logo-header.svg">
		<span class="i-carbon-menu text-5xl" @click="isMenuOpen = !isMenuOpen">
		</span>
	</div>
	<ul v-show="isMenuOpen" class="ml-auto text-3xl font-semibold text-white flex flex-col gap-2">
		<li>Hasiera</li>
		<li>Kontzertuak</li>
		<li>Argazkiak</li>
		<li>Kontaktua</li>
	</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const isMenuOpen = ref(false)

</script>

<style>
li {
	text-align: end;
}
</style>
