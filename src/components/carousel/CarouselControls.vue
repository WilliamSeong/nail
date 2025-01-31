<script setup lang="ts">
  defineEmits(['next', 'prev'])
</script>

<template>
  <div class="carousel-controls">
    <button class="carousel-control left" @click="$emit('prev')">&lt;</button>
    <button class="carousel-control right" @click="$emit('next')">&gt;</button>
  </div>
</template>

<style>
  .carousel-control{
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    display: inline-block;
    position: absolute;
    height: 100%;
    width: 10%;
    color: black;
    cursor: pointer;
  }

  .left{
    left: 0;
  }

  .right{
    right: 0;
  }

</style>
