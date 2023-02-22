<template>
  <div class="content">
    <div class="header">
      <h1 class="title">Stack</h1>
      <p class="description">See all the apps and tools I use to complete my tasks and create my daily workflow, as an
        java
        and web developer.</p>
    </div>

    <div class="apps">
      <div class="row-1">
        <div class="discord app">
          <img class="logo" src="../assets/app.png" />
          <p class="name">Discord</p>
          <div class="tags">
            <span class="tag">Social</span>
            <span class="tag">Community</span>
          </div>
        </div>
        <div class="vscode app">asd</div>
        <div class="lunacy app">asd</div>
      </div>
      <div class="row-2">
        <div class="firefox app">asd</div>
        <div class="bitwarden app">asd</div>
        <div class="twitter app">asd</div>
      </div>
      <div class="row-3">
        <div class="vercel app">asd</div>
        <div class="applemusic app">asd</div>
        <div class="intellij app">asd</div>
      </div>
    </div>

    <navbar-stack />
  </div>
</template>


<style>
.title {
  line-height: 2;
}

.description {
  color: #808080;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  margin-bottom: 40px;
}

.app {
  background-color: hsl(270, 2%, 11%);
  border: 1px solid rgba(49, 49, 49, 0.68);
  border-radius: 10px;
  width: auto;
  height: 200px;
  padding: 20px 20px;
}

.apps {
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.apps {}

.tag {
  background-color: hsl(270, 2%, 13%);
  padding: 7px 14px;
  border: 1px solid rgba(49, 49, 49, 0.68);
  border-radius: 100px;
  font-size: 12px;
  color: #969696;
}

.tags {
  display: grid;
  place-items: center;
  grid-template-columns: 75px 105px;
  margin-top: 20px;
}

.name {
  margin-top: 20px;
  font-weight: 500;
  font-size: 19px;
}
</style>