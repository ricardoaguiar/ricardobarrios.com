// @ts-ignore

import AliasPlugin from 'enhanced-resolve/lib/AliasPlugin';
import path from 'path';

const aliases = [
  {
    name: '@',
    alias: [path.resolve(__dirname, './rb-site/'), path.resolve(__dirname, './')]
  }
];

const aliasesPlugin = new AliasPlugin('described-resolve', aliases, 'resolve');

export default defineNuxtConfig({
  // experimental: {
  //   payloadExtraction: true,
  // },
  components:{
    global: true,
    dirs: ['~/components/global']
  },
  pages: true,


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
  },
  debug: true,

   build  : {
    // @ts-ignore
     cssSourceMap: false,

     extend(config: any, ctx: any) { // eslint-disable-line
       config.resolve.plugins.push(aliasesPlugin);

       if (ctx.isClient) {
         config.devtool = 'source-map';
       }
     }
   }
});
