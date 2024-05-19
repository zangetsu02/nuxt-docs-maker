<script setup lang="ts">
const { config } = useNuxtDocsMaker()

useHead({
  titleTemplate: config.value.titleTemplate,
})

watch(
  () => config.value.titleTemplate,
  () => useHead({ titleTemplate: config.value.titleTemplate }),
)
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
