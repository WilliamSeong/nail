<script setup lang="ts">

  import { ref } from 'vue';
  import Item from "./MenuItem.vue"

  const pop = ref(false);

  function popUp() {
    pop.value = !pop.value;
    console.log("Click!");
  }

  interface Service {
    name: string;
    price: string;
  }


  defineProps<{
    name: String,
    services: Service[],
  }>();
  
</script>

<template>


  <div class="target-popup">

    <div class="target"  @click="popUp">{{ name }}</div>

    <div class="pop-up" :class="{popout : pop}">

        <div class="pop-up-items" v-for="service in services" :key="service.name">
            <Item :name="service.name" :price="service.price" />
        </div>

        <div class="menu-router-link">
            <router-link to="/menu" class="router-link">see menu</router-link>
        </div>

    </div>

  </div>


</template>

<style scoped>

  *{
    /* outline: 2px red solid; */
    /* transition: 1000ms; */
  }

  .target-popup{
    position: relative;

    width: 75%;
    height: 25%;
    margin: 1vw;
    border-radius: min(32px, 3vw);

    background: rgba(255,255,255,0.5);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .target{
    font-size: 2vw;
    font-family: Papyrus, fantasy;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .pop-up{
    width: 80%;
    padding: 1vw;
    border-radius: min(32px, 3vw);

    background: rgba(255,255,255,0.9);

    position: absolute;
    top: 90%;
    transform: scale(0);

    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 9999;
  }

  .popout{
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  .pop-up-items{
    width: 100%;
  }

  .menu-router-link{
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    position: absolute;
    right: 5%;
    bottom: 5%;
  }

</style>
