<template>
  <VMain scrollable>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <VFadeTransition hide-on-leave>
          <VContainer class="fill-height">
            <Component :is="Component" />
          </VContainer>
        </VFadeTransition>
      </template>
    </RouterView>
  </VMain>
</template>
