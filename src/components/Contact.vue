<template>
	<h2 class="mt-10 text-5xl">
		Kontaktua
	</h2>
	<ul class="mt-8 flex flex-col gap-4">
		<li :class="liClass">
			<span class="i-carbon-logo-instagram"></span>
			zirkinikbez
		</li>
		<li :class="liClass">
			<span class="i-carbon-phone"></span>
			659975820 (Arkaitz)
		</li>
		<li :class="liClass">
			<span class="i-carbon-email"></span>
info@zirkinikbez.eus
		</li>
	</ul>
</template>


<script setup lang="ts">

const liClass = "flex flex-row items-end gap-2 text-4xl text-light-600 font-normal"

</script>
