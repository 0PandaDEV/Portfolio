<template>
  <div id="content">
    <div id="stack-header">
      <img src="/stack.svg" alt="stack" id="title">
      <p id="description">
        See what i have in my tech
      </p>
    </div>

    <div class="apps">
      <a class="raycast app" href="https://raycast.com" target="_blank" aria-label="raycast">
        <div class="img">
          <img loading="lazy" class="logo" src="/raycast.png" alt="raycast"/>
        </div>
        <p class="name">Raycast</p>
        <div class="tags">
          <span class="tag">Launcher</span>
          <span class="tag">Workflow</span>
          <span class="tag">Shortcuts</span>
        </div>
      </a>
      <a class="arc app" href="https://arc.net" target="_blank" aria-label="arc">
        <div class="img">
          <img loading="lazy" class="logo" src="/arc.png" alt="arc"/>
        </div>
        <p class="name">Arc</p>
        <div class="tags">
          <span class="tag">Browser</span>
        </div>
      </a>
      <a class="discord app" href="https://discord.com" target="_blank" aria-label="discord">
        <div class="img">
          <img loading="lazy" class="logo" src="/discord.png" alt="discord"/>
        </div>
        <p class="name">Discord</p>
        <div class="tags">
          <span class="tag">Social</span>
          <span class="tag">Community</span>
        </div>
      </a>
      <a class="bitwarden app" href="https://bitwarden.com/" target="_blank" aria-label="protonpass">
        <div class="img">
          <img loading="lazy" class="logo" src="/bitwarden.png" alt="protonpass"/>
        </div>
        <p class="name">Bitwarden</p>
        <div class="tags">
          <span class="tag">Password Manager</span>
          <span class="tag">Security</span>
        </div>
      </a>
      <a class="cursor app" href="https://cursor.sh/" target="_blank" aria-label="cursor">
        <div class="img">
          <img loading="lazy" class="logo" src="/cursor.svg" alt="cursor"/>
        </div>
        <p class="name">Cursor</p>
        <div class="tags">
          <span class="tag">Editor</span>
          <span class="tag">Development</span>
        </div>
      </a>
      <a class="lunacy app" href="https://icons8.com/lunacy" target="_blank" aria-label="lunacy">
        <div class="img">
          <img loading="lazy" class="logo" src="/lunacy.png" alt="lunacy"/>
        </div>
        <p class="name">Lunacy</p>
        <div class="tags">
          <span class="tag">Design</span>
          <span class="tag">UI/UX</span>
        </div>
      </a>
      <a class="x app" href="https://x.com/" target="_blank" aria-label="x">
        <div class="img">
          <img loading="lazy" class="logo" src="/x.png" alt="x"/>
        </div>
        <p class="name">X</p>
        <div class="tags">
          <span class="tag">Social</span>
        </div>
      </a>
      <a class="applemusic app" href="https://applemusic.com/" target="_blank" aria-label="applemusic">
        <div class="img">
          <img loading="lazy" class="logo" src="/applemusic.png" alt="applemusic"/>
        </div>
        <p class="name">Apple Music</p>
        <div class="tags">
          <span class="tag">Music</span>
        </div>
      </a>
      <a class="intellij app" href="https://jetbrains.com/idea/download/" target="_blank" aria-label="intellij">
        <div class="img">
          <img loading="lazy" class="logo" src="/intellij.png" alt="intellij"/>
        </div>
        <p class="name">IntelliJ Community</p>
        <div class="tags">
          <span class="tag">Editor</span>
          <span class="tag">Development</span>
        </div>
      </a>
      <a class="vercel app" href="https://vercel.com/" target="_blank" aria-label="vercel">
        <div class="img">
          <img loading="lazy" class="logo" src="/vercel.png" alt="vercel"/>
        </div>
        <p class="name">Vercel</p>
        <div class="tags">
          <span class="tag">Hosting</span>
          <span class="tag">Development</span>
        </div>
      </a>
      <a class="tabby app" href="https://tabby.sh/" target="_blank" aria-label="warp">
        <div class="img">
          <img loading="lazy" class="logo" src="/tabby.svg" alt="warp"/>
        </div>
        <p class="name">Tabby</p>
        <div class="tags">
          <span class="tag">Terminal</span>
          <span class="tag">Development</span>
        </div>
      </a>
      <a class="notion app" href="https://notion.com/" target="_blank" aria-label="notion">
        <div class="img">
          <img loading="lazy" class="logo" src="/notion.png" alt="notion"/>
        </div>
        <p class="name">Notion</p>
        <div class="tags">
          <span class="tag">Workflow</span>
          <span class="tag">Organization</span>
        </div>
      </a>
      <a class="shottr app" href="https://shottr.cc/" target="_blank" aria-label="shottr">
        <div class="img">
          <img loading="lazy" class="logo" src="/shottr.png" alt="shottr"/>
        </div>
        <p class="name">Shottr</p>
        <div class="tags">
          <span class="tag">Screenshot</span>
          <span class="tag">Workflow</span>
        </div>
      </a>
      <a class="nextdns app" href="https://nextdns.io/" target="_blank" aria-label="nextdns">
        <div class="img">
          <img loading="lazy" class="logo" src="/nextdns.png" alt="nextdns"/>
        </div>
        <p class="name">NextDNS</p>
        <div class="tags">
          <span class="tag">Security</span>
          <span class="tag">DNS</span>
          <span class="tag">Network</span>
        </div>
      </a>
      <a class="libresprite app" href="https://libresprite.github.io/" target="_blank" aria-label="libresprite">
        <div class="img">
          <img loading="lazy" class="logo" src="/libresprite.png" alt="libresprite"/>
        </div>
        <p class="name">Libresprite</p>
        <div class="tags">
          <span class="tag">Pixel Art</span>
          <span class="tag">Design</span>
        </div>
      </a>
      <a class="photoshop app" href="https://adobe.com/" target="_blank" aria-label="photoshop">
        <div class="img">
          <img loading="lazy" class="logo" src="/photoshop.png" alt="photoshop"/>
        </div>
        <p class="name">Photoshop</p>
        <div class="tags">
          <span class="tag">Graphics</span>
          <span class="tag">Design</span>
        </div>
      </a>
      <a class="beeper app" href="https://www.beeper.com/" target="_blank" aria-label="beeper">
        <div class="img">
          <img loading="lazy" class="logo" src="/beeper.png" alt="beeeper"/>
        </div>
        <p class="name">Beeper</p>
        <div class="tags">
          <span class="tag">Cominucation</span>
          <span class="tag">Social</span>
        </div>
      </a>
    </div>
  </div>
  <Navbar />
</template>

<script setup lang="ts">
useSeoMeta({
  title: "PandaDEV - Stack",
  description: "Discover all the apps and tools I use to complete my tasks and create my daily workflow, as a Java and Web developer.",
  ogTitle: 'Stack',
  ogDescription: "Discover all the apps and tools I use to complete my tasks and create my daily workflow, as a Java and Web developer.",
  ogImage: '/logo.png',
  ogUrl: 'https://pandadev.tk/stack',
  twitterTitle: 'Stack',
  twitterDescription: "Discover all the apps and tools I use to complete my tasks and create my daily workflow, as a Java and Web developer.",
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
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
