<template>
	<div class="p-4" :class="{ 'bg-dark-600/54': isMenuOpen }">
		<div class="flex justify-between items-center sticky top-0 text-red-500">
			<img src="/zb-website/logo-header.svg">
			<span class="i-carbon-menu text-5xl" @click="isMenuOpen = !isMenuOpen">
			</span>
		</div>
		<ul v-show="isMenuOpen" class="ml-auto text-3xl font-semibold text-white flex flex-col gap-2">
			<li v-for="elem in elems">
				<a :href="elem.path" :class="{'text-red-500' : elem.path === currentPath}">
					{{elem.label}}
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


type Props = {
	currentPath: any,
}

defineProps<Props>()
const isMenuOpen = ref(false)

const BASE_URL = '/zb-website'

const elems = [
{

	label: "Hasiera",
		path: BASE_URL + "/",
},
{

	label: "Kontzertuak",
		path: BASE_URL + "/kontzertuak",
},
{

	label: "Argazkiak",
		path: BASE_URL + "/argazkiak",
},
]
</script>

<style scoped>
li {
	text-align: end;
}
</style>
