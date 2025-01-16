<script setup lang="ts">

function authorize() {
  const clientId = '306538060271-j967kuikaptabd4oq96kuck4oftnvj5o.apps.googleusercontent.com';
  const redirectUri = 'http://localhost:5173/contact';
  const responseType = 'token';
  const scope = 'https://www.googleapis.com/auth/gmail.send';
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
  window.location.href = url;
}

async function send(){
  const urlParams = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = urlParams.get('access_token');
  console.log(accessToken)

  const emailElement = document.getElementById('email') as HTMLInputElement
  const message = emailElement ? emailElement.value : 'Hello World'
  console.log(message)

  // Construct MIME message
  const messageParts = [
    'MIME-Version: 1.0',
    'From: "William Seong" <seongwilliam@gmail.com>',
    'To: <seongwilliam@gmail.com>',
    'Subject: Test Email',
    'Content-Type: text/plain; charset=UTF-8',
    '',
    message
  ].join('\r\n');

  const encodedMessage = btoa(messageParts)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

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

</script>

<template>
  <button @click="authorize" target="blank">Authorize</button>

  <input id="email"/>
  <button @click="send">Send</button>
</template>

<style scoped>

</style>
