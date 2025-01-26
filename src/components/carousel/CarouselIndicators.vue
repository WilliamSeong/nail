<script setup lang="ts">

  import { ref } from 'vue';

  defineEmits(['switch'])

  defineProps<{
    imgs: string[]
    currentIndex: number
  }>()

  const currentSlide = ref(0);
      const slideDirection = ref('slide-left')

      function handleSlide(index : number, imgs : number) {
        slideDirection.value = index > 0 ? 'slide-left' : 'slide-right'
        currentSlide.value = (currentSlide.value + (index) + imgs) % imgs;
      }
</script>

<template>
  <div class="carousel-indicators">
    <!-- <button
      class="carousel-indicator-item"
      :class="{active: currentIndex === index}"
      v-for="(item, index) in imgs"
      :key="index"
      @click="$emit('switch', index)"
    ></button> -->

    <br />

    <TransitionGroup :name="slideDirection">
      <button
        v-for="(n, index) in 5"
        :key="currentSlide + n"
        class="indicators"
        :class="{active: index === ~~(5/2)}"
        @click="handleSlide(index - ~~(5/2), imgs.length);$emit('switch', index - ~~(5/2)); console.log(index - ~~(5/2))">
      </button>
    </TransitionGroup>
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
    width: 15px;
    height: 15px;
    border: none;
    background: #fff;
    margin: 0.2em;
    opacity: .5;
    border-radius: 50%;
    cursor: pointer
  }

  .indicators {
    width: 15px;
    height: 15px;
    border: none;
    background: #fff;
    margin: 0.2em;
    opacity: .5;
    border-radius: 50%;
    cursor: pointer;
  }

  .indicators:hover {
      opacity: 1;
  }

  .active {
    opacity: 1;
  }

  /* Transitions */

  .slide-left-move,
  .slide-right-move {
      transition: transform 1s;
  }

  .slide-left-enter-active,
  .slide-right-enter-active {
      transition: all 1s;
  }

  .slide-left-leave-active,
  .slide-right-leave-active {
      transition: all 1s;
      position: absolute;
  }

  .slide-left-enter-from,
  .slide-right-leave-to {
      transform: translateX(30px);
      opacity: 0;
  }

  .slide-left-leave-to,
  .slide-right-enter-from {
      transform: translateX(-30px);
      opacity: 0;
  }

  /* .slide-right-enter-active {
      transition: all 1s;
  }

  .slide-right-leave-active {
      transition: all 1s;
      position: absolute;
  }

  .slide-right-enter-from {
      transform: translateX(-30px);
      opacity: 0;
  }

  .slide-right-leave-to {
      transform: translateX(30px);
      opacity: 0;
  } */
</style>
