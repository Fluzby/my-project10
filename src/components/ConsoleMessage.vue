<script setup>
import { ref, onMounted } from 'vue'

const message = ref('Loading...');
const finalMessage = 'Alot of love from Tak-23';

onMounted(() => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < finalMessage.length) {
      message.value += finalMessage[i++];
    } else {
      clearInterval(interval);
    }
  }, 150);
});
</script>

<template>
  <div class="bg-black p-4 text-valentine-light">
    <pre class="whitespace-pre-wrap font-mono">{{ message }}</pre>
    <div class="cursor-blink"></div>
  </div>
</template>

<style scoped></style>
