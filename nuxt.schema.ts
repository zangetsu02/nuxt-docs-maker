
export default defineNuxtSchema({
  appConfig: {
    /**
     * myTheme configuration.
     * @studio-icon carbon:blog
    */
    myTheme: {
      /**
       * Website title, used as header default title and meta title.
       * @studio-icon carbon:blog
      */
      title:  'My Theme',
      /**
       * Website description, used for meta description.
       * @studio-icon material-symbols:description
      */
      description:  'My agency shiny themee',
      /**
       * Your website icon, used for your favicon.
       * @studio-icon material-symbols:icecream
      */
      icon: 'material-symbols:icecream',
      /**
       * @example '/cover.jpg'
       * @studioIcon dashicons:cover-image
       * @studioInput file
       */
      image: {
        src: '/social-card-preview.png',
        alt: 'An image showcasing my project.',
        width: 400,
        height: 300
      }
    }
  }
})
