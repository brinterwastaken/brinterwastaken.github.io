<script setup lang="ts">
import type LocomotiveScroll from 'locomotive-scroll';
import { inject, onMounted, type Ref } from 'vue';

const props = defineProps<{
  progress: number;
  limit: number;
}>();

const locoScroll = inject("locoScroll") as Ref<LocomotiveScroll>;

const onRangeScroll = (e: Event) => {
  const target = e.target as HTMLInputElement;

  locoScroll.value.scrollTo(Number(target.value) / 10000 * props.limit, {
    lock: true,
    immediate: true
  })
};

onMounted(() => {
  
});
</script>

<template>
  <div class="rulerScrollBarContainer translate-x-12.5 hover:translate-x-0">
    <div class="py-4">
      <input
        type="range"
        min="0"
        max="10000"
        :value="progress * 10000"
        orient="vertical"
        @input="onRangeScroll"
      />
    </div>
    <div class="rulerScrollBar">
      <div
        v-for="i in 101"
        class="relative h-px bg-stone-500 text-stone-500 backdrop-invert saturate-0"
        :style="`width: ${(i - 1) % 10 == 0 ? '0.85' : (i - 1) % 5 == 0 ? '0.5' : '0.3'}rem`"
      >
        <span class="absolute text-xs left-4 -top-2" v-if="(i - 1) % 10 == 0">{{
          i - 1
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.rulerScrollBarContainer {
  @apply fixed right-0 top-1/2 -translate-y-1/2 h-[75vh] w-26 hidden md:flex gap-1 pl-10 py-8;
  transition: translate 0.25s ease;
  animation: showScrollBar 1.5s ease;
}

.rulerScrollBar {
  @apply h-full w-full flex flex-col justify-between py-6 rounded-l-lg backdrop-blur-sm border border-stone-500 border-r-0;
    box-shadow: inset 0.4rem 0 0.75rem #00000025;
}

/* Input range styling */
.rulerScrollBarContainer input[type="range"] {
  writing-mode: vertical-lr;
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  height: 100%;
  width: 0.75rem;
  cursor: pointer;
  outline: none;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  @apply w-2 h-4 backdrop-invert saturate-0 rounded-full opacity-75;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  @apply w-2 h-4 bg-stone-500 rounded-full opacity-85 border-none;
}

@keyframes showScrollBar {
  0% {
    translate: 5rem -50%;
  }
  30% {
    translate: 5rem -50%;
  }
  100% {
    translate: 3.125rem -50%;
  }
}
</style>
