<template>
  <main>
    <div class="hero">
      <img src="../assets/logo.png" alt="logo" class="mainlogo">
      <p class="forword">Hi, I'm PandaDEV</p>
      <h1 class="h1">Building Minecraft plugins and websites.</h1>
      <h2 class="h2">I'm a Devloper specialized in java and web developement. Also i'm doing UI/UX Design.</h2>
      <a href="mailto:nils.ulmann@klangonzept.ch" class="button">
        CONNECT WITH ME
      </a>
    </div>
  </main>
  <navbar />
</template>

<script setup>
</script>

<style>
@font-face {
  font-family: Inter;
  src: url("../fonts/Inter.woff2") format("woff2");
  font-display: swap;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #171618;
}

::-webkit-scrollbar-thumb {
  background: #444446;
}

::-webkit-scrollbar-thumb:window-inactive {
  background: #444446;
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
}

main {
  display: flex;
  max-width: 940px;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  flex-direction: column;
  text-align: center;
}

.mainlogo {
  border-radius: 1000px;
  width: 180px;
  height: 180px;
}

.forword {
  font-size: 32px;
  margin-top: 24px;
}

.h1 {
  font-size: 72px;
  margin-top: 24px;
}

.h2 {
  font-size: 24px;
  font-weight: 400;
  color: #999DAC;
  margin-top: 24px;
  max-width: 600px;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
}

.button {
  display: flex;
  width: 236px;
  height: 55px;
  background-color: white;
  font-size: 14px;
  padding: 19px;
  padding-inline: 50px;
  border-radius: 21px;
  color: black;
  text-decoration: none;
  font-weight: 600;
  margin-top: 42px;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
}

@media (min-width: 600px) {

  /*for Desktop*/
}

@media (max-width: 600px) {

  /*for Mobile*/
  .mainlogo {
    width: 160px;
    height: 160px;
  }

  .forword {
    font-size: 20px;
    margin-top: 16px;
  }

  .h1 {
    font-size: 42px;
    margin-top: 16px;
  }

  .h2 {
    font-size: 20px;
    margin-top: 16px;
  }

  .button {
    margin-top: 32px;

  }
}
</style>