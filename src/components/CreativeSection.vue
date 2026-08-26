<script setup lang="ts">
import ImageMetadata from "./tiny/ImageMetadata.vue";
import TextSlideEffect from "./tiny/TextSlideEffect.vue";
import { PhArrowUpRight } from "@phosphor-icons/vue";
</script>

<template>
  <div class="-translate-y-1/5 md:translate-0">
    <div
      class="flex flex-col-reverse md:flex-row px-4 mx-auto max-w-4xl flex-wrap justify-center"
      data-scroll
      data-scroll-speed="0.25"
      data-scroll-offset="-50%,0"
    >
      <!-- LEFT COLUMN -->

      <div
        class="flex flex-wrap items-stretch mt-2 md:mt-0 md:flex-nowrap md:flex-col gap-2 md:w-[30%] md:items-end"
      >
        <div
          data-scroll
          data-scroll-class="inView"
          data-scroll-repeat
          class="imageDisplay group w-[40%] md:w-full"
          style="transform-origin: 100% 100%"
        >
          <ImageMetadata
            camera="Canon EOS R50 + 18-45mm"
            settings="f/6.3 1/60s ISO 250 18mm"
          />
          <img
            src="../assets/creative/iron-walkway.webp"
            class="h-full object-cover"
          />
        </div>
        <div
          data-scroll
          data-scroll-class="inView"
          data-scroll-repeat
          class="imageDisplay group  md:w-full!"
          style="width: calc(60% - 0.5rem); transform-origin: 100% 50%"
        >
          <ImageMetadata
            camera="Canon PowerShot S5 IS"
            settings="f/3.5 1/250s ISO100 44mm"
          />
          <img
            src="../assets/creative/butterfly.webp"
            alt="Common leopard butterfly on a plant"
            class="h-full object-cover"
          />
        </div>
        <div
          data-scroll
          data-scroll-class="inView"
          data-scroll-repeat
          style="transform-origin: 100% 0"
          class="imageDisplay w-full h-full p-6 flex flex-col gap-2 items-center justify-center text-center bg-stone-200"
        >
          <p class="text-lg font-serif italic leading-tight">
            "The greatest scientists <br class="hidden md:block" />
            are artists as well"
          </p>
          <p class="ml-[25%] font-serif">- Albert Einstein</p>
        </div>
      </div>

      <!-- RIGHT COLUMN -->

      <div class="flex flex-col gap-2 md:pl-2 md:w-[70%]">
        <div
          data-scroll
          data-scroll-class="inView"
          data-scroll-repeat
          class="imageDisplay group h-fit w-full"
          style="transform-origin: 0 100%"
        >
          <ImageMetadata
            camera="Canon EOS R50 + 18-45mm"
            settings="f/20 1/4s ISO100 40mm"
          />
          <img
            src="../assets/creative/singapore-mrt.webp"
            alt="Singapore MRT train in motion"
          />
        </div>
        <div class="flex gap-2 items-stretch w-full">
          <div
            data-scroll
            data-scroll-class="inView"
            data-scroll-repeat
            class="imageDisplay group w-4/11"
            style="transform-origin: 50% 50%"
          >
            <ImageMetadata :blender="true" settings="Cycles Render Engine" />
            <img
              src="../assets/creative/caustics.webp"
              class="h-full object-cover"
            />
          </div>
          <div
            data-scroll
            data-scroll-class="inView"
            data-scroll-repeat
            class="imageDisplay group w-7/11"
            style="transform-origin: 0 50%"
          >
            <ImageMetadata :blender="true" settings="Cycles Render Engine" />
            <img
              src="../assets/creative/keys.webp"
              class="h-full object-cover"
            />
          </div>
        </div>

        <div
          data-scroll
          data-scroll-class="inView"
          data-scroll-repeat
          class="imageDisplay group"
          style="transform-origin: 0 0"
        >
          <ImageMetadata
            camera="Canon EOS R50 + 18-45mm"
            settings="f/11 1/400s ISO200 28mm"
          />
          <img src="../assets/creative/kerala-pond.webp" />
        </div>
      </div>
    </div>
    <a
      class="w-fit mt-20 group px-8 pr-7 py-4 bg-stone-950 text-white flex items-center gap-1 mx-auto active:scale-95 transition-all"
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

.imageDisplay {
  @apply relative scale-0 opacity-0;
  transition:
    scale 720ms cubic-bezier(0.4, 1.1, 0.9, 1),
    opacity 720ms cubic-bezier(0.4, 1.1, 0.9, 1);
}
.imageDisplay.inView {
  @apply scale-100 opacity-100;
}

</style>
