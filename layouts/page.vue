<template>
  <div id="content">
    <div id="header">
      <img src="/projects.svg" alt="projects" id="title">
      <p id="description">Here you can find some of my</p>
    </div>
    <slot />
  </div>
  <Navbar />
</template>

<style>
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
  /* font-size: 64px;
  font-family: Drukk !important;
  -webkit-text-stroke: 1.5px rgba(112, 112, 112, 0.357); */
  color: transparent;
  width: 100%;
  max-width: 529px;
  user-select: none;
  pointer-events: none;
}

#description {
  color: white;
  font-size: 18px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

@media (max-width: 577px) {
  #header{
    height: calc((100vw - 48px) / 6.3);
  }
}

@media (min-width: 577px) {
  #header{
    height: 84px;
  }
}
</style>
