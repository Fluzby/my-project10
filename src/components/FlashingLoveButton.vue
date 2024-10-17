<script setup>
import { ref } from 'vue';

const loveSent = ref(false);

const sendLove = () => {
  loveSent.value = true;

  setTimeout(() => {
    loveSent.value = false;
  }, 3000);
};
</script>

<template>
  <div class="flex flex-col items-center space-y-4">
    <button 
      @click="sendLove"
      class="px-6 py-3 text-xl font-bold text-black bg-valentine-light rounded-full animate-pulse hover:animate-none hover:bg-valentine-dark transition-colors duration-300"
    >
      💖 Send Love to Tak-23 💖
    </button>

    <div v-if="loveSent" class="flex flex-col items-center space-y-2">
      <div class="relative h-20 w-20">
        <div class="absolute w-6 h-6 bg-valentine-light rounded-full top-0 left-0 animate-ping"></div>
        <div class="absolute w-8 h-8 bg-valentine-dark rounded-full top-8 right-4 animate-ping"></div>
        <div class="absolute w-10 h-10 bg-valentine rounded-full bottom-0 left-12 animate-ping"></div>
      </div>

      <p class="text-xl font-console text-valentine-light animate-fadeIn">
        Love Sent! 💖
      </p>
    </div>
  </div>
</template>

<style scoped></style>
