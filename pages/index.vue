<template>
  <div class="bg"></div>
  <div class="center">
    <div class="hero">
      <img src="/logo.png" alt="logo" class="mainlogo" />
      <p class="forword_outer">
        <span class="forword">Hi, </span><span class="forword reveal_after_logo">I'm PandaDEV</span>
      </p>
      <h1 class="h1">Building Minecraft plugins and webapps.</h1>
      <h2 class="h2">
        I'm a Developer specialized in Java and Web development. I'm also
        learning UI/UX Design.
      </h2>
      <div class="btn_container">
        <nuxt-link to="/projects">
          <div class="button">SEE MY WORK</div>
        </nuxt-link>
      </div>
    </div>
  </div>
  <navbar />
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'PandaDEV',
  ogDescription: "I'm a Developer specialized in java and web development. Also, I'm learning UI/UX Design.",
  ogImage: '/logo.png',
  ogUrl: 'https://pandadev.tk/projects',
  twitterTitle: 'PandaDEV',
  twitterDescription: "I'm a Developer specialized in java and web development. Also, I'm learning UI/UX Design.",
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  title: 'PandaDEV',
  meta: [{
    name: 'description', content: "I'm a Developer specialized in java and web development. Also, I'm learning UI/UX Design."
  }],
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo.png'
    }
  ]
})
</script>

<style>
@import "~/css/index.css";
</style>
