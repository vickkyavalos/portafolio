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
          <img src="../../assets/images/pixel me 1.png" width="450px" >
         <P class="textofoto">Foto en construcción</P>
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
  padding: 4rem 0 2rem;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: clamp(1rem, 3vw, 3rem);
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.subtitle {
  font-size: clamp(1.3rem, 2vw, 2rem);
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.title {
  font-size: clamp(4rem, 7vw, 8rem);
  line-height: 0.9;
  color: var(--accent-color);
  text-shadow: 2px 2px 0px var(--color-claro);
  margin: 0;
}

.hero-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image-placeholder img {
  display: block;
  width: min(100%, 420px);
  height: auto;
  margin: 0;
}

.textofoto {
  font-family: "Handjet", sans-serif;
  text-align: center;
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1;
  margin: -0.3rem 0 0;
}

.hero-action {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
}

.btn-projects {
  display: inline-block;
  background-color: var(--accent-color);
  color: #1a1a1a;
  padding: 12px 40px;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s;
}

.btn-projects:hover {
  transform: translateY(-5px);
  background-color: var(--color-claro);
}

@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
    padding: 80px 0 40px;
    justify-content: center;
  }

  .hero-layout {
    grid-template-columns: 1fr;
    justify-items: center; 
    gap: 2rem; 
    width: 100%;
    padding: 1rem;
  }

  .hero-text {
    order: 1;
    align-items: center;
  }

  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: clamp(3.5rem, 15vw, 5rem);
    line-height: 0.9;
    letter-spacing: 0.04em;
  }

  .hero-image {
    order: 2;
    width: 100%;
  }

  .image-placeholder {
    max-width: 320px;
    margin: 0 auto;
  }

  .textofoto {
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }

  .hero-action {
    position: static;
    transform: none;
    text-align: center;
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .btn-projects {
    padding: 12px 32px;
    font-size: 1.2rem;
  }
}
</style>