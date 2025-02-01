<script setup lang="ts">

  import { ref } from 'vue';
  import Item from "./menu/MenuItem.vue"

  const pop = ref(false);

  function popUp() {
    pop.value = !pop.value;
  }
  
</script>

<template>
  <div class="size">
    <div class="content-container">
      <button class="target"
        @click="popUp">
        Click Me!
      </button>

      <div 
        class="pop-up"
        :class="{popout : pop}"
        >
          <Item name="Manicure" price="20"/>
          <Item name="French Manicure" price="25"/>
          <Item name="Buffin Manicure" price="25"/>
          <Item name="Change Polish" price="13"/>
          <Item name="Soak Off Color Gel Manicure" price="39"/>
          <Item name="Soak Off French Gel Manicure" price="48"/>
          <Item name="Spa Manicure" price="35"/>
          <Item name="Kid's Manicure (under 9yr)" price="13"/>
      </div>
    </div>
  </div>
</template>

<style>

  *{
    outline: 2px red solid;
  }
  .content-container{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: pink;
    position: relative;
  }

  .target{
    padding: 1vh 5vw;
    border-radius: min(32px, 3vw);
    background: rgba(255,255,255,0.5);
  }

  .pop-up{
    height: 10vw;
    width: 10vw;
    padding: 1vw;
    display: flex;
    flex-direction: column;
    font-size: 20%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: mintcream;
    position: absolute;
    top: 53vh;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease-in-out;
  }

  .popout{
    height: 10vw;
    width: 10vw;
    padding: 1vw;
    display: flex;
    flex-direction: column;
    font-size: .5vw;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: mintcream;
    position: absolute;
    top: 53vh;
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
</style>
