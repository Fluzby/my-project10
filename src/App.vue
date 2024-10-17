<script setup>
import Hero from './components/Hero.vue'
import ConsoleMessage from './components/ConsoleMessage.vue'
import AnimatedHearts from './components/AnimatedHearts.vue'
import LoveQuotes from './components/LoveQuotes.vue'
import ValentineFooter from './components/ValentineFooter.vue'
import FlashingLoveButton from './components/FlashingLoveButton.vue'
import GlowHeartGrid from './components/GlowHeartGrid.vue'
import ConfettiExplosion from './components/ConfettiExplosion.vue'
import AnimatedBackground from './components/AnimatedBackground.vue'
</script>

<template>
  <div class="min-h-screen bg-black text-valentine-light font-console relative">
    <AnimatedBackground />

    <header class="text-center p-8">
      <h1 class="text-6xl font-bold animate-glow">
        <span class="text-valentine-light">Happy</span>
        <span class="text-valentine-dark">Random Love</span> Day! Karl:D
      </h1>
    </header>

    <main class="space-y-12 p-8">
      <Hero />
      <AnimatedHearts />
      <ConsoleMessage />
      <GlowHeartGrid />
      <FlashingLoveButton />
      <ConfettiExplosion />
      <LoveQuotes />
      <LoveCountdown />
    </main>

    <footer class="text-center mt-16">
      <ValentineFooter />
    </footer>
  </div>
</template>

<style scoped></style>
