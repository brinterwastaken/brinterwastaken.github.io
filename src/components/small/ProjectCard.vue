<script setup lang="ts">
import { PhCaretLeft, PhTag, PhUsers, PhWrench } from "@phosphor-icons/vue";
import { onMounted, ref } from "vue";

const props = defineProps<{
  index: number;
  project: any;
  totalCount: number;
}>();

const projectInfo = ref(false);

const onHover = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const highlight = target.children.item(0) as HTMLElement;

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

  target.style.transform = "perspective(80rem)";
  highlight.style.translate = "0 0";
};

onMounted(() => {
  window.addEventListener(`projCard-${props.index}`, (e: any) => {
    if (e.detail.way == "leave") {
      projectInfo.value = false;
    }
  });
});
</script>

<template>
  <div class="relative">
    <div
      class="projectCard"
      :data-index="index"
      :style="`--index: ${index}; background-image: url(/project-covers/${project.cover})`"
      @mousemove="onHover"
      @mouseleave="onExit"
      data-scroll
      data-scroll-repeat
      :data-scroll-call="`projCard-${index}`"
      :data-show-info="projectInfo"
    >
      <!-- 
      buddy="👀"
      @click="projectInfo = true"
      -->
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
          <span v-for="tag in project.tags" class="chip">{{ tag }}</span>
        </div>
        <div class="flex gap-2 items-center">
          <PhWrench size="18" weight="duotone" />
          <span v-for="tool in project.tools" class="chip">{{ tool }}</span>
        </div>
      </div>
    </div>
    <div class="projectInfo" :data-show-info="projectInfo">
      <div class="flex items-center gap-2 pb-2 border-b border-b-stone-700">
        <button
          @click="projectInfo = false"
          class="p-2 hover:bg-stone-700 rounded-2xl transition-colors"
          buddy="back"
        >
          <PhCaretLeft size="24" class="pointer-events-none" />
        </button>
        <span class="text-lg font-medium">{{ project.name }}</span>
        <span class="font-mono text-sm ml-auto mr-2 chip">{{
          project.year
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.projectCard {
  @apply relative h-[44vh] w-[40vh] md:h-[40vh] md:w-[50vh]
  shrink-0 bg-stone-950 scale-85 opacity-0 md:blur-md translate-y-24 
  bg-contain bg-top bg-no-repeat border border-stone-500/20 backface-hidden
  rounded-3xl flex flex-col gap-1.5 md:gap-2 justify-end p-6 overflow-clip;
  transition:
    transform 0.3s cubic-bezier(0.4, 1.1, 0.9, 1),
    scale 0.35s ease-out,
    opacity 0.35s ease-out,
    translate 0.35s ease-out,
    filter 0.35s ease-out;
  transition-delay: calc(var(--index) * 250ms);
}

.is-inview .projectCard.is-inview {
  transition-delay: 0ms;
}

.projectCard.is-inview {
  @apply scale-100 opacity-100 translate-0 blur-none;
}

.projectCard * {
  pointer-events: none;
}

.projectCard:active {
  @apply scale-95;
}

.projectCard[data-show-info="true"] {
  @apply rotate-y-180!;
}

.projectInfo {
  @apply absolute w-full h-full left-0 top-0 backface-hidden perspective-[80rem]
  flex flex-col p-3 border border-stone-500/20 rounded-3xl bg-stone-900 z-10;
  transition: transform 0.3s cubic-bezier(0.4, 1.1, 0.9, 1);
  transform: perspective(80rem) rotateY(180deg);
}

.projectInfo[data-show-info="true"] {
  transform: perspective(80rem) rotateY(360deg);
}

.chip {
  @apply px-1.5 py-px bg-stone-400/20 rounded-md border border-stone-400/50;
}

.lightReflection {
  @apply absolute hidden md:block -right-12 -bottom-12 w-48 h-48 blur-2xl bg-white/5 rounded-full;
  transition: translate 0.25s cubic-bezier(0.4, 1.1, 0.9, 1);
}
</style>
