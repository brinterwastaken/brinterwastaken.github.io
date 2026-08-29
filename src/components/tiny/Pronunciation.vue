<script setup lang="ts">
import { PhSpeakerHigh } from "@phosphor-icons/vue";
import pronunciationAudio from "../../assets/pronunciation.mp3";

const audio = new Audio(pronunciationAudio);

const pronounce = () => {
  audio.currentTime = 0;
  audio.play();
};
</script>
<template>
  <button
    @click="pronounce"
    class="pronounceButton font-mono bg-stone-600/20 px-1.5 py-0.5 rounded-md flex items-center gap-2 border-2 border-transparent hover:border-stone-800 hover:shadow-lg transition-all"
    buddy="listen"
  >
    /ˈθɹɪneɪˈθɹə/
    <PhSpeakerHigh :size="18" class="pointer-events-none" />
  </button>
</template>
