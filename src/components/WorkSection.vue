<script setup lang="ts">
import { PhCircleNotch } from "@phosphor-icons/vue";
import { computed, onMounted, ref, useTemplateRef, type Ref } from "vue";
import BezierEasing from "bezier-easing";
import ProjectCard from "./small/ProjectCard.vue";
import ScrollReminder from "./tiny/ScrollReminder.vue";

import { inject } from "vue";
import type LocomotiveScroll from "locomotive-scroll";

const locoScroll = inject("locoScroll") as Ref<LocomotiveScroll>;

// Relative position where the transition to the next section starts
const transitionPosition = 0.6;

const projects = ref<any[]>([]);
const isLoading = ref(true);
const workProgress = ref(0);
const lightSwitchProgress = ref(0);

const workSection = useTemplateRef("workSection");
const workSectionPosition = ref<number[]>([0, 0]);

const easing1 = BezierEasing(0.35, 0, 0.65, 1);
const easing2 = BezierEasing(0.55, 0, 0.45, 1);

onMounted(async () => {
  const workSectionRect = workSection.value?.getBoundingClientRect()!;
  workSectionPosition.value = [
    Math.ceil(workSectionRect.top + window.scrollY),
    Math.floor(
      window.scrollY +
        workSectionRect.top +
        (workSectionRect.height - window.innerHeight) * transitionPosition,
    ),
  ];

  try {
    const module = await import("../assets/work/project-list.json");
    projects.value = module.projects;
  } catch (error) {
    console.error("Project Loading Failed: ", error);
  } finally {
    isLoading.value = false;
  }

  window.addEventListener("workProgress", (e: any) => {
    const { progress } = e.detail;
    workProgress.value = easing1(Math.min(progress / transitionPosition, 1));
    lightSwitchProgress.value = Math.max(
      (progress - transitionPosition) / (1 - transitionPosition),
      0,
    );
  });
});

const projectCount = computed(() => projects.value.length);

const getScrollToValue = (deltaX: number) => {
  return Math.min(
    Math.max(
      (locoScroll.value.lenisInstance?.scroll ?? 0) + deltaX * 0.7,
      workSectionPosition.value[0],
    ),
    workSectionPosition.value[1],
  );
};

const horizMouseScroll = (e: Event) => {
  e.preventDefault();
  const scrollToValue = getScrollToValue((e as WheelEvent).deltaX);
  if (Math.abs((e as WheelEvent).deltaY) < Math.abs((e as WheelEvent).deltaX)) {
    locoScroll.value.scrollTo(scrollToValue, {
      lock: true,
      immediate: true,
    });
  }
};
</script>

<template>
  <div
    class="h-[500lvh]"
    data-scroll
    data-scroll-event-progress="workProgress"
    data-scroll-offset="105%,105%"
    ref="workSection"
  >
    <div class="text-white sticky top-0">
      <div
        class="flex flex-col font-alt"
        data-scroll
        data-scroll-css-progress
        data-scroll-offset="32%,60%"
      >
        <div class="darkTransition" style="--index: 0"></div>
        <div class="darkTransition" style="--index: 1"></div>
        <div class="darkTransition justify-end" style="--index: 2">
          <span>SELECTED</span>
        </div>
        <div class="darkTransition justify-start" style="--index: 3">
          <span>WORK</span>
        </div>
        <div
          class="darkTransition justify-start pt-1 text-xl"
          style="--index: 4"
        >
          <Transition name="zoomReveal" mode="out-in">
            <div v-if="isLoading" class="flex gap-1 items-center">
              Loading <PhCircleNotch class="animate-spin" />
            </div>
            <div class="text-sm md:text-lg italic text-center px-2" v-else>
              A collection of student projects and experiments.
              <Transition name="zoomReveal">
                <ScrollReminder
                  :recommendation="false"
                  v-if="workProgress < 0.1 || workProgress > 0.9"
                />
              </Transition>
            </div>
          </Transition>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-offset="25%,-100%"
        class="h-[50lvh] md:h-[45vh] w-full bg-stone-950 overflow-x-clip"
        @wheel="horizMouseScroll"
      >
        <div
          class="flex w-max items-start py-4 px-6 md:px-16 gap-4 md:gap-8 h-full"
          :style="`translate: calc(-${workProgress} * (100% - 100vw)) 0;`"
        >
          <ProjectCard
            v-for="[index, project] of projects.entries()"
            :key="index"
            :index="index"
            :project="project"
            :total-count="projectCount"
          />
        </div>
      </div>
      <div
        class="absolute bottom-0 left-0 flex items-end w-full h-full"
        :style="`pointer-events: ${lightSwitchProgress > 0.05 ? 'auto' : 'none'}`"
      >
        <div
          v-for="i in 5"
          class="lightTransition"
          :style="`--progressPercent: calc(${easing2(Math.max(Math.min((lightSwitchProgress - 0.1 * (i - 1)) / 0.6, 1), 0))} * 100%)`"
        ></div>
        <div
          class="creativeCornerHeader font-alt font-extralight text-black text-7xl md:text-8xl absolute left-1/2 top-1/2 -translate-1/2 flex flex-col items-center text-center"
          :style="`opacity: calc(${easing2(Math.max(Math.min((lightSwitchProgress - 0.7) / 0.3, 1), 0))} * 100%)`"
        >
          <span>Creative</span>
          <span>Corner</span>
          <p class="text-lg md:text-xl mt-4 font-serif italic">Photography, artwork and other creative projects.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.darkTransition {
  @apply w-dvw h-[10lvh] md:h-[11vh] font-extralight bg-stone-950 flex flex-col items-center;
  mask-image: linear-gradient(
    to bottom,
    black calc(min((var(--progress) * (1 + var(--index) * 0.2)) * 100%)),
    transparent calc((var(--progress) * (1 + var(--index) * 0.2)) * 100%)
  );
  transition: letter-spacing 0.5s ease;
}

.darkTransition span {
  @apply hover:tracking-wider w-fit text-[8.5lvh] md:text-[10vh] leading-none;
  transition: letter-spacing 0.5s ease;
}

.lightTransition {
  @apply w-[20vw] bg-stone-100/(--progressPercent) backdrop-blur-xs md:backdrop-blur-md;
  height: var(--progressPercent);
}

.creativeCornerHeader span {
  @apply hover:tracking-wider;
  transition: letter-spacing 0.5s ease;
}
</style>
