<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projectsRef = ref(null)

const projectList = ref([
  {
    id: 1,
    title: 'astroNum',
    description: 'Repositorio público. Código de lógica y estructura. Basado en repo GitHub.',
    technologies: ['JavaScript', 'Lógica', 'Angular'],
    link: 'https://github.com/vickkyavalos/astroNum'
  },
  {
    id: 2,
    title: 'letter',
    description: 'Repositorio privado. Trabajo fundamental en CSS. Basado en repo GitHub.',
    technologies: ['CSS', 'Diseño'],
    link: 'https://github.com/vickkyavalos/letter'
  },
  {
    id: 3,
    title: 'heart-ily',
    description: 'Título: corazon latiendo. Trabajo clave en CSS. Basado en repo GitHub.',
    technologies: ['CSS', 'Animación'],
    link: 'https://github.com/vickkyavalos/heart-ily'
  },
  {
    id: 4,
    title: 'API Reservas Salones',
    description: 'API REST para la reserva de salones de cumpleaños. Proyecto de Facu.',
    technologies: ['Express.js', 'MySQL', 'Node.js'],
    link: 'https://github.com/vickkyavalos'
  },
  {
    id: 5,
    title: 'Gestor de Proyectos',
    description: 'Aplicación web para gestión de proyectos y tareas. Proyecto de Facu.',
    technologies: ['Angular', 'NestJS', 'TypeORM'],
    link: 'https://github.com/vickkyavalos'
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
  <section id="projects" class="projects" ref="projectsRef">
    <div class="container">
      <h2 class="section-title">Proyectos</h2>
      
      <div class="projects-grid">
        <article 
          v-for="project in projectList" 
          :key="project.id" 
          class="project-card"
          @mouseenter="onHoverEnter" 
          @mouseleave="onHoverLeave"
        >
          <div class="card-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            
            <ul class="tech-list">
              <li v-for="(tech, index) in project.technologies" :key="index">
                {{ tech }}
              </li>
            </ul>
          </div>

          <div class="card-footer">
            <a :href="project.link" class="btn-github" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>[Ver en GitHub]</span>
            </a>
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
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid var(--accent-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: border-color 0.3s ease;
}

.project-card:hover {
  border-left-color: var(--color-claro);
  border-top-color: var(--accent-color);
  border-right-color: var(--accent-color);
  border-bottom-color: var(--accent-color);
}

.card-content {
  flex-grow: 1;
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
  margin-bottom: 2rem;
}

.tech-list li {
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: rgba(56, 189, 248, 0.1);
  color: var(--accent-color);
  border-radius: 20px;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
}

.btn-github {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-main);
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.btn-github:hover {
  color: var(--color-claro);
}

.btn-github svg {
  fill: currentColor;
}
</style>