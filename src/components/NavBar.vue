<script setup lang="ts">
</script>

<template>
  <div id="header">
    <div id="logo">
      <h1>Nail by Young</h1>
    </div>
    <div id="header-line">
      <hr/>
    </div>
    <div id="contents">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
        <li><router-link to="/contacta">Authorize</router-link></li>
        <li><router-link to="/contactb">Contact</router-link></li>
        <li><router-link to="/carousel">Carousel</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
    </div>
  </div>

</template>

<style>

  *{
    box-sizing: border-box;
  }

  #header{
    background-color: #967BB6;
    height: 20vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  #logo{
    text-align: center;
    color: white;
    font-family: 'Papyrus', fantasy;
  }

  #header-line{
    width: 80vw;
    margin: auto;
  }

  #contents{
    margin-top: auto;
    margin-left: 10vw;
    padding: 1vh;
  }

  ul{
    display: inline-block;
    list-style: none;
  }

  li:hover {
    /* border: white 2px solid; */
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 0px 8px;
  }

  li{
    display: inline;
    font-size: 1.5vw;
    list-style-type: none;
    margin: 10px;
    padding: 0px 8px;
    text-align: center;
  }

  a{
    color: #F2F2F2;
    padding: 0;
    text-decoration: none;
  }

  li:hover a{
    color: #967BB6;
  }

</style>
