import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from './router'
import getRoutes from './autoload'
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...getRoutes] as RouteRecordRaw[],
})



export function setupRouter(app: App) {
  app.use(router)
}

export default router
