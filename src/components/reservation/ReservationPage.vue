<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import { useRoute } from "vue-router";

    interface Reservation {
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

            reservation.value = await response.json();
            console.log(reservation.value);
        } catch(e) {
            console.log("Reservation fetch error: ", e);
        }
    }

    onMounted(() => {
        fetchReservation();
    })


</script>

<template>

    <div v-if="reservation">

        <h1>{{ reservation.name }}</h1>
        <h1>{{ reservation.contact }}</h1>
        <h1>{{ reservation.date }}</h1>
        <h1>{{ reservation.time }}</h1>
        <h1>{{ reservation.notes }}</h1>
        <h1>{{ reservation.status }}</h1>


    </div>

</template>

<style scoped>



</style>