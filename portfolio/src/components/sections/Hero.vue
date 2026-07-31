<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const titleRef = ref(null)
const subtitleRef = ref(null)

onMounted(() => {
  gsap.from(titleRef.value, { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
  gsap.from(subtitleRef.value, { y: 30, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
})
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-content">
      <h1 ref="titleRef">VICTORIA AVALOS</h1>
      <h2 ref="subtitleRef">web developer</h2>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
}
.hero-content {
  width: 100%;
}
h1 {
  font-size: 4rem;
  letter-spacing: 2px;
}
h2 {
  font-size: 2rem;
  color: var(--accent-color);
  font-weight: 300;
  margin-top: 1rem;
}
</style>