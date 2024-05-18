<script setup lang="ts">
import { useNuxtDocsMaker } from '~/composables/useNuxtDocsMaker'

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
    <header>{{ config?.title || 'My project' }}</header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
body {
  background-color: $dt('color.black');
  font-family: $dt('font.primary');
  margin: 0;
}

header {
  height: $dt('header.height');
  background: $dt('color.primary.500');
  color: $dt('color.white');
  display: flex;
  align-items: center;
  padding: 0 20px;
}

main {
  padding: 20px;
}
</style>
