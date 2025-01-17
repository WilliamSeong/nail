<script setup lang="ts">
async function send(){
  const request = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      raw: encodedMessage
    })
  })

  if (request.ok) {
    console.log('Email sent')
  } else {
    console.log('Email not sent')
  }
};

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
