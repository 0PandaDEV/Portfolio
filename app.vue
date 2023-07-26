<template>
  <NuxtPage />
</template>

<style>
@font-face {
  font-family: Inter;
  src: url("/Inter.woff2");
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
  text-rendering: optimizeLegibility;
}

body {
  background: #171618;
  box-sizing: border-box;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow-y: scroll;
  padding-bottom: 120px;
}
</style>