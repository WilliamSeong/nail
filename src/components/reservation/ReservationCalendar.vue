<script setup lang="ts">

import { ref, onMounted, watch, reactive } from 'vue';

    type WeekDay = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

    const days : WeekDay[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] as WeekDay[];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getting Sunday
    const currentSunday = ref(new Date());

    function findSunday() {
        const today = new Date();
        const recentSunday = today.getDate() - today.getDay();
        const sunday = new Date();
        sunday.setDate(recentSunday);
        currentSunday.value = sunday;
        console.log(currentSunday.value);
    }

    function prevSunday() {
        currentSunday.value = new Date(new Date(currentSunday.value).setDate(currentSunday.value.getDate() - 7));
    }

    function nextSunday() {
        currentSunday.value = new Date(new Date(currentSunday.value).setDate(currentSunday.value.getDate() + 7));
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Calendar Formatting

    function makeWeek(i : number) {
        const unixCode = new Date(currentSunday.value).setDate(currentSunday.value.getDate() + i);
        const day = new Date(unixCode)
        // console.log(day.toISOString().split('T')[0]);
        return day;
    }

    function formatTime(time: string): string {
        const timeInt = time.split(':');
        const hour = parseInt(timeInt[0]);
        const minute = timeInt[1];
        const isPM = hour >= 12;
        return `${(isPM && hour != 12) ? hour-12 : hour}:${minute} ${isPM ? 'pm' : 'am'}`;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fetch Reservations

    interface ReservationDetails {
        name : string,
        time : string,
    }

    interface Reservation{
        [date : string] : ReservationDetails[];
    }

    const reservations : Reservation = reactive({});

    async function fetchReservation() {
        try {
            const response = await fetch("http://localhost:3000/db/reservation/calendar", {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    start_date : currentSunday.value.toLocaleDateString('en-CA'),
                    end_date : makeWeek(6).toLocaleDateString('en-CA')
                })
            })
            const data = await response.json();
            for (const reservation of data){
                if (!reservations[reservation.date]) {
                    reservations[reservation.date] = [{name : reservation.name, time : reservation.time }]
                } else {
                    reservations[reservation.date].push({name : reservation.name, time : reservation.time})
                }
            }
            console.log(reservations);
        } catch(e){
            console.log("Reservation Calendar Information Fetch Error: ", e);
        }
    }

    watch(currentSunday, () => {
        fetchReservation();
    });


    onMounted(() => {
        findSunday();
        fetchReservation();
    })


</script>

<template>

    <button @click="prevSunday">Prev</button>
    <button @click="nextSunday">Next</button>

    <div class="calendar">
            <div v-for="(day, index) in days" :key="day" class="day-column">
            <!-- Day header -->
                <div class="day-header">
                    <h1>{{ day }}</h1>
                    <h2>{{ makeWeek(index).toLocaleDateString('en-CA') }}</h2>
                    
                </div>
                <div v-if="reservations[makeWeek(index).toLocaleDateString('en-CA')]">
                    <div class="reservation-event" v-for="reservation in reservations[makeWeek(index).toLocaleDateString('en-CA')]">
                        <h1>{{ reservation.name }}</h1>
                        <p>{{ formatTime(reservation.time)}}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>

    .calendar{
        width: 80vw;
        height: 90vh;
        display: grid;
        grid-template-columns: 9% repeat(7, 13%);
    }

    .day-column{
        border-right: 1px gray solid;
    }

    .reservation-event{
        background: lightblue;
    }

</style>