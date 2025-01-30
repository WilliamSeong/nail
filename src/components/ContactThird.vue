<script setup lang="ts">

  import { ref } from 'vue';

  const inputValue = ref('');

  async function send() {
    console.log("Test")
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const messageElement = document.getElementById('message') as HTMLInputElement;
    console.log("name:", nameElement.value);
    console.log("email:", emailElement.value);
    console.log("message:", messageElement.value);
    const nameString = nameElement.value;
    const emailString = emailElement.value;
    const messageString = messageElement.value
    console.log("The message is:", messageString)

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
  }

</script>

<template>

  <div class="contact">
    <div class="contact-left">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, in!</p>
    </div>
    
    <div class="contact-right">
      <input id="name" class="name" placeholder="Name">
      <input id="email" class="email" placeholder="Email" v-model="inputValue" :class="{ 'bg-red-100': inputValue === '' }"/>
      <textarea id="message" class="message" placeholder="Message"/>
      <button class="button" @click="send">Submit</button>
    </div>
</div>
</template>

<style>

.contact{
  width: 25%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.contact-left{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  background: transparent;
  width: 90%;
  height:10%;
  margin: 1vmin;
  border-color: white;
  outline: none;
  border-style:solid;
  border-width: 1px;
  font-size: .5vmax;
  color: white;
}

.email{
  background: transparent;
  width: 90%;
  height:10%;
  margin: 1vmin;
  border-color: white;
  outline: none;
  border-style:solid;
  border-width: 1px;
  font-size: .5vmax;
  color: white;
}

.message{
  background: transparent;
  max-width: 90%;
  min-width: 90%;
  max-height: 50%;
  min-height: 50%;
  margin: 1vmin;
  border-color: white;
  outline: none;
  border-style:solid;
  border-width: 1px;
  font-size: .5vmax;
  resize: none;
  color: white;
}

.bg-red-100{
  background: pink;
  border-color: red;
}

::placeholder{
  color: white;
}

.button{
  width: 50%;
  height: 10%;
  border-style: solid;
  border-width: 0;
  background: rgb(161, 229, 164);
}

.button:hover{
  background: white;
}

</style>
