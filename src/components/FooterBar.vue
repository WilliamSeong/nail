<script setup lang="ts">
</script>

<template>
  <div id="footer-bar">
    <p id="copyright">copyright</p>
    <a href="https://www.instagram.com/amy_nailbyyoung/" target="_blank">
      <img id="instagram-logo" src="../assets/ig-logo.png" alt="instagram">
    </a>
  </div>
</template>

<style>
  #footer-bar {
    width: 100%;
    height: 10vh;
    background-color: #333;
    color: white;
    margin-top: auto;
    display: flex;
    align-items: flex-end;
  }

  #copyright {
    display: inline-block;
  }

  #instagram-logo {
    max-height: 5vh;
    width: auto;
  }
</style>
