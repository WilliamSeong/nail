<script setup lang="ts">

  function authorize() {
    const clientId = "306538060271-d63sl9pd4i8el09iis6s9n4cob587rm3.apps.googleusercontent.com";
    const redirectUri = 'http://localhost:5173/contacta';
    const responseType = 'code';
    const scope = 'https://www.googleapis.com/auth/gmail.send';
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=offline&prompt=consent`;
    window.location.href = url;
  }

  async function token() {

    const code = new URLSearchParams(window.location.search).get('code');

    console.log(code);

    await fetch("http://localhost:3000/token", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code,
      })
    })
  }

</script>

<template>
  <button @click="authorize">Authorize</button>
  <button @click="token">Refresh Token</button>
</template>

<style scoped>

</style>
