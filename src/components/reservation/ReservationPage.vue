<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import { useRoute } from "vue-router";
    import Nav from "../NavBar.vue";
    import "../../styles/themes.css";

    interface Reservation {
        _id : string,
        name : string,
        contact : string,
        date : string,
        time : string,
        status : string,
        notes : string
    }

    const route = useRoute()
    const id = route.params.id

    const reservation = ref<Reservation>();
    const noReservation = ref("");
    async function fetchReservation() {
        try {
            const response = await fetch("http://localhost:3000/dev/reservation/search",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    reservationSearch : id,
                })
            })

            const data = await response.json();
            if (data.error === "Reservation Search failed") {
                noReservation.value = "No Reservation Found";
                return;
            }
            reservation.value = data;
        } catch(e) {
            console.log("Reservation fetch error: ", e);
        }
    }

    function formatDate(dateStr: string): string {
        const [year, month, day] = dateStr.split('-');
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
        return `${months[parseInt(month) - 1]} ${parseInt(day)}`;
    }


    function formatTime(time: string): string {
        const hour = parseInt(time.split(':')[0]);
        const isPM = hour >= 12;
        return `${time} ${isPM ? 'pm' : 'am'}`;
    }


    onMounted(() => {
        fetchReservation();
    })

</script>

<template>

    <div class="reservation-page-header">
        <Nav />
    </div>

    <div class="reservation-page-container" v-if="reservation">

        <h1>Hi {{ reservation.name }}!</h1>
        <!-- <h1>{{ reservation.contact }}</h1> -->
         <h1>{{ reservation.date }}</h1>
        <h1>You're appointment for {{ formatDate(reservation.date) }} at {{ formatTime(reservation.time) }} is {{ reservation.status }}</h1>
        <!-- <h1>{{ reservation.time }}</h1> -->
        <!-- <h1>{{ reservation.notes }}</h1> -->
        <!-- <h1>{{ reservation.status }}</h1> -->
        <h1>See you then!</h1>

        <hr class="horizontal-line"/>

        <div class="reservation-details-container">
            <h1>Reservation Details</h1>
            <div class="reservation-details">
                <p>Id: {{ reservation._id }}</p>
                <p>Date: {{ formatDate(reservation.date) }}</p>
                <p>Time: {{ formatTime(reservation.time) }}</p>
                <p>Status: {{ reservation.status }}</p>
            </div>
        </div>
    </div>
    <h1 v-else>{{ noReservation }}</h1>


</template>

<style scoped>

    .reservation-page-container{
        width: 100%;
        height: 100vh;
        background: var(--primary-light);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .reservation-page-container h1{
        font-family: Papyrus, Fantasy;
    }

    .horizontal-line{
        width: 60%;
        border: 2px black solid;
    }

    .reservation-details-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .reservation-details{
        display: flex;
    }

    .reservation-details p{
        border-left: 1px black solid;
        border-right: 1px black solid;
        padding: 0 5px;
    }

</style>