<template>
  <div id="app">
    <SS_navbar />

    <SS_intro />

    
    

  </div>
</template>

<script setup>

import SS_navbar from "./components/SS_navbar.vue";
import SS_intro from "./components/SS_intro.vue";
import { NCarousel } from "naive-ui";


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  padding: 0;
}
</style>