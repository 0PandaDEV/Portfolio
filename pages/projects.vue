<template>
  <div class="content">
    <div class="header">
      <h1 class="title">Projects</h1>
      <p class="description">Discover all of my projects that I've done or been working on until now. There are some
        really
        cool ones so go and check them out.</p>
    </div>

    <div class="projects">
      <div class="project-1 project">
        <div class="text">
          <p class="secondary-title">Work in progress</p>
          <p class="project-name">Nextron</p>
          <p class="description">Nextron is a powerful Minecraft plugin built with the Spigot API. It's meant to be an
            assistant to Minecraft server admins. Some of the features are custom GUIs for managing
            the plugins systems, warps and homes which make it easy for every player to understand because there is no
            complicated commands.</p>
        </div>
        <div class="project-img">
          <img loading="lazy" src="../assets/nextron.jpg">
        </div>
      </div>
      <div class="project-2 project">
        <div class="text">
          <p class="secondary-title">Early Development</p>
          <p class="project-name">Music Player</p>
          <p class="description">A Music Player that is developed by me and Waradu. The mission with it, replace Spotify
            and Apple Music with a free and open source alternative. At the moment it does not have a name or logo because
            its in early development stage. The project is created using the Tauri framework (an alternative to Electron)
            and React.</p>
        </div>
        <div class="project-img">
          <img loading="lazy" src="../assets/project.jpg">
        </div>
      </div>
      <div class="project-3 project">
        <div class="text">
          <p class="secondary-title">Work in progress</p>
          <p class="project-name">Better Series</p>
          <p class="description">It's series of Minecraft resourcepacks that enhance and tweak the game to it's best. For
            example Better Leaves, Better Grass or Better Sky and it even has a modpack that aims to improve the
            performance on really low end PC's.</p>
        </div>
        <div class="project-img">
          <img loading="lazy" src="../assets/better.jpg">
        </div>
      </div>
      <div class="project-4 project">
        <div class="text">
          <p class="secondary-title">Canceled</p>
          <p class="project-name">Panda Client</p>
          <p class="description">A minecraft 1.8.9 PVP client that should replace lunar client. It had features to display
            important information's like FPS, CPS, or Keystrokes.</p>
        </div>
        <div class="project-img">
          <img loading="lazy" src="../assets/pandaclient.jpg">
        </div>
      </div>
    </div>

  </div>
  <navbar />
</template>

<script lang="ts">
</script>

<style>
@import '~/css/projects.css';
</style>