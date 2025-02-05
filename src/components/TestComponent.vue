<script setup lang="ts">

  async function insert() {
    await fetch("http://localhost:3000/insert")
    .then(result => result.json)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  async function read() {
    await fetch("http://localhost:3000/read")
    .then(result => result.json)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  async function readMany() {
    await fetch("http://localhost:3000/read/many")
    .then(result => result.json)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }
  
  async function update() {
    await fetch("http://localhost:3000/update")
    .then(result => result.json)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  async function upsert() {
    await fetch("http://localhost:3000/upsert")
    .then(result => result.json)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  async function updateMany() {
    await fetch("http://localhost:3000/update/many")
    .then(result => result.json)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  async function deleteDocument() {
    await fetch("http://localhost:3000/delete")
    .then(result => result.json)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  async function deleteMany() {
    await fetch("http://localhost:3000/delete/many")
    .then(result => result.json)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }
</script>

<template>

  <div class="test-container">
    <button @click="insert">Insert</button>
    <button @click="read">Read</button>
    <button @click="readMany">Read Many</button>
    <button @click="update">Update</button>
    <button @click="upsert">Upsert</button>
    <button @click="updateMany">Update Many</button>
    <button @click="deleteDocument">Delete</button>
    <button @click="deleteMany">Delete Many</button>
  </div>
    
</template>

<style scoped>

  *{
    outline: 2px red solid;
  }

  .test-container{
    width: 50%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
