<script setup lang="ts">
import Map from "./EmbeddedMap.vue";
</script>

<template>
  <div id="first">
    <div class="images">
    <img class="header-img" src="../assets/nail-img-1.jpg">
    <img class="header-img" src="../assets/nail-img-2.jpg">
    <img class="header-img" src="../assets/nail-img-3.jpg">
    </div>
  </div>
  <Map />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#first {
  display: flex;
}

.images {
  height: 20%;
  width: 100%;
  display: inline-block;
}

.header-img {
  width: 33.33%;
  display: inline-block;
}
</style>
