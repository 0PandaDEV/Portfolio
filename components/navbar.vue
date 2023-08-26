<template>
  <div class="navbar">
    <nuxt-link to="/" class="navLink">
      <div class="home icon">
        <div class="hover">Home</div>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
            stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 17.99V14.99" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </nuxt-link>
    <nuxt-link to="/projects" class="navLink">
      <div class="projects icon">
        <div class="hover">Projects</div>
        <svg viewBox="0 0 24 24" fill="#30303054" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z"
            stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z"
            stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 13H12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 17H16" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </nuxt-link>
    <nuxt-link to="/stack" class="navLink">
      <div class="stack icon">
        <div class="hover">Stack</div>
        <svg viewBox="0 0 24 24" fill="#30303054" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"
            stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </nuxt-link>
    <div class="divider"></div>
    <a href="mailto:contact@pandadev.tk">
      <div class="email icon nlIcon">
        <div class="hover">Mail</div>
        <svg viewBox="0 0 24 24" fill="#30303054" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
            stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#fff" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </a>
    <a target="_blank" href="https://twitter.com/PandaDEV_">
      <div class="twitter icon nlIcon">
        <div class="hover">Twitter</div>
        <svg viewBox="0 0 24 24" fill="#30303054" stroke="white" stroke-width="1.7" stroke-linecap="round"
          stroke-linejoin="round" class="feather feather-twitter">
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
          </path>
        </svg>
      </div>
    </a>
    <a target="_blank" href="https://github.com/0PandaDEV/">
      <div class="github icon nlIcon">
        <div class="hover">Github</div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#30303054" stroke="white" stroke-width="1.7"
          stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
          </path>
        </svg>
      </div>
    </a>
    <a target="_blank" href="https://discord.gg/Y7SbYphVw9">
      <div class="discord icon nlIcon">
        <div class="hover">Discord</div>
        <svg width="624px" height="624px" viewBox="0 0 624 624" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Group">
            <path d="M0 0L624 0L624 624L0 624L0 0Z" id="Rectangle" fill="none" fill-rule="evenodd" stroke="none" />
            <path
              d="M516.531 126.836C516.368 126.519 516.097 126.271 515.767 126.136C477.644 108.645 437.413 96.1719 396.081 89.03C395.311 88.8868 394.536 89.2536 394.158 89.94C388.68 99.8829 383.707 110.096 379.258 120.54C334.704 113.777 289.385 113.777 244.832 120.54C240.353 110.07 235.301 99.8541 229.697 89.9403C229.303 89.2704 228.54 88.9094 227.773 89.0303C186.437 96.1572 146.203 108.631 108.085 126.137C107.759 126.275 107.483 126.512 107.297 126.813C31.068 240.651 10.186 351.69 20.43 461.354C20.4882 461.897 20.7643 462.393 21.195 462.729C65.5824 495.594 115.23 520.681 168.02 536.918C168.781 537.146 169.604 536.877 170.083 536.242C181.421 520.815 191.467 504.479 200.12 487.4C200.36 486.926 200.386 486.372 200.192 485.877C199.997 485.383 199.6 484.995 199.101 484.812C183.258 478.751 167.921 471.443 153.233 462.959C152.691 462.641 152.343 462.073 152.306 461.446C152.269 460.818 152.547 460.213 153.048 459.833C156.13 457.524 159.214 455.122 162.157 452.696C162.69 452.257 163.426 452.158 164.057 452.44C260.286 496.357 364.467 496.357 459.557 452.44C460.189 452.139 460.938 452.23 461.481 452.673C464.425 455.099 467.508 457.524 470.613 459.833C471.116 460.21 471.398 460.812 471.366 461.439C471.333 462.067 470.99 462.637 470.451 462.959C455.796 471.515 440.445 478.817 424.561 484.789C424.062 484.979 423.668 485.372 423.477 485.871C423.286 486.369 423.316 486.926 423.561 487.4C432.358 504.384 442.39 520.699 453.575 536.215C454.041 536.868 454.871 537.15 455.638 536.915C508.522 520.733 558.257 495.644 602.7 462.729C603.138 462.409 603.417 461.917 603.465 461.377C615.729 334.594 582.933 224.465 516.531 126.836L516.531 126.836ZM214.491 394.58C185.519 394.58 161.647 367.993 161.647 335.341C161.647 302.689 185.056 276.1 214.491 276.1C244.156 276.1 267.797 302.92 267.334 335.339C267.334 367.993 243.924 394.58 214.491 394.58L214.491 394.58ZM409.871 394.58C380.9 394.58 357.028 367.993 357.028 335.341C357.028 302.689 380.437 276.1 409.871 276.1C439.538 276.1 463.178 302.92 462.715 335.339C462.715 367.993 439.538 394.58 409.871 394.58L409.871 394.58Z"
              id="Shape" fill="#30303054" stroke="#FFFFFF"
              stroke-width="35" />
          </g>
        </svg>
      </div>
    </a>
  </div>
</template>

<style>@import '~/css/navbar.css';</style>