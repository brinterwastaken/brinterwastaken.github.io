<script setup lang="ts">
import { PhAsterisk, PhCircle } from "@phosphor-icons/vue";
import Pronunciation from "./tiny/Pronunciation.vue";
const nameTranslations = ["Trinethr", "त्रिनेत्र", "ತ್ರಿನೇತ್ರ", "Trinethr"];
</script>

<template>
  <div class="md:my-32">
    <div class="w-vw overflow-clip">
      <h1
        data-scroll
        data-scroll-css-progress
        class="text-7xl md:text-9xl font-alt opacity-60 w-max"
        style="translate: calc(var(--progress) * -25%) 0"
      >
        About Me
        <PhAsterisk class="inline-block mb-4 w-20" weight="bold" /> About Me
        <PhAsterisk class="inline-block mb-4 w-20" weight="bold" /> About Me
        <PhAsterisk class="inline-block mb-4 w-20" weight="bold" /> About Me
        <PhAsterisk class="inline-block mb-4 w-20" weight="bold" /> About Me
        <PhAsterisk class="inline-block mb-4 w-20" weight="bold" /> About Me
      </h1>
    </div>

    <div class="mx-6">
      <div class="mt-16 mb-4 h-24 md:h-34 overflow-clip">
        <div
          class="nameCarousel text-6xl md:text-8xl px-12 font-light leading-24 md:leading-34 flex flex-col text-center"
        >
          <div v-for="name in nameTranslations">{{ name }}</div>
        </div>
      </div>
      <div class="font-serif text-center italic text-lg my-4">"Three Eyes"</div>
      <Pronunciation class="mx-auto" />
      <div class="text-2xl md:text-3xl my-8 mx-auto text-center max-w-4xl">
        18 y/o
        <PhAsterisk class="inline mb-1 text-periwinkle-dark" size="24" />
        Mechanical Engineering Student, Designer and Self-taught Developer
        <PhAsterisk class="inline mb-1 text-tangerine-dark" size="24" /> Based
        in Bengaluru.
      </div>
      <div class="bg-white my-4 mx-auto w-fit px-6 py-3 rounded-lg md:text-lg">
        <PhCircle weight="fill" class="blinkingDot" size="12" />
        Currently Studying at RV College of Engineering, Bengaluru
      </div>
      <div class="text-lg mx-auto max-w-4xl">
        <p class="mb-4 leading-snug">
          Since when I first learned how to use a screwdriver (when I was
          little), I've loved to build as well as take apart things. This
          interest carried over to engineering, design, and programming, where I
          spend hours together creating big projects as well as fixing little
          features (that no one would notice).
        </p>
        <p class="mb-4 leading-snug">
          I also play the Violin, in the Indian Classical Carnatic style (which
          originated in South India over 2000 years ago), and I'm interested in
          all things Music.
        </p>
        <div class="text-2xl my-8 mx-auto text-center">
          <PhAsterisk class="inline mb-1 text-periwinkle-dark" size="20" />
          Profiles
          <PhAsterisk class="inline mb-1 text-tangerine-dark" size="20" />
        </div>
        <div class="flex">
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.blinkingDot {
  @apply inline mb-1 mr-1 text-stone-200;
  animation: blink 1.2s linear infinite;
}
.nameCarousel {
  animation: shuffleNames 7.5s linear infinite;
}

@keyframes blink {
  0% {
    color: var(--color-stone-200);
  }
  40% {
    color: var(--color-lime-500);
  }
  50% {
    color: var(--color-lime-500);
  }
  90% {
    color: var(--color-stone-200);
  }
}

@keyframes shuffleNames {
  0% {
    animation-timing-function: ease-out;
    translate: 0 0;
  }
  5% {
    translate: 0 -25%;
  }
  33.33% {
    animation-timing-function: ease-out;
    translate: 0 -25%;
  }
  38.33% {
    translate: 0 -50%;
  }
  66.67% {
    animation-timing-function: ease-out;
    translate: 0 -50%;
  }
  71.67% {
    translate: 0 -75%;
  }
  100% {
    animation-timing-function: ease-out;
    translate: 0 -75%;
  }
}
</style>
