<script setup lang="ts">
import { PhPlus } from "@phosphor-icons/vue";
</script>

<template>
  <div
    class="w-full px-6 sm:px-24 md:px-16 mx-auto max-w-6xl mt-6 mb-44"
  >
    <div
      data-scroll
      data-scroll-css-progress
      class="textReveal mt-12 mb-20 lg:mb-24 uppercase text-4xl md:text-5xl lg:text-6xl flex flex-col gap-0.5"
    >
      <p style="--paraNumber: 1">
        Designing<br class="md:hidden" />
        for the web,
      </p>
      <p style="--paraNumber: 2">
        programming<br class="md:hidden" />
        for systems,
      </p>
      <p style="--paraNumber: 3">
        and engineering<br class="md:hidden" />
        for motion.
      </p>
      <div class="pencilStroke lg:pencilstroke-lg"></div>
    </div>
    <div
      data-scroll
      data-scroll-css-progress
      data-scroll-class="inView"
      data-scroll-repeat
      data-scroll-offset="15%,0"
      class="infoBox"
    >
      <PhPlus size="24" class="absolute left-0 top-0 -translate-1/2" style="rotate: calc(var(--progress) * 360deg)"/>
      Working across different domains to craft innovative, high quality
      projects.
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.pencilStroke {
  @apply pencilstroke-sm md:pencilstroke-md lg:pencilstroke-lg bg-no-repeat h-4 md:h-6 lg:h-8 brightness-70;
  background-image: url("../assets/pencil-stroke.webp");
}

.textReveal p {
  mask-image: linear-gradient(
    to right,
    black
      calc(
        ((var(--progress) - (var(--paraNumber) - 0.8) * 0.2) / 0.24) * 110% -
          10%
      ),
    #0000001c
      calc(((var(--progress) - (var(--paraNumber) - 0.8) * 0.2) / 0.24) * 110%)
  );
  -webkit-mask-image: linear-gradient(
    to right,
    black
      calc(
        ((var(--progress) - (var(--paraNumber) - 0.8) * 0.2) / 0.24) * 110% -
          10%
      ),
    #0000001c
      calc(((var(--progress) - (var(--paraNumber) - 0.8) * 0.2) / 0.24) * 110%)
  );
}

.infoBox {
  @apply bg-white w-60 md:w-88 float-end p-4 md:p-6 relative scale-50 opacity-0;
  transform-origin: top left;
  transition: all 0.5s cubic-bezier(0.4, 1.1, 0.9, 1);
}

.infoBox.inView {
  @apply scale-100 opacity-100;
}


@utility pencilstroke-sm {
  width: calc((var(--progress) - 0.55) / 0.1 * 18rem);
  background-size: 18rem 120%;
  max-width: 18rem;
}
@utility pencilstroke-md {
  width: calc((var(--progress) - 0.55) / 0.1 * 45rem);
  background-size: 45rem 120%;
  max-width: 45rem;
}
@utility pencilstroke-lg {
  width: calc((var(--progress) - 0.55) / 0.1 * 55rem);
  background-size: 55rem 120%;
  max-width: 55rem;
}
</style>
