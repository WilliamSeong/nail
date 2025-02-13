<script setup lang="ts">
    
    import Review from "./ReviewCard.vue"

</script>

<template>
    <div class="review-component-container">
        <div class="review-header">
            <h1>Leave us a review</h1>
        </div>
        <div class="grid">
            <Review name="Sammy White" profilePicture="" review="Amy is the best! She can recreate every design" reviewLink="https://maps.app.goo.gl/PSQb3XVjnFz1P9Ey6" :stars="5"/>
        </div>
        <div class="grid">
            <Review name="Mallory Collins" profilePicture="" review="Did a beautiful job, took their time and were so kind! Would come again :)" reviewLink="https://maps.app.goo.gl/TneKHPpq44bQXXoQ7" :stars="5"/>
        </div>
        <div class="grid">
            <Review name="Jordana Levi" profilePicture="" review="Really nice experience! The ladies are so nice and so comforting. They take off your coat for you, help you put on your shoes back on, and give very good massages. I only got a gel mani/pedi but I saw others getting a gel-x design. They were amazing! Highly recommend" reviewLink="https://maps.app.goo.gl/TneKHPpq44bQXXoQ7" :stars="5"/>
        </div>
        <div class="grid">
            <Review name="Penny Smart" profilePicture="" review="I’ve been coming here for years. Always polite and friendly. They do a great job!" reviewLink="https://maps.app.goo.gl/TneKHPpq44bQXXoQ7" :stars="5"/>
        </div>
        <div class="grid">
            <Review name="Ryan Borgen" profilePicture="" review="Got a gel manicure and my 5 year old got a manicure. Employees were very friendly and accommodating. Our nails look great. I could tell they take great care with cleanliness and sanitizing. Edit: two weeks later my gel manicure still looks perfect." reviewLink="https://maps.app.goo.gl/TneKHPpq44bQXXoQ7" :stars="5"/>
        </div>
        <div class="grid">
            <Review name="Isabella Smith" profilePicture="" review="Gel manicure from Veronica was perfect! She is very meticulous yet still efficient and everything was very clean. Prices super reasonable for the quality. Just make sure to make an appointment in advance" reviewLink="https://maps.app.goo.gl/TneKHPpq44bQXXoQ7" :stars="5"/>
        </div>
        <div class="button-container">
            <a class="see-more-btn" href="https://g.page/r/CZjBtYPULy-lEBM/review">Leave a Review!</a>
        </div>
    </div> 
</template>

<style scoped>
    *{
        /* border: 2px red solid; */
    }
    .review-component-container{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 12.5% 25% 25% 25% 12.5%;
    }

    

    .grid{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .review-header{
        position: relative;
        grid-column: 1/ span 2;
        grid-row: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .profile-pic {
        width: 5%;
        aspect-ratio: 1;
        border-radius: 50%;
    }

    .profile-pic.left {
        margin-right: -10px;  /* Adjust if you want the circle closer to the review */
    }

    .profile-pic.right {
        margin-left: -10px;  /* Adjust if you want the circle closer to the review */
    }

    .button-container {
        position: relative;
        grid-column: 1 / span 2;
        grid-row: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .see-more-btn {
        padding: 12px 24px;
        background-color: #4A90E2;
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-decoration: none;
    }

    .see-more-btn:hover {
        background-color: #357ABD;
    }

</style>