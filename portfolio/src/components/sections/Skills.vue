<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

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
    stagger: 0.2
  })
})
</script>

<template>
  <section id="skills" class="skills" ref="skillsRef">
    <div class="container">
      <h2 class="section-title">Habilidades Técnicas</h2>
      <div class="skills-grid">
        
        <div class="skill-card">
          <h3>Frontend</h3>
          <p>HTML/CSS, JavaScript, TypeScript, Vue.js, React, Angular, Bootstrap, GSAP.</p>
        </div>

        <div class="skill-card">
          <h3>Backend & Data</h3>
          <p>Node.js, Express.js, NestJS, Python, Django, PHP, SQL, TypeORM, Spring Boot.</p>
        </div>

        <div class="skill-card">
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
  transition: transform 0.3s ease;
}
.skill-card:hover {
  transform: translateY(-5px);
}
h3 {
  margin-bottom: 1rem;
  color: var(--text-main);
}
p {
  color: var(--text-muted);
}
</style>