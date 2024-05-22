import { Markdown } from '../../.starters/default/.nuxt/components';
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

<style scoped lang="ts">
// TODO: Handle tokens
css({
  button: {
    'outline': 'none',
    'flexShrink': '0',
    'transition': 'all 0.3s ease-in',
    'fontWeight': '500',
    'border': '1px solid ',
    'borderRadius': '0.375rem',
    'fontSize': '0.875rem',
    'padding': '0.375rem',
    'color': '#4a5568',
    '&:hover': {
      color: '#2d3748',
      backgroundColor: '#f7fafc',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.75',
    },
    '&:focus-visible': {
      cursor: 'not-allowed',
      boxShadow: '0 0 0 2px #f7fafc',
    },
  },
})
</style>
