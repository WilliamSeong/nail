<script setup lang="ts">
</script>

<template>
  <div id="footer-bar">
    <div class="logos">
      <a href="https://www.instagram.com/amy_nailbyyoung/" target="_blank">
        <img class="logo" src="../assets/ig-logo.png" alt="instagram">
      </a>
      <a href="https://www.facebook.com/profile.php?id=100066584501666" target="_blank">
        <img class="logo" src="../assets/fb-min.png" alt="facebook">
      </a>
      <a href="https://www.yelp.com/biz/nail-by-young-new-york" target="_blank">
        <img class="logo" src="../assets/yelp-min.png" alt="facebook">
      </a>
    </div>
    <div class="copyright">
      <p>
        ©2025 by WS
      </p>
    </div>
  </div>
</template>

<style scoped>
  #footer-bar {
    width: 100%;
    height: 100%;
    background: var(--primary-dark);
    color: white;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .logos {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .logo {
    max-height: 2vh;
    width: auto;
    filter: grayscale(1);
    gap: 10px;
  }

  .copyright {
    color: black;
    margin-left: auto;
    margin-top: auto;
  }

  
</style>
