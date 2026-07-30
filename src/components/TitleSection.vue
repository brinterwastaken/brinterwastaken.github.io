<script setup lang="ts">
import { PhSpeakerHigh } from "@phosphor-icons/vue";

import pronunciationAudio from "../assets/pronunciation.mp3";
const audio = new Audio(pronunciationAudio);

const pronounce = () => {
  audio.currentTime = 0;
  audio.play();
};
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-[10vh] md:mt-32 h-[36vh] md:h-80 shrink-0">
    <h1
      class="text-2xl md:text-4xl font-medium text-center flex items-center gap-2 overflow-clip max-h-12"
    >
      Hey
      <img
        src="../assets/wave-emoji.webp"
        class="waveEmoji inline-block w-8 h-8 md:w-9 md:h-9"
        alt="Hand waving emoji"
      />
    </h1>
    <Transition appear name="textReveal">
      <h2
        class="mt-4 font-alt text-6xl md:text-8xl font-bold text-center overflow-clip max-h-24"
        style="transition-delay: 0.5s"
      >
        I'm Trinethr
      </h2>
    </Transition>
    <Transition appear name="zoomReveal">
      <button
        @click="pronounce"
        class="pronounceButton font-mono bg-stone-600/20 px-1.5 py-0.5 rounded-md flex items-center gap-2 border-2 border-transparent hover:border-stone-800 hover:shadow-lg transition-all"
        buddy="listen"
      >
        /ˈθɹɪneɪˈθɹə/
        <PhSpeakerHigh :size="18" class="pointer-events-none"/>
      </button>
    </Transition>

    <Transition appear name="textReveal">
      <p
        class="text-lg md:text-xl mt-4 text-center text-stone-800 overflow-clip max-h-12"
        style="transition-delay: 1s"
      >
        Aspiring Automotive Design Engineer
      </p>
    </Transition>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.waveEmoji {
  animation: waveEmoji 5s ease-out infinite;
}

@keyframes waveEmoji {
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(10deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  15% {
    transform: rotate(0deg);
  }
}

.textReveal-enter-from,
.textReveal-leave-to {
  max-height: 0;
  scale: 85%;
}
.textReveal-enter-active,
.textReveal-leave-active {
  transition: all 0.5s ease;
}

.pronounceButton.zoomReveal-enter-active,
.pronounceButton.zoomReveal-leave-active {
  transition-delay: 1s;
}
</style>
