<template>
  <div
    class="modal absolute inset-0 z-2000 flex flex-col items-center justify-center"
  >
    <div class="text-red-400 uppercase font-black text-4xl sm:text-8xl py-2">Bira hasiera!</div>
    <div class="text-xl sm:text-4xl text-#aaa">Otsailak 28 - Astra (Gernika)</div>
    <div class="text-#666 sm:text-2xl">15 urte - #HankazGora</div>
    <div class="text-2xl sm:text-4xl py-2">
      <Contact />
    </div>
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

