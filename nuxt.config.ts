// @ts-ignore
export default defineNuxtConfig({
  components: true,

  content: {
    documentDriven: true,
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: {
        default: "material-palenight",
        dark: "material-darker",
        sepa: "material-ocean",
      },
      preload: [
        "vue-html",
        "json",
        "bash",
        "ts",
        "tsx",
        "js",
        "jsx",
        "yaml",
        "graphql",
        "md",
        "svelte",
        "astro",
      ],
    },
  },

  css: ["@/assets/css/global.css", "@/assets/css/main.css"],

  modules: ["@nuxt/content", "@nuxt/image-edge", "@nuxtjs/tailwindcss"],

  tailwindcss: {
    viewer: true,
  },
});
