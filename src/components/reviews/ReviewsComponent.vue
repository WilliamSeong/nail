<script setup lang="ts">
    
    import Review from "./ReviewCard.vue"

</script>

<template>
    <div class="review-component-container">
        <div class="review-header">
            <h1>Leave us a review</h1>
        </div>
        <div class="grid">
            <Review name="Sammy White" profilePicture="" review="Amy is the best! She can recreate every design" reviewLink="https://maps.app.goo.gl/PSQb3XVjnFz1P9Ey6" :stars="3"/>
        </div>
        <div class="grid">
            <Review name="william" profilePicture="../assets/avatar.png" review="my review" :stars="3"/>
        </div>
        <div class="grid">
            <Review name="william" review="my review" :stars="3"/>
        </div>
        <div class="grid">
            <Review name="william" review="my review" :stars="3"/>
        </div>
        <div class="grid">
            <Review name="william" review="my review" :stars="3"/>
        </div>
        <div class="grid">
            <Review name="william" review="my review" :stars="3"/>
        </div>
        <div class="button-container">
            <a class="see-more-btn" href="https://www.google.com/search?sca_esv=7db18dec3b276ab8&sxsrf=AHTn8zocmPl_eBxRfR3B4SSM1fpJ4HKjdQ:1739063960761&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kza-c3WaQ39kC07kJ0gflQYcCPHgSsrzT5Y-1daUY2NW7Gn8r3FyreDm9UWMCfolX4XfvysgordT5A8H1AJLNBXQXPZzm&q=Nail+by+Young+Reviews&sa=X&ved=2ahUKEwiDsP2MtrWLAxWfM1kFHTOTDWwQ0bkNegQIHhAE&biw=2397&bih=1400&dpr=1">See Other Reviews</a>
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