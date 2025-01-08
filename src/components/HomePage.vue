<script setup lang="ts">
import Map from "./EmbeddedMap.vue";
import Sliding from "./SlidingImages.vue"
</script>

<template>
  <div>
    <Sliding />
  </div>
  <div>
    <Map />
  </div>
  <div>
    <p> You've got mail</p>
  </div>
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
