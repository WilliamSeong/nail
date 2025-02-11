<script setup lang="ts">

    defineProps<{
            name : string,
            review : string,
            stars : number,
        }>();

</script>

<template>

    <div class="review-card">
        <div class="review-profile">
            <img class="review-profile-img" src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        </div>
        <div class="review-message">
            Message
        </div>
        <div class="review-rating">
            Rating
        </div>
        
    </div>

</template>

<style scoped>

    *{
        outline: 1px red solid;
    }

    .review-card{

        width: 999px;
        height: 333px;

        display: grid;
        grid-template-columns: 1fr 5fr 6fr;
        grid-template-rows: 20% 60% 20%;

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
        grid-column: span 2;
        grid-row: span 2
    }

    .review-rating{
        grid-row: 3;
        grid-column: span 2;
    }
  

</style>