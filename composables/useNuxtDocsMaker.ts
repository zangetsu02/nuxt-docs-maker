export default function () {
  const appConfig = computed(() => useAppConfig()?.myTheme || {})
  const { navKeyFromPath } = useContentHelpers()
  const { navigation, page } = useContent()

  const config = computed(
    () => {
      const titleTemplate = appConfig?.value?.titleTemplate || navKeyFromPath(page?.value?._path, 'titleTemplate', navigation.value || []) || `%s · ${appConfig?.value?.title || 'Nuxt Docs Maker'}`

      return {
        // Raw appConfig
        ...appConfig.value,

        // Merged attributes
        titleTemplate,

      }
    },
  )

  return { config }
}
