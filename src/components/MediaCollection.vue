<script setup lang="ts">

  import { ref } from 'vue';
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

  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

  const state = ref(0)

function nextImage() {
  state.value = (state.value + 4) % imgs.length
}

function previousImage() {
  state.value = (state.value - 4 + imgs.length) % imgs.length
}
</script>

<template>
  <div id="img-container">
    <div class="img-row" >
      <img :src="imgs[state % imgs.length]" alt={state} class="img"/><img :src="imgs[(state+1) % imgs.length]" alt={state}+1 class="img"/>
    </div>
    <div class="img-row" >
      <img :src="imgs[(state+2) % imgs.length]" alt={state}+2 class="img"/><img :src="imgs[(state+3) % imgs.length]" :alt=state+3 class="img"/>
    </div>
  </div>
  <button @click="previousImage">Previous</button>
  <button @click="nextImage">Next</button>
</template>

<style>

  *{
    box-sizing: border-box;
    margin: 0;
  }

  #img-container {
    background-color: lavender;
  }

  .img-row {
    display: flex;
  }

  img{
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

</style>
