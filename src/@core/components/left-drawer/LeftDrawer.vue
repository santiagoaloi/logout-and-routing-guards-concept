<template>
  <VNavigationDrawer color="drawer" elevation="7" width="260">
    <VList nav>
      <div class="pa-2 mb-3 flex items-center justify-between">
        <RouterLink to="/">
          <VImg src="/company_logos/logo.svg" width="150">
            <template #placeholder>
              <div class="flex h-full items-center justify-center">
                <VProgressCircular color="grey-lighten-4" indeterminate />
              </div>
            </template>
          </VImg>
        </RouterLink>
      </div>

      <VListItem
        v-ripple="false"
        active-color="primary"
        prepend-icon="$mdiHomeOutline"
        title="Homepage"
        to="/"
      />
      <VListItem
        v-if="authStore.isLoggedIn"
        v-ripple="false"
        active-color="primary"
        prepend-icon="$mdiHomeOutline"
        title="Dashboard"
        to="/dashboard"
      />
    </VList>
  </VNavigationDrawer>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore()
</script>
