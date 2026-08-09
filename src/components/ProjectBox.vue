<script setup lang="ts">
import { PhTag, PhUsers, PhWrench } from "@phosphor-icons/vue";

const props = defineProps<{
  index: number;
  project: any;
  totalCount: number;
}>();

const onHover = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const highlight = target.children.item(0) as HTMLElement;
  console.log(highlight);
  const [x, y] = [e.offsetX, e.offsetY];
  const { width, height } = target.getBoundingClientRect();

  const rotationY = (x / width - 0.5) * 15;
  const rotationX = (y / height - 0.5) * -15;

  target.style.transform = `perspective(80rem) rotateY(${rotationY}deg) rotateX(${rotationX}deg) `;
  highlight.style.translate = `${-rotationY * 15}% ${rotationX * 15}% `;
};

const onExit = (e: MouseEvent) => {
  const target = e.target! as HTMLElement;
  const highlight = target.children.item(0) as HTMLElement;

  target.style.transform = "none";
  highlight.style.translate = "0 0";
};
</script>

<template>
  <div
    class="projectBox"
    :style="`--index: ${index}; background-image: url(/project-covers/${project.cover})`"
    buddy="expand"
    @mousemove="onHover"
    @mouseleave="onExit"
    data-scroll
    data-scroll-repeat
  >
    <div class="lightReflection"></div>
    <svg
      viewBox="-5 -5 200 60"
      xmlns="http://w3.org"
      class="absolute top-0 left-0 text-xl font-mono w-full"
    >
      <text x="0" y="16" fill="currentColor">{{ index + 1 }}</text>
      <text x="13" y="8" fill="currentColor" font-size="5" opacity="0.75">
        /
      </text>
      <text x="17" y="10" font-size="12" fill="currentColor" opacity="0.5">
        {{ totalCount }}
      </text>
    </svg>
    <span
      v-if="project.team"
      class="absolute top-2 right-2 p-1 bg-stone-400/20 rounded-xl border border-stone-400/50"
    >
      <PhUsers />
    </span>
    <div
      class="absolute bg-linear-to-b from-transparent to-stone-950 md:via-stone-950/65 md:to-stone-950/85 bottom-[12vh] md:bottom-0 left-0 w-full h-50 -z-1"
    ></div>
    <h2 class="text-2xl md:text-3xl font-alt">{{ project.name }}</h2>
    <p class="text-xs md:text-sm">{{ project.description }}</p>

    <div
      class="flex flex-col gap-1.5 md:flex-row justify-between pt-2 border-t border-stone-400/20 text-xs"
    >
      <div class="flex gap-2 items-center">
        <PhTag size="18" weight="duotone" />
        <span
          v-for="tag in project.tags"
          class="px-1.5 py-px bg-stone-400/20 rounded-sm border border-stone-400/50"
          >{{ tag }}</span
        >
      </div>
      <div class="flex gap-2 items-center">
        <PhWrench size="18" weight="duotone" />
        <span
          v-for="tool in project.tools"
          class="px-1.5 py-px bg-stone-400/20 rounded-sm border border-stone-400/50"
          >{{ tool }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.projectBox {
  @apply relative h-[44vh] w-[40vh] md:h-[40vh] md:w-[50vh] 
  shrink-0 bg-stone-950 scale-85 opacity-0 md:blur-md translate-y-24 
  bg-contain bg-top bg-no-repeat border border-stone-500/20
  rounded-3xl flex flex-col gap-1.5 md:gap-2 justify-end p-6 overflow-clip;
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

.lightReflection {
  @apply absolute hidden md:block -right-12 -bottom-12 w-48 h-48 blur-2xl bg-white/5 rounded-full;
  transition: translate 0.25s cubic-bezier(0.4, 1.1, 0.9, 1);
}
</style>
