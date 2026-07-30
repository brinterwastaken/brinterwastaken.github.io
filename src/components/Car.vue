<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import carImg from "../assets/car-website-body.webp";
import wheelImg from "../assets/car-website-wheel.webp";

const props = defineProps<{
  acceleration: number;
  position: number;
}>();

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.matchMedia("(width < 48rem)").matches;
});

const endPosition = computed(() => {
  return isMobile ? 1280 : 840;
});
</script>

<template>
  <div
    class="w-full h-[32vh] overflow-clip flex justify-end px-[2.5vw] md:px-[7.5vw]"
  >
    <div
      class="carDiv relative w-[95vw] md:w-[60vw] xl:w-200 shrink-0"
      :style="`translate: ${(-200 * position) / endPosition}% 0`"
    >
      <img
        :src="wheelImg"
        class="carWheel left-[calc(95/60*7.25vw)] md:left-[7.25vw] xl:left-24.25"
        :style="`rotate: ${((-2 * position) / endPosition) * (800 / 730) * 360}deg;`"
        alt="Drawing of front wheel of supercar"
      />
      <img
        :src="wheelImg"
        class="carWheel right-[calc(95/60*7.57vw)] md:right-[7.57vw] xl:right-25.25"
        :style="`rotate: ${((-2 * position) / endPosition) * (800 / 730) * 360}deg;`"
        alt="Drawing of back wheel of supercar"
      />
      <img
        :src="carImg"
        class="carImg"
        :style="`rotate: ${acceleration}deg;`"
        fetchpriority="high"
        loading="eager"
        alt="Hand-drawn supercar design"
      />
    </div>
    <div class="road absolute bottom-0 right-0 h-0.5 md:h-1 w-full"></div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.carImg {
  @apply absolute bottom-0;
  animation: braking 1.75s cubic-bezier(0.4, 1.1, 0.9, 1);
  transition: rotate 500ms ease;
}
.carDiv {
  animation: carEnter 1.75s cubic-bezier(0.4, 1.1, 0.9, 1);
}
.carWheel {
  @apply absolute w-[calc(95/60*8.7vw)] md:w-[8.7vw] xl:w-29 bottom-0 z-10;
  animation: wheelSpin 1.75s cubic-bezier(0.4, 1.1, 0.9, 1);
}
.road {
  background-image: url("../assets/line.png");
  background-repeat: repeat-x;
  opacity: 0.65;
  animation: roadDraw 1s ease;
}

@keyframes roadDraw {
  0% {
    translate: 100% 0;
  }
  100% {
    translate: 0 0;
  }
}

@keyframes carEnter {
  0% {
    translate: 150% 0;
  }
  100% {
    translate: 0 0;
  }
}

@keyframes braking {
  0% {
    rotate: 0;
  }
  50% {
    rotate: -0.3deg;
  }
  90% {
    rotate: -0.8deg;
  }
  100% {
    rotate: 0;
  }
}

@keyframes wheelSpin {
  0% {
    rotate: calc((1200 / 730) * 360deg);
  }
  100% {
    rotate: 0;
  }
}
</style>
