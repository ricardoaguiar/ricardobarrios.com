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
    documentDriven: true
  },

  css: ['@/assets/css/global.css'],


  modules: [
    '@nuxt/content',
    '@nuxt/image-edge'
  ]

})
