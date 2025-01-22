<script setup lang="ts">

  const imgs = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300",
    "https://picsum.photos/id/240/200/300",
    "https://picsum.photos/id/241/200/300",
    "https://picsum.photos/id/242/200/300",
    "https://picsum.photos/id/243/200/300",
    "https://picsum.photos/id/244/200/300",
    "https://picsum.photos/id/245/200/300",
    "https://picsum.photos/id/246/200/300"
    ]

</script>

<template>

  <div class="test-component">
    <div>
      <button
        class="indicators"
        v-for="(item, index) in imgs"
        :key="index">
      </button>
    </div>
  </div>

</template>

<style scoped>
  .test-component {
      text-align: center;
      margin-top: 50px;
      background: gray;
      height: 100px;
  }

  .indicators {
      width: 12px;
      height: 12px;
      border: none;
      background: #fff;
      margin: 0.2em;
      opacity: .5;
      border-radius: 50%;
      cursor: pointer
  }

  .indicators:hover {
      opacity: 1;
    }
</style>
