/*
 * General application related logic.
 */

export const useAppStore = defineStore('global-application', {
  state: () => ({
    currentTheme: 'light'
  }),

  getters: {
    isDark: (state) => state.currentTheme === 'dark'
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
