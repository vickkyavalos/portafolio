<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const textColRef = ref(null)
const imageColRef = ref(null)
const btnRef = ref(null)

onMounted(() => {
  gsap.from(textColRef.value, { x: -50, opacity: 0, duration: 1, ease: 'power3.out' })
  gsap.from(imageColRef.value, { x: 50, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' })
  gsap.from(btnRef.value, { y: 30, opacity: 0, duration: 1, delay: 0.5, ease: 'power3.out' })
})
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-layout">
      
      <div class="hero-text" ref="textColRef">
        <h2 class="subtitle">VICTORIA AVALOS</h2>
        <h1 class="title pixel-font">web<br>developer</h1>
      </div>

      <div class="hero-image" ref="imageColRef">
        <div class="image-placeholder">
        </div>
      </div>
      
    </div>

    <div class="hero-action" ref="btnRef">
      <a href="#projects" class="btn-projects">projects</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; 
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.subtitle {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.title {
  font-size: 8rem; 
  line-height: 1.1;
  color: #ff8fb3; 
  text-shadow: 2px 2px 0px #fff; 
}


.hero-image {
  display: flex;
  justify-content: center; 
}

.image-placeholder {
  width: 100%;
  max-width: 450px;
  aspect-ratio: 4/3;
  background-color: #9ca3af; 
  border-radius: 4px;
}

.hero-action {
  position: absolute;
  bottom: 80px; 
  left: 50%;
  transform: translateX(-50%);
}

.btn-projects {
  display: inline-block;
  background-color: #ff8fb3; 
  color: #1a1a1a;
  padding: 12px 40px;
  font-size: 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s;
}

.btn-projects:hover {
  transform: translateY(-5px);
  background-color: var(--color-claro);
}

@media (max-width: 768px) {
  .hero-layout {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  .title {
    font-size: 4rem;
  }
  .hero-action {
    position: static;
    transform: none;
    text-align: center;
    margin-top: 4rem;
  }
}
</style>