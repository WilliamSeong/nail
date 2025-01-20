<script setup lang="ts">
  defineEmits(['next', 'prev'])
</script>

<template>
  <button class="carousel-control left" @click="$emit('prev')">&lt;</button>
  <button class="carousel-control right" @click="$emit('next')">&gt;</button>
</template>

<style>
  .carousel-control{
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    display: inline-block;
    position: absolute;
    top: calc(50% - 10px);
    height: 30px;
    width: 10px;
    color: #f3f3f3;
    cursor: pointer;
  }

  .left{
    left: 0;
  }

  .right{
    right: 0;
  }

</style>
