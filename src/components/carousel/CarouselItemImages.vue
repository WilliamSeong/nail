<script setup lang="ts">
  import { ref, type PropType } from 'vue';

  const currentSlide = ref(0);

  const props = defineProps({
    slides: {
      type: Array as PropType<string[]>,
      required: true
    }
  })

</script>

<template>
  <div class="carousel-grid">
    <img :src="slides[currentSlide]"/>
    <img :src="slides[currentSlide+1]"/>
    <img :src="slides[currentSlide+2]"/>
    <img :src="slides[currentSlide+3]"/>
  </div>
</template>

<style>
  .carousel-grid{
    width: 400px;
    height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .carousel-grid img {
  width: 200px;
  height: 200px;
}

</style>
