<script setup lang="ts">
    
    import { ref } from 'vue';

    interface ReservationName {
        name: string;
    }


    const reservationId = ref("");
    const reservationStatus = ref(false);

    const times = ["10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
                   "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"] 

    async function submit() {

        const reservationNameString = (document.getElementById("reservation-name") as HTMLInputElement).value;
        const reservationContactString = (document.getElementById("reservation-contact") as HTMLInputElement).value;
        const reservationDateString = (document.getElementById("reservation-date") as HTMLInputElement).value;
        const reservationNotesString = (document.getElementById("reservation-notes") as HTMLInputElement).value;

        // console.log(reservationNameString);
        // console.log(reservationContactString);
        // console.log(reservationDateString);
        // console.log(reservationNotesString);

        try {
            console.log("Reservation request sent");
            const result = await fetch("http://localhost:3000/dev/reservation/make", {
                method : "POST",
                headers: {
                'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    reservationName : reservationNameString,
                    reservationContact : reservationContactString,
                    reservationDate : reservationDateString,
                    reservationNotes : reservationNotesString
                })
            })

            const response = await result.json();

            reservationId.value = response.insertedId;
            reservationStatus.value = true;
            console.log('ID:', reservationId.value);
            console.log('Status:', reservationStatus.value);

        } catch(e) {
            console.log("Reservation Creation Error: ", e);
        }
    }

    async function handleDateChange(e : Event) {
        const dateString = (e.target as HTMLInputElement).value

        try {
            const response = await fetch("http://localhost:3000/dev/reservation/search", {
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    reservationSearch : dateString
                })
            })

            const results = await response.json();
            
            results.forEach((result : ReservationName) => {
                console.log(result.name);
            });
            
        } catch(e) {
            console.log("Reservation Search Error: ", e)
        }
    }

</script>

<template>
    
    <div class="reservation-container">
        <input id="reservation-name" class="reservation-input" placeholder="name"/>
        <input id="reservation-contact" class="reservation-input" placeholder="contact(email or phone number)"/>
        <input id="reservation-date" class="reservation-input" type="date" @change="handleDateChange"/>
        <textarea id="reservation-notes" class="reservation-input" placeholder="Anything you would like us to know?"></textarea>
        <button @click="submit">Submit</button>
        <div class="reservation-status" v-if="reservationStatus === true">
            Save your reservation ID: {{ reservationId }}
        </div>
    </div>

    

</template>

<style scoped>

    *{
        /* outline: 2px red solid; */
    }

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

    .reservation-status{
        color: black;
    }

</style>