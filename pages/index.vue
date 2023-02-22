<template>
  <div class="content">
    <h1>Home</h1>
    <navbar />
  </div>
</template>

<script setup>
</script>

<style>
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
  background: #171618;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
}

.content {
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}
</style>