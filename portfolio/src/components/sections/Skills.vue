<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { skillsData } from '../../data/skills'

gsap.registerPlugin(ScrollTrigger)

const skillsRef = ref(null)

onMounted(() => {
  gsap.from('.skill-card', {
    scrollTrigger: {
      trigger: skillsRef.value,
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'back.out(1.5)'
  })
})

const onHoverEnter = (e) => {
  gsap.to(e.currentTarget, {
    y: -8,
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out',
    boxShadow: '0px 0px 20px var(--accent-color)'
  })
}

const onHoverLeave = (e) => {
  gsap.to(e.currentTarget, {
    y: 0,
    scale: 1,
    duration: 0.4,
    ease: 'power2.out',
    boxShadow: 'none'
  })
}
</script>

<template>
  <section id="skills" class="skills" ref="skillsRef">
    <div class="container">
      <h2 class="section-title">Habilidades Técnicas</h2>
      <div class="skills-grid">
        <div
          v-for="skill in skillsData"
          :key="skill.id"
          class="skill-card"
          @mouseenter="onHoverEnter"
          @mouseleave="onHoverLeave"
        >
          <h3>{{ skill.title }}</h3>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 48px 0 28px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
  /* Bordes base */
  border-left: 4px solid var(--accent-color);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: border-color 0.3s ease;
}

.skill-card:hover {
  border-left-color: var(--color-claro);
  border-top-color: var(--accent-color);
  border-right-color: var(--accent-color);
  border-bottom-color: var(--accent-color);
}

h3 {
  margin-bottom: 1rem;
  color: var(--text-main);
}
p {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .skills {
    padding: 36px 0 18px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>