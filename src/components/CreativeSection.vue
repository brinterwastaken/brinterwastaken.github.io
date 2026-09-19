<script setup lang="ts">
import { computed, ref } from "vue";
import ImageMetadata from "./tiny/ImageMetadata.vue";
import { PhX } from "@phosphor-icons/vue";

const showExpandedImg = ref(false);
const expandedImgName = ref("");
const expandedMetaData = ref(["", ""])
const imgAspectRatio = ref(1);

const expandImage = (imageName: string, aspectRatio: number, metaData: string[]) => {
  window.addEventListener("keydown", handleKeyDown);
  expandedImgName.value = imageName;
  expandedMetaData.value = metaData;
  showExpandedImg.value = true;
  imgAspectRatio.value = aspectRatio;
};

const hideExpandedImage = () => {
  window.removeEventListener("keydown", handleKeyDown);
  showExpandedImg.value = false;
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    hideExpandedImage();
  }
};

const expandedImgUrl = computed(() => new URL(`../assets/creative/${expandedImgName.value}`, import.meta.url).href);
</script>

<template>
  <div>
    <div class="-translate-y-1/7 md:translate-0">
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
            @click="expandImage('iron-walkway.webp', 1 / 2, ['Canon EOS R50 + 18-45mm', 'f/6.3 1/60s ISO 250 18mm'])"
          >
            <ImageMetadata
              camera="Canon EOS R50 + 18-45mm"
              settings="f/6.3 1/60s ISO 250 18mm"
            />
            <img
              buddy="expand"
              src="../assets/creative/iron-walkway.webp"
              class="h-full object-cover"
            />
          </div>
          <div
            data-scroll
            data-scroll-class="inView"
            data-scroll-repeat
            class="imageDisplay group md:w-full!"
            style="width: calc(60% - 0.5rem); transform-origin: 100% 50%"
            @click="expandImage('butterfly.webp', 2 / 3, ['Canon PowerShot S5 IS', 'f/3.5 1/250s ISO100 44mm'])"
          >
            <ImageMetadata
              camera="Canon PowerShot S5 IS"
              settings="f/3.5 1/250s ISO100 44mm"
            />
            <img
              buddy="expand"
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
            @click="expandImage('singapore-mrt.webp', 3 / 2, ['Canon EOS R50 + 18-45mm', 'f/20 1/4s ISO100 40mm'])"
          >
            <ImageMetadata
              camera="Canon EOS R50 + 18-45mm"
              settings="f/20 1/4s ISO100 40mm"
            />
            <img
              buddy="expand"
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
              @click="expandImage('caustics.webp', 4 / 5, ['Blender 5.2.1 LTS', 'Cycles Render Engine'])"
            >
              <ImageMetadata :blender="true" settings="Cycles Render Engine" />
              <img
                buddy="expand"
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
              @click="expandImage('keys.webp', 3 / 2, ['Blender 5.2.1 LTS', 'Cycles Render Engine'])"
            >
              <ImageMetadata :blender="true" settings="Cycles Render Engine" />
              <img
                buddy="expand"
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
            @click="expandImage('kerala-pond.webp', 3 / 2, ['Canon EOS R50 + 18-45mm', 'f/11 1/400s ISO200 28mm'])"
          >
            <ImageMetadata
              camera="Canon EOS R50 + 18-45mm"
              settings="f/11 1/400s ISO200 28mm"
            />
            <img buddy="expand" src="../assets/creative/kerala-pond.webp" />
          </div>
        </div>
      </div>
    </div>
    <Transition name="imageDialog">
      <div
        v-if="showExpandedImg"
        tabindex="0"
        class="expandedImageDialog fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-16 lg:py-16 lg:px-24 xl:py-16 xl:px-32 md:backdrop-blur-sm"
      >
        <div
          class="absolute inset-0 bg-black/65 md:bg-black/25 -z-1"
          @click="() => hideExpandedImage()"
        ></div>
        <div class="imageInfo flex justify-between text-white bg-black/65 px-4 items-center">
          <div class="flex flex-col">
            <p class="text-sm">{{ expandedMetaData[0] }}</p>
            <p class="text-xs">{{ expandedMetaData[1] }}</p>
          </div>
          <button
            class="py-2 transition-colors pointer-events-auto"
            buddy="close"
            @click="() => hideExpandedImage()"
          >
            <PhX
              class="pointer-events-none"
              style="filter: drop-shadow(0 0.25rem 0.25rem #00000050)"
              :size="32"
            />
          </button>
        </div>
        <img :src="expandedImgUrl" class="expandedImage" />
      </div>
    </Transition>
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

.expandedImageDialog {
  container-type: size;
}

.expandedImage {
  @apply shadow-xl shadow-black/35;
  aspect-ratio: v-bind(imgAspectRatio);
  width: min(100cqw, calc(100cqh * v-bind(imgAspectRatio)));
  height: min(100cqh, calc(100cqw / v-bind(imgAspectRatio)));
}

.imageInfo {
  @apply pointer-events-none;
  width: min(100cqw, calc(100cqh * v-bind(imgAspectRatio)));
}

.imageDialog-enter-from,
.imageDialog-leave-to {
  opacity: 0;
}

.imageDialog-enter-from img, .imageDialog-enter-from .imageInfo,
.imageDialog-leave-to img,.imageDialog-leave-to .imageInfo {
  transform: translateY(50vh);
}

.imageDialog-enter-active,
.imageDialog-enter-active *,
.imageDialog-leave-active,
.imageDialog-leave-active * {
  transition: all 0.45s ease;
}
</style>
