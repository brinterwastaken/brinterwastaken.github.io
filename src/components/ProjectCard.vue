<script>
export default {
  props: {
    image: String,
    title: String,
    desc: String,
    url: String,
    repo: String,
  }
}
</script>

<template>
  <div class="card">
    <img :src="image" alt="">
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ desc }}</p>
    <div class="card-links">
      <a title="GitHub repository" v-if="repo" :href="'https://github.com/brinterwastaken/' + repo"><i class="fa-brands fa-github"></i></a>
      <a title="Website" v-if="url" :href="url"><i class="fa-solid fa-link"></i></a>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 20rem;
  padding: 1rem 1rem 2rem 1rem;
  opacity: 0;
  margin-left: -15vw;
  filter: blur(10px);
  transition: opacity 500ms, margin-left 500ms, filter 500ms;
  background: #ffffff0a;
  border-radius: 1rem;
  position: relative;
}
img {
  width: 100%;
  border-radius: 0.5rem;
}
.title {
  font-size: 24px;
  margin-block: 0.5rem;
}
p {
  margin: 0.5rem 0 1rem 0;
}
.card-links {
  position: absolute;
  bottom: 1rem;
  display: flex;
  gap: 0.5rem;
}
.card-links a {
  all: unset;
  font-size: 20px;
  cursor: pointer;
  transition: color 200ms;
}
.card-links a:hover {
  color: #6f5fff;
}

@media(prefers-reduced-motion) {
  .card {
    transition: none;
  }
}

@media screen and (max-width: 500px) {
  .card {
    width: 60vw;
    padding: 0.8rem 0.8rem 2.2rem 0.8rem;
  }
}
</style>