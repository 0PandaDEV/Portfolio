<template>
  <div class="content">
    <div class="header">
      <h1 class="title">Stack</h1>
      <p class="description">Discover all the apps and tools I use to complete my tasks and create my daily workflow, as
        an
        java
        and web developer.</p>
    </div>

    <div class="apps">
      <div class="row-1 row">
        <div class="flowlauncher app">
          <div class="img">
            <img class="logo" src="../assets/flowlauncher.png" />
          </div>
          <p class="name">Flow Launcher</p>
          <div class="tags">
            <span class="tag">Launcher</span>
            <span class="tag">Workflow</span>
            <span class="tag">Shortcuts</span>
          </div>
        </div>
        <div class="firefox app">
          <div class="img">
            <img class="logo" src="../assets/firefox.png" />
          </div>
          <p class="name">Firefox</p>
          <div class="tags">
            <span class="tag">Browser</span>
          </div>
        </div>
        <div class="discord app">
          <div class="img">
            <img class="logo" src="../assets/discord.png" />
          </div>
          <p class="name">Discord</p>
          <div class="tags">
            <span class="tag">Social</span>
            <span class="tag">Community</span>
          </div>
        </div>
      </div>
      <div class="row-2 row">
        <div class="bitwarden app">
          <div class="img">
            <img class="logo" src="../assets/bitwarden.png" />
          </div>
          <p class="name">Bitwarden</p>
          <div class="tags">
            <span class="tag">Password Manager</span>
            <span class="tag">Security</span>
          </div>
        </div>
        <div class="vscode app">
          <div class="img">
            <img class="logo" src="../assets/vscode.png" />
          </div>
          <p class="name">VS Code</p>
          <div class="tags">
            <span class="tag">Editor</span>
            <span class="tag">Development</span>
          </div>
        </div>
        <div class="lunacy app">
          <div class="img">
            <img class="logo" src="../assets/lunacy.png" />
          </div>
          <p class="name">Lunacy</p>
          <div class="tags">
            <span class="tag">Design</span>
            <span class="tag">UI/UX</span>
          </div>
        </div>
      </div>
      <div class="row-3 row">
        <div class="twitter app">
          <div class="img">
            <img class="logo" src="../assets/twitter.png" />
          </div>
          <p class="name">Twitter</p>
          <div class="tags">
            <span class="tag">Social</span>
          </div>
        </div>
        <div class="applemusic app">
          <div class="img">
            <img class="logo" src="../assets/applemusic.png" />
          </div>
          <p class="name">Apple Music</p>
          <div class="tags">
            <span class="tag">Music</span>
          </div>
        </div>
        <div class="intellij app">
          <div class="img">
            <img class="logo" src="../assets/intellij.png" />
          </div>
          <p class="name">IntelliJ Community</p>
          <div class="tags">
            <span class="tag">Editor</span>
            <span class="tag">Development</span>
          </div>
        </div>
      </div>
      <div class="row-4 row">
        <div class="vercel app">
          <div class="img">
            <img class="logo" src="../assets/vercel.png" />
          </div>
          <p class="name">Vercel</p>
          <div class="tags">
            <span class="tag">Hosting</span>
            <span class="tag">Development</span>
          </div>
        </div>
        <div class="terminal app">
          <div class="img">
            <img class="logo" src="../assets/terminal.png" />
          </div>
          <p class="name">Windows Terminal</p>
          <div class="tags">
            <span class="tag">Terminal</span>
            <span class="tag">Development</span>
          </div>
        </div>
        <div class="notion app">
          <div class="img">
            <img class="logo" src="../assets/notion.png" />
          </div>
          <p class="name">Notion</p>
          <div class="tags">
            <span class="tag">Workflow</span>
            <span class="tag">Organization</span>
          </div>
        </div>
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

.img {
  width: 60px;
  height: 60px;
  justify-content: center;
  display: flex;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
}

.apps {
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.app:not(:last-of-type) {
  margin-right: 15px;
}

.row {
  display: flex;
}

.row:not(:last-of-type) {
  margin-bottom: 15px;
}

.row:last-of-type {
  margin-bottom: 120px;
}

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
  margin-top: 20px;
  white-space: nowrap;
  justify-content: center;
}

.flowlauncher .tags {
  grid-template-columns: 94px 94px 96px;
}

.discord .tags {
  grid-template-columns: 75px 105px;
}

.bitwarden .tags {
  grid-template-columns: 150px 88px;
}

.vscode .tags {
  grid-template-columns: 73px 115px;
}

.lunacy .tags {
  grid-template-columns: 78px 74px;
}

.intellij .tags {
  grid-template-columns: 74px 116px;
}

.vercel .tags {
  grid-template-columns: 85px 116px;
}

.terminal .tags {
  grid-template-columns: 89px 116px;
}

.notion .tags {
  grid-template-columns: 94px 113px;
}

.flowlauncher {
  width: 400px;
}

.firefox,
.apps .twitter {
  width: 200px;
}

.discord {
  width: 270px;
}

.bitwarden {
  width: 320px;
}

.vscode {
  width: 300px;
}

.lunacy {
  width: 250px;
}

.intellij {
  width: 380px;
}

.applemusic {
  width: 290px;
}

.vercel {
  width: 300px;
}

.terminal {
  width: 320px;
}

.notion {
  width: 250px;
}

.name {
  margin-top: 20px;
  font-weight: 500;
  font-size: 19px;
}

@keyframes test {}
</style>