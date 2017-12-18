import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0e8ab9a1 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _a5746d76 = () => import('../pages/ejecutivas/index.vue' /* webpackChunkName: "pages/ejecutivas/index" */).then(m => m.default || m)
const _0ed41d56 = () => import('../pages/frontend/index.vue' /* webpackChunkName: "pages/frontend/index" */).then(m => m.default || m)
const _1e557d3e = () => import('../pages/frontend/_id.vue' /* webpackChunkName: "pages/frontend/_id" */).then(m => m.default || m)
const _33cf58ed = () => import('../pages/ejecutivas/_id.vue' /* webpackChunkName: "pages/ejecutivas/_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _0e8ab9a1,
			name: "index"
		},
		{
			path: "/ejecutivas",
			component: _a5746d76,
			name: "ejecutivas"
		},
		{
			path: "/frontend",
			component: _0ed41d56,
			name: "frontend"
		},
		{
			path: "/frontend/:id",
			component: _1e557d3e,
			name: "frontend-id"
		},
		{
			path: "/ejecutivas/:id",
			component: _33cf58ed,
			name: "ejecutivas-id"
		}
    ],
    fallback: false
  })
}
