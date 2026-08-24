<template>
  <div class="hazardTape font-alt">
    <div class="flex items-center">
      <span>Work In Progress</span>
      <span>Work In Progress</span>
      <span>Work In Progress</span>
      <span>Work In Progress</span>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.hazardTape {
  @apply fixed -top-32 md:-top-24 -left-48 md:-left-40 h-6 flex items-center w-max mt-24 -rotate-30 backdrop-blur-sm text-white;
  background: repeating-linear-gradient(
    -45deg,
    color-mix(in srgb, var(--color-amber-500) 60%, transparent),
    color-mix(in srgb, var(--color-amber-500) 60%, transparent) 2rem,
    rgba(0, 0, 0, 0.60) 2rem,
    rgba(0, 0, 0, 0.60) 4rem

  ), color-mix(in srgb, var(--color-stone-500) 50%, transparent);
}

.hazardTape > div {
  animation: marquee 3s linear infinite;
}

.hazardTape span {
  @apply text-lg uppercase shrink-0 min-w-max w-48;
}

@keyframes marquee {
  0% {
    translate: 0 0;
  }
  100% {
    translate: -25% 0;
  }
}
</style>
