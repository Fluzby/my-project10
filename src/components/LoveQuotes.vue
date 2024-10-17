<script setup>
const quotes = [
  'You are my semicolon; always present in everything I do.',
  'You are my today and all of my tomorrows.',
  'To love and be loved is to feel the sun from both sides.',
];
</script>

<template>
  <section>
    <h3 class="text-2xl mb-4 text-center">Love Quotes</h3>
    <ul class="space-y-4">
      <li v-for="(quote, index) in quotes" :key="index" class="text-lg text-center animate-blink">
        "{{ quote }}"
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
