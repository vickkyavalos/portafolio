import { ref } from 'vue'
import gsap from 'gsap'

export function useContactForm() {
  const formRef = ref(null)
  const formData = ref({ name: '', email: '', message: '' })
  const errors = ref({ name: '', email: '', message: '' })
  const isSubmitting = ref(false)
  
  const notification = ref({ show: false, message: '', type: 'success' })

  const triggerNotification = (message, type) => {
    notification.value = { show: true, message, type }
    setTimeout(() => {
      notification.value.show = false
    }, 4000) 
  }

  const validateForm = async (e) => {
    e.preventDefault()

    isSubmitting.value = true

    try {
      const response = await fetch('https://formspree.io/f/mljrdlwv', {
    
      })

      if (response.ok) {
        triggerNotification('¡Mensaje enviado con éxito!', 'success')
        formData.value = { name: '', email: '', message: '' }
      } else {
        triggerNotification('Hubo un problema al enviar el formulario.', 'error')
      }
    } catch (error) {
      triggerNotification('Error de conexión. Revisá tu internet.', 'error')
    } finally {
      isSubmitting.value = false
    }
  }

  return { formRef, formData, errors, isSubmitting, notification, validateForm }
}