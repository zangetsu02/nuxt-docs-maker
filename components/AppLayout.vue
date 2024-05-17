<script setup lang="ts">
const myTheme = useAppConfig().myTheme
</script>

<template>
  <div>
    <header>{{ myTheme?.title || 'My project' }}</header>
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
