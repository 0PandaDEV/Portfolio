<template>
  <div class="content">
    <div class="header">
      <h1 class="title">Stack</h1>
      <p class="description">
        Discover all the apps and tools I use to complete my tasks and create my
        daily workflow, as an Java and Web developer.
      </p>
    </div>

    <div class="apps">
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
  <navbar />
</template>

<style>
/*==============================*/

@font-face {
  font-family: Inter;
  src: url("../fonts/Inter.woff2") format("woff2");
  font-display: swap;
}

* {
  margin: 0px;
  padding: 0px;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #444446 #171618;
  box-sizing: border-box;
  font-family: Inter !important;
}

body {
  background: rgb(23, 22, 24);
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow-y: scroll;
  padding-bottom: 120px;
}

.content {
  display: flex;
  max-width: 940px;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  flex-direction: column;
}

.apps {
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.app {
  margin: 8px;
  background-color: hsl(270, 2%, 11%);
  border: 1px solid rgba(49, 49, 49, 0.68);
  border-radius: 14px;
  width: auto;
  height: 200px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  flex-grow: 1;
  flex-shrink: 1;
}

/*==============================*/

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

.img {
  width: 60px;
  height: 60px;
  justify-content: center;
  display: flex;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
}

.tag {
  background-color: hsl(270, 2%, 13%);
  padding: 7px 14px;
  border: 1px solid rgba(49, 49, 49, 0.68);
  border-radius: 100px;
  font-size: 12px;
  color: #969696;
  margin-inline: 5px;
}

.tags {
  display: flex;
  margin-top: 20px;
  white-space: nowrap;
  justify-content: center;
  width: 100%;
}

.name {
  margin-top: 20px;
  font-weight: 500;
  font-size: 19px;
  text-align: center;
}

.hover {
  display: none;
  text-align: center;
  position: absolute;
  top: -30px;
  z-index: 10;
  background-color: white;
  border-radius: 8px;
  padding: 3px;
  padding-inline: 6px;
  font-weight: 500;
  transition: all 0.5s;
}

.icon:hover>.hover {
  display: block;
}

img.logo {
  width: 100%;
}
</style>