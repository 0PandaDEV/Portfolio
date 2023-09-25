<template>
  <a :href="url" class="project-button" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      stroke-width="2.5"
      class="icon"
      v-if="icon === 'website'"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
    <svg
      v-else-if="icon === 'github'"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="transparent"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.5"
      class="icon"
    >
      <path
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      ></path>
    </svg>
    <svg
      width="18"
      height="18"
      viewBox="0 0 624 624"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      v-else-if="icon == 'discord'"
    >
      <g id="Group">
        <path
          d="M0 0L624 0L624 624L0 624L0 0Z"
          id="Rectangle"
          fill="none"
          fill-rule="evenodd"
          stroke="none"
        />
        <path
          d="M516.531 126.836C516.368 126.519 516.097 126.271 515.767 126.136C477.644 108.645 437.413 96.1719 396.081 89.03C395.311 88.8868 394.536 89.2536 394.158 89.94C388.68 99.8829 383.707 110.096 379.258 120.54C334.704 113.777 289.385 113.777 244.832 120.54C240.353 110.07 235.301 99.8541 229.697 89.9403C229.303 89.2704 228.54 88.9094 227.773 89.0303C186.437 96.1572 146.203 108.631 108.085 126.137C107.759 126.275 107.483 126.512 107.297 126.813C31.068 240.651 10.186 351.69 20.43 461.354C20.4882 461.897 20.7643 462.393 21.195 462.729C65.5824 495.594 115.23 520.681 168.02 536.918C168.781 537.146 169.604 536.877 170.083 536.242C181.421 520.815 191.467 504.479 200.12 487.4C200.36 486.926 200.386 486.372 200.192 485.877C199.997 485.383 199.6 484.995 199.101 484.812C183.258 478.751 167.921 471.443 153.233 462.959C152.691 462.641 152.343 462.073 152.306 461.446C152.269 460.818 152.547 460.213 153.048 459.833C156.13 457.524 159.214 455.122 162.157 452.696C162.69 452.257 163.426 452.158 164.057 452.44C260.286 496.357 364.467 496.357 459.557 452.44C460.189 452.139 460.938 452.23 461.481 452.673C464.425 455.099 467.508 457.524 470.613 459.833C471.116 460.21 471.398 460.812 471.366 461.439C471.333 462.067 470.99 462.637 470.451 462.959C455.796 471.515 440.445 478.817 424.561 484.789C424.062 484.979 423.668 485.372 423.477 485.871C423.286 486.369 423.316 486.926 423.561 487.4C432.358 504.384 442.39 520.699 453.575 536.215C454.041 536.868 454.871 537.15 455.638 536.915C508.522 520.733 558.257 495.644 602.7 462.729C603.138 462.409 603.417 461.917 603.465 461.377C615.729 334.594 582.933 224.465 516.531 126.836L516.531 126.836ZM214.491 394.58C185.519 394.58 161.647 367.993 161.647 335.341C161.647 302.689 185.056 276.1 214.491 276.1C244.156 276.1 267.797 302.92 267.334 335.339C267.334 367.993 243.924 394.58 214.491 394.58L214.491 394.58ZM409.871 394.58C380.9 394.58 357.028 367.993 357.028 335.341C357.028 302.689 380.437 276.1 409.871 276.1C439.538 276.1 463.178 302.92 462.715 335.339C462.715 367.993 439.538 394.58 409.871 394.58L409.871 394.58Z"
          id="Shape"
          fill="#30303054"
          stroke="#FFFFFF"
          stroke-width="35"
        />
      </g>
    </svg>
    <span id="text" v-if="icon === 'website'">Website</span>
    <span id="text" v-else-if="icon === 'github'">Github</span>
    <span id="text" v-else-if="icon === 'discord'">Discord</span>
  </a>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.project-button {
  padding-inline: 20px;
  width: min-content;
  border-radius: 16px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: hsl(270, 4%, 15%);
  color: white;
  transition: all 0.5s;
  font-size: 16px;
}

.icon {
  stroke: white;
  transition: all 0.5s;
}

.project-button:hover {
  background-color: white;
  color: black;
  box-shadow: 0 5px 50px rgba(255, 255, 255, 0.264);
}

#text {
  color: white;
  transition: all 0.5s;
}

.project-button:hover #text {
  color: black;
}

.project-button:hover .icon {
  stroke: black;
}
</style>
