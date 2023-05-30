import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import App from './App.vue'
import router from './router'
import './styles.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

createApp(App).use(pinia).use(router).mount('#app')