<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  import Map from "./EmbeddedMap.vue";
  import Carousel from "./ImageCarousel.vue"
  import Nav from "./NavBar.vue"
  import Foot from "./FooterBar.vue"
  import Contact from "./ContactThird.vue";

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

    const vhInPixels = window.innerHeight * 0.1

    background.style.transform = `translateY(${vhInPixels - (scrollPosition * 0.5) }px)`
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
      <div class="home-nav">
        <Nav />
      </div>
      <img class="home-first-img" src="https://picsum.photos/seed/6/5000"/>
       <!-- <p>Image</p> -->
    </div>


    <div class = "home-second">
      <h1>
        Lorem ipsum dolor sit amet.
      </h1>
      <p>
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
      </p>
    </div>


    <div class="home-third">
      <div class="foreground">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, itaque!
        </h1>
      </div>

      <div class="background">
        <img class="home-third-image" src="https://picsum.photos/seed/4/5000"/>
      </div>
    </div>


    <div class="home-fourth">
      <div class="home-menu">
        <ul>
          <li>Reflexology massage</li>
          <li>Toe nail fill-in</li>
          <li>Hand and toe nail fill-in</li>
          <li>Manicure and pedicure</li>
          <li>Nail polish change</li>
          <li>Hand polish change</li>
          <li>Nail polish removal</li>
          <li>Hand polish removal</li>
          <li>Nail repair</li>
          <li>Nail fill-in</li>
          <li>Hand nail fill-in</li>
          <li>Manicure</li>
          <li>Pedicure</li>
          <li>Toe polish change</li>
          <li>Hand and toe polish change</li>
          <li>Toe polish removal</li>
          <li>Hand and toe polish removal</li>
          <li>Waxing</li>
        </ul>
      </div>
    </div>


    <div class="home-fifth">
      <Contact />
    </div>

    <div class="home-sixth">
      <Map />
    </div>

    <div class="home-seventh">
      <Foot />
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
    /* outline: 1px solid red; */
    transition: 1000ms;
  }

  .home-container{
    height: auto;
  }

  .home-first{
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .home-nav{
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  .home-first-img {
    width: 100%;
    height: 60vh;
    position: absolute;
    z-index: 0
  }

  .home-second{
    position: relative;
    width: 100%;
    height: 60vh;
    background: rgb(161, 229, 164);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .home-second h1{
    text-align: center;
    margin-bottom: 2vh;
    font-size: 5vmin;
  }

  .home-second p{
    text-align: center;
    width: 30vw;
    z-index: 1;
    font-family: 'Papyrus', 'Fantasy';
    font-siZe: 1.5vmin;
  }

  .home-third{
    height: 80vh;
    position: relative;
    z-index: 0;
  }

  .foreground{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:  rgb(161, 229, 164, 0);
    height: 50vmin;
    width: 50vmin;
    z-index: 1;
  }

  .foreground h1{
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 3vmin;
    color:  rgb(161, 229, 164);
  }

  .background{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 0;
  }

  .home-third-image{
    width: 100%;
    height: 200vh;
    object-fit: cover;
  }

  .home-fourth{
    height: 60vh;
    background: rgb(255,105,97);
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-menu ul{
    list-style: none;
  }

  .home-fifth{
    background: rgb(167, 199, 231);
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-seventh{
    height: 20vh;
  }

</style>
