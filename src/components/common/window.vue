<template>
  <div>
    <button id="btnWindow" @click="openWindow">{{ windowName }}</button>

    <div id="window" class="window">
      <div class="window-content">
        <span class="close" @click="closeWindow">&times;</span>
        <slot name="windowContent"> </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Window",
  props: {
    windowName: {
      type: String,
      required: true,
    },
  },
  methods: {
    openWindow(): void {
      const window = document.getElementById("window");
      if (window) window.style.display = "block";
    },
    closeWindow(): void {
      const window = document.getElementById("window");
      if (window) window.style.display = "none";
    },
  },
  mounted() {
    const window = document.getElementById("window");
    if (!window) return;
    window.onclick = function (event) {
      if (event.target == window) {
        window.style.display = "none";
      }
    };
  },
});
</script>

<style scoped lang="scss">
#btnWindow {
  position: absolute;
  right: 10px;
  bottom: 30px;
}
.window {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.window-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>