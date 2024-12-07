<template>
  <div
    class="modal absolute inset-0 z-2000 flex flex-col items-center justify-center"
  >
    <div class="text-red-400 uppercase font-black text-6xl sm:text-8xl">15 urte</div>
    <div class="text-2xl">
      <Contact />
    </div>
    <div class="text-light-900">2025 - #HankazGora</div>
    <div class="text-#666">Prestatzen...</div>
  </div>
</template>

<script setup lang="ts">

import Contact from './Contact.vue';
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.90);
}
</style>

