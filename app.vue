<template>
  <NuxtPage />
</template>

<style>
@font-face {
  font-family: Inter;
  src: url("/Inter.woff2");
  font-display: swap;
  font-style: normal;
  font-weight: 100 900;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: Druk;
  src: url("/druk.woff2");
  font-display: swap;
  font-style: normal;
  font-weight: 100 900;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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