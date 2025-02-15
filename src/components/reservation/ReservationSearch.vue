<script setup lang="ts">

    import { ref } from 'vue';

    const reservationSearchString = ref("");

    interface Reservation {
        _id: string;
        name: string;
        contact: string;
        date: string;
        time: string;
        notes : string;
    }

    const reservations = ref<Reservation[]>([]);

    async function submit() {
        console.log(reservationSearchString.value);
        const response = await fetch("http://localhost:3000/db/reservation/search/2", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reservationSearch : reservationSearchString.value,
            })
        })

        reservations.value = await response.json();
    };




</script>

<template>

<div class="reservation-search-container">
        <input id="search-box" class="reservation-input" v-model="reservationSearchString"/>
        <div class="button-container">
            <router-link to="/reservation/add" class="reservation-add-button">Reservation Add</router-link>
            <button @click="submit" class="submit-button">Submit</button>
        </div>

        <div class="search-results" v-for="reservation in reservations" :key="reservation._id">
            <p>Name: {{ reservation.name }}</p>
            <p>ID: {{ reservation._id }}</p>
            <p>Contact: {{ reservation.contact }}</p>
            <router-link :to="`/reservation/${reservation._id}`" target="_blank">View Reservation</router-link>
        </div>
    </div>

</template>

<style scoped>

    .reservation-search-container{
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
        width: 60%;
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

    .reservation-add-button{
        background: rgba(255,255,255,0.5);
        border: 1px black solid;
        text-decoration: none;
        color: black;
        margin: 1vw;
        width: 40%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1vw;
    }


    .button-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 10%;
    }

    .submit-button{
        margin: 1vw;
        background: rgba(255,255,255,0.5);
        border: 1px black solid;
        width: 40%;
        height: 80%;
        font-size: 1vw;
    }

    .search-results{
        margin: 1vmin;
        border: solid;
        padding: 1vmin;
    }


</style>