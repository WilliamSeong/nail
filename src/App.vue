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
    margin: 0;
    box-sizing: border-box;
    background-color: white;
    height: 100vh;
    width: auto;
  }
</style>
