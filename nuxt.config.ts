export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Vleer",
      script: [
        process.env.NODE_ENV === "production"
          ? [
              {
                src: "https://umami-pandadev.vercel.app/script.js",
                async: true,
                "data-website-id": "2eec0e1c-71e1-40d8-9a04-1a816ad392da",
              },
            ]
          : [],
        {
          src: "https://plausible.pandadev.net/js/script.js",
          defer: true,
          "data-domain": "pandadev.net",
        },
      ],
    },
  },
  site: {
    url: "https://pandadev.net",
  },
  modules: ["nuxt-simple-sitemap", "@nuxtjs/robots"],
  devtools: { enabled: true },
  devServer: {
    port: 443,
  },
});
