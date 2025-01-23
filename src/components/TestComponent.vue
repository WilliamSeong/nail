<script setup lang="ts">
import { ref, TransitionGroup } from 'vue';

  const imgs = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300",
    "https://picsum.photos/id/240/200/300",
    "https://picsum.photos/id/241/200/300",
    "https://picsum.photos/id/242/200/300",
    "https://picsum.photos/id/243/200/300",
    "https://picsum.photos/id/244/200/300",
    ]

    const currentSlide = ref(0);
    const transitionTime = ref(true);
    const indicatorCount = 5

    function setTransitionTime() {
      transitionTime.value = false;
      setTimeout(() => {
        transitionTime.value = true;
      }, 10);
    }

    function prev() {
      currentSlide.value--;
      setTransitionTime();
    }

    function next() {
      currentSlide.value++;
      setTransitionTime();
    }

</script>

<template>

  <div class="test-component">

      <button @click="prev">Prev</button>
      <p>{{currentSlide}}</p>
      <button @click="next">Next</button>
      <br/>
      <TransitionGroup name="slide-in">
        <button
          v-for="(_, index) in indicatorCount"
          :key="index"
          class="indicators"
          :class="{'active':  (index < ~~(indicatorCount / 2) && (~~(indicatorCount / 2)) - index > currentSlide) ||
                              (index > ~~(indicatorCount / 2) && index - (~~(indicatorCount / 2)) > imgs.length - 1 - currentSlide)}"
          >
          <!--  -->
          <!--
                The rule is if there are no slides before the current slide then 0 button does not show
                If there are slides after the current slide then the 2 button does not shows
                If there are slides before and after the current slide then all buttons show

                If the differnce between the current button id and the middle button id
                is less than the current slide and the difference is greater than the current slide
                -->
        </button>
      </TransitionGroup>

      <br/>
      <img
        v-for="(item, index) in imgs"
        :src="item"
        :key="index"
        v-show="currentSlide === index"
        alt="nail"
        class="carousel-image">

        <br/>


        <button @click="slide"> Slide </button><br/>
        <button
          v-for="(_, index) in indicatorCount"
          :key="index"
          class="indicators"
          >
      </button>
  </div>

</template>

<style scoped>
  .test-component {
      text-align: center;
      margin-top: 50px;
      background: gray;
      height: 100vh;
  }
  .indicators {
      width: 12px;
      height: 12px;
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
    opacity: 0;
  }

  .slide-in-enter-active{
    transition: all 1s;
  }

  .slide-in-enter-from {
    transform: translateX(100%);
  }
</style>
