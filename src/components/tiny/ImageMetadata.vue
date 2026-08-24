<script setup lang="ts">
import { PhCamera, PhAperture } from "@phosphor-icons/vue";
import TextSlideEffect from "./TextSlideEffect.vue";

const props = defineProps<{
  camera: string;
  settings: string;
  dark?: boolean;
}>();
</script>

<template>
  <div
    class="absolute bottom-0 left-0 flex flex-col h-14 justify-between transition-all w-full text-sm py-2 px-3"
    :style="{ color: dark ? 'white' : 'black' }"
  >
    <div class="flex gap-1 items-center">
      <PhCamera
        class="opacity-0 group-hover:opacity-100 transition-all shrink-0"
      />
      <TextSlideEffect :text="props.camera" :hidden="true" />
    </div>
    <div class="flex gap-1 items-center">
      <PhAperture
        class="opacity-0 group-hover:opacity-100 transition-all shrink-0"
      />
      <TextSlideEffect :text="props.settings" :hidden="true" />
    </div>
  </div>
</template>


