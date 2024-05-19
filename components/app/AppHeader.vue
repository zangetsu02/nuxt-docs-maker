<script setup lang="ts">
const { config } = useNuxtDocsMaker()
const { navigation } = useContent()

const hasDialog = computed(() => navigation.value?.length > 1 || navigation.value?.[0]?.children?.length)
</script>

<template>
  <header :class="{ 'has-dialog': hasDialog }">
    <div class="container">
      <div class="section left">
        {{ config?.title || 'My project' }}
      </div>

      <div class="section center" />

      <div class="section right">
        <AppThemeSelect />
        <div class="social-icons" />
      </div>
    </div>
  </header>
</template>
<!--
<style lang="ts">
css({
  ':deep(.icon)': {
    width: '{space.4}',
    height: '{space.4}',
  },

  '.navbar-logo': {
    '.left &': {
      '.has-dialog &': {
        'display': 'none',
        '@lg': {
          display: 'block',
        },
      },
    },
    '.center &': {
      'display': 'block',
      '@lg': {
        display: 'none',
      },
    },
  },

  'header': {
    'position': 'sticky',
    'top': 0,
    'zIndex': 10,
    'width': '100%',
    'height': '{header.height}',
    'border-bottom': '1px solid {border}',
    '.container': {
      display: 'grid',
      height: '100%',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '{space.2}',
    },

    '.section': {
      'display': 'flex',
      'alignItems': 'center',
      'flex': 'none',
      '&.left': {
        'gridColumn': 'span 4 / span 4',
        '@lg': {
          marginLeft: 0,
        },
      },
      '&.center': {
        gridColumn: 'span 4 / span 4',
        justifyContent: 'center',
        flex: '1',
        zIndex: '1',
      },
      '&.right': {
        'display': 'flex',
        'gridColumn': 'span 4 / span 4',
        'justifyContent': 'flex-end',
        'alignItems': 'center',
        'flex': 'none',
        'marginRight': 'calc(0px - {space.4})',
        '.social-icons': {
          'display': 'none',
          '@md': {
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
    },
  },
})
</style> -->
