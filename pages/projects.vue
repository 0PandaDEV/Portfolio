<template>
  <div class="content">
    <div class="header">
      <h1 class="title">Projects</h1>
      <p class="description">Discover all of my projects that I've done or been working on until now. There are some
        really
        cool ones so go and check them out.</p>
    </div>

    <div class="projects">
      <a class="project-1 project" href="https://github.com/0pandadev/Nextron" target="_blank">
        <div class="project-img">
          <img class="project-logo" loading="lazy" src="/nextron.jpg">
        </div>
        <div class="text">
          <p class="project-name">Nextron</p>
          <p class="description">The next generation of Minecraft plugins</p>
          <div class="tags">
            <p class="project-tag">Work in progress</p>
            <p class="project-tag">Plugin</p>
          </div>
        </div>
      </a>
      <a class="project-2 project" href="https://github.com/0pandadev/ActionInfo" target="_blank">
        <div class="project-img">
          <img class="project-logo" loading="lazy" src="/actioninfo.jpeg">
        </div>
        <div class="text">
          <p class="project-name">ActionInfo</p>
          <p class="description">Display system informations in your Action Bar</p>
          <div class="tags">
            <p class="project-tag">Work in progress</p>
            <p class="project-tag">Plugin</p>
          </div>
        </div>
      </a>
      <a class="project-3 project" href="https://github.com/0pandadev/SharedBackpacks" target="_blank">
        <div class="project-img">
          <img class="project-logo" loading="lazy" src="/sharedbackpacks.jpeg">
        </div>
        <div class="text">
          <p class="project-name">Shared Backpacks</p>
          <p class="description">Create shared backpacks for sharing items</p>
          <div class="tags">
            <p class="project-tag">Work in progress</p>
            <p class="project-tag">Plugin</p>
          </div>
        </div>
      </a>
      <a class="project-4 project" href="https://github.com/0pandadev/music-player" target="_blank">
        <div class="project-img">
          <img class="project-logo" loading="lazy" src="/project.jpg">
        </div>
        <div class="text">
          <p class="project-name">Music Player</p>
          <p class="description">A highly customizable music player</p>
          <div class="tags">
            <p class="project-tag">Early Development</p>
            <p class="project-tag">App</p>
          </div>
        </div>
      </a>
      <a class="project-5 project" href="https://modrinth.com/user/PandaDEV" target="_blank">
        <div class="project-img">
          <img class="project-logo" loading="lazy" src="/better.jpg">
        </div>
        <div class="text">
          <p class="project-name">Better Series</p>
          <p class="description">A series of usefull texturepacks for minecraft</p>
          <div class="tags">
            <p class="project-tag">Work in progress</p>
            <p class="project-tag">Texturepacks</p>
          </div>
        </div>
      </a>
      <a class="project-6 project">
        <div class="project-img">
          <img class="project-logo" loading="lazy" src="/pandaclient.jpg">
        </div>
        <div class="text">
          <p class="project-name">Panda Client</p>
          <p class="description">A minecraft PVP client for 1.8.9</p>
          <div class="tags">
            <p class="project-tag">Canceled</p>
            <p class="project-tag">Client</p>
          </div>
        </div>
      </a>
    </div>

  </div>
  <navbar />
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'PandaDEV',
  ogDescription: "Discover all of my projects that I've done or been working on until now.",
  ogImage: '/logo.png',
  ogUrl: 'https://pandadev.tk/projects',
  twitterTitle: 'PandaDEV',
  twitterDescription: "Discover all of my projects that I've done or been working on until now.",
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  title: 'PandaDEV - Projects',
  meta: [{
    name: 'description', content: "Discover all of my projects that I've done or been working on until now."
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
@import '~/global.css';
@import '~/css/projects.css';
</style>