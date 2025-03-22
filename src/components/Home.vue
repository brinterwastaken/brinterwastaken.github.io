<template>
  <div id="home">
    <h1>Hello! I'm Trinethr.</h1>
    <code id="basicinfo" class="blinker" ref="basicinfo">Creative frontend developer and artist.</code>
    <div class="scrollarrow" ref="scrollarrow"><i class="fa-solid fa-chevron-down"></i></div>
  </div>
</template>

<style>
#home {
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 6rem;
}
#home h1 {
  font-family: Satoshi;
  font-size: 5rem;
  font-weight: 1000;
  color: #ffffffee;
  line-height: 110%;
  margin-block: 1.5rem;
}
#basicinfo {
  font-size: 1.5rem;
  color: #ffffffaa;
  line-height: 120%;
  position: relative;
}
code.blinker {
  position: relative;
}
code.blinker::after {
  content: '';
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: -0.2rem;
  height: 100%;
  width: 0.15rem;
  background: #6874ffee;
  animation: blink 0.7s linear forwards infinite;
}
.scrollarrow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 20px;
  margin-block: 1rem;
  color: #ffffffaa;
  animation: arrow 1s steps(20) forwards infinite;
  transition: color 150ms, opacity 200ms;
}
.scrollarrow:hover {
  color: #6874ffee;
}
@keyframes blink {
  0%,50% {opacity: 0;}
  51%,100% {opacity: 1;}
}
@keyframes arrow {
  0% { bottom: 0 }
  50% { bottom: -0.35rem }
  100% { bottom: 0 }
}
@media screen and (max-width: 570px) {
  #home h1 {
    font-size: 3.5rem;
  }
  #basicinfo {
    font-size: 1rem;
  }
}
@media screen and (max-width: 500px) {
  #home {
    align-items: center;
  }
  #home h1 {
    font-size: 3rem;
    width: calc(100vw - 7rem);
  }
  #basicinfo {
    width: calc(100vw - 7rem);
  }
}
@media screen and (max-width: 770px) {
  code.blinker::after {
    display: none;
  }
}
</style>

<script>
export default {
  mounted () {
    var basicinfo = this.$refs.basicinfo
    var txt = basicinfo.innerText
    basicinfo.innerText = " "
    var i = 0
    function type (elmnt, text) {
      if (i < text.length) {
        elmnt.innerHTML += text.charAt(i);
        i++
        setTimeout(() => { type(elmnt, text) }, 70)
      }
    }
    type(basicinfo, txt)
  }
}
</script>