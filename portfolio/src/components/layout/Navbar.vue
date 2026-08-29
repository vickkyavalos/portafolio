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
  gap: 1rem;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--accent-color);
}

nav {
  display: flex;
  align-items: center;
}

ul {
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 2vw, 2rem);
  flex-wrap: wrap;
}

a {
  font-size: 1rem;
  color: var(--text-main);
  transition: color 0.3s ease;
}

a:hover {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 0;
  }

  .nav-content {
    justify-content: center;
    flex-direction: column;
  }

  ul {
    justify-content: center;
    gap: 0.9rem 1.2rem;
  }
}
</style>