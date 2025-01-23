<script setup lang="ts">
  import { ref } from 'vue';
  const imgs = [
    "https://picsum.photos/id/237/500/500",
    "https://picsum.photos/id/238/500/500",
    "https://picsum.photos/id/239/500/500",
    "https://picsum.photos/id/240/500/500",
    "https://picsum.photos/id/241/500/500",
    "https://picsum.photos/id/242/500/500",
    "https://picsum.photos/id/243/500/500",
    "https://picsum.photos/id/244/500/500",
    ]

    const currentSlide = ref(0);
    const slideDirection = ref('slide-left')

    function handleSlide(index : number) {
      slideDirection.value = index > 0 ? 'slide-left' : 'slide-right'
      currentSlide.value = (currentSlide.value + (index) + imgs.length) % imgs.length;
    }

</script>

<template>
  <div class="indicators-container">
    <TransitionGroup :name="slideDirection">
      <button v-for="(n, index) in 5"
              :key="currentSlide + n"
              class="indicators"
              @click="handleSlide(index - ~~(5/2))">
      </button>
    </TransitionGroup>
  </div>

  <div class="image-container">
    <img
      v-for="(img, index) in imgs"
      :key="index"
      v-show="index === currentSlide"
      :src="imgs[index]">
  </div>
</template>

<style>
.indicators-container {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 0.4em;
    background: gray;
}

.indicators {
    width: 12px;
    height: 12px;
    border: none;
    background: #fff;
    opacity: .5;
    border-radius: 50%;
    cursor: pointer;
}

.indicators:hover {
    opacity: 1;
}

/* Transitions */
.slide-left-move,
.slide-right-move {
    transition: transform 1s;
}

.slide-left-enter-active {
    transition: all 1s;
}

.slide-left-leave-active {
    transition: all 1s;
    position: absolute;
}

.slide-left-enter-from {
    transform: translateX(30px);
    opacity: 0;
}

.slide-left-leave-to {
    transform: translateX(-30px);
    opacity: 0;
}

.slide-right-enter-active {
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
}
</style>
