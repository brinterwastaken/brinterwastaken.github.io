<script setup lang="ts">
import { PhCamera, PhAperture, PhCube, PhGearSix } from "@phosphor-icons/vue";
import TextSlideEffect from "./TextSlideEffect.vue";

const props = defineProps<{
  camera?: string;
  settings?: string;
  light?: boolean;
  blender?: boolean;
}>();
</script>

<template>
  <div
    class="metadataBox"
    :style="{ color: light ? 'black' : 'white' }"
  >
    <div class="py-2 px-3">
      <div v-if="props.blender" class="flex gap-1 items-center">
        <PhCube class="descIcon"/>
        <TextSlideEffect text="Created with Blender" :hidden="true" :delay="100" />
      </div>
      <div v-if="props.camera" class="flex gap-1 items-center">
        <PhCamera class="descIcon" />
         <TextSlideEffect :text="props.camera" :hidden="true" :delay="100" />
      </div>
      <div v-if="props.settings" class="flex gap-1 items-center">
        <PhGearSix class="descIcon" />
        <TextSlideEffect :text="props.settings" :hidden="true" :delay="200" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.metadataBox {
  @apply hidden md:flex absolute bottom-0 left-0 flex-col h-0 group-hover:h-14 box-border justify-between w-full text-sm backdrop-blur-lg overflow-clip;
  transition: height 300ms cubic-bezier(0.4, 1.1, 0.9, 1);
}
</style>
