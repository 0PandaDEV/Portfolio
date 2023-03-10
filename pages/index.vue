<template>
  <div class="bg"></div>
  <div class="center">
    <div class="hero">
      <img src="~/assets/logo.png" alt="logo" class="mainlogo" />
      <p class="forword">Hi, I'm PandaDEV</p>
      <h1 class="h1">Building Minecraft plugins and websites.</h1>
      <h2 class="h2">I'm a Devloper specialized in java and web developement. Also i'm doing UI/UX Design.</h2>
      <a href="mailto:nils.ulmann@klangonzept.ch">
        <div class="button">
          CONNECT WITH ME
        </div>
      </a>
    </div>
  </div>
  <navbar />
</template>

<script>
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
  height: fit-content;
}

.hero {
  justify-content: center;
  max-width: 900px;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-inline: 0;
  padding: 50px;
}

.bg {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  z-index: -1;
}

.center {
  width: 100%;
  height: calc(100vh - 120px);
  position: absolute;
  left: 0;
  z-index: -1;
  display: grid;
  place-items: center;
}

.mainlogo {
  height: clamp(130px, 10vw, 180px);
  border-radius: 1000px;
  width: clamp(130px, 10vw, 180px);
}

.forword {
  font-size: clamp(14px, 5vw, 32px);
  margin-top: clamp(16px, 4vw, 24px);
}

.h1 {
  font-size: clamp(25px, 8vw, 72px);
  margin-top: clamp(16px, 4vw, 24px);
}

.h2 {
  font-size: clamp(14px, 4vw, 24px);
  font-weight: 400;
  color: #999DAC;
  margin-top: clamp(16px, 4vw, 24px);
  max-width: 600px;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
}

.button {
  background-color: white;
  font-size: clamp(12px, 1vw, 14px);
  padding: 19px;
  padding-inline: 50px;
  border-radius: 21px;
  color: black;
  text-decoration: none;
  font-weight: 600;
  margin-top: clamp(32px, 5vw, 42px);
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  white-space: nowrap;
  width: fit-content;
}

a {
  text-decoration: none;
}

@media (max-width: 1300px) {

  /*for Laptop*/

  .h2 {
    padding-inline: 12px;
  }
}

@media (max-width: 600px) {

  /*for Mobile*/

  .h2 {
    padding-inline: 12px;
  }
}
</style>