<template>
  <div id="app">
    <HeaderIntro />
    <Projects />
    <About />
  </div>
</template>

<script>
import HeaderIntro from './pages/Header.vue'
import Projects from './pages/Projects.vue'
import About from './pages/About.vue'

export default {
  name: 'App',
  components: {
    HeaderIntro,
    Projects,
    About,
  },
}
</script>

<style>
@import './styles/css/main.css';
</style>
