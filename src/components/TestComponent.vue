<script setup lang="ts">
  import Grid from "./carousel/CarouselItemImages.vue"

  const imgs = [
      "https://picsum.photos/seed/237/200",
      "https://picsum.photos/seed/238/200",
      "https://picsum.photos/seed/239/200",
      "https://picsum.photos/seed/240/200",
      "https://picsum.photos/seed/241/200",
      "https://picsum.photos/seed/242/200",
      "https://picsum.photos/seed/243/200",
      "https://picsum.photos/seed/244/200",
      ]

</script>

<template>
  <Grid :slides="imgs"/>
</template>

<style>

</style>
