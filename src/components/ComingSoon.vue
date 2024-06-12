<script setup lang="ts">
import { ref } from 'vue'
import FancyHeading from './FancyHeading.vue';

const bgtext = ref('')
const countdown = ref(20)
const originalText = 'Old Website Here'
const linktext = ref('Old Website Here')

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
  randomString = (length: number) => Array.from(Array(length)).map(randomChar).join('')

const updateBgText = () => bgtext.value = randomString(10000)

const linkEffect = () => {
  let iterations = 0

  const refreshText = setInterval(() => {
    linktext.value = linktext.value
      .split('')
      .map((letter, index) => {
        if (letter == ' ') return letter

        if (index < iterations) {
          return originalText[index]
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join('')
    iterations += 1 / 3
    if (iterations > originalText.length) clearInterval(refreshText)
  }, 25)
}

const redirectingCountdown = () => {
  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value == 0) {
      clearInterval(interval);
      window.location.href = "https://brin.is-a.dev/old-website-2";
    };
  }, 1000)
}

redirectingCountdown();
updateBgText();
linkEffect();
</script>

<template>
  <div class="ellipsebox">
    <div class="ellipse" id="e1"></div>
    <div class="ellipse" id="e2"></div>
    <div class="ellipse" id="e3"></div>
  </div>
  <div class="blurbox"></div>
  <div id="box">
    {{ bgtext }}
  </div>
  <div class="comingsoon">
    <FancyHeading text="Coming Soon" :font-size=10 overlay-bg="#081024e5" />
    <a @mouseover="linkEffect" class="link" href="https://brin.is-a.dev/old-website-2">{{
      linktext
    }}</a>
    <div class="redirecting">Redirecting in {{ countdown }}</div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

.blurbox {
  backdrop-filter: blur(7.5rem);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

#box {
  user-select: none;
  width: 110%;
  height: 110%;
  color: #ffffff;
  word-wrap: break-word;
  overflow: hidden;
  font-size: 0.9rem;
  font-family: 'Space Mono';
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  mix-blend-mode: overlay;
  mask-image: linear-gradient(white 0%, transparent 50%);
  -webkit-mask-image: linear-gradient(white 0%, transparent 50%);
}

.ellipsebox {
  position: fixed;
  top: -25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -5vw;
  z-index: -2;
}
.ellipse {
  border-radius: 50%;
}
#e1,
#e3 {
  height: 45vh;
  width: 40vw;
  z-index: -1;
}
#e1 {
  background-color: #8ab9ff;
}
#e3 {
  background-color: #dd95ff;
}
#e2 {
  background-color: #8afff1;
  height: 25vh;
  width: 30vw;
  transform: scale(140%);
}
.comingsoon {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  width: 100vw;
  color: transparent;
  justify-content: center;
  align-items: center;
}
.comingsoon img {
  width: 60rem;
}
.comingsoon .link {
  all: unset;
  cursor: pointer;
  font-size: 1.5rem;
  color: #c2eaff;
  font-family: 'Space Mono';
  transition: text-shadow 0.4s;
}
.comingsoon .link:hover {
  text-decoration: underline;
  text-shadow: 0 0.1rem 2rem #75b1d2;
}
.redirecting {
  font-size: 1.25rem;
  color: #c2eaffaf;
  font-family: 'Space Mono';
}
</style>
