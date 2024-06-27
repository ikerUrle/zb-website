<template>
  <section
    class="z-2 px-4 lg:(px-8 mr-1 rounded-tr-8) bg-dark-500 rounded-tl-8 w-full flex flex-col justify-between h-50dvh 2xl:h-55dvh"
  >
    <h2 id="kontzertuak" class="py-6 text-lg font-regular xl:text-xl">
      Hurrengo kontzertuak
    </h2>
    <ConcertList client:load />
  </section>
</template>

<script setup lang="ts">
import ConcertList from "./ConcertList.vue";
</script>

<style scoped >
@media (min-width: 1920px) {
  section {
    height: 40dvh;
  }
}
</style>
