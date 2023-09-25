<template>
  <NuxtLayout name="page">
    <div class="projects">
      <div class="project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/nextron.svg" />
          <div class="text">
            <p class="project-name">Nextron</p>
            <p class="project-description">
              Your Nextlevel Superpower replacing every Minecraft Plugin
            </p>
          </div>
        </div>
        <Button
          url="https://essentialsp.tk"
          icon="website"
        ></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo vleer" loading="lazy" src="/vleer.png" />
          <div class="text">
            <p class="project-name">Vleer</p>
            <p class="project-description">
              A redefined way of how we interact with music.
            </p>
          </div>
        </div>
        <Button
          url="https://vleer.app"
          icon="website"
        ></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo vleer" loading="lazy" src="/sp2w.svg" />
          <div class="text">
            <p class="project-name">Stop Pay2Win</p>
            <p class="project-description">
              The goal is to stop Pay to Win on Minecraft servers <br>#StopPayToWin
            </p>
          </div>
        </div>
        <Button
          url="https://modrinth.com/mod/stopp2w"
          icon="website"
        ></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/actioninfo.svg" />
          <div class="text">
            <p class="project-name">ActionInfo</p>
            <p class="project-description">
              Allows you to display the TPS, MSPT, CPU, RAM and Ping in the
              action bar
            </p>
          </div>
        </div>
        <Button
          url="https://github.com/0pandadev/ActionInfo"
          icon="github"
        ></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/sharedbackpacks.svg" />
          <div class="text">
            <p class="project-name">Shared Backpacks</p>
            <p class="project-description">
              A plugin for adding shareable backpacks to Minecraft
            </p>
          </div>
        </div>
        <Button
          url="https://github.com/0pandadev/SharedBackpacks"
          icon="github"
        ></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/better.svg" />
          <div class="text">
            <p class="project-name">Better Packs</p>
            <p class="project-description">
              Enhance Minecraft with our Better Series - custom skies, grass,
              and totems.
            </p>
          </div>
        </div>
        <Button
          url="https://modrinth.com/user/PandaDEV"
          icon="website"
        ></Button>
      </div>
      <div class="project-6 project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/pandaclient.svg" />
          <div class="text">
            <p class="project-name">Panda Client</p>
            <p class="project-description">A minecraft PVP client for 1.8.9</p>
          </div>
        </div>
        <span id="discontinued">Discontinued</span>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Projects",
  description:
    "Discover all of my projects that I've done or been working on until now.",
  ogTitle: "Projects",
  ogDescription:
    "Discover all of my projects that I've done or been working on until now.",
  ogImage: "/logo.png",
  ogUrl: "https://pandadev.tk/projects",
  twitterTitle: "Projects",
  twitterDescription:
    "Discover all of my projects that I've done or been working on until now.",
  twitterImage: "/logo.png",
  twitterCard: "summary",
});

useHead({
  titleTemplate: "%siteName - %s",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/logo.png",
    },
  ],
});
</script>

<style>
@import "~/css/projects.css";
</style>
