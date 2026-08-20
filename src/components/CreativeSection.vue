<script setup lang="ts">
import TextSlideEffect from "./tiny/TextSlideEffect.vue";
import { PhArrowUpRight } from "@phosphor-icons/vue";
</script>

<template>
  <div data-scroll data-scroll-speed="0.5" data-scroll-offset="-50%,0">
    <button class="group px-8 pr-7 py-4 bg-stone-950 text-white flex items-center gap-1 mx-auto" buddy="click">
      <TextSlideEffect text="View more on Instagram" />
      <PhArrowUpRight :size="18" class="pointer-events-none"/>
    </button>
  </div>
</template>
