<template>
  <div id="content">
    <div id="header">
      <h1 id="title">PROJECTS</h1>
      <p id="description">Here you can find some of my</p>
    </div>
    <slot />
  </div>
  <Navbar />
</template>

<style>
@font-face {
  font-family: Druk;
  src: url("/druk.woff2");
  font-display: swap;
}

#content {
  user-select: none;
  display: flex;
  max-width: 1296px;
  justify-content: center;
  align-items: center;
  padding: 48px 24px;
  flex-direction: column;
}

#header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  margin-bottom: 48px;
}

#title {
  font-size: 64px;
  font-family: Druk !important;
  -webkit-text-stroke: 1.5px rgba(112, 112, 112, 0.356); /* width and color of stroke */
  color: transparent;
}

#description {
  color: white;
  font-size: 18px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
