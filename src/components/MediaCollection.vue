<script setup lang="ts">
  import { ref } from 'vue';

  const state = ref('')

  async function click() {
    const response = await fetch('https://graph.facebook.com/facebook/picture?redirect=false')
    .then(response => response.json())
    .catch(error => console.error('Error:', error));

    console.log(response.data.url)
    state.value = response.data.url
  }

</script>

<template>
  <div>
    <button @click="click">Click me</button>
    <img :src="state" alt="Facebook"/>
  </div>
</template>

<style>

</style>
