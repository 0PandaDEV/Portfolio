<template>
  <div class="content">
    <div class="header">
      <h1 class="title">Stack</h1>
      <p class="description">
        Discover all the apps and tools I use to complete my tasks and create my
        daily workflow, as a Java and Web developer.
      </p>
    </div>

    <div class="apps">
      <a class="raycast app" href="https://raycast.com" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/raycast.png" />
        </div>
        <p class="name">Raycast</p>
        <div class="tags">
          <span class="tag">Launcher</span>
          <span class="tag">Workflow</span>
          <span class="tag">Shortcuts</span>
        </div>
      </a>
      <a class="arc app" href="https://arc.net" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/arc.png" />
        </div>
        <p class="name">Arc</p>
        <div class="tags">
          <span class="tag">Browser</span>
        </div>
      </a>
      <a class="discord app" href="https://discord.com" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/discord.png" />
        </div>
        <p class="name">Discord</p>
        <div class="tags">
          <span class="tag">Social</span>
          <span class="tag">Community</span>
        </div>
      </a>
      <a class="bitwarden app" href="https://bitwarden.com" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/bitwarden.png" />
        </div>
        <p class="name">Bitwarden</p>
        <div class="tags">
          <span class="tag">Password Manager</span>
          <span class="tag">Security</span>
        </div>
      </a>
      <a class="vscode app" href="https://code.visualstudio.com/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/vscode.png" />
        </div>
        <p class="name">VS Code</p>
        <div class="tags">
          <span class="tag">Editor</span>
          <span class="tag">Development</span>
        </div>
      </a>
      <a class="lunacy app" href="https://icons8.com/lunacy" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/lunacy.png" />
        </div>
        <p class="name">Lunacy</p>
        <div class="tags">
          <span class="tag">Design</span>
          <span class="tag">UI/UX</span>
        </div>
      </a>
      <a class="x app" href="https://x.com/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/x.png" />
        </div>
        <p class="name">X</p>
        <div class="tags">
          <span class="tag">Social</span>
        </div>
      </a>
      <a class="applemusic app" href="https://applemusic.com/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/applemusic.png" />
        </div>
        <p class="name">Apple Music</p>
        <div class="tags">
          <span class="tag">Music</span>
        </div>
      </a>
      <a class="intellij app" href="https://jetbrains.com/idea/download/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/intellij.png" />
        </div>
        <p class="name">IntelliJ Community</p>
        <div class="tags">
          <span class="tag">Editor</span>
          <span class="tag">Development</span>
        </div>
      </a>
      <a class="vercel app" href="https://vercel.com/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/vercel.png" />
        </div>
        <p class="name">Vercel</p>
        <div class="tags">
          <span class="tag">Hosting</span>
          <span class="tag">Development</span>
        </div>
      </a>
      <a class="warp app" href="https://www.warp.dev/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/warp.png" />
        </div>
        <p class="name">Warp</p>
        <div class="tags">
          <span class="tag">Terminal</span>
          <span class="tag">Development</span>
        </div>
      </a>
      <a class="notion app" href="https://notion.com/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/notion.png" />
        </div>
        <p class="name">Notion</p>
        <div class="tags">
          <span class="tag">Workflow</span>
          <span class="tag">Organization</span>
        </div>
      </a>
      <a class="shottr app" href="https://shottr.cc/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/shottr.png" />
        </div>
        <p class="name">Shottr</p>
        <div class="tags">
          <span class="tag">Screenshot</span>
          <span class="tag">Workflow</span>
        </div>
      </a>
      <a class="nextdns app" href="https://nextdns.io/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/nextdns.png" />
        </div>
        <p class="name">NextDNS</p>
        <div class="tags">
          <span class="tag">Security</span>
          <span class="tag">DNS</span>
          <span class="tag">Network</span>
        </div>
      </a>
      <a class="libresprite app" href="https://libresprite.github.io/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/libresprite.png" />
        </div>
        <p class="name">Libresprite</p>
        <div class="tags">
          <span class="tag">Pixel Art</span>
          <span class="tag">Design</span>
        </div>
      </a>
      <a class="photoshop app" href="https://adobe.com/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/photoshop.png" />
        </div>
        <p class="name">Photoshop</p>
        <div class="tags">
          <span class="tag">Graphics</span>
          <span class="tag">Design</span>
        </div>
      </a>
      <a class="beeper app" href="https://www.beeper.com/" target="_blank">
        <div class="img">
          <img loading="lazy" class="logo" src="/beeper.png" />
        </div>
        <p class="name">Beeper</p>
        <div class="tags">
          <span class="tag">Cominucation</span>
          <span class="tag">Social</span>
        </div>
      </a>
    </div>
  </div>
  <navbar />
</template>

<script setup lang="ts">
useSeoMeta({
  ogTitle: 'PandaDEV',
  ogDescription: "Discover all the apps and tools I use to complete my tasks and create my daily workflow, as a Java and Web developer.",
  ogImage: '/logo.png',
  ogUrl: 'https://pandadev.tk/projects',
  twitterTitle: 'PandaDEV',
  twitterDescription: "Discover all the apps and tools I use to complete my tasks and create my daily workflow, as a Java and Web developer.",
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  title: 'PandaDEV - Stack',
  meta: [{
    name: 'description', content: "Discover all the apps and tools I use to complete my tasks and create my daily workflow, as a Java and Web developer."
  }],
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo.png'
    }
  ]
})
</script>

<style>
@import '~/css/stack.css';
</style>
