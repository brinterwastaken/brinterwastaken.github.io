<template>
  <div class="hazardTape font-alt font-bold">
    <div class="flex items-center">
      <span>BETA Version</span>
      <span>Report Issues</span>
      <span>BETA Version</span>
      <span>Report Issues</span>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.hazardTape {
  @apply fixed -top-36 md:-top-28 -left-48 md:-left-48 h-6 flex items-center w-max mt-24 -rotate-30 backdrop-blur-sm text-white;
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
    translate: -50% 0;
  }
}
</style>
