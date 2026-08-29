<script setup>
import { educationList } from '../../data/education'
</script>

<template>
  <section id="education" class="education">
    <div class="container">
      <h2 class="section-title">Formación & Certificaciones</h2>

      <div v-for="item in educationList" :key="item.id" class="education-item">
        <h3>{{ item.title }}</h3>
        <p v-if="item.date" class="date">{{ item.date }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education {
  padding: 100px 0;
  background: rgba(0,0,0,0.2);
}
.education-item {
  margin-top: 2rem;
}
h3 {
  font-size: 1.5rem;
}
.date {
  color: var(--accent-color);
  font-style: italic;
}
</style>