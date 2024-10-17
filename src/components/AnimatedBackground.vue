<script setup></script>

<template>
  <div class="fixed inset-0 z-0 overflow-hidden">
    <!-- First heart floating across the screen -->
    <div class="absolute w-12 h-12 bg-valentine rounded-full opacity-25 top-1/4 left-0 animate-moveHeart"></div>

    <!-- Second heart with a different speed and position -->
    <div class="absolute w-16 h-16 bg-valentine-light rounded-full opacity-50 top-2/4 right-0 animate-moveHeart2"></div>

    <!-- Third heart floating upwards with a different animation duration -->
    <div class="absolute w-10 h-10 bg-valentine-dark rounded-full opacity-20 bottom-0 left-1/4 animate-moveHeart3"></div>
  </div>
</template>

<style scoped>
/* Keyframes for moving hearts */
@keyframes moveHeart {
  0% {
    transform: translateX(-100px) translateY(0);
  }
  100% {
    transform: translateX(100vw) translateY(-50px);
  }
}

@keyframes moveHeart2 {
  0% {
    transform: translateX(100px) translateY(0);
  }
  100% {
    transform: translateX(-100vw) translateY(100px);
  }
}

@keyframes moveHeart3 {
  0% {
    transform: translateX(0) translateY(100px);
  }
  100% {
    transform: translateX(50vw) translateY(-100vh);
  }
}

/* Apply animations to the hearts */
.animate-moveHeart {
  animation: moveHeart 10s linear infinite;
}

.animate-moveHeart2 {
  animation: moveHeart2 15s linear infinite;
}

.animate-moveHeart3 {
  animation: moveHeart3 12s linear infinite;
}
</style>
