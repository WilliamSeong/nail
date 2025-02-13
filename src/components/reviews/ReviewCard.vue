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
        <a class="review-card-container" :href="reviewLink" target="_blank">
            <div class="review-profile">
                <img class="review-profile-img" src="../../assets/avatar.png" />
            </div>
            <div class="review-name">
                <p>{{ name }}</p>
            </div>
            <div class="review-message">
                {{review}}
            </div>
            <div class="review-provider">
                <a href="https://g.page/r/CZjBtYPULy-lEBM/review" target="_blank"><img class="review-provider-img" src="../../assets/image.png" /></a>
            </div>
            <div class="review-rating">
                <Stars :count="stars" />
            </div>
            
        </a>

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

        text-decoration: none;
        color: black;

        transition: 250ms;
    }

    .review-card-container:hover{
        transform: scale(1.1);
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

    .review-name{
        font-size: 1vw;
        font-family: Papyrus, Fantasy
    }

    .review-message{
        padding: .5vw 0;
        grid-column: 2;
        grid-row: 2;
        font-family: "Open Sans"
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