// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "PandaDEV",
      script: [
        {
          src: "https://umami-pandadev.vercel.app/script.js",
          async: true,
          "data-website-id": "2eec0e1c-71e1-40d8-9a04-1a816ad392da",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["nuxt-simple-sitemap", "@nuxtjs/robots"],
});
