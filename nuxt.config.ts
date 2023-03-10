// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "PandaDEV",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "PandaDEV's Portfolio." },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "./favicon.png" }],
      script: [
      {
        hid: 'analytics',
        src: 'https://analytics.h-supertools.com/js/script.js',
        async: true,
        defer: true,
        'data-host': 'https://analytics.h-supertools.com',
        'data-dnt': 'false',
        id: 'ZwSg9rf6GA'
      }
    ]
    },
  },
});
