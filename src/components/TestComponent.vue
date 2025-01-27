<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'

  const handleScroll = (): void => {
    const scrollPosition = window.scrollY
    const concealDiv = document.querySelector('.conceal-div') as HTMLElement
    const revealDiv = document.querySelector('.reveal-div') as HTMLElement
    concealDiv.style.transform = `translateY(${scrollPosition}px)`
    revealDiv.style.transform = `translateY(-${scrollPosition * 0.1}px)`
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>

  <div class="conceal-reveal-div">
    <div class="conceal-div">
      <img class="home-img" src="https://picsum.photos/2000/1000"/>
    </div>

    <div class="reveal-div">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis delectus, ex tempora praesentium vel in error
        alias tempore aperiam aut dolor. Sequi impedit esse totam
        ab porro maiores accusamus, ut corrupti expedita ipsum
        doloremque ea, optio iusto pariatur beatae magnam repudiandae
        deleniti distinctio excepturi placeat, eligendi autem in veritatis.
        Pariatur fugiat ex cupiditate dignissimos iste ratione, minus
        consectetur ipsa repudiandae voluptas, id in vel fugit fuga aliquam,
        a illum. Vero tenetur sit architecto ab, ad enim fugit! Ratione
        velit nostrum iste necessitatibus nam deleniti possimus esse
        repellendus nobis corrupti, at provident, iusto nesciunt perspiciatis
        aliquam eum officia cumque. Voluptate, maiores.
      </h1>
    </div>
  </div>
</template>

<style>

  .conceal-reveal-div{
    height: 200vh;
    min-height: 80vh;
    position: relative;
  }

  .conceal-div{
    width: 100vw;
    height: 80vh;
    text-align: center;
    margin: auto;
    position: fixed;
    top: 20vh;
    left: 0;
    right: 0;
    transform: translateY(0);
    background-color: #967BB6;
    z-index: 1;
  }

  .home-img {
    height: auto;
  }

  .reveal-div{
    width: 80vw;
    height: 80vh;
    text-align: center;
    margin: auto;
    position: fixed;
    top:20vh;
    left: 0;
    right: 0;
    transform: translateY(0);
  }

</style>
