// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "PandaDEV",
    },
  },
  css: ["~/global.css"],
  devtools: { enabled: true },
  modules: ["nuxt-simple-sitemap"],
  sitemap: { siteUrl: "https://pandadev.tk" },
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
});
