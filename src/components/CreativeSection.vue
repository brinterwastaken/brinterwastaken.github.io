<script setup lang="ts">
import ImageMetadata from "./tiny/ImageMetadata.vue";
import TextSlideEffect from "./tiny/TextSlideEffect.vue";
import { PhArrowUpRight } from "@phosphor-icons/vue";
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="flex gap-2 mx-6 max-w-4xl"
      data-scroll
      data-scroll-speed="0.5"
      data-scroll-offset="-50%,0"
    >
      <div class="relative w-3/10 mt-[15%] h-fit group">
        <div class="metadataBg"></div>
        <ImageMetadata
          camera="Canon PowerShot S5 IS"
          settings="f/3.5 1/250s ISO100 44mm"
          :dark="true"
        />
        <img
          src="../assets/creative/butterfly.webp"
          alt="Common leopard butterfly on a plant"
        />
      </div>
      <div class="relative w-7/10 h-fit group">
        <div class="metadataBg"></div>
        <ImageMetadata
          camera="Canon EOS R50 + 18-45mm"
          settings="f/20 1/4s ISO100 40mm"
          :dark="true"
        />
        <img
          src="../assets/creative/singapore-mrt.webp"
          alt="Singapore MRT train in motion"
        />
      </div>
    </div>
    <a
      class="mt-20 group px-8 pr-7 py-4 bg-stone-950 text-white flex items-center gap-1 mx-auto active:scale-95 transition-all"
      buddy="click"
      href="https://instagram.com/_brinter/"
      target="_blank"
    >
      <TextSlideEffect text="View more on Instagram" />
      <PhArrowUpRight :size="18" class="pointer-events-none" />
    </a>
    
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.metadataBg {
  @apply absolute bottom-0 left-0 w-full h-0 group-hover:h-14 backdrop-blur-sm;
  transition: height 0.5s cubic-bezier(0.4, 1.1, 0.9, 1);
}
</style>
