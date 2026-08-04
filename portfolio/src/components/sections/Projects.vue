<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const projectsRef = ref(null)

const projectList = ref([
  {
    id: 1,
    title: 'Desarrollo Web & E-commerce',
    description: 'Plataforma de ventas online con carrito interactivo, pasarela de pagos y un panel administrativo completo.',
    technologies: ['Vue.js', 'Node.js', 'SQL'],
    link: '#'
  },
  {
    id: 2,
    title: 'Diseño de Identidad Corporativa',
    description: 'Creación de marca desde cero, diseño de logos, vectorización de textos y elaboración de manual de marca para clientes digitales.',
    technologies: ['Figma', 'Illustrator', 'Affinity Designer'],
    link: '#'
  }
])

onMounted(() => {
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: projectsRef.value,
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
  <section id="projects" class="projects" ref="projectsRef">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">
        
        <article 
          v-for="project in projectList" 
          :key="project.id" 
          class="project-card"
        >
          <div class="card-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <ul class="tech-list">
              <li v-for="(tech, index) in project.technologies" :key="index">
                {{ tech }}
              </li>
            </ul>
            <a :href="project.link" class="btn-link" target="_blank" rel="noopener noreferrer">Ver proyecto &rarr;</a>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 100px 0;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}
.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.project-card:hover {
  border-color: var(--color-claro);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.card-content {
  padding: 2rem;
}
h3 {
  color: var(--text-main);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.tech-list li {
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: rgba(56, 189, 248, 0.1);
  color: var(--accent-color);
  border-radius: 20px;
}
.btn-link {
  color: var(--text-main);
  font-weight: bold;
}
.btn-link:hover {
  color: var(--color-claro);
}
</style>