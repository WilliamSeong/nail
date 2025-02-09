<script setup lang="ts">

</script>

<template>
    <div class="review-container">
        <div class="review-header">
            <h1>Leave us a review</h1>
        </div>
        <div class="grid">
            <img class="profile-pic left" src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D">
            <div class="review">
                Got a gel manicure and my 5 year old got a manicure. Employees were very friendly and accommodating. Our nails look great. I could tell they take great care with cleanliness and sanitizing.

                Edit: two weeks later my gel manicure still looks perfect.
            </div> 
        </div>
        <div class="grid">
            <div class="review">
                Got a gel manicure and my 5 year old got a manicure. Employees were very friendly and accommodating. Our nails look great. I could tell they take great care with cleanliness and sanitizing.

                Edit: two weeks later my gel manicure still looks perfect.
            </div> 
            <img class="profile-pic left" src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D">
        </div>
        <div class="grid">
            <img class="profile-pic left" src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D">
            <div class="review">
                Got a gel manicure and my 5 year old got a manicure. Employees were very friendly and accommodating. Our nails look great. I could tell they take great care with cleanliness and sanitizing.

                Edit: two weeks later my gel manicure still looks perfect.
            </div> 
        </div>
        <div class="grid">
            <div class="review">
                Got a gel manicure and my 5 year old got a manicure. Employees were very friendly and accommodating. Our nails look great. I could tell they take great care with cleanliness and sanitizing.

                Edit: two weeks later my gel manicure still looks perfect.
            </div> 
            <img class="profile-pic left" src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D">
        </div>
        <div class="grid">
            <img class="profile-pic left" src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D">
            <div class="review">
                Got a gel manicure and my 5 year old got a manicure. Employees were very friendly and accommodating. Our nails look great. I could tell they take great care with cleanliness and sanitizing.

                Edit: two weeks later my gel manicure still looks perfect.
            </div> 
        </div>
        <div class="grid">
            <div class="review">
                Got a gel manicure and my 5 year old got a manicure. Employees were very friendly and accommodating. Our nails look great. I could tell they take great care with cleanliness and sanitizing.

                Edit: two weeks later my gel manicure still looks perfect.
            </div> 
            <img class="profile-pic left" src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D">
        </div>
        <div class="button-container">
            <a class="see-more-btn" href="https://www.google.com/search?sca_esv=7db18dec3b276ab8&sxsrf=AHTn8zocmPl_eBxRfR3B4SSM1fpJ4HKjdQ:1739063960761&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kza-c3WaQ39kC07kJ0gflQYcCPHgSsrzT5Y-1daUY2NW7Gn8r3FyreDm9UWMCfolX4XfvysgordT5A8H1AJLNBXQXPZzm&q=Nail+by+Young+Reviews&sa=X&ved=2ahUKEwiDsP2MtrWLAxWfM1kFHTOTDWwQ0bkNegQIHhAE&biw=2397&bih=1400&dpr=1">See Other Reviews</a>
        </div>
        <img class="decorative-illustration" src="../assets/review.jpg"/>
    </div> 
</template>

<style scoped>
    *{
        /* border: 2px red solid; */
    }

    .review-container{
        width: 100vw;
        max-height: 60vh;  /* Changed from height to min-height and increased */
        display: grid;
        background: white;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr 1fr 1fr 0.5fr; /* Changed first row to auto */
        position: relative;
        gap: 10px; /* Add some gap between grid items */
    }

    .grid{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px; /* Add space between profile pic and review */
        z-index: 1;
    }

    .review-header{
        position: relative;
        grid-column: 1/ span 2;
        grid-row: 1;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .review{
        width: 60%;
        border-radius: min(32px, 3vw);
        padding: 1vw;
        text-align: center;
        visibility: visible;
        background: white;
        border: solid;
    }

    .profile-pic {
        width: 50px;  /* Fixed size for profile picture */
        height: 50px;
        border-radius: 50%;
        background-color: #ddd;  /* Placeholder color */
        flex-shrink: 0;  /* Prevent the circle from shrinking */
    }

    .profile-pic.left {
        margin-right: -10px;  /* Adjust if you want the circle closer to the review */
    }

    .profile-pic.right {
        margin-left: -10px;  /* Adjust if you want the circle closer to the review */
    }

    .button-container {
        position: relative;
        grid-column: 1 / span 2; /* Make button span both columns */
        grid-row: 5; /* Place in the fourth row */
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0; /* Remove margin since we're using grid positioning */
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

    .decorative-illustration {
        position: absolute;
        width: 40%;
        height: 80%;  /* Limit the height to avoid extending into header */
        top: 60%;     /* Move it down slightly */
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
        opacity: 0.2;
        object-fit: contain;
    }
</style>