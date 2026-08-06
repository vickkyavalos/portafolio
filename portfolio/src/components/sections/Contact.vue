<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const formRef = ref(null)

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const validateForm = async (e) => {
  e.preventDefault()
  let isValid = true
  
  errors.value = { name: '', email: '', message: '' }

  if (!formData.value.name.trim()) {
    errors.value.name = 'El nombre es obligatorio.'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.value.email.trim() || !emailRegex.test(formData.value.email)) {
    errors.value.email = 'Por favor, ingresa un correo válido.'
    isValid = false
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'El mensaje no puede estar vacío.'
    isValid = false
  }

  if (!isValid) {
    gsap.to(formRef.value, { 
      x: [-10, 10, -10, 10, 0], 
      duration: 0.4, 
      ease: "power2.inOut" 
    })
    return
  }


  isSubmitting.value = true

  try {

    const formspreeUrl = 'https://formspree.io/f/mljrdlwv'

    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })

    if (response.ok) {
      alert('¡Mensaje enviado con éxito!')
      formData.value = { name: '', email: '', message: '' }
    } else {
      alert('Hubo un problema al enviar el formulario. Intentá nuevamente.')
    }
  } catch (error) {
    alert('Error de conexión. Por favor, revisá tu internet e intentá nuevamente.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Contact</h2>
      
      <div class="contact-content">

        <div class="contact-info">
          <h3>¡Hablemos!</h3>
          <p>Estoy disponible para nuevos proyectos y oportunidades laborales.</p>
          
          <ul class="social-links">
            <li>
              <span class="label">Email:</span>
              <a href="mailto:avalossvictoria@gmail.com">avalossvictoria@gmail.com</a>
            </li>
            <li>
              <span class="label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/victoria-in%C3%A9s-avalos-092768253/" target="_blank">Victoria Avalos</a>
            </li>
            <li>
              <span class="label">GitHub:</span>
              <a href="https://github.com/vickkyavalos" target="_blank">github.com/vickkyavalos</a>
            </li>
          </ul>
        </div>

        <form ref="formRef" @submit="validateForm" class="contact-form" novalidate>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model="formData.name" :class="{ 'error-input': errors.name }">
            <span class="error-text" v-if="errors.name">{{ errors.name }}</span>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" :class="{ 'error-input': errors.email }">
            <span class="error-text" v-if="errors.email">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea id="message" rows="5" v-model="formData.message" :class="{ 'error-input': errors.message }"></textarea>
            <span class="error-text" v-if="errors.message">{{ errors.message }}</span>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 100px 0;
  background: rgba(0,0,0,0.1);
}
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
}
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
.contact-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.contact-info p {
  color: var(--text-muted);
  margin-bottom: 2rem;
}
.social-links li {
  margin-bottom: 1rem;
}
.social-links .label {
  font-weight: bold;
  color: var(--accent-color);
  display: block;
}
.social-links a:hover {
  color: var(--color-claro);
  text-decoration: underline;
}

.contact-form {
  background: rgba(255,255,255,0.02);
  padding: 2rem;
  border-radius: 12px;
}
.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}
input, textarea {
  padding: 0.8rem;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(0,0,0,0.2);
  color: var(--text-main);
  border-radius: 6px;
  font-family: inherit;
  transition: border-color 0.3s;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--accent-color);
}
.error-input {
  border-color: #ef4444;
}
.error-text {
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}
.submit-btn {
  background: var(--accent-color);
  color: #0f172a;
  border: none;
  padding: 1rem 2rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
  width: 100%;
}
.submit-btn:hover:not(:disabled) {
  background: var(--color-claro);
  transform: translateY(-2px);
}
.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>