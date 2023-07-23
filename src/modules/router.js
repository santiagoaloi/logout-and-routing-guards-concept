import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

import { useAuthStore } from '@/stores/authStore'

// Progress bar on top of the page.
// Customize styles in @/styles/_progress-bar.css
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(),

  /* Initial list of routes that should be added to the router.*/
  routes: [...setupLayouts(generatedRoutes)],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to, from) => {
  NProgress.start()

  //Stores
  const authStore = useAuthStore()

  // Check is the user is logged-in
  const isLoggedIn = authStore.isLoggedIn

  // Checks if the destination route requires authentication
  const requiresAuth = to.matched.some((r) => r.meta.requiresAuth)

  // If the route requires auth and no user is logged-in cancel routing.
  if (!isLoggedIn && requiresAuth) return '/login'
})

router.afterEach(() => {
  NProgress.done()
})

const install = (app) => app.use(router)

// Exporting router so Pinia can import it
// allowing router in store modules.
export { install, router }
