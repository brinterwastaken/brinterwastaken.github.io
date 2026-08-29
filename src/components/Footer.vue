<script setup lang="ts">
import { PhArrowUpRight, PhDiscordLogo, PhEnvelope } from "@phosphor-icons/vue";
import TypeWriterText from "./tiny/TypeWriterText.vue";
import TextSlideEffect from "./tiny/TextSlideEffect.vue";
import { ref } from "vue";

const showCopied = ref(false);

const copyUsername = async () => {
  await navigator.clipboard.writeText("._.brinter");
  showCopied.value = true;
  setTimeout(() => {
    showCopied.value = false;
  }, 1500);
};
</script>

<template>
  <div
    data-scroll
    class="relative h-[85lvh] w-full bg-stone-950 text-white px-8 md:px-24 pt-32 overflow-clip"
  >
    <div
      data-scroll
      data-scroll-offset="-60%, 0"
      data-scroll-speed="-0.25"
      class="mx-auto my-8"
    >
      <p class="text-5xl md:text-7xl mb-8">
        Let's talk <br />over a cup of<br />
        <TypeWriterText :words="['chai.', 'coffee.', 'hot cocoa.']" />
      </p>
      <p class="text-2xl md:text-3xl mb-4">Contact Me:</p>
      <div class="flex flex-wrap gap-4">
        <a
          class="footerLinkButton group"
          href="mailto:trinethr_n@yahoo.com"
          buddy="send an email"
        >
          <PhEnvelope :size="20" />
          <TextSlideEffect text="trinethr_n@yahoo.com" />
        </a>
        <button
          @click="copyUsername"
          class="footerLinkButton group relative"
          buddy="copy username"
        >
          <PhDiscordLogo :size="20" />
          <TextSlideEffect text="._.brinter" />
          <div
            class="absolute -top-8 left-1/2 text-black bg-lime-300 px-2 py-1 text-sm transition-all"
            :style="`opacity: ${showCopied ? 1 : 0}; translate: -50% ${showCopied ? 0 : 50}%; scale: ${showCopied ? 100 : 50}%`"
          >
            Copied!
          </div>
        </button>
      </div>
    </div>
    <div
      class="absolute right-0 bottom-20 mx-8 md:mx-24 flex flex-col gap-2 text-sm md:text-base"
    >
      <p>
        This website was created by hand (not vibecoded), with minimal AI
        assistance.
      </p>
      <p>
        Source code available on GitHub at
        <a
          buddy="open link"
          class="text-blue-400 hover:underline"
          href="https://github.com/brinterwastaken/brinterwastaken.github.io/"
          >brinterwastaken/brinterwastaken.github.io<PhArrowUpRight
            :size="16"
            class="inline pointer-events-none"
          />
        </a>
        <br />
        (Star the repo 🥺)
      </p>
      <p>© 2026 Trinethr N. All rights reserved.</p>
    </div>
    <div
      data-scroll
      data-scroll-css-progress
      class="absolute left-0 top-0 bg-stone-100 w-full h-24"
      style="
        border-radius: 0 0 calc(var(--progress) * 6rem)
          calc(var(--progress) * 6rem);
      "
    ></div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.footerLinkButton {
  @apply w-fit px-4 py-2 flex items-center gap-1 border border-white hover:bg-white hover:text-black active:scale-95  transition-all;
}
.footerLinkButton svg {
  @apply pointer-events-none;
}
</style>
