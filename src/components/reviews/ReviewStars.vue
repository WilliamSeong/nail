<script setup lang="ts">

    defineProps<{
        count : number;
    }>();

</script>

<template>

    <div class="gold-stars" v-for="_ in count">
        <img class="gold-star-img" src="../../assets/star.png" />
    </div>
    <div class="gray-stars" v-for="n in (5-count)">
        <img class="gray-star-img" src="../../assets/star.png" />
    </div>

</template>

<style scoped>

    *{
        /* outline: 2px red solid; */
    }

    .gold-stars
    .gray-stars{
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