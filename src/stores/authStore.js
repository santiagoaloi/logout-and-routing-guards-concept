export const useAuthStore = defineStore('global-auth', {
  state: () => ({
    loginForm: {
      email: '',
      password: ''
    },

    isLoggedIn: false
  }),

  persist: true,

  actions: {
    login() {
      const { email, password } = this.loginForm

      if (!email || !password) return

      this.isLoggedIn = true
      this.router.push('/dashboard')
    },

    logout() {
      this.isLoggedIn = false
      this.router.push('/login')
    }
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
