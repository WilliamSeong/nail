<script setup lang="ts">

  import "../styles/themes.css";

</script>

<template>
  <div class="theme-ocean">

  <div class="header">
    <div class="header-name">
      Nail by Young
    </div>
    <div class="header-line">
      <hr/>
    </div>
    <div class="links">
      <ul class="link-list">
        <li class="list-item"><router-link to="/" class="list-item-link">Home</router-link></li>
        <li class="list-item"><router-link to="/menu" class="list-item-link">Menu</router-link></li>
        <li class="list-item"><router-link to="/test" class="list-item-link">Test</router-link></li>
      </ul>
    </div>
  </div>
</div>


</template>

<style scoped>

/* Color scheme variables */
  * {
    box-sizing: border-box;
    /* outline: 2px red solid; */
  }

  .header {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: 500ms;
  }

  .header:hover {
    background: var(--primary-light)
  }

  .header:hover .header-name{
    color: var(--text-light);
  }

  .header:hover .header-line{
    opacity: 1;
  }

  .header:hover .list-item-link {
    color: var(--text-light);
    opacity: 1;
  }

  .header-name{
    width: 50vw;
    height: auto;
    margin: 0 auto;
    margin-top: 2vh;
    text-align: center;
    font-family: Papyrus, Fantasy;
    font-weight: 700;
    font-size: 3vw;
    color: var(--primary-dark);
    transition: 500ms;
  }

  .header-line {
    width: 40vw;
    margin: auto;
    opacity: 0;
    transition: 500ms;
  }

  .links {
    width: 80vw;
    margin: 0 auto;
    padding: 1vh;
  }

  .link-list {
    display: flex;
    list-style: none;
    padding: 0;
  }

  .list-item {
    font-size: 1vw;
    list-style-type: none;
    margin: 0 1vw;
  }

  .list-item-link {
    color: var(--text-light);
    opacity: 0;
    text-decoration: none;
    transition: 500ms;
  }

</style>
