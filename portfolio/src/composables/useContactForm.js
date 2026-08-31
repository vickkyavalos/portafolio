import { ref } from 'vue'

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

    const trimmedData = {
      name: formData.value.name.trim(),
      email: formData.value.email.trim(),
      message: formData.value.message.trim()
    }

    errors.value = { name: '', email: '', message: '' }

    if (!trimmedData.name) {
      errors.value.name = 'Ingresá tu nombre.'
    }

    if (!trimmedData.email) {
      errors.value.email = 'Ingresá tu email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedData.email)) {
      errors.value.email = 'Ingresá un email válido.'
    }

    if (!trimmedData.message) {
      errors.value.message = 'Escribí tu mensaje.'
    }

    if (errors.value.name || errors.value.email || errors.value.message) {
      return
    }

    isSubmitting.value = true

    try {
      const response = await fetch('https://formspree.io/f/mljrdlwv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(trimmedData)
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