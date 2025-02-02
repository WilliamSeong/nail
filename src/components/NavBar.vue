<script setup lang="ts">
</script>

<template>
  <div class="theme-nordic">

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
        <li><router-link to="/test">Test</router-link></li>
        <!-- <li><router-link to="/contacta">Authorize</router-link></li>
        <li><router-link to="/contactb">Contact</router-link></li>
        <li><router-link to="/carousel">Carousel</router-link></li>
        <li><router-link to="/test">Test</router-link></li> -->
      </ul>
    </div>
  </div>
</div>


</template>

<style scoped>

/* Color scheme variables */
:root {
  /* Primary colors */
  --primary-color: #4CAF50;
  --primary-light: #81C784;
  --primary-dark: #388E3C;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(76, 175, 80, 0.1);
  
  /* Text colors */
  --text-primary: #2C2C2C;
  --text-light: #FFFFFF;
  
  /* Overlay colors */
  --overlay-light: rgba(255, 255, 255, 0.9);
  --overlay-dark: rgba(0, 0, 0, 0.6);
}

/* Ocean Blue Theme */
.theme-ocean {
  /* Primary colors */
  --primary-color: #0277BD;
  --primary-light: #4FC3F7;
  --primary-dark: #01579B;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(2, 119, 189, 0.1);
}

/* Warm Sunset Theme */
.theme-sunset {
  /* Primary colors */
  --primary-color: #FF5722;
  --primary-light: #FFAB91;
  --primary-dark: #D84315;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(255, 87, 34, 0.1);
}

/* Lavender Theme */
.theme-lavender {
  /* Primary colors */
  --primary-color: #7E57C2;
  --primary-light: #B39DDB;
  --primary-dark: #4527A0;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(126, 87, 194, 0.1);
}

/* Modern Mint Theme */
.theme-mint {
  /* Primary colors */
  --primary-color: #26A69A;
  --primary-light: #80CBC4;
  --primary-dark: #00897B;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(38, 166, 154, 0.1);
}

/* Nordic Theme */
.theme-nordic {
  /* Primary colors */
  --primary-color: #546E7A;
  --primary-light: #90A4AE;
  --primary-dark: #37474F;
  
  /* Background colors */
  --bg-light: #FFFFFF;
  --bg-accent: rgba(84, 110, 122, 0.1);
}

* {
  box-sizing: border-box;
}

#header {
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: background 500ms ease;
}

#header:hover {
  background: var(--primary-light);
}

#header:hover hr {
  visibility: visible;
}

#logo {
  text-align: center;
  color: var(--primary-color);
  font-family: Papyrus, Fantasy;
  font-weight: 600;
}

#header:hover #logo {
  color: var(--text-light);
}

#header-line {
  width: 40vw;
  margin: auto;
  visibility: hidden;
  transition: all 500ms ease;
  border-color: var(--text-light);
}

#contents {
  margin-top: auto;
  margin-left: 10vw;
  padding: 1vh;
}

ul {
  display: inline-block;
  list-style: none;
  padding: 0;
}

li {
  display: inline;
  font-size: 1vw;
  list-style-type: none;
  margin: 10px;
  padding: 0 8px;
  text-align: center;
  transition: all 300ms ease;
}

li:hover {
  background-color: var(--overlay-light);
  border-radius: 10px;
  padding: 0 8px;
}

a {
  color: var(--primary-color);
  padding: 0;
  text-decoration: none;
  transition: color 300ms ease;
}

#header:hover a {
  color: var(--text-light);
}

li:hover a {
  color: var(--primary-color);
}

</style>
