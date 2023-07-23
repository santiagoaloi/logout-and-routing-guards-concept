<template>
  <div class="fixed right-0 mr-5 flex items-center">
    <GAppBarThemeSwitch />
    <VBtn v-if="!authStore.isLoggedIn" to="/login" variant="outlined">login</VBtn>
    <VBtn v-else variant="outlined" @click="promptLogout()">logout</VBtn>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore()

function promptLogout() {
  // Display a confirmation dialog
  let shouldLogout = window.confirm('Are you sure you want to logout?')

  // Check if the user clicked "OK"
  if (shouldLogout) {
    authStore.logout()
  }
}
</script>
