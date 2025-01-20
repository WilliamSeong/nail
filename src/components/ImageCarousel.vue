<script setup lang="ts">

  import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue';

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

  import CarouselItem from "./carousel/CarouselItem.vue";
  import CarouselControls from './carousel/CarouselControls.vue';
  import CarouselIndicators from './carousel/CarouselIndicators.vue';

  const currentSlide = ref(0);
  const slideInterval = ref<number | undefined>(undefined);
  const direction = ref('slide-right');

  const props = defineProps({
    // slides: {
    //   type: Array,
    //   required: true
    // },
    controls: {
      type: Boolean,
      default: true
    },
    indicators: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  });

  const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  function setCurrentSlide(nextSlide: number){
    currentSlide.value = nextSlide;
  }

  function setDirection(newDirection: string){
    direction.value = newDirection;
  }

  function startSlideTimer() {
    stopSlideTimer();
    slideInterval.value = setInterval(() => {
      next();
    }, props.interval);
  }

  function stopSlideTimer() {
    clearInterval(slideInterval.value);
  }

  onMounted(() => {
    startSlideTimer();
  });
  onBeforeUnmount(() => {
    stopSlideTimer();
  });

  function prev(step = -1) {
    const prevSlide = currentSlide.value > 0 ? currentSlide.value - step : slides.length - 1;
    setCurrentSlide(prevSlide);
    setDirection('slide-left');
    startSlideTimer()
  }

  function next(step = 1) {
    const nextSlide = currentSlide.value < slides.length - 1 ? currentSlide.value + step : 0;
    setCurrentSlide(nextSlide);
    setDirection('slide-right');
    startSlideTimer()
  }

  function switchSlide(index : number){
    const step = index-currentSlide.value
    if (step > 0){
      next(step)
    } else if (step < 0){
      prev(-step)
    }
  }

</script>

<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CarouselIndicators
        v-if="indicators"
        :imgs="slides"
        :currentIndex="currentSlide"
        @switch="switchSlide($event)"
      />

      <CarouselItem
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        :slide="slide"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
      />
      <CarouselControls
        v-if="controls"
        @prev="prev"
        @next="next"/>
    </div>
  </div>
</template>


<style>
  .carousel{
    display: flex;
    justify-content: center;
  }

  .carousel-inner{
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
</style>
