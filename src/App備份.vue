<template>
  <!-- <carousel_practice/> -->
  <SS_navbar />
  <SS_intro />

  <!-- <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">卡拉云_kalacloud.com</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/todo" class="nav-link">任务清单</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">新增任务</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div> -->
</template>

<script setup>
import vue from '@vitejs/plugin-vue'
import carousel_practice from "./components/CarouselPractice.vue";
import SS_navbar from "./components/SS_navbar.vue";
import SS_intro from "./components/SS_intro.vue";
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