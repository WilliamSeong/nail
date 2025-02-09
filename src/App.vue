<script setup lang="ts">

  import "./styles/themes.css";

</script>

<template>
  <div class="page-container">
    <div class="content-wrap">
      <div class="theme-mint">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    box-sizing: border-box;
    background-color: white;
  }

  .page-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
