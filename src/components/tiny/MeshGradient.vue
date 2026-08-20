<template>
  <div
    class="absolute top-0 left-0 w-dvw h-full -z-1 overflow-hidden"
    data-scroll
    data-scroll-speed="-0.7"
    data-scroll-offset="0,-70%"
  >
    <div
      class="blurBox relative top-0 left-0 h-full w-full backdrop-blur-[5rem] md:backdrop-blur-[7.5rem]"
    ></div>
    <div
      data-scroll
      data-scroll-speed="-0.1"
      class="blob1 bg-linear-to-tr from-periwinkle to-pink-400"
    ></div>
    <div
      data-scroll
      data-scroll-speed="-0.2"
      class="blob2 bg-linear-to-br from-tangerine to-red-400"
    ></div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.blob1 {
  @apply absolute w-50 md:w-[25vw] h-[60vh] -z-10 rounded-[50%] rotate-25 -left-15 -top-25;
  animation:
    blobintro 1.5s ease-out forwards,
    blobanimation 5s ease-in-out 1.5s infinite;
}
.blob2 {
  @apply absolute w-35 md:w-[15vw] h-[35vh] -z-10 rounded-[50%] rotate-30 left-35 md:left-[20vw] top-5 opacity-75;
  animation:
    blobintro 1.5s ease-out forwards,
    blobanimation 5s ease-in-out 4s infinite;
}

@keyframes blobintro {
  0% {
    translate: -10rem -5rem;
    scale: 0%;
  }
  100% {
    translate: 0 0;
    scale: 100%;
  }
}

@keyframes blobanimation {
  0% {
    scale: 100%;
  }
  30% {
    scale: 110%;
  }
  60% {
    scale: 115%;
  }
  100% {
    scale: 100%;
  }
}
</style>
