<template>
	<section class="bg-light-300 px-4 lg:(px-20) bg-dark-500 rounded-tl-8 w-full -mb-8 pb-10">
		<h2 id="kontzertuak" class="py-6 text-lg text-dark-500 font-regular ">
			Kontaktua
		</h2>
		<ul class="flex gap-2 flex-wrap pb-2">
			<!-- <ContactButton icon="i-carbon-logo-instagram" image="instagram" text="zirkinikbez" link="https://www.instagram.com/zirkinikbez/" /> -->
			<ContactButton icon="i-carbon-phone" image="phone" text="659 975 820" link="tel:+34659975820"/>
			<ContactButton icon="i-carbon-email" image="email" text="info@baga-biga.eus" link="mailto:info@zirkinikbez.eus"/>
		</ul>
	</section>
</template>

<script setup lang="ts">
import ContactButton from './ContactButton.vue';
</script>
