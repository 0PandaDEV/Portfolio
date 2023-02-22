<template>
  <div class="navbar">
    <div class="home icon selected">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z"
          stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 17.99V14.99" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class="projects icon">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#303030" xmlns="http://www.w3.org/2000/svg">
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
    <div class="stack icon">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#303030" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.08998 13.28H9.17998V20.48C9.17998 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52002C14.81 1.84002 13.9 1.50002 12.79 2.76002L5.21998 11.36C4.29998 12.42 4.68998 13.28 6.08998 13.28Z"
          stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class="divider"></div>
    <div class="email icon">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#303030" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
          stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#fff" stroke-width="1.5"
          stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class="twitter icon">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#303030" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.07 4.93L4.92999 19.07C3.11999 17.26 2 14.76 2 12C2 6.48 6.48 2 12 2C14.76 2 17.26 3.12 19.07 4.93Z"
          stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M22 11.9999C22 17.5199 17.52 21.9999 12 21.9999C9.24 21.9999 6.73999 20.8799 4.92999 19.0699L19.07 4.92993C20.88 6.73993 22 9.23993 22 11.9999Z"
          stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.76001 16.24L13.41 21.9" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M11.29 12.71L17.87 19.28" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M14.83 9.16992L21.12 15.4699" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>
    <div class="github icon">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#303030" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.95 14.55L14.56 20.94C13.16 22.34 10.86 22.34 9.45002 20.94L3.06001 14.55C1.66001 13.15 1.66001 10.85 3.06001 9.44001L9.45002 3.05C10.85 1.65 13.15 1.65 14.56 3.05L20.95 9.44001C22.35 10.85 22.35 13.15 20.95 14.55Z"
          stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
@import '../universal.css';

.navbar {
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 50px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  -o-backdrop-filter: blur(10px);
  background-color: #1c1a1eb0;
  padding: 5px 5px;
  border-radius: 20px;
  flex-direction: row;
  border: 1px solid rgba(49, 49, 49, 0.68);
  height: 60px;
  width: 338px;
}

.icon {
  width: 46px;
  height: 46px;
  padding: 10px 10px;
}

.icon:hover:not(.selected) {
  background-color: #2726299a;
  border-radius: 15px;
  transition: background-color 0.2s;
}

.icon:not(:last-of-type) {
  margin-right: 8px;
}

.divider {
  margin-right: 8px;
  background-color: rgba(49, 49, 49, 0.68);
  width: 1px;
  height: 40px;
}

.selected {
  background-color: hsl(263, 73%, 56%);
  border-radius: 15px;
  color: #303030;
}
</style>