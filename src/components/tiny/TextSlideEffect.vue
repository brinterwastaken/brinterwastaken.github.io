<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  text: string;
  hidden?: boolean;
  delay?: number;
}>();

const count = computed(() => props.text.length);
</script>

<template>
  <div class="relative overflow-clip leading-snug pointer-events-none">
    <div class="flex items-center">
      <span
        v-for="[index, c] of [...text].entries()"
        class="group-hover:-translate-y-full whitespace-pre"
        :style="`transition: translate 250ms ease-in-out ${(delay ?? 0) + (index * 250) / count}ms; opacity: ${hidden ? 0 : 1};`"
        >{{ c }}</span
      >
    </div>
    <div class="absolute top-0 left-0 flex items-center">
      <span
        v-for="[index, c] of [...text].entries()"
        class="translate-y-full group-hover:translate-y-0 whitespace-pre"
        :style="`transition: translate 250ms ease-in-out ${(delay ?? 0) + (index * 250) / count}ms;`"
        >{{ c }}</span
      >
    </div>
  </div>
</template>
