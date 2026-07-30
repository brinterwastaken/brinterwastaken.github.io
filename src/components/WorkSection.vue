<template>
  <div class="text-white">
    <div
      class="flex flex-col font-alt"
      data-scroll
      data-scroll-css-progress
      data-scroll-offset="30%,60%"
    >
      <div class="darkTransition" style="--index: 0"></div>
      <div class="darkTransition" style="--index: 1"></div>
      <div class="darkTransition justify-end" style="--index: 2">
        <span>SELECTED</span>
      </div>
      <div class="darkTransition justify-start" style="--index: 3">
        <span>WORK</span>
      </div>
      <div class="darkTransition" style="--index: 4"></div>
    </div>
    <div class="flex flex-col w-full p-4 pb-200 bg-stone-950"></div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.darkTransition {
  @apply w-dvw h-[12vh] font-extralight  bg-stone-950 flex flex-col items-center;
  mask-image: linear-gradient(
    to bottom,
    black calc((var(--progress) * (1 + var(--index) * 0.2)) * 100%),
    transparent calc((var(--progress) * (1 + var(--index) * 0.2)) * 100%)
  );
  transition: letter-spacing 0.5s ease;
}
.darkTransition span {
  @apply hover:tracking-wider w-fit text-[8.5vh] md:text-[10vh] leading-none;
  transition: letter-spacing 0.5s ease;
}
</style>
