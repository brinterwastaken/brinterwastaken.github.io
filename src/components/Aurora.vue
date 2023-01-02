<template>
  <div id="aurora" class="container">
  <div></div>
  <div></div>
  <div></div>
  </div>
</template>

<style>
:root {
  --color1: #4C2096;
  --color2: #2B2180;
  --color3: #203396;
}

.container {
  z-index: -1;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}

.container div{
  position: absolute;
  border-radius: 50%;
  transition: opacity 100ms;
  animation: gradient 5s infinite;
}

@keyframes gradient{
  70%{
    transform: scale(1.5) translate(50px);
  }
}
.container div:nth-child(1){
  height: 60%;
  width: 50%;
  background-color: var(--color1);
  bottom: -15%;
  left: -15%;
  animation-delay: 0.3s;
}
.container div:nth-child(2){
  height: 50%;
  width: 60%;
  background-color: var(--color2);
  bottom: -10%;
  left: 20%;
  animation-delay: 1.2s;
}
.container div:nth-child(3){
  height: 55%;
  width: 60%;
  background-color: var(--color3);
  bottom: -10%;
  right: -20%;
  animation-delay: 3.1s;
}
.container:after{
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  backdrop-filter: blur(150px);
}
.container.noblur:after {
  backdrop-filter: none;
}
</style>

<script>
export default {
  mounted() {
    var aurorabox = this.$el
    document.onscroll = (ev) => {
      var scrolldist = window.scrollY/window.innerHeight
      var newopacity = Math.round((1 - scrolldist)*150)/100 - 0.5
      newopacity = newopacity <= 0 ? 0 : newopacity
      Array.from(aurorabox.children).forEach((child) => {
        child.style.opacity = newopacity
      })
      newopacity <= 0 ? aurorabox.classList.add('noblur') : aurorabox.classList.remove('noblur')
      var scrollarrow = aurorabox.parentElement.querySelector(".scrollarrow")
      if (Math.round((1 - scrolldist)*10)/10 < 0.9) {
        if (getComputedStyle(scrollarrow).opacity != 0) {
          scrollarrow.style.opacity = 0
        }
      } else {
        if (getComputedStyle(scrollarrow).opacity == 0) {
          scrollarrow.style.opacity = 1
        }
      }
    }
  }
}
</script>