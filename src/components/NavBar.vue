<template>
  <div id="navbar-container">
    <div class="bar" id="titlebar" ref="titlebar">
      <img src="/pfp.png" alt="">
      <div>Trinethr</div>
    </div>
    <div class="bar" id="navbar" ref="navbar">
      <a class="linktext" href="#home">Home</a>
      <a class="linktext" href="#projects">Projects</a>
      <a class="linktext" href="#links">Links</a>
      <a class="linktext" href="#about">About</a>
      <a class="linkicon" href="/yt/"><i class="fa-brands fa-youtube"></i></a>
      <a class="linkicon" href="/gh/"><i class="fa-brands fa-github"></i></a>
    </div>
    <div class="bar" id="mobile-nav"> 
      <a class="linkicon" href="#home"><i class="fa-solid fa-house"></i></a>
      <a class="linkicon" href="#projects"><i class="fa-solid fa-code"></i></a>
      <a class="linkicon" href="#links"><i class="fa-solid fa-link"></i></a>
      <a class="linkicon" href="#about"><i class="fa-solid fa-circle-info"></i></a>
    </div>
  </div>
</template>

<style>
#navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  pointer-events: none;
}
.bar {
  border-radius: 1rem;

  background: #20202069;
  color: #efefef;
  backdrop-filter: blur(15px);
  box-shadow: 0 5px 10px #12121269;

  display: flex;
  gap: 1.2rem;
  height: 4rem;
  align-items: center;
  padding-inline: 1.5rem;
  font-size: 20px;

  pointer-events: auto; 
}
#navbar {
  user-select: none;
}
#mobile-nav {
  display: none;
}
.bar a {
  all: unset;
  position: relative;
  cursor: pointer;
  transition: color 200ms;
}
.bar a.linktext::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 0.15em;
  background: linear-gradient(90deg, #9253ff 0%, #4b69ff 100%);
  border-radius: 0.125rem;
  transition: width 250ms ease-out, left 250ms ease-out;
}
.bar a.linktext:hover::after {
  left: 0%;
  width: 100%;
}
.bar a.linktext:active {
  color: #6f5fff;
}
.bar a.linkicon:hover {
  color: #6f5fff;
}
#titlebar {
  user-select: none;
}
#titlebar img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
#titlebar div {
  transition: color 200ms;
}
#titlebar div:hover {
  color: #6f5fff;
}
@media screen and (max-width: 750px) {
  #titlebar, #navbar {
    display: none;
  }
  #mobile-nav {
    display: flex;
  }
  #navbar-container {
    justify-content: center;
  }
}
</style>
