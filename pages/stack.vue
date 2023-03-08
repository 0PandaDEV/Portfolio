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
  <navbar-stack />
</template>

<style>
/*==============================*/

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

@keyframes test {
}

img.logo {
  width: 100%;
}
/*
@media (max-width: 940px) {

  .half-apps {
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    flex-direction: column;
  }

  .row:last-of-type {
    margin-bottom: 120px;
  }

  .app {
    width: 100%;
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .app:not(:last-of-type) {
    margin-right: 15px;
  }
}

@media (max-width: 600px) {
  .apps {
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
  }

  .app:not(:last-of-type) {
    margin-bottom: 15px;
  }

  .row:last-of-type {
    margin-bottom: 120px;
  }

  .app {
    width: 100%;
  }

  .row {
    width: 100%;
    flex-direction: column;
  }
}

*/
</style>