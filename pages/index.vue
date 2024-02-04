<template>
  <div class="bg"></div>
  <div class="center">
    <div class="hero">
      <img src="/logo.png" alt="logo" class="mainlogo" loading="lazy" />
      <p class="forword_outer">
        <span class="forword">Hi, </span
        ><span class="forword reveal_after_logo">I'm PandaDEV</span>
      </p>
      <h1 class="h1">Building Minecraft plugins and websites.</h1>
      <h2 class="h2">
        I'm a Developer specialized in Java and Web development. I'm also
        learning UI/UX Design.
      </h2>
      <div class="btn_container">
        <NuxtLink to="/projects">
          <div class="button plausible-event-name=See+my+work">SEE MY WORK</div>
        </NuxtLink>
      </div>
    </div>
  </div>
  <Navbar />
</template>

<script setup lang="ts">
useSeoMeta({
  title: "PandaDEV",
  description:
    "I'm a Developer specialized in java and web development. Also, I'm learning UI/UX Design.",
  ogTitle: "PandaDEV",
  ogDescription:
    "I'm a Developer specialized in java and web development. Also, I'm learning UI/UX Design.",
  ogImage: "/logo.png",
  ogUrl: "https://pandadev.tk/projects",
  twitterTitle: "PandaDEV",
  twitterDescription:
    "I'm a Developer specialized in java and web development. Also, I'm learning UI/UX Design.",
  twitterImage: "/logo.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://pandadev.net',
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/logo.png",
    },
  ],
});
</script>

<style>
@import "~/css/index.css";
</style>
