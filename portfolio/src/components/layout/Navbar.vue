<script setup>
</script>

<template>
  <header class="navbar">
    <div class="container nav-content">
      <div class="logo">VA.</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Projectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  z-index: 100;
  padding: 1.5rem 0;
}
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--accent-color);
}
ul {
  display: flex;
  gap: 2rem;
}
a:hover {
  color: var(--accent-color);
  transition: color 0.3s ease;
}
</style>