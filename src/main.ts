import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { setupRouter } from './router'
import router from './router'

async function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  await router.isReady()

  app.mount('#app')
}
bootstrap()
