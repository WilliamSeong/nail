<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  import Map from "./EmbeddedMap.vue";
  import Carousel from "./ImageCarousel.vue"

  const slides = ["../assets/nail-media/nail-media-1.jpeg",
                  "../assets/nail-media/nail-media-2.jpeg",
                  "../assets/nail-media/nail-media-3.jpeg",
                  "../assets/nail-media/nail-media-4.jpeg",
                  "../assets/nail-media/nail-media-5.jpeg",
                  "../assets/nail-media/nail-media-6.jpeg",
                  "../assets/nail-media/nail-media-7.jpeg",
                  "../assets/nail-media/nail-media-8.jpeg",
                  "../assets/nail-media/nail-media-9.jpeg",
                  "../assets/nail-media/nail-media-10.jpeg"
                ];

  const handleScroll = (): void => {
    const scrollPosition = window.scrollY
    const foreground = document.querySelector('.foreground') as HTMLElement
    const background = document.querySelector('.background') as HTMLElement

    const vhInPixels = window.innerHeight * 1

    background.style.transform = `translateY(${vhInPixels - scrollPosition}px)`
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

</script>

<template>
  <div class="home-container">
    <div class="home-first">
      <!-- <img class="home-first-img" src="https://picsum.photos/1000"/> -->
       <p>Image</p>
    </div>
    <div class = "home-second">
      <h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Hic, assumenda, dolor maxime ut non id deleniti mollitia
        modi laudantium maiores aut quaerat ipsam. Impedit, ex.
        Amet ad sint, praesentium, aliquid perspiciatis natus
        aliquam expedita, vel eveniet consequuntur odit temporibus!
        Quos alias numquam consequuntur. Temporibus expedita
        laborum debitis, voluptatibus perspiciatis porro culpa et
        soluta accusamus iure eum excepturi. Deleniti nobis enim
        aperiam earum doloremque voluptatum tempora quos dolor
        obcaecati atque. Laborum repellat doloremque ipsum obcaecati
        at! Ipsam ex dolore beatae maiores repellendus repellat
        reiciendis illum, excepturi ducimus ratione tenetur nemo
        voluptate commodi vero officia, nam eligendi nisi veniam
        nulla? Amet harum adipisci repudiandae porro blanditiis,
        deleniti quia neque. Nam omnis cum obcaecati provident
        tempore debitis maiores delectus numquam nesciunt
        exercitationem veniam, illum magni officia animi unde eius
        recusandae fugiat nemo dolores?
      </h3>
    </div>
    <div class="home-third">
      <div class="foreground">

      </div>

      <div class="background">
        <img class="home-third-image" src="https://picsum.photos/5000"/>
      </div>
    </div>
  </div>



  <!-- <Carousel :slides="slides" :interval="3000" indicators controls/>
  <Map /> -->
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .home-container{
    height: 1000vh;
  }

  .home-first{
    min-height: 100vh;
    max-height: 100vh;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .home-first-img {
    width: 100%;
    max-height: 100vh;
  }

  .home-second{
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: auto;
    background: paleturquoise;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .home-second h3{
    text-align: center;
    width: 50vw;
    z-index: 1;
  }

  .home-third{
    height: 400vh;
    position: relative;
    z-index: 0
  }

  .foreground{
    position: absolute;
    top: 25vh;
    left: 25vw;
    height: 50vh;
    background: lavender;
    width: 50vw;
    z-index: 1;

  }

  .background{
    position: absolute;
    top: 0;
    left: 0;
    height: 400vh;
    width: 100vw;
    z-index: 0;
  }

  .home-third-image{
    width: 100vw;
    height: 400vh;
  }

</style>
