<script setup lang="ts">
    
    import Review from ".././TestComponent.vue"

</script>

<template>
    <div class="review-component-container">
        <div class="review-header">
            <h1>Leave us a review</h1>
        </div>
        <div class="grid-1">
            <div class="review-card-container">
                <div class="review-profile">
                    image
                </div>
                <div class="review-message">
                    Message
                </div>
                <div class="review-provider">
                    Google
                </div>
                <div class="review-rating">
                    Stars
                </div>
                
            </div>
        </div>
        <div class="grid">
        </div>
        <div class="grid">
        </div>
        <div class="grid">
        </div>
        <div class="grid">
        </div>
        <div class="grid">
        </div>
        <div class="button-container">
            <a class="see-more-btn" href="https://www.google.com/search?sca_esv=7db18dec3b276ab8&sxsrf=AHTn8zocmPl_eBxRfR3B4SSM1fpJ4HKjdQ:1739063960761&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kza-c3WaQ39kC07kJ0gflQYcCPHgSsrzT5Y-1daUY2NW7Gn8r3FyreDm9UWMCfolX4XfvysgordT5A8H1AJLNBXQXPZzm&q=Nail+by+Young+Reviews&sa=X&ved=2ahUKEwiDsP2MtrWLAxWfM1kFHTOTDWwQ0bkNegQIHhAE&biw=2397&bih=1400&dpr=1">See Other Reviews</a>
        </div>
    </div> 
</template>

<style scoped>
    *{
        border: 2px red solid;
    }
    .review-component-container{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 12.5% 25% 25% 25% 12.5%;
    }

    .review-card-container{

        width: 80%;
        height: 100%;

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