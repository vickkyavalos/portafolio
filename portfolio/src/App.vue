<script setup>
import Navbar from './components/layout/Navbar.vue'

import Hero from './components/sections/Hero.vue'
import Skills from './components/sections/Skills.vue'
import Projects from './components/sections/Projects.vue'
import Education from './components/sections/Education.vue'
import Contact from './components/sections/Contact.vue'
</script>

<template>
  <div class="portfolio-container">
    <Navbar />

    <main>
      <Hero id="home" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Education id="education" />
      <Contact id="contact" />
    </main>
  </div>
</template>

<style scoped>
.portfolio-container {
  overflow-x: hidden; 
}
</style>