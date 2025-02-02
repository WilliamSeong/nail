<script setup lang="ts">

  import { ref } from 'vue';
  import Item from "./MenuItem.vue"

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
            <div class="menu-router-link">
                <router-link to="/menu" class="router-link">
                    see menu
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

  *{
    outline: 2px red solid;
    transition: 1000ms;
  }

  .target{
    padding: 1vh 1vw;
    border-radius: min(32px, 3vw);
    background: rgba(255,255,255,0.5);
    width: 100%;
    height: 100%;
    font-size:2vw;
    border-width: 0;
    font-family: Papyrus, Fantasy;
  }

  .target:hover{
    cursor: pointer;
    background: rgba(255,255,255,1);
  }

  .pop-up{
    height: auto;
    width: 25vw;
    padding: 1vw;
    background: white;
    border-radius: min(32px, 3vw);

    position: relative;
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
    z-index: 9999;
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
    right: 10%;
    bottom: 5%;
  }

  .popout{
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
</style>
