<template>
	<div class="p-4 fixed top-0 w-full z-2" :class="{ '<lg:(bg-dark-600/84 h-full)': isMenuOpen }">
		<div class="flex justify-between items-center sticky top-0 text-white-500">
			<img src="/zb-website/logo-header.svg" class="w-80 fill-blue-500">
			<span class="lg:hidden i-carbon-menu text-5xl" @click="isMenuOpen = !isMenuOpen" />
			<div class="<lg:hidden lg:visible">
				<ul class="flex gap-8 text-4xl mr-8 font-light">
					<li v-for="elem in elems">
						<a :href="elem.path" :class="{ 'text-red-500': elem.path === currentPath }" @click="isMenuOpen = !isMenuOpen">
							{{ elem.label }}
						</a>
					</li>
				</ul>
			</div>
		</div>
		<ul v-show="isMenuOpen" class="sm:hidden ml-auto text-6xl font-semibold text-white flex flex-col gap-2">
			<li v-for="elem in elems">
				<a :href="elem.path" :class="{ 'text-red-500': elem.path === currentPath }" @click="isMenuOpen = !isMenuOpen">
					{{ elem.label }}
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
