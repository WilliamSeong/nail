<script setup lang="ts">

  import { ref } from 'vue';

  const nameValue = ref('');
  const emailValue = ref('');

  async function send() {
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const messageElement = document.getElementById('message') as HTMLInputElement;
    // console.log("name:", nameElement.value);
    // console.log("email:", emailElement.value);
    // console.log("message:", messageElement.value);
    const nameString = nameElement.value;
    const emailString = emailElement.value;
    const messageString = messageElement.value

    if (nameString != "" && emailString != "" && messageString != ""){
      await fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameString,
          email: emailString,
          message: messageString
        })
      })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    } else {
      console.log("Name or email or message was blank")
    }

    nameElement.value = ""
    emailElement.value = ""
    messageElement.value = ""

  }

</script>

<template>

  <div class="contact">
    <div class="contact-left">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, in!</p>
    </div>
    
    <div class="contact-right">
      <input id="name" class="name" placeholder="Name" v-model="nameValue" :class="{ 'empty': nameValue === ''}"/>
      <input id="email" class="email" placeholder="Email" v-model="emailValue" :class="{ 'empty': emailValue === ''}"/>
      <textarea id="message" class="message" placeholder="Message"/>
      <button class="button" @click="send">Submit</button>
    </div>
</div>
</template>

<style scoped>

  .contact{
    width: 25%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  .contact-left{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .contact-left p{
    font-size: 1vmax;
  }

  .contact-right{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .name{
    background: rgba(255,255,255,0.1);
    width: 90%;
    height:10%;
    margin: 1vmin;
    border-color: white;
    outline: none;
    border-style:solid;
    border-width: 1px;
    font-size: 1vmax;
    color: white;
    font-family:'Times New Roman', Times, serif;
  }

  .email{
    background: rgba(255,255,255,0.1);
    width: 90%;
    height:10%;
    margin: 1vmin;
    border-color: white;
    outline: none;
    border-style:solid;
    border-width: 1px;
    font-size: 1vmax;
    color: white;
    font-family:'Times New Roman', Times, serif;
  }

  .message{
    background: rgba(255,255,255,0.1);
    max-width: 90%;
    min-width: 90%;
    max-height: 50%;
    min-height: 50%;
    margin: 1vmin;
    border-color: white;
    outline: none;
    border-style:solid;
    border-width: 1px;
    font-size: .75vmax;
    resize: none;
    color: white;
    font-family:'Times New Roman', Times, serif;
    padding: 2px;
  }

  .empty{
    background: rgba(255,0,0,0.1);
    border-color: rgb(255,0,0);
  }

  ::placeholder{
    color: white;
  }

  .button{
    width: 40%;
    height: 10%;
    border-style: solid;
    border-width: 0;
    background: rgb(255, 233, 175);
    transition: 1000ms
  }

  .button:hover{
    background: white;
  }

</style>
