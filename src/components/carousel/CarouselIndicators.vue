<script setup lang="ts">
import { defineProps } from 'vue'

defineEmits(['switch'])

defineProps<{
  imgs: string[]
  currentIndex: number
}>()
</script>

<template>
  <div class="carousel-indicators">
    <button
      class="carousel-indicator-item"
      :class="{active: currentIndex === index}"
      v-for="(item, index) in imgs"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<style>
  .carousel-indicators{
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: .5em;
    z-index: 2;
    align-items: center;
  }

  .carousel-indicator-item {
    width: 12px;
    height: 12px;
    border: none;
    background: #fff;
    margin: 0.2em;
    opacity: .5;
    border-radius: 50%;
    cursor: pointer
  }

  .active {
    opacity: 1;
  }
</style>
