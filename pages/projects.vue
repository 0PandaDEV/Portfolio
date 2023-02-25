<template>
  <div class="content">
    <div class="header">
      <h1 class="title">Projects</h1>
      <p class="description">Look at all of my projects that i've done or been working on until now. There are some really
        cool ones so go and check them out.</p>
    </div>

    <div class="projects">
      <div class="project-1 project">
        <div class="project-img">
          <img src="../assets/essentialsp.png">
        </div>
        <div class="text">
          <p class="secondary-title">In work</p>
          <p class="project-name">EssentialsP</p>
          <p class="description">It's a powerful minecraft plugin for every server. It adds useful features that
            enhance
            the game.</p>
        </div>
      </div>
    </div>

    <navbar-projects />
  </div>
</template>

<script setup>
</script>

<style>
@media (min-width: 600px) {

  /*for Desktop*/
  .project {
    height: 200px;
    padding: 20px 20px;
  }

  .project-img,
  .project-img img {
    height: 100%;
    width: 158.667px;
  }
}

@media (max-width: 600px) {

  /*for Mobile*/
  .project {
    height: 180px;
    padding: 14px 14px;
  }

  .project-img,
  .project-img img {
    height: 100%;
    width: 152px;
  }

  .project .description {
    font-size: 14px;
  }
}

.projects {
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.project {
  background-color: #1c1b1d;
  border: 1px solid #313131ad;
  border-radius: 14px;
  width: auto;
  display: flex;
  flex-direction: row;
}

.project-name {
  margin-bottom: 7px;
  font-weight: 600;
  font-size: 19px;
}

.project-img img {
  border-radius: 9px;
}

.project-img {
  margin-right: 20px;
}

.secondary-title {
  font-size: 14px;
  margin-bottom: 5px;
  color: #7c3de1;
  font-family: monospace !important;
  font-weight: 600;
}
</style>