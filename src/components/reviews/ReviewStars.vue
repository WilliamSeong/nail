<script setup lang="ts">

    defineProps<{
        stars : number;
    }>();

</script>

<template>

    <div class="star-container">
        <div class="gold-stars" v-for="n in stars">
            <img class="gold-star-img" src="../../assets/star.png" />
        </div>
        <div class="gray-stars" v-for="n in (5-stars)">
            <img class="gray-star-img" src="../../assets/star.png" />
        </div>
    </div>

</template>

<style scoped>

    *{
        /* outline: 2px red solid; */
    }

    .star-container{
        width: 100%;
        height: 100%;
        display: flex;
        /* justify-content: center; */
    }

    .gold-stars
    .gray-stars{
        width: 100%;
        height: 100%;
    }

    .gold-star-img{
        height: 100%;
        object-fit: contain;
    }

    .gray-star-img{
        height: 100%;
        object-fit: contain;
        filter: grayscale();
    }

</style>