<script setup lang="ts">

  import { ref } from 'vue';
  import Item from "./menu/MenuItem.vue"

  const pop = ref(false);

  function popUp() {
    pop.value = !pop.value;
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
    <div class="content-container">
      <button class="target"
        @click="popUp">
        {{ name }}
      </button>

      <div 
        class="pop-up"
        :class="{popout : pop}"
        >
          <div class="pop-up-items" v-for="service in services" :key="service.name">
            <Item :name="service.name" :price="service.price" />
          </div>
      </div>
    </div>
</template>

<style>

  *{
    /* outline: 2px red solid;
    transition: 1000ms; */
  }
  .content-container{
    position: relative;
    width: 90%;
    height: 20%;
    margin: 2vw;
    
  }

  .target{
    padding: 1vh 5vw;
    border-radius: min(32px, 3vw);
    background: rgba(255,255,255,0.5);
    width: 100%;
    height: 100%;
    font-size:2vw;
  }

  .pop-up{
    height: auto;
    width: 25vw;
    padding: 1vw;
    background: white;
    border-radius: min(32px, 3vw);

    position: absolute;
    left: 50%;
    transform: translateX(-50%) scale(0);

    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .pop-up-items{
    width: 100%;
  }

  .popout{
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) scale(1);  /* Update this to maintain centering */
  }
</style>
