<script setup lang="ts">

  async function test() {
    console.log("Test")
    const emailElement = document.getElementById('email') as HTMLInputElement
    const message = emailElement ? emailElement.value : 'Hello World'
    console.log(message)

    const response = await fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message
      })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }

</script>

<template>
  <input id="email"/>
  <button @click="test">Send</button>
</template>

<style scoped>
</style>
