<template>
  <VApp :theme="currentTheme">
    <GSnackbar />
    <LeftDrawer />
    <GAppBar />
    <RouterView> </RouterView>
  </VApp>
</template>

<script setup>
import { useTailwindTheme } from '@C/tailwind-theme'
const { currentTheme } = toRefs(useAppStore())
useTailwindTheme(currentTheme)
</script>
