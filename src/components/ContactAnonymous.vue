<script setup lang="ts">

function authorize() {
  const clientId = '306538060271-j967kuikaptabd4oq96kuck4oftnvj5o.apps.googleusercontent.com';
  const redirectUri = 'http://localhost:5173/contacta';
  const responseType = 'code';
  const scope = 'https://www.googleapis.com/auth/gmail.send';
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=offline&prompt=consent`;
  window.location.href = url;
}

// http://localhost:5173/contacta?
// code=4/0AanRRru3wc0BDcAhXoC6J3YswYK5jjYq94BCU2p8WJGTCJlJOS5c6hA9q-AYEltgQRSzJA
// &scope=https://www.googleapis.com/auth/gmail.send

async function token() {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      code: 'code',
      client_id: '306538060271-j967kuikaptabd4oq96kuck4oftnvj5o.apps.googleusercontent.com',
      client_secret: 'secret',
      redirect_uri: 'http://localhost:5173/contacta',
      grant_type: 'authorization_code'
    })
  });

  console.log("hello")

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    const data = await response.json();
    console.log(data);
  }

  // refresh token: 1//01b-VG4B5WkZZCgYIARAAGAESNwF-L9Ir8xKzZe-TCjncpf9e-9ZK87rTI77WP11o5nRJjfERTKwuMWl33aljbhit-_CvpvizlZI

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
  <button @click="authorize">Authorize</button>
  <button @click="token">Click me</button>
  <input id="email"/>
  <button @click="send">Send</button>
</template>

<style scoped>

</style>
