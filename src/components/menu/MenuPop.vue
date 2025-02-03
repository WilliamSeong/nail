<script setup lang="ts">

  import { ref } from 'vue';
  import Item from "./MenuItem.vue"
  import "../../styles/themes.css";

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
            <router-link to="/menu" class="menu-router-link-text">see menu</router-link>
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
    height: auto;
    min-height: 120px;
    margin: 1.5rem auto;
    border-radius: 1rem;

    background: var(--bg-light);
    box-shadow: 0 4px 6px var(--shadow-color);

    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

  }

  .target-popup:hover {
    transform: translateY(-5%);
    box-shadow: 0 6px 12px var(--shadow-color);
    z-index: 9999;
  }

  .target{
    font-size: 2vw;
    font-family: Papyrus, Fantasy;
    color: var(--primary-dark);
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  .pop-up{
    width: 90%;
    max-width: 400px;
    padding: 1vw;
    border-radius: min(32px, 3vw);

    background: var(--overlay-light);
    box-shadow: 0 8px 16px var(--shadow-color);

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
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 9999;
  }

  .popout{
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .pop-up-items{
    width: 100%;
  }

  .menu-router-link{
    width: auto;
    height: auto;
    position: absolute;
    right: 5%;
    bottom: 5%;
  }

  .menu-router-link-text{
    color: var(--primary-light);
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }

  .menu-router-link-text:hover {
    color: var(--primary-dark);
  }


</style>
