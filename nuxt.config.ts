export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "PandaDEV",
      script:
        process.env.NODE_ENV === "production"
          ? [
              {
                src: "https://plausible.pandadev.net/js/script.js",
                defer: true,
                "data-domain": "pandadev.net",
              },
            ]
          : [],
    },
  },
  site: {
    url: "https://pandadev.net",
  },
  modules: ["nuxt-simple-sitemap", "@nuxtjs/robots"],
  devtools: { enabled: true },
});
