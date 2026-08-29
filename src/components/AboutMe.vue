<script setup lang="ts">
import {
  PhArrowUpRight,
  PhAsterisk,
  PhCircle,
  PhGithubLogo,
  PhInstagramLogo,
  PhLinkedinLogo,
  PhSpotifyLogo,
} from "@phosphor-icons/vue";
import Pronunciation from "./tiny/Pronunciation.vue";
import TextSlideEffect from "./tiny/TextSlideEffect.vue";
const nameTranslations = ["Trinethr", "त्रिनेत्र", "ತ್ರಿನೇತ್ರ", "Trinethr"];
</script>

<template>
  <div class="md:my-32">
    <div class="w-vw overflow-clip">
      <h1
        data-scroll
        data-scroll-css-progress
        class="text-5xl md:text-7xl font-alt opacity-60 w-max"
        style="translate: calc(var(--progress) * -25%) 0"
      >
        About Me
        <PhAsterisk class="headingAsterisk" weight="bold" /> About Me
        <PhAsterisk class="headingAsterisk" weight="bold" /> About Me
        <PhAsterisk class="headingAsterisk" weight="bold" /> About Me
        <PhAsterisk class="headingAsterisk" weight="bold" /> About Me
        <PhAsterisk class="headingAsterisk" weight="bold" /> About Me
      </h1>
    </div>

    <div class="mx-6">
      <div class="mt-16 mb-4 h-28 md:h-34 overflow-clip">
        <div
          class="nameCarousel text-7xl md:text-8xl font-light leading-28 md:leading-34 flex flex-col text-center"
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
          Since I first learned how to use a screwdriver (when I was little),
          I've loved to build as well as take apart things. This interest
          carried over to engineering, design, and programming, where I spend
          hours together creating big projects as well as fixing little features
          (that no one would notice).
        </p>
        <p class="mb-4 leading-snug">
          I also play the Violin, in the Indian Classical Carnatic style (which
          originated in South India over 2000 years ago), and I'm interested in
          all things Music.
        </p>
        <div class="text-2xl mt-8 mx-auto text-center">
          <PhAsterisk class="inline mb-1 text-periwinkle-dark" size="20" />
          Check out my Profiles
          <PhAsterisk class="inline mb-1 text-tangerine-dark" size="20" />
        </div>
        <div class="flex flex-wrap justify-center gap-4 p-6 text-sm">
          <a
            class="profileLinkButton group"
            buddy="click"
            href="https://www.linkedin.com/in/trinethr-n/"
            target="_blank"
          >
            <PhLinkedinLogo :size="20" />
            <TextSlideEffect text="Linkedin" />
            <PhArrowUpRight :size="16" class="pointer-events-none" />
          </a>
          <a
            class="profileLinkButton group"
            buddy="click"
            href="https://github.com/brinterwastaken/"
            target="_blank"
          >
            <PhGithubLogo :size="20" />
            <TextSlideEffect text="GitHub" />
            <PhArrowUpRight :size="16" class="pointer-events-none" />
          </a>
          <a
            class="profileLinkButton group"
            buddy="click"
            href="https://instagram.com/_brinter/"
            target="_blank"
          >
            <PhInstagramLogo :size="20" />
            <TextSlideEffect text="Instagram" />
            <PhArrowUpRight :size="16" class="pointer-events-none" />
          </a>
          <a
            class="profileLinkButton group"
            buddy="click"
            href="https://open.spotify.com/user/doc0wc4yekwnq5tzbcjx2oo4z?si=c0286ab9dc9142b2"
            target="_blank"
          >
            <PhSpotifyLogo :size="20" />
            <TextSlideEffect text="Spotify" />
            <PhArrowUpRight :size="16" class="pointer-events-none" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.headingAsterisk {
  @apply inline-block mb-2 w-10 md:mb-4 md:w-16;
}

.blinkingDot {
  @apply inline mb-1 mr-1 text-stone-200;
  animation: blink 1.2s linear infinite;
}

.nameCarousel {
  animation: shuffleNames 7.5s linear infinite;
}

.profileLinkButton {
  @apply w-fit px-6 py-3 bg-stone-950 text-white flex items-center gap-1 active:scale-95 transition-all;
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
