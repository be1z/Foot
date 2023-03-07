import { RouteRecordRaw } from 'vue-router'
import home from '@/views/home.vue'
import noFInd from '@/views/noFind.vue'

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/:path(.*)', name: 'noFInd', component: noFInd },
] as RouteRecordRaw[]


export default routes
