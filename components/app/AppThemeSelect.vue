<script setup lang="ts">
const colorMode = useColorMode()
function onClick() {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}
</script>

<template>
  <button
    aria-label="Color Mode"
    @click="onClick"
  >
    <ColorScheme placeholder="...">
      <Icon
        v-if="colorMode.preference === 'dark'"
        name="uil:moon"
      />
      <Icon
        v-else-if="colorMode.preference === 'light'"
        name="uil:sun"
      />
      <Icon
        v-else
        name="uil:desktop"
      />
    </ColorScheme>
  </button>
</template>

<style lang="ts" scoped>

</style>
