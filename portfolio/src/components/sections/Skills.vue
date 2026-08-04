<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

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
    duration: 0.8,
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
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)'
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
          class="skill-card" 
          @mouseenter="onHoverEnter" 
          @mouseleave="onHoverLeave"
        >
          <h3>Frontend</h3>
          <p>HTML/CSS, JavaScript, TypeScript, Vue.js, React, Angular, Bootstrap, GSAP.</p>
        </div>

        <div 
          class="skill-card"
          @mouseenter="onHoverEnter" 
          @mouseleave="onHoverLeave"
        >
          <h3>Backend & Data</h3>
          <p>Node.js, Express.js, NestJS, Python, Django, PHP, SQL, TypeORM, Spring Boot.</p>
        </div>

        <div 
          class="skill-card"
          @mouseenter="onHoverEnter" 
          @mouseleave="onHoverLeave"
        >
          <h3>Herramientas & Diseño</h3>
          <p>Figma, Adobe Illustrator, Affinity Designer, n8n, Git.</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 100px 0;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.skill-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid var(--accent-color);
}

.skill-card:hover {
  border-left-color: var(--color-claro);
}
h3 {
  margin-bottom: 1rem;
  color: var(--text-main);
}
p {
  color: var(--text-muted);
}
</style>