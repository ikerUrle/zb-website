<template>
	<section class="">
		<h2 id="kontaktua" class="pt-26 lg:pt-36 mt-20 text-5xl text-red-700 font-bold uppercase">
			Kontaktua
		</h2>
		<ul class="mt-8 lg:p-2 pb-4 flex <sm:flex-col sm:flex-row gap-4">
			<ContactCard icon="i-carbon-logo-instagram" image="instagram" text="zirkinikbez" link="https://www.instagram.com/zirkinikbez/" />
			<ContactCard icon="i-carbon-phone" image="phone" text="659975820 (Arkaitz)" link="tel:+34659975820"/>
			<ContactCard icon="i-carbon-email" image="email" text="info@zirkinikbez.eus" link="mailto:info@zirkinikbez.eus"/>
		</ul>
	</section>
</template>

<script setup lang="ts">
import ContactCard from './ContactCard.vue';
</script>
