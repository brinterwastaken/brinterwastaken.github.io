<script>
import ProjectCard from './ProjectCard.vue'
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      cardimages: ['imgs/wafer-desktop.png','/imgs/spacedonut.png', '/imgs/doapp.png', '/imgs/everforest-nvim.png', '/imgs/nord-i3.png', '/imgs/fluent-startpage.png'],
      cardtitles: ['Wafer desktop', 'Donut in space', 'Do.app', 'Everforest Neovim', 'Nord i3wm setup', 'Fluent Startpage'],
      carddescs: [
        'Desktop that looks like a popular operating system named after a fruit, made with Vue.',
        'Three.js project showing a donut floating in space.', 
        'A simple, customizable Todo list app, made with Electron and Glasstron.', 
        'An everforest themed neovim configuration.', 
        'A collection of configuration files for my nord themed i3 setup.', 
        'A fluent design style startpage made with vanilla html css and js.'
      ],
      cardurls: [
        'https://brin.is-a.dev/wafer-desktop', 
        'https://brin.is-a.dev/donut-in-space', 
        'https://brin.is-a.dev/fluent-startpage'
      ],
      cardrepos: ['wafer-desktop', 'donut-in-space', 'do.app', 'everforest-neovim', 'nord-setup-dotfiles', 'fluent-startpage']
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");
      })
    })
    window.onload = () => {
      Array.from(this.$refs.cards.children).forEach((child) => {observer.observe(child)})
    }
  }
}
</script>

<template>
  <div id="projects">
    <h1>Projects</h1>
    <code class="blinker description">My personal projects over the years.</code>
    <div id="card-container" ref="cards">
      <ProjectCard :image="cardimages[0]" :title="cardtitles[0]" :desc="carddescs[0]" :repo="cardrepos[0]" :url="cardurls[0]"></ProjectCard>
      <ProjectCard :image="cardimages[1]" :title="cardtitles[1]" :desc="carddescs[1]" :repo="cardrepos[1]" :url="cardurls[1]"></ProjectCard>
      <ProjectCard :image="cardimages[2]" :title="cardtitles[2]" :desc="carddescs[2]" :repo="cardrepos[2]"></ProjectCard>
      <ProjectCard :image="cardimages[3]" :title="cardtitles[3]" :desc="carddescs[3]" :repo="cardrepos[3]"></ProjectCard>
      <ProjectCard :image="cardimages[4]" :title="cardtitles[4]" :desc="carddescs[4]" :repo="cardrepos[4]"></ProjectCard>
      <ProjectCard :image="cardimages[5]" :title="cardtitles[5]" :desc="carddescs[5]" :repo="cardrepos[5]" :url="cardurls[2]"></ProjectCard>
    </div>
  </div>
</template>

<style>
#projects {
  padding: 8rem 6rem;
  overflow-x: hidden;
}
#projects h1 {
  font-family: Satoshi;
  font-size: 3rem;
  font-weight: 800;
}
.show {
  opacity: 1;
  margin-left: 0;
  filter: none;
}
.description {
  font-size: 1.3rem;
  color: #ffffffaa;
  line-height: 120%;
}
#card-container {
  margin-top: 2em;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  gap: 2rem;
}
@media screen and (min-width: 1200px) {
  #card-container {
    margin-top: 4em;
    gap: 3rem;
  }
}
@media screen and (max-width: 750px) {
  #projects {
    padding: 6rem 3.5rem;
  }
  #projects h1 {
    font-size: 2rem;
  }
  .description {
    font-size: 1rem;
  }
}
@media screen and (max-width: 900px) {
  #card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>