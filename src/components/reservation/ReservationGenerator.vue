<script setup lang="ts">
    
    import { ref } from 'vue';

        async function submit() {

            const reservationNameElement = document.getElementById("reservation-name") as HTMLInputElement;
            const reservationDateElement = document.getElementById("reservation-date") as HTMLInputElement;
            const reservationNotesElement = document.getElementById("reservation-notes") as HTMLInputElement;

            const reservationNameString = reservationNameElement.value;
            const reservationDateString = reservationDateElement.value;
            const reservationNotesString = reservationNotesElement.value;

            await fetch("http://localhost:3000/dev/reservation/make", {
                method : "POST",
                headers: {
                'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    name : reservationNameString,
                    date : reservationDateString,
                    notes : reservationNotesString
                })
            })
            .then(results => results.json())
            .then(data => console.log(data))
            .catch(e => console.log("Reservation fetch error: ", e))
        }

</script>

<template>
    
    <div class="reservation-container">
        <input id="reservation-name" class="reservation-input" />
        <input id="reservation-date" class="reservation-input" type="date" />
        <textarea id="reservation-notes" class="reservation-input" placeholder="Anything you would like us to know?"/>
        <button @click="submit">Submit</button>
    </div>

</template>

<style scoped>

    .reservation-container{
        background: lavender;
        height: 100vh;
        width: 100vw;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .reservation-input{
        background: rgba(255,255,255,0.1);
        min-width: 40%;
        width: 40%;
        height: auto;
        margin: 1vmin;
        border-color: white;
        outline: none;
        border-style:solid;
        border-width: 1px;
        font-size: 1.5vmax;
        color: black;
        font-family:'Times New Roman', Times, serif;
    }

</style>