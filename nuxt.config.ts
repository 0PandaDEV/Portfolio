export default defineNuxtConfig({
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "PandaDEV",
      meta: [
        { hid: 'description', name: 'description', content: "I'm a Developer specialized in java and web development. Also, I'm doing UI/UX Design." },
        { property: 'og:title', content: 'PandaDEV' },
        { property: 'og:description', content: "I'm a Developer specialized in java and web development. Also, I'm doing UI/UX Design." },
        { property: 'og:image', content: './assets/logo.jpg' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:title', content: 'PandaDEV' },
        { property: 'twitter:description', content: "I'm a Developer specialized in java and web development. Also, I'm doing UI/UX Design." },
        { property: 'twitter:image', content: './assets/logo.jpg' },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "./assets/favicon.png" }],
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
