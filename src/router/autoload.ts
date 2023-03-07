import { RouteRecordRaw } from 'vue-router'

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]
  const layouts = import.meta.globEager('../layouts/*.vue')

  Object.entries(layouts).forEach(([k, v]) => {
    const routes = getRouterByModule(k, v)
    routes.children = getchildrenBymodule(routes)
    layoutRoutes.push(routes)
  })
  return layoutRoutes
}

function getchildrenBymodule(layoutRoutes: RouteRecordRaw) {
  const views = import.meta.globEager('../views/**/*.vue')
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([k, v]) => {
    if (k.includes(`../views/${layoutRoutes.name as string}`)) {
      routes.push(getRouterByModule(k, v))
    }
  })
  return routes
}

function getRouterByModule(k: string, v: any) {
  const path = k.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    path: `/${path}`,
    name: path,
    component: v.default,
  } as RouteRecordRaw
  return Object.assign(route, v.default?.route)
}

export default getRoutes()
