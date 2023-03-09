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
          <p class="project-name">EssentialsP</p>
          <p class="description">EssentialsP is a powerful Minecraft plugin built with the Spigot API. It's meant to be an
            assistant to Minecraft server admins. Some of the features are custom GUIs for managing
            the plugins systems, warps and homes which make it easy for every player to understand because there is no
            complicated commands.</p>
        </div>
        <div class="project-img">
          <img src="../assets/essentialsp.png">
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
          <img src="../assets/project.png">
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
          <img src="../assets/better.png">
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
          <img src="../assets/pandaclient.png">
        </div>
      </div>
    </div>

  </div>
  <navbar />
</template>

<style>

@media (min-width: 600px) {

  /*for Desktop*/
  .project {
    min-height: 200px;
    padding: 20px 20px;
  }

  .project-img,
  .project-img img {
    height: 100%;
    width: 100px;
  }
}

@media (max-width: 600px) {

  /*for Mobile*/
  .project {
    min-height: 180px;
    padding: 14px 14px;
  }

  .project-img,
  .project-img img {
    height: 100%;
    width: 100px;
  }

  .project .description {
    font-size: 14px;
  }
}

.content .projects {
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
}

.project {
  background-color: #1c1b1d;
  border: 1px solid #313131ad;
  border-radius: 14px;
  width: auto;
  display: flex;
  flex-direction: row;
}

.project:not(:last-of-type) {
  margin-bottom: 15px;
}

.project-name {
  margin-bottom: 7px;
  font-weight: 600;
  font-size: 22px;
}

.project-img img {
  border-radius: 9px;
}

.project-img {
  float: right;
  margin-left: 8px;
}

.secondary-title {
  font-size: 14px;
  margin-bottom: 5px;
  color: #7c3de1;
  font-family: monospace !important;
  font-weight: 600;
}
</style>