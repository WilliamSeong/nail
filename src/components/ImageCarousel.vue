<script setup lang="ts">

  import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue';
  import type { PropType } from 'vue';

  import CarouselItem from "./carousel/CarouselItem.vue";
  import CarouselControls from './carousel/CarouselControls.vue';
  import CarouselIndicators from './carousel/CarouselIndicators.vue';

  const currentSlide = ref(0);
  const slideInterval = ref<number | undefined>(undefined);
  const direction = ref('slide-right');
  const showIndicators = ref(false);
  const showControls = ref(false);

  const props = defineProps({
    slides: {
      type: Array as PropType<string[]>,
      required: true
    },
    controls: {
      type: Boolean,
      default: false
    },
    indicators: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 5000
    }
  });
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
    const prevSlide = currentSlide.value > 0 ? currentSlide.value + step : props.slides.length - 1;
    setCurrentSlide((prevSlide + props.slides.length) % props.slides.length);
    setDirection('slide-right');
  }

  function next(step = 1) {
    const nextSlide = currentSlide.value < props.slides.length - 1 ? currentSlide.value + step : 0;
    setCurrentSlide((nextSlide + props.slides.length) % props.slides.length);
    setDirection('slide-left');
  }

  function switchSlide(index : number){
    // const step = currentSlide.value + index
    if (index > 0){
      next(index)
    } else if (index < 0){
      prev(index)
    }
  }

  function offHover(){
    startSlideTimer();
    setIndicatorOff();
    setControlOff();
  };

  function onHover(){
    stopSlideTimer();
    setIndicatorOn();
    setControlOn();
  };

  function setIndicatorOn() {
    showIndicators.value = true;
  }

  function setIndicatorOff() {
    showIndicators.value = false;
  }


  function setControlOn() {
    showControls.value = true;
  }

  function setControlOff() {
    showControls.value = false;
  }

</script>

<template>
  <div class="carousel">
    <div class="carousel-inner"
      @mouseenter="onHover"
      @mouseleave="offHover">

      <CarouselItem
        v-for="(slide, index) in props.slides"
        :key="`item-${index}`"
        :slide="slide"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
      />

      <Transition name="fade-in">
        <CarouselControls
          v-if="props.controls && showControls"
          @prev="prev"
          @next="next"/>
      </Transition>

      <Transition name="fade-in">
        <CarouselIndicators
          v-if="props.indicators && showIndicators"
          :imgs="slides"
          :currentIndex="currentSlide"
          @switch="switchSlide($event)"/>
      </Transition>
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

  .fade-in-enter-active,
  .fade-in-leave-active {
    transition: all .5s;
  }

  .fade-in-enter-from{
    opacity: 0;
  }

  .fade-in-leave-to {
    opacity: 0;
  }
</style>
