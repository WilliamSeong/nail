<script setup lang="ts">
async function request() {
  fetch('http://localhost:3000/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

}

async function request1() {
  fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'William'
    })
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}

</script>

<template>
  <div>
    Hello World
  </div>

  <button @click="request">Click me</button>
  <button @click="request1">No Click me</button>
</template>

<style>
</style>
