export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Vleer",
      script:
        process.env.NODE_ENV === "production"
          ? [
              {
                src: "https://umami-pandadev.vercel.app/script.js",
                async: true,
                "data-website-id": "2eec0e1c-71e1-40d8-9a04-1a816ad392da",
              },
            ]
          : [],
    },
  },
  modules: ["@nuxtseo/module"],
  site: {
    url: "https://pandadev.net",
    name: "PandaDEV",
    description:
      "I'm a Developer specialized in java and web development. Also, I'm learning UI/UX Design.",
    defaultLocale: "en",
    identity: {
      type: "Person",
    },
    twitter: "@pandadev_",
    trailingSlash: true,
  },
  devtools: { enabled: true },
});
