<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ProjectCard from '../ui/ProjectCard.vue'
import { projectList } from '../../data/projects'

gsap.registerPlugin(ScrollTrigger)

const projectsRef = ref(null)

onMounted(() => {
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: projectsRef.value,
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'back.out(1.5)'
  })
})
</script>

<template>
  <section id="projects" class="projects" ref="projectsRef">
    <div class="container">
      <h2 class="section-title">Proyectos</h2>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in projectList"
          :key="project.id"
          :project="project"
          class="project-card"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 30px 0 60px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .projects {
    padding: 20px 0 40px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

</style>