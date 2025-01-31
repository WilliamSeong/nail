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
        <!-- <li><router-link to="/contacta">Authorize</router-link></li>
        <li><router-link to="/contactb">Contact</router-link></li>
        <li><router-link to="/carousel">Carousel</router-link></li>
        <li><router-link to="/test">Test</router-link></li> -->
      </ul>
    </div>
  </div>

</template>

<style scoped>

  *{
    box-sizing: border-box;
  }

  #header{
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    transition-duration: 500ms;
    transition-duration: background;
  }

  #header:hover{
    background:  rgb(161, 229, 164)
  }

  #header:hover hr{
    visibility: visible;
  }

  #logo{
    text-align: center;
    color:  rgb(161, 229, 164);
    font-family: 'Papyrus', fantasy;
  }

  #header:hover #logo{
    color: white;
  }

  #header-line{
    width: 40vw;
    margin: auto;
    visibility: hidden;
    transition-duration: 500ms;
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
    font-size: 1vw;
    list-style-type: none;
    margin: 10px;
    padding: 0px 8px;
    text-align: center;
  }

  a{
    color:  rgb(161, 229, 164);
    padding: 0;
    text-decoration: none;
  }

  #header:hover a{
    color: white;
  }

  li:hover a{
    color: #A1E5A4;
  }

</style>
