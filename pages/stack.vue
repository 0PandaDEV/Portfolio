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
          <img loading="lazy" class="logo" src="../assets/raycast.png" />
        </div>
        <p class="name">Raycast</p>
        <div class="tags">
          <span class="tag">Launcher</span>
          <span class="tag">Workflow</span>
          <span class="tag">Shortcuts</span>
        </div>
      </div>
      <div class="firefox app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/arc.png" />
        </div>
        <p class="name">Arc</p>
        <div class="tags">
          <span class="tag">Browser</span>
        </div>
      </div>
      <div class="discord app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/discord.png" />
        </div>
        <p class="name">Discord</p>
        <div class="tags">
          <span class="tag">Social</span>
          <span class="tag">Community</span>
        </div>
      </div>
      <div class="bitwarden app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/bitwarden.png" />
        </div>
        <p class="name">Bitwarden</p>
        <div class="tags">
          <span class="tag">Password Manager</span>
          <span class="tag">Security</span>
        </div>
      </div>
      <div class="vscode app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/vscode.png" />
        </div>
        <p class="name">VS Code</p>
        <div class="tags">
          <span class="tag">Editor</span>
          <span class="tag">Development</span>
        </div>
      </div>
      <div class="lunacy app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/lunacy.png" />
        </div>
        <p class="name">Lunacy</p>
        <div class="tags">
          <span class="tag">Design</span>
          <span class="tag">UI/UX</span>
        </div>
      </div>
      <div class="twitter app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/twitter.png" />
        </div>
        <p class="name">Twitter</p>
        <div class="tags">
          <span class="tag">Social</span>
        </div>
      </div>
      <div class="applemusic app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/applemusic.png" />
        </div>
        <p class="name">Apple Music</p>
        <div class="tags">
          <span class="tag">Music</span>
        </div>
      </div>
      <div class="intellij app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/intellij.png" />
        </div>
        <p class="name">IntelliJ Community</p>
        <div class="tags">
          <span class="tag">Editor</span>
          <span class="tag">Development</span>
        </div>
      </div>
      <div class="vercel app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/vercel.png" />
        </div>
        <p class="name">Vercel</p>
        <div class="tags">
          <span class="tag">Hosting</span>
          <span class="tag">Development</span>
        </div>
      </div>
      <div class="terminal app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/iterm.png" />
        </div>
        <p class="name">iTerm</p>
        <div class="tags">
          <span class="tag">Terminal</span>
          <span class="tag">Development</span>
        </div>
      </div>
      <div class="notion app">
        <div class="img">
          <img loading="lazy" class="logo" src="../assets/notion.png" />
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
@import '~/css/stack.css';
</style>