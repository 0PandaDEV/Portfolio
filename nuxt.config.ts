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
  modules: ["nuxt-simple-sitemap", "@nuxtjs/robots", "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      short_name: "PandaDEV Portfolio",
      name: "PandaDEV Portfolio",
      description: "A portfolio for my projects and tech stack",
      theme_color: "#7c3de1",
      background_color: "#171618",
      display: "fullscreen",
      scope: "./",
      start_url: "./",
      lang: "en",
    },
  },
});
