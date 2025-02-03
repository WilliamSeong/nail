<script setup lang="ts">

  import Pop from "./menu/MenuPop.vue";

  const manicureServices = [
                    { name: "Manicure", price: "20" },
                    { name: "French Manicure", price: "25" },
                    { name: "Buffin Manicure", price: "25" },
                    { name: "Change Polish", price: "13" }
                  ];

  
</script>

<template>

  <div class="test-container">
    <Pop name="Test" :services="manicureServices" />
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
