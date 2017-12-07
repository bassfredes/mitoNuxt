import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0e8ab9a1 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _734afc42 = () => import('../pages/ejecutivas.vue' /* webpackChunkName: "pages/ejecutivas" */).then(m => m.default || m)
const _08b59bc1 = () => import('../pages/business.vue' /* webpackChunkName: "pages/business" */).then(m => m.default || m)
const _3a2c1dda = () => import('../pages/frontend.vue' /* webpackChunkName: "pages/frontend" */).then(m => m.default || m)



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
			component: _734afc42,
			name: "ejecutivas"
		},
		{
			path: "/business",
			component: _08b59bc1,
			name: "business"
		},
		{
			path: "/frontend",
			component: _3a2c1dda,
			name: "frontend"
		}
    ],
    fallback: false
  })
}
