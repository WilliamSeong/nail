<script setup lang="ts">
import Nav from "./components/NavBar.vue";
import Footer from "./components/FooterBar.vue";
</script>

<template>
  <Nav />

  <div>
    <router-view></router-view>
  </div>

  <Footer />
</template>

<style scoped>

</style>
