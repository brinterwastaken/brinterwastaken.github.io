<script>
export default {
  methods: {
    copyusername: function () {
      navigator.clipboard.writeText("xXTgamerXx#1840");
      alert("Copied username to clipboard.");
    }
  }
}
</script>

<template>
  <div id="about">
    <h1>About Me</h1>
    <h2><span class="colored">Trinethr</span><code class="alt big"> aka brin aka xXTgamerXx9844</code></h2>
    <p><code class="stuff colored">I use arch btw</code><code class="alt"> (yes.)</code></p>
    <p title="click to copy" class="clickable" v-on:click="copyusername"><code class="stuff colored">Discord - </code>xXTgamerXx#1840</p>    
    <p><code class="stuff colored">Interests - </code>UI design and customization, Art, Music, Low level programming</p>    
    <p><code class="stuff colored">Skills - </code>
      <ul>
        <li><code class="stuff colored">Frontend - </code><span>HTML, CSS, Vanilla JS, Vue, Three.js</span></li>
        <li><code class="stuff colored">Others - </code><span>Blender, Drawing, Photography, Photo editing</span></li>
      </ul>
    </p>
    <p>Work in progress</p>
    <p>© Trinethr 2022</p>
  </div>
</template>

<style scoped>
#about {
  padding: 8rem 6rem;
  overflow-x: hidden;
}
h1 {
  font-family: Satoshi;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
}
h2 {
  font-family: Satoshi;
  font-size: 2.5rem;
  font-weight: 600;
  margin-block: 0;
}
.alt {
  color: #ffffffaa;
}
.big {
  font-size: 1.5rem;
}
li, .stuff {
  font-size: 1.1rem;
}
p, li span {
  font-size: 1.1rem;
  color: #fdfdfd;
}
.colored {
  color: #a99fff;
}
ul {
  margin-block: 0;
}
li {
  color: #a99fff;
}
.clickable {
  cursor: pointer;
}
</style>