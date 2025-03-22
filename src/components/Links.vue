<script>
export default {
  data () {
    return {
      linkurls: [
        "https://www.youtube.com/@_brinter",
        "https://www.instagram.com/_brinter/",
        "https://github.com/brinterwastaken",
        "https://reddit.com/u/xXTgamerXx",
        "https://www.deviantart.com/notbrinter",
        "https://open.spotify.com/user/doc0wc4yekwnq5tzbcjx2oo4z"
      ]
    }
  },
  methods: {
    openlink: function (linkurl) {
      window.open(linkurl, "_blank")
    }
  }
}
</script>

<template>
  <div id="links">
    <h1>Links</h1>
    <ul id="linkbox">
      <li v-on:click="openlink(linkurls[0])" fonticon="">YouTube</li>
      <li v-on:click="openlink(linkurls[1])" fonticon="">Instagram</li>
      <li v-on:click="openlink(linkurls[2])" fonticon="">GitHub</li>
      <li v-on:click="openlink(linkurls[3])" fonticon="">Reddit</li>
      <li v-on:click="openlink(linkurls[4])" fonticon="">DeviantArt</li>
      <li v-on:click="openlink(linkurls[5])" fonticon="">Spotify</li>
    </ul>
  </div>
</template>

<style>
#links {
  padding: 8rem 6rem;
  overflow-x: hidden;
  background-image: url("/imgs/gabriele-garanzelli-unsplash-edit.jpg");
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
#links h1 {
  font-family: Satoshi;
  font-size: 3rem;
  font-weight: 800;
}
#linkbox {
  list-style-type: none;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
#linkbox li {
  background: #26243369;
  color: #efefef;
  backdrop-filter: blur(15px);
  box-shadow: 0 5px 10px #12121269;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 25rem;
  text-align: center;
  position: relative;
  transition: color 200ms, transform 200ms;
  cursor: pointer;
  font-size: 22px;
}
#linkbox li:hover {
  transform: scale(105%);
  color: #6f5fff;
}
#linkbox li::before {
  position: absolute;
  left: 1rem;
  font-family: "Font Awesome 6 Brands";
  font-size: 24px;
  width: 26px;
  line-height: 26px;
  content: attr(fonticon);
}
@media screen and (max-width: 750px) {
  #links {
    padding: 6rem 3.5rem;
  }
  #links h1 {
    font-size: 2rem;
  }
}
@media screen and (max-width: 600px) {
  #linkbox li {
    width: 100%;
  }
}
</style>