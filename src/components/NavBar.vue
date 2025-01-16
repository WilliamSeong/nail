<script setup lang="ts">
</script>

<template>
  <div id="header">
    <div id="contents">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/contacta">ContactA</router-link></li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

#header{
  background-color: #967BB6;
  height: auto;
  text-align: center;
  width: auto;
}

#contents{
  margin: 0 auto;
  padding: 10px;
}

ul{
  display: inline-block;
  list-style: none;
}

li:hover {
  border: white 2px solid;
  border-radius: 10px;
  padding: 0px 8px;
}

li{
  display: inline;
  font-size: 3vw;
  list-style-type: none;
  margin: 10px;
  padding: 0px 10px;
  text-align: center;
}

a{
  color: #F2F2F2;
  padding: 0;
  text-decoration: none;
}

</style>
