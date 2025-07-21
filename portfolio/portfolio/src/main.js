import { createApp } from 'vue'
// import './style.css'
import './assets/index.css'
import router from './router'
import App from './App.vue'

createApp(App).mount('#app')
App.use(router)
App.mount('#app')