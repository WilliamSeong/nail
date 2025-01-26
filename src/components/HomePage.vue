<script setup lang="ts">
  import Map from "./EmbeddedMap.vue";
  import Carousel from "./ImageCarousel.vue"

  import img1 from "../assets/nail-media/nail-media-1.jpeg";
  import img2 from "../assets/nail-media/nail-media-2.jpeg";
  import img3 from "../assets/nail-media/nail-media-3.jpeg";
  import img4 from "../assets/nail-media/nail-media-4.jpeg";
  import img5 from "../assets/nail-media/nail-media-5.jpeg";
  import img6 from "../assets/nail-media/nail-media-6.jpeg";
  import img7 from "../assets/nail-media/nail-media-7.jpeg";
  import img8 from "../assets/nail-media/nail-media-8.jpeg";
  import img9 from "../assets/nail-media/nail-media-9.jpeg";
  import img10 from "../assets/nail-media/nail-media-10.jpeg";
  const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];


</script>

<template>
  <img class="home-img" src="https://picsum.photos/1000"/>
  <Carousel :slides="slides" :interval="3000" indicators controls/>
  <Map />
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .home-img {
    width: 100%;
    height: auto;
  }

</style>
