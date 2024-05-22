<script setup lang="ts">
const { config } = useNuxtDocsMaker()
const { navigation } = useContent()

const hasDialog = computed(() => navigation.value?.length > 1 || navigation.value?.[0]?.children?.length)
</script>

<template>
  <header :class="{ 'has-dialog': hasDialog }">
    <div class="container">
      <div class="left">
        <NuxtLink to="/">
          <Logo />
          <span>{{ config?.title || 'My project' }}</span>
        </NuxtLink>

        <div class="search-container">
          <button>
            search
          </button>
        </div>
      </div>

      <div class="right">
        <AppThemeSelect />
      </div>
    </div>
  </header>
</template>

<style scoped lang="ts">
css({
  'header': {
    backgroundColor: '{body.backgroundColor}',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #262626',
    marginBottom: '-1px',
    position: 'sticky',
    top: 0,
    height: '{header.height}',
    zIndex: 50,
  },

  '.container': {
    margin: '0px auto',
    padding: '0px 1rem',
    maxWidth: '80rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.75rem',
    height: '100%',
  },

  '.left': {
    'display': 'flex',
    'alignItems': 'center',
    'gap': '0.375rem',

    'a': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '0.375rem',
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: 'bold',

      svg: {
        width: '1.75rem',
        height: '1.75rem',
      },
    },

    '.search-container': {
      '@lg': {
        display: 'flex',
      },
      'display': 'flex',
      'marginLeft': '2rem',
    },
  },
  '.right': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '0.375rem',
  },

  '@sm': {
    '.container': {
      padding: '0 1.5rem',
    },
  },

  '@lg': {
    '.container': {
      padding: '0 2rem',
    },

    '.right': {
      flexGrow: '1',
    },
    '.left': {
      flexGrow: '1',
    },
  },
})
</style>
