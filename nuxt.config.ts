// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
  // runtimeConfig: {
  // cloudinary: {
  //   cloudName: 'ricardoaguiar',
  //   apiKey: '156199364169677',
  //   apiSecret: 'qJprZ5Fy4-JD6BHoK2ykmg95Zqc',
  //   secure: true,
  //   useComponent: true
  // }
  // },


  components: true,

  content: {
    documentDriven: true,
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      }
    },
    highlight: {
        theme: {
            default: 'material-palenight',
            dark: 'material-darker',
            sepa: 'material-ocean',
        },
        preload: [
            'vue-html',
            'json',
            'bash',
            'ts',
            'tsx',
            'js',
            'jsx',
            'yaml',
            'graphql',
            'md',
            'svelte',
            'astro',
        ],
    },
    },

  css: ['@/assets/css/global.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/image-edge'
  ]

})
