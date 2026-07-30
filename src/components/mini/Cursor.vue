<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from "vue";

const cursor = useTemplateRef("cursor");
const cursorBuddy = useTemplateRef("cursorBuddy");
const cursorOutline = useTemplateRef("cursorOutline");
const buddyText = ref("");

onMounted(() => {
  window.addEventListener("mousemove", (e) => {
    if (cursor.value && cursorBuddy.value && cursorOutline.value) {
      cursor.value.animate(
        {
          top: `${e.clientY}px`,
          left: `${e.clientX}px`,
        },
        { duration: 100, fill: "forwards", easing: "ease-out" },
      );
      cursorBuddy.value.animate(
        {
          top: `${e.clientY}px`,
          left: `${e.clientX}px`,
        },
        { duration: 1250, fill: "forwards", easing: "ease-out" },
      );
      cursorOutline.value.animate(
        {
          top: `${e.clientY}px`,
          left: `${e.clientX}px`,
        },
        { duration: 750, fill: "forwards", easing: "ease-out" },
      );

      const target = e.target as HTMLElement;

      if (target.getAttribute("buddy") !== null) {
        buddyText.value = target.getAttribute("buddy")!;
        cursor.value.classList.add("hover");
        cursorBuddy.value.classList.add("hover");
        cursorOutline.value.classList.add("hover");
      } else {
        cursor.value.classList.remove("hover");
        cursorBuddy.value.classList.remove("hover");
        cursorOutline.value.classList.remove("hover");
      }
    }
  });

});
</script>

<template>
  <div class="hidden md:block">
    <div id="cursor" ref="cursor"></div>
    <div id="cursorBuddy" ref="cursorBuddy">
      {{ buddyText }}
    </div>
    <div id="cursorOutline" ref="cursorOutline" class="group">
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

#cursor,
#cursorBuddy,
#cursorOutline {
  @apply fixed -top-8 -left-8 z-100 pointer-events-none;
}

#cursor {
  @apply -translate-1/2 w-2.5 h-2.5 rounded-full backdrop-invert-100 saturate-0;
  transition:
    height 0.35s cubic-bezier(0.4, 1.1, 0.9, 1),
    width 0.35s cubic-bezier(0.4, 1.1, 0.9, 1);
}

#cursor.hover {
  @apply w-10 h-10;
}

#cursorOutline {
  @apply -translate-1/2 w-8 h-8 backdrop-invert-100 saturate-0 ;
  mask-image: url("../../assets/cursor-outline.svg");
  mask-size: 100% 100%;
  animation: outlineSpin 7s linear infinite;
  transition:
    height 0.5s cubic-bezier(0.4, 1.1, 0.9, 1),
    width 0.5s cubic-bezier(0.4, 1.1, 0.9, 1),
    color 0.35s ease;
}

#cursorOutline.hover {
  @apply w-20 h-20;
  animation: outlineSpin 3s linear infinite;
}

#cursorBuddy {
  @apply translate-x-7 translate-y-5 opacity-0 scale-50 bg-stone-800 text-white px-2 text-sm;
  transition:
    opacity 0.3s cubic-bezier(0.4, 1.1, 0.9, 1),
    scale 0.35s cubic-bezier(0.4, 1.1, 0.9, 1);
}

#cursorBuddy.hover {
  @apply opacity-100 scale-100;
}

@keyframes outlineSpin {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>
