<template>
  <div class="navbar">
    <nuxt-link to="/">
      <div class="home icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#30303054" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
            stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 17.99V14.99" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </nuxt-link>
    <nuxt-link to="/projects">
      <div class="projects icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#30303054" xmlns="http://www.w3.org/2000/svg">
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
    <nuxt-link to="/stack">
      <div class="stack icon selected">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"
            stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </nuxt-link>
    <div class="divider"></div>
    <a href="mailto:contact@pandadev.tk">
      <div class="email icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#30303054" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
            stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#fff" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </a>
    <a target="_blank" href="https://twitter.com/PandaDEV_">
      <div class="twitter icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#30303054" stroke="white" stroke-width="1.7"
          stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
          </path>
        </svg>
      </div>
    </a>
    <a target="_blank" href="https://github.com/0PandaDEV/">
      <div class="github icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#30303054" stroke="white" stroke-width="1.7"
          stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
          </path>
        </svg>
      </div>
    </a>
  </div>
  <div class="mobile-navbar">
    <nuxt-link to="/">
      <div class="home icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#30303054" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
            stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 17.99V14.99" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </nuxt-link>
    <nuxt-link to="/projects">
      <div class="projects icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#30303054" xmlns="http://www.w3.org/2000/svg">
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
    <nuxt-link to="/stack">
      <div class="stack icon selected">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"
            stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </nuxt-link>
    <div class="divider"></div>
    <a href="mailto:contact@pandadev.tk">
      <div class="email icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#30303054" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
            stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#fff" stroke-width="1.5"
            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </a>
    <a target="_blank" href="https://twitter.com/PandaDEV_">
      <div class="twitter icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#30303054" stroke="white" stroke-width="1.7"
          stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
          </path>
        </svg>
      </div>
    </a>
    <a target="_blank" href="https://github.com/0PandaDEV/">
      <div class="github icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#30303054" stroke="white" stroke-width="1.7"
          stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
          </path>
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
</script>

<style></style>