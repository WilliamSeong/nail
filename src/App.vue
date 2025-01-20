<script setup lang="ts">
import Nav from "./components/NavBar.vue";
import Footer from "./components/FooterBar.vue";
</script>

<template>
  <div class="page-container">
    <Nav />
    <div class="content-wrap">
      <router-view></router-view>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    box-sizing: border-box;
    background-color: white;
  }

  .page-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
