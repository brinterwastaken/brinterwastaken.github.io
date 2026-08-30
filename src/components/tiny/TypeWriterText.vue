<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  words: Array<string>;
}>();

const currentText = ref("");

let i = 0,
  j = 0;

const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));

const shuffle = async () => {
  while (true) {
    if (i >= props.words.length) i = 0;

    currentText.value = "";
    const currentWord = props.words[i];

    j = 0;
    await addChar(currentWord);

    await sleep(2500);

    i++;
  }
};

const addChar = async (text: string) => {
  while (j < text.length) {
    currentText.value += text.charAt(j);
    await sleep(250);
    j++;
  }
};

onMounted(() => {
  shuffle();
});
</script>

<template>
  <span class="typewriter-container">
    <TransitionGroup name="fade" tag="span">
      <span
        v-for="(char, index) in currentText"
        :key="index"
        class="inline-block whitespace-pre"
      >
        {{ char }}
      </span>
    </TransitionGroup>
    <span class="cursor text-blue-400">⎸</span>
  </span>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition:
    transform 300ms ease,
    opacity 300ms ease,
    font-size 500ms ease;
}

.fade-enter-from,
.fade-leave-to {
  font-size: 0;
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.cursor {
  opacity: 0;
  animation: cursorBlink 0.75s linear infinite;
}

@keyframes cursorBlink {
  10% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
}
</style>
