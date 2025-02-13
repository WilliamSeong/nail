<script setup lang="ts">

    import Stars from "./ReviewStars.vue";

    defineProps<{
            name : string,
            profilePicture: string,
            review : string,
            reviewLink : string,
            stars : number,
        }>();

</script>

<template>

    <div class="review-card-container">
        <div class="review-profile">
            <img class="review-profile-img" src="../../assets/avatar.png" />
        </div>
        <div class="review-name">
            <a class="review-name-link" :href="reviewLink" target="_blank">{{name}}</a>
        </div>
        <div class="review-message">
            {{review}}
        </div>
        <div class="review-provider">
            <a href="https://g.page/r/CZjBtYPULy-lEBM/review" target="_blank"><img class="review-provider-img" src="../../assets/image.png" /></a>
        </div>
        <div class="review-rating">
            <Stars :count="5" />
        </div>
        
    </div>

</template>

<style scoped>

    *{
        /* outline: 1px red solid; */
    }

    .review-card-container{
        width: 60%;
        height: 90%;

        display: grid;
        grid-template-columns: 10% 90%;
        grid-template-rows: 20% 60% 20%;
        background: white;
        padding: 10px;
        border-radius: min(20px, 3vw);
    }

    .review-profile{
        width: 100%;
        height: 100%;
        grid-row: span 2;
        display: flex;
        align-items: center;
    }

    .review-profile-img{
        width: 100%;
        aspect-ratio: 1;
    }

    .review-name-link{
        text-decoration: none;
        color: black;
        font-size: 1vmax;
    }

    .review-message{
        grid-column: 2;
        grid-row: 2;
    }

    .review-provider{
        grid-row: 3;
        display: flex;
        justify-content: center;
    }

    .review-provider-img{
        height: 100%;
    }

    .review-rating{
        grid-row: 3;
        grid-column: 2;
        display: flex;
    }


  
</style>