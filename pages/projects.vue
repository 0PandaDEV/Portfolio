<template>
  <NuxtLayout name="page">
    <div class="projects">
      <div class="project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/nextron.svg" alt="nextron" />
          <div class="text">
            <p class="project-name">Nextron</p>
            <p class="project-description">
              Your Nextlevel Superpower replacing every Minecraft Plugin
            </p>
          </div>
        </div>
        <Button url="https://nextron.pandadev.net" icon="website"></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo vleer" loading="lazy" src="/vleer.png" alt="vleer" />
          <div class="text">
            <p class="project-name">Vleer</p>
            <p class="project-description">
              A redefined way of how we interact with music.
            </p>
          </div>
        </div>
        <Button url="https://vleer.app" icon="website"></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo vleer" loading="lazy" src="/sp2w.svg" alt="sp2w" />
          <div class="text">
            <p class="project-name">Stop Pay2Win</p>
            <p class="project-description">
              The goal is to stop Pay to Win on Minecraft servers <br>#StopPayToWin
            </p>
          </div>
        </div>
        <Button url="https://modrinth.com/mod/stopp2w" icon="website"></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/actioninfo.svg" alt="actioninfo" />
          <div class="text">
            <p class="project-name">ActionInfo</p>
            <p class="project-description">
              Allows you to display the TPS, MSPT, CPU, RAM and Ping in the
              action bar
            </p>
          </div>
        </div>
        <Button url="https://github.com/0pandadev/ActionInfo" icon="github"></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/rplacech.png" alt="actioninfo" />
          <div class="text">
            <p class="project-name">r/placeCH</p>
            <p class="project-description">
              The web interface for the swiss discord community of the event r/place 
            </p>
          </div>
        </div>
        <Button url="https://discord.gg/r-placech-1087745702156841040" icon="discord"></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/sharedbackpacks.svg" alt="sharedbackpacks" />
          <div class="text">
            <p class="project-name">Shared Backpacks</p>
            <p class="project-description">
              A plugin for adding shareable backpacks to Minecraft
            </p>
          </div>
        </div>
        <Button url="https://github.com/0pandadev/SharedBackpacks" icon="github"></Button>
      </div>
      <div class="project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/better.svg" alt="betterpacks" />
          <div class="text">
            <p class="project-name">Better Packs</p>
            <p class="project-description">
              Enhance Minecraft with our Better Series - custom skies, grass,
              and totems.
            </p>
          </div>
        </div>
        <Button url="https://modrinth.com/user/PandaDEV" icon="website"></Button>
      </div>
      <div class="project-6 project">
        <div class="top">
          <img class="project-logo" loading="lazy" src="/pandaclient.svg" alt="pandaclient" />
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
  title: "PandaDEV - Projects",
  description:
    "Here you can find some of my Projects",
  ogTitle: "Projects",
  ogDescription:
    "Here you can find some of my Projects",
  ogImage: "/logo.png",
  ogUrl: "https://pandadev.tk/projects",
  twitterTitle: "Projects",
  twitterDescription:
    "Here you can find some of my Projects",
  twitterImage: "/logo.png",
  twitterCard: "summary",
});

useHead({
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
