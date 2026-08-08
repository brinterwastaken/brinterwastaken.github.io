<script setup lang="ts">
import { PhCircleNotch } from "@phosphor-icons/vue";
import { h, onMounted, ref } from "vue";
import BezierEasing from "bezier-easing";

const projects = ref<any[]>([]);
const isLoading = ref(true);
const workProgress = ref(0);

const easing = BezierEasing(0.35, 0, 0.65, 1);

onMounted(async () => {
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
    workProgress.value = easing(progress);
  });
});

const onHover = (e: MouseEvent) => {
  const target = e.target! as HTMLElement;
  const [x, y] = [e.offsetX, e.offsetY];
  const { width, height } = target.getBoundingClientRect();

  const rotationY = (x / width - 0.5) * 15;
  const rotationX = (y / height - 0.5) * -15;

  target.style.transform = `perspective(80rem) rotateY(${rotationY}deg) rotateX(${rotationX}deg) `;
};

const onExit = (e: MouseEvent) => {
  const target = e.target! as HTMLElement;
  target.style.transform = "none";
};
</script>

<template>
  <div
    class="h-[320vh]"
    data-scroll
    data-scroll-event-progress="workProgress"
    data-scroll-offset="105%,105%"
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
            <div class="italic text-center px-2" v-else>
              A collection of student projects and experiments.
            </div>
          </Transition>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-offset="25%,-100%"
        class="h-[45vh] w-full bg-stone-950 overflow-x-clip"
      >
        <div
          class="flex w-max items-start py-4 px-6 md:px-16 gap-4 md:gap-8 h-full"
          :style="`translate: calc(-${workProgress} * (100% - 100vw)) 0;`"
        >
          <div
            v-for="[index, project] of projects.entries()"
            :key="index"
            class="projectBox"
            :style="`--index: ${index}`"
            buddy="click"
            @mousemove="onHover"
            @mouseleave="onExit"
            data-scroll
            data-scroll-repeat
          >
            <h2>{{ project.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.darkTransition {
  @apply w-dvw h-[11vh] font-extralight bg-stone-950 flex flex-col items-center;
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

.projectBox {
  @apply p-2 rounded-3xl md:rounded-4xl h-[35vh] w-[40vh] md:h-[40vh] md:w-[50vh] shrink-0 bg-stone-800 scale-85 opacity-0 md:blur-md translate-y-24;
  transition:
    transform 0.25s cubic-bezier(0.4, 1.1, 0.9, 1),
    scale 0.35s ease-out,
    opacity 0.35s ease-out,
    translate 0.35s ease-out,
    filter 0.35s ease-out;
  
  transition-delay: calc(var(--index) * 250ms);
}

.is-inview .projectBox.is-inview {
  transition-delay: 0ms;
}

.projectBox.is-inview {
  @apply scale-100 opacity-100 translate-0 blur-none;
}

.projectBox * {
  pointer-events: none;
}
</style>
