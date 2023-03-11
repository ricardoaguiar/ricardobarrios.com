// @ts-ignore
import { resolve } from 'path';

export default defineNuxtConfig({
  pages: true,

  components: [
    { path: '~/versions/components',  pathPrefix: false },
    { path: '~/components',  pathPrefix: false}
  ],

  content: {
    sources:{
      content: {
        driver: 'fs',
        base: resolve(__dirname, 'content'),
        options: {
          path: resolve(__dirname, "content"),
        }
      }
    },
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

  modules: ["@nuxt/content", "@nuxt/image-edge", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  tailwindcss: {
    viewer: true,
  },
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50
        }
      }
    },
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/ricardoaguiar/image/fetch',
      modifiers: {
        effect: 'sharpen:100',
        quality: 'auto:best',
      }
    }
  }
});

