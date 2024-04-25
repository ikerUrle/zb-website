<template>
	<div class="p-4 py-6 fixed top-0 w-full z-2" :class="{ '<lg:(bg-dark-600/84 h-full)': isMenuOpen }">
		<div class="flex justify-end items-center sticky top-0 text-white-500">
			<span class="lg:hidden text-5xl color-red-700 text-shadow-xl p-1 " @click="isMenuOpen = !isMenuOpen">
				<div class="i-circum-instagram" />
			</span>
			<div class="<lg:hidden lg:visible p-4 px-8 bg-dark-900/20 rounded-10 mx-auto">
				<ul class="flex gap-10 text-2xl font-300 text-white">
					<li v-for="elem in elems">
						<a :href="elem.path" :class="{ 'text-red-500 font-400': elem.path === currentPath }" @click="currentPath = elem.path">
							{{ elem.label }}
						</a>
					</li>
				</ul>
			</div>
		</div>
		<ul v-show="isMenuOpen" class="sm:hidden ml-auto text-5xl font-semibold text-white flex flex-col gap-2 mt-8">
			<li v-for="elem in elems">
				<a :href="elem.path" :class="{ 'text-red-500': elem.path === currentPath }" @click="() => menuElemClicked(elem.path)">
					{{ elem.label }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false)

const currentPath = ref(window?.location.hash || '#hasiera')

const menuElemClicked = (path: string) => {
	currentPath.value = path
	isMenuOpen.value = !isMenuOpen.value
}

const elems = [
	{

		label: "Hasiera",
		path: "#hasiera",
	},
	{

		label: "Kontzertuak",
		path: "#kontzertuak",
	},
	{

		label: "Kontaktua",
		path: "#kontaktua"
	},
]
</script>

<style scoped>
li {
	text-align: end;
}
</style>
