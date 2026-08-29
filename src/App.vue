<script setup lang="ts">
import { onBeforeUnmount, onMounted, provide, ref } from "vue";
import Car from "./components/Car.vue";
import TitleSection from "./components/TitleSection.vue";

import LocomotiveScroll from "locomotive-scroll";
import ScrollReminder from "./components/tiny/ScrollReminder.vue";
import MeshGradient from "./components/tiny/MeshGradient.vue";
import PreWorkSection from "./components/PreWorkSection.vue";
import Cursor from "./components/tiny/Cursor.vue";
import WorkSection from "./components/WorkSection.vue";
import CreativeSection from "./components/CreativeSection.vue";
import ScrollBar from "./components/small/ScrollBar.vue";
import WipBanner from "./components/small/WipBanner.vue";
import AboutMe from "./components/AboutMe.vue";
import Footer from "./components/Footer.vue";

interface ScrollData {
  scroll: number;
  limit: number;
  velocity: number;
  direction: number;
  progress: number;
}

let scroll = ref<null | LocomotiveScroll>(null);

const acceleration = ref(0);
const position = ref(0);
const progress = ref(0);
const scrollLimit = ref(0);

let oldVelocity = 0;
let oldTime = performance.now();

const onScroll = (data: ScrollData) => {
  position.value = data.scroll;
  progress.value = data.progress;

  const currentTime = performance.now();
  const deltaTime = (currentTime - oldTime) / 100;

  if (Math.abs(data.velocity) != 0 && deltaTime > 0) {
    const a = (data.velocity - oldVelocity) / deltaTime;
    acceleration.value = Math.abs(a) <= 1 ? a : Math.sign(a) * 1;
  } else {
    acceleration.value = 0;
  }

  oldTime = currentTime;
  oldVelocity = data.velocity;
};

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setTimeout(() => {
    scroll.value = new LocomotiveScroll({
      scrollCallback: onScroll,
    });
    scrollLimit.value = scroll.value.lenisInstance?.limit ?? 0;
  }, 1775);
});

onBeforeUnmount(() => {
  if (scroll.value) {
    scroll.value.destroy();
  }
});

provide("locoScroll", scroll);
</script>

<template>
  <div class="flex flex-col">
    <div
      id="hero"
      class="relative flex flex-col justify-between h-[80vh] md:h-[90vh]"
    >
      <MeshGradient />
      <TitleSection />
      <Car
        data-scroll
        data-scroll-speed="-0.7"
        data-scroll-offset="0,-70%"
        :acceleration="acceleration"
        :position="position"
      />
    </div>
    <div
      class="h-20 mb-[12vh] md:mb-[72vh]"
      data-scroll
      data-scroll-speed="-0.5"
    >
      <Transition name="zoomReveal">
        <ScrollReminder :mini="false" v-if="position < 50" />
      </Transition>
    </div>
    <PreWorkSection />
    <WorkSection />
    <CreativeSection />
    <AboutMe />
    <Footer />
    <div class="noiseOverlay"></div>
    <ScrollBar :progress="progress" :limit="scrollLimit" />
    <WipBanner />
    <Cursor />
  </div>
</template>

<style>
@reference "tailwindcss";

.noiseOverlay {
  @apply fixed top-0 left-0 w-dvw h-lvh z-100 pointer-events-none opacity-50;
  background-image: url("./assets/noise.png");
  background-size: 100px 100px;
}

.zoomReveal-enter-from,
.zoomReveal-leave-to {
  scale: 75%;
  opacity: 0;
}
.zoomReveal-enter-active,
.zoomReveal-leave-active {
  transition: all 0.25s ease;
}
</style>
