<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps<{
    slide: string
    currentSlide: number
    index: number
    direction: string
  }>()

  defineEmits(['mouseenter', 'mouseout'])

</script>

<template>
  <transition :name="direction">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseleave="$emit('mouseout')">
          <img
            :src="slide"
            alt="nail"
            class="carousel-image">
    </div>
  </transition>
</template>

<style>
  .carousel-item{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    inset: 0;
  }

  .carousel-image{
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all 1s ease-in-out;
  }

  .slide-right-enter-from {
    transform: translateX(-100%);
  }

  .slide-right-leave-to {
    transform: translateX(100%);
  }

  .slide-left-enter-from {
    transform: translateX(100%);
  }

  .slide-left-leave-to {
    transform: translateX(-100%);
  }
</style>
