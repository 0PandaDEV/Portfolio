// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "PandaDEV",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "./favicon.png" }],
      script: [{
        src: "https://analytics.h-supertools.com/js/script.js",
        id: "ZwSg9rf6GA",
      }]
    },
  },
});