<script setup lang="ts">

    import Stars from "./reviews/ReviewStars.vue";

    defineProps<{
            name : string,
            review : string,
            stars : number,
        }>();

</script>

<template>

    <div class="review-card-container">
        <div class="review-profile">
            <img class="review-profile-img" src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D" />
        </div>
        <div class="review-message">
            Message
        </div>
        <div class="review-provider">
            Google
        </div>
        <div class="review-rating">
            <Stars :stars="stars" />
        </div>
        
    </div>

</template>

<style scoped>

    *{
        outline: 1px red solid;
    }

    .review-card-container{
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 6fr;
        grid-template-rows: 20% 60% 5% 10% 5%;

    }

    .review-profile{
        width: 100%;
        height: 100%;
    }

    .review-profile-img{
        height: 100%;
        width: 100%;
        object-fit: cover;

    }

    .review-message{
        grid-column: span 3;
        grid-row: span 2
    }

    .review-provider{
        grid-row: 3/ span 3;
        grid-column: span 2;
    }

    .review-rating{
        grid-row: 4;
        grid-column: 3;
    }
  

</style>