<template>
		<ul class="flex gap-4 flex-wrap pb-2">
			<ContactButton icon="i-carbon-phone" image="phone" text="659 975 820" link="tel:+34659975820"/>
			<ContactButton icon="i-carbon-logo-instagram" image="instagram" text="zirkinikbez" link="https://www.instagram.com/zirkinikbez/" />
			<ContactButton icon="i-carbon-email" image="email" text="info@baga-biga.eus" link="mailto:info@baga-biga.eus"/>
		</ul>
</template>

<script setup lang="ts">
import ContactButton from './ContactButton.vue';
</script>
