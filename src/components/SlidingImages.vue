<script setup lang="ts">
import { ref } from 'vue';
import img1 from "../assets/nail-img-1.jpg";
import img2 from "../assets/nail-img-2.jpg";
import img3 from "../assets/nail-img-3.jpg";
import img4 from "../assets/nail-img-4.jpg";

const state = ref(true)
const index = ref(0)
const direction = ref('right')

function nextImage() {
  state.value = false
  index.value+= 3
  direction.value = 'right'
  setTimeout(() => {
    state.value = true
  }, 500)
}

function previousImage() {
  state.value = false
  index.value = (index.value - 3 + img.length) % img.length // in case we go negative
  direction.value = 'left'
  setTimeout(() => {
    state.value = true
  }, 500)
}

const img = [img1, img2, img3, img4]
</script>

<template>

  <div id="slides">
    <Transition  :name="direction === 'right' ? 'slide-fade-reverse' : 'slide-fade'">
      <img v-if="state" class="header-img" :src="img[(index) % img.length]" alt="nail">
    </Transition>
    <Transition  :name="direction === 'right' ? 'slide-fade-reverse' : 'slide-fade'">
      <img v-if="state" class="header-img" :src="img[(index+1) % img.length]" alt="nail">
    </Transition>
    <Transition  :name="direction === 'right' ? 'slide-fade-reverse' : 'slide-fade'">
      <img v-if="state" class="header-img" :src="img[(index+2) % img.length]" alt="nail">
    </Transition>
  </div>
  <div class="button-container">
    <img id="left" @click="previousImage" src="../assets/Left-arrow.jpg" alt="left">
    <img id="right" @click="nextImage" src="../assets/Right-arrow.jpg" alt="right">
  </div>

</template>

<!-- On button click, the direction is being assigned and the state is changed to false -->

<style>

#slides {
  width: 100vw;
  text-align: center;
}

.header-img {
  width: auto;
  height: 50vh;
  margin-top: 5vh;
  object-fit: contain;
}

.button-container {
  display: flex;
  justify-content: center;
}

#left{
  width: 10vw;
  padding: 1vw;
  border-radius: 100%;
  /* border: 1px solid black; */
}

#left:hover{
  cursor: grab;
}

#right{
  width: 10vw;
  padding: 1vw;
  border-radius: 100%;
  /* border: 1px solid black; */
}

#right:hover{
  cursor: grab;
}

/* Transitions */

/* Clicking the left button */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .5s linear;
}

.slide-fade-enter-from {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

/* Clicking the right button */
.slide-fade-reverse-enter-active,
.slide-fade-reverse-leave-active {
  transition: all .5s linear;
}

.slide-fade-reverse-enter-from {
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-reverse-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-reverse-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-reverse-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
