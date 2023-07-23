<template>
  <div class="d-flex fill-height align-center mx-auto justify-center">
    <VCard class="mx-auto rounded-lg px-11 pt-5" width="600">
      <div class="mb-3">
        <VCardTitle> Sign in to your account </VCardTitle>
        <VCardSubtitle> Type any email or password </VCardSubtitle>
      </div>

      <VCardText>
        <VRow>
          <VCol cols="12">
            <VTextField
              v-model="authStore.loginForm.email"
              autofocus
              label="Email"
              placeholder="your@email.com"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="authStore.loginForm.password"
              :append-inner-icon="isPasswordVisible ? '$mdiEyeOff' : '$mdiEye'"
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="password"
              @click:append-inner.stop="isPasswordVisible = !isPasswordVisible"
            />
          </VCol>
        </VRow>

        <VRow class="mt-3" dense>
          <VCol align="end" cols="12">
            <VBtn
              :disabled="!authStore.loginForm.email || !authStore.loginForm.password"
              class="rounded-lg"
              color="primary-button"
              size="large"
              type="submit"
              @click="authStore.login()"
            >
              Continue
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStore'
import { VCardSubtitle } from 'vuetify/lib/components/index.mjs'

const isPasswordVisible = ref(false)
const authStore = useAuthStore()
</script>

<route lang="yaml">
meta:
  scrollable: true
</route>
