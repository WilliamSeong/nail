<script setup lang="ts">
import Nav from "./components/NavBar.vue";
import Footer from "./components/FooterBar.vue";
</script>

<template>
  <Nav />

  <div id = "body">
    <router-view></router-view>
  </div>

  <Footer />
</template>

<style scoped>
  *{
    background-color: #967BB6;
    height: 100vh;
  }
</style>
