<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import Map from "./maps/EmbeddedMap.vue";
  import Carousel from "./carousel/ImageCarousel.vue";
  import Nav from "./NavBar.vue"
  import Foot from "./FooterBar.vue"
  import Contact from "./gmail/ContactInfo.vue";
  import Pop from "./menu/MenuPop.vue";
  import Review from "./reviews/ReviewsComponent.vue";
  import "../styles/themes.css";

  import nail1 from "../assets/nail-media/nail-media-1.jpeg"
  import nail2 from "../assets/nail-media/nail-media-2.jpeg"
  import nail3 from "../assets/nail-media/nail-media-3.jpeg"
  import nail4 from "../assets/nail-media/nail-media-4.jpeg"
  import nail5 from "../assets/nail-media/nail-media-5.jpeg"
  import nail6 from "../assets/nail-media/nail-media-6.jpeg"
  import nail7 from "../assets/nail-media/nail-media-7.jpeg"
  import nail8 from "../assets/nail-media/nail-media-8.jpeg"
  import nail9 from "../assets/nail-media/nail-media-9.jpeg"
  import nail10 from "../assets/nail-media/nail-media-10.jpeg"

  const slides = [nail1,
                  nail2,
                  nail3,
                  nail4,
                  nail5,
                  nail6,
                  nail7,
                  nail8,
                  nail9,
                  nail10
                ];

  const manicureServices = [
                    { name: "Manicure", price: "20" },
                    { name: "French Manicure", price: "25" },
                    { name: "Buffin Manicure", price: "25" },
                    { name: "Change Polish", price: "13" }
                  ];

  const pedicureServices = [
                    { name: "Pedicure", price: "30" },
                    { name: "French Pedicure", price: "35" },
                    { name: "Buffing Pedicure", price: "35" },
                    { name: "Change Polish", price: "15" }
                  ];
  const waxingServices = [
                    { name: "Eyebrows", price: "15" },
                    { name: "Lips", price: "12" },
                    { name: "Chin", price: "13" },
                    { name: "Cheeks", price: "18" }
                  ];


  // const handleScroll = (): void => {
  //   const scrollPosition = window.scrollY
  //   const foreground = document.querySelector('.foreground') as HTMLElement
  //   const background = document.querySelector('.background') as HTMLElement

  //   const vhInPixels = window.innerHeight * 0.1
  //   console.log("vh: ", vhInPixels, "scrollPostion: ", scrollPosition);
  //   console.log("Image location: ", vhInPixels - (scrollPosition * 0.5));
  //   background.style.transform = `translateY(${vhInPixels - (scrollPosition * 0.01) }px)`
  // }

  const reservationSearchString = ref("");

  // onMounted(() => {
  //   window.addEventListener('scroll', handleScroll)
  // })

  // onUnmounted(() => {
  //   window.removeEventListener('scroll', handleScroll)
  // })

</script>

<template>
  <div class="home-container">
    <div class="home-first">
      <div class="home-nav">
        <Nav />
      </div>
      <img class="home-first-img" src="../assets/splash.jpg"/>
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
        <img class="home-third-image" src="../assets/slime.jpg"/>
      </div>
    </div>


    <div class="home-fourth">
      <div class="home-menu">
        <div class="home-menu-left">
          <Pop name="Manicure" :services="manicureServices"/>
          <Pop name="Pedicure" :services="pedicureServices"/>
          <Pop name="Waxing" :services="waxingServices"/>
        </div>

        <div class="home-menu-right">
            <Carousel :slides="slides" :interval="3000" indicators controls/>
        </div>
      </div>
    </div>

    <div class="home-fifth">
      <Map />
    </div>

    <div class="home-sixth">
      <img class="home-sixth-image" src="../assets/light.jpg"/>
      <Contact />
    </div>

    <div class="home-seventh">
      <input id="home-seventh-input" class="home-seventh-input" v-model="reservationSearchString" placeholder="Reservation Code"/>
      <router-link :to="`/reservation/${reservationSearchString}`" custom v-slot="{ navigate }">
        <button @click="navigate" :disabled="!reservationSearchString" class="home-seventh-button">
          Find Reservation
        </button>
      </router-link>
    </div>

    <div class="home-eight">
      <Review />
    </div>

    <div class="home-last">
      <Foot />
    </div>
  </div>
</template>

<style scoped>
  .home-container {
    width: 100%;
  }

  .home-first {
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-nav {
    width: 100%;
    position: fixed;
    z-index: 2;
  }

  .home-first-img {
    width: 100%;
    height: 60vh;
    z-index: 1
  }

  .home-second {
    position: relative;
    width: 100%;
    height: 60vh;
    background: var(--primary-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .home-second h1 {
    text-align: center;
    margin-bottom: 2vh;
    font-size: 5vmin;
    color: var(--text-primary);
  }

  .home-second p {
    text-align: center;
    width: 30vw;
    z-index: 1;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1.5vmin;
    color: var(--text-primary);
  }

  .home-third {
    height: 80vh;
    position: relative;
    z-index: 0;
  }

  .foreground {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--overlay-light);
    height: 50vmin;
    width: 50vmin;
    z-index: 1;
  }

  .foreground h1 {
    height: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 3vmin;
    color: var(--primary-color);
  }

  .background {
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 0;
  }

  .home-third-image {
    width: 100%;
    height: 200vh;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .home-fourth {
    height: 60vh;
    background: var(--primary-light);
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-menu {
    width: 80%;
    height: 100%;
    display: flex;
  }

  .home-menu-left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 0;
  }

  .home-menu-right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-sixth {
    background: var(--primary-light);
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .home-sixth-image{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .home-seventh {
    background: var(--primary-dark);
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .home-seventh-input{
    background: rgba(255,255,255,0.1);
    min-width: 40%;
    width: 40%;
    height: auto;
    margin: 1vmin;
    border-color: white;
    outline: none;
    border-style:solid;
    border-width: 1px;
    font-size: 1.5vmax;
    color: black;
    font-family:'Times New Roman', Times, serif;
  }

  .home-seventh-button{
    border-style: solid;
    border-width: 0;
    background: rgb(238,232,170);
    transition: 1000ms;
    font-size: 1vmax;
    padding: 5px;
    text-decoration: none;
    color: black;
    transition: 500ms;
  }

  .home-seventh-button:hover{
    background: rgb(255,255,255);
  }

  .home-eight{
    background: var(--primary-light);
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .home-last {
    height: 10vh;
    position: relative;
    z-index: 1;
  }

</style>
