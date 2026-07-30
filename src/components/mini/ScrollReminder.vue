<script setup lang="ts"> 
import { PhMouseSimple } from "@phosphor-icons/vue";
</script>

<template>
  <div
    class="flex flex-col items-center p-4 text-stone-500"
  >
    <div class="scrollDown">Scroll Down<PhMouseSimple :size="20" /></div>
    <div class="md:hidden text-sm">Best Viewed on a Laptop/PC</div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.scrollDown {
  @apply opacity-0 flex items-center gap-1;
  animation: scrollDownBlink 2s ease infinite 1.5s;
}

@keyframes scrollDownBlink {
  10% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
}

</style>