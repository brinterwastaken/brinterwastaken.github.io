<script setup lang="ts">
const props = defineProps({ text: String, fontSize: Number, overlayBg: String })
</script>

<template>
  <svg :height="1.5 * props.fontSize! + 'rem'">
    <linearGradient id="lgrad1" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="15%" style="stop-color: rgb(166, 201, 255); stop-opacity: 1" />
      <stop offset="50%" style="stop-color: rgb(118, 255, 239); stop-opacity: 1" />
      <stop offset="85%" style="stop-color: rgb(231, 178, 255); stop-opacity: 1" />
    </linearGradient>
    <linearGradient id="lgrad2" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="15%" style="stop-color: rgb(21, 31, 58); stop-opacity: 1" />
      <stop offset="50%" style="stop-color: rgb(11, 36, 36); stop-opacity: 1" />
      <stop offset="85%" style="stop-color: rgb(28, 30, 58); stop-opacity: 1" />
    </linearGradient>
    <text :font-size="props.fontSize + 'rem'" class="bg" x="50%" y="50%">{{ props.text }}</text>
    <text :font-size="props.fontSize + 'rem'" class="overlay" x="50%" y="50%" :fill="props.overlayBg">
      {{ props.text }}
    </text>
  </svg>
</template>

<style>
svg {
  font-weight: 800;
  font-family: 'Satoshi Variable';
  width: 100%;
}

text {
  text-anchor: middle;
  dominant-baseline: central;
  cursor: default;
}
text.bg {
  fill: url(#lgrad1);
  stroke: url(#lgrad1);
  stroke-width: 2px;
  transition: stroke-width 100ms;
}
text.overlay {
  stroke: none;
  transition: filter 100ms;
  pointer-events: none;
  user-select: none;
}

text.bg:hover ~ text.overlay {
  filter: brightness(120%);
}
text.bg:hover {
  stroke-width: 4px;
}
</style>