<script setup lang="ts">

  import { onMounted, onUnmounted, ref } from 'vue';
  import "../styles/themes.css";

  const headerName = ref("hidden");

  const handleScroll = (): void => {
    const scrollPosition = window.scrollY

    if (scrollPosition === 0) {
      headerName.value = "1";
    } else {
      headerName.value = "0";
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

</script>

<template>

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
      <li class="list-item"><router-link to="/menu" class="list-item-link">Services</router-link></li>
      <li class="list-item"><router-link to="/test" class="list-item-link">Test</router-link></li>
      <li class="list-item"><router-link to="/test2" class="list-item-link">Test2</router-link></li>
      <li class="list-item"><router-link to="/employee/search" class="list-item-link">Employee Search</router-link></li>
      <li class="list-item"><router-link to="/reservation/search" class="list-item-link">Reservation</router-link></li>
    </ul>
  </div>
</div>

</template>

<style scoped>
  .header {
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: 500ms;
    position: fixed;
  }

  .header:hover {
    background: var(--primary-dark)
  }

  .header:hover .header-name{
    color: var(--text-light);
    opacity: 1;
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
    transition: 500ms ease;
    opacity: v-bind(headerName);
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
