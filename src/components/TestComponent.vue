<script setup lang="ts">

    import { ref, onMounted } from 'vue';

    interface Shifts {
        start_time : string;
        end_time : string;
    }

    interface WeekSchedule {
        sunday: Shifts;
        monday : Shifts;
        tuesday : Shifts;
        wednesday: Shifts;
        thursday: Shifts;
        friday: Shifts;
        saturday: Shifts;
    }

    interface Employee {
        _id: string;
        name: string;
        email: string;
        phone: string;
        role: string;
        schedule: WeekSchedule;
    }

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
    }

    function prevSunday() {
        currentSunday.value = new Date(new Date(currentSunday.value).setDate(currentSunday.value.getDate() - 7));
    }

    function nextSunday() {
        currentSunday.value = new Date(new Date(currentSunday.value).setDate(currentSunday.value.getDate() + 7));
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getting Employee Information
    const employee = ref<Employee>();
    async function fetchEmployee() {
        try {
            const response = await fetch("http://localhost:3000/db/employee/search",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employeeSearch : "67b2242960a9b668111183c5",
                })
            })

            employee.value = await response.json();
            console.log(employee.value);
        } catch(e) {
            console.log("Employee fetch error: ", e);
        }
    };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generate day with difference from designated Sunday
    function makeWeek(i : number) {
        const unixCode = new Date(currentSunday.value).setDate(currentSunday.value.getDate() + (i - 1));
        const day = new Date(unixCode)
        return day;
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Calendar Formatting
    const timeSlots = ref([""]);
    const cellCount = ref(0);


    function generateTimeSlots(startTime : number, endTime : number) {
        const slots = []
        for (let hour = startTime; hour <= endTime; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
            const formattedHour = hour.toString().padStart(2, '0')
            const formattedMinute = minute.toString().padStart(2, '0')
            slots.push(`${formattedHour}:${formattedMinute}`)
            }
        }
        cellCount.value = slots.length + 1;
        return slots
    }

    function formatTime(time: string): string {
        const timeInt = time.split(':');
        const hour = parseInt(timeInt[0]);
        const minute = timeInt[1];
        const isPM = hour >= 12;
        return `${(isPM && hour != 12) ? hour-12 : hour}:${minute} ${isPM ? 'pm' : 'am'}`;
    }

    onMounted(async () => {
        findSunday();
        timeSlots.value = generateTimeSlots(10, 20);
        await fetchEmployee();
    });


</script>

<template>
    <div class="container">
        
        <div class="calendar">
            <div class="time-column">
                <div class="header-spacer" :style="{height : `${100/cellCount}%`}"><h1>Employee</h1></div>
                <div v-for="time in timeSlots" :key="time" class="time-slot" :style="{height : `${100/cellCount}%`}">
                    {{ formatTime(time) }}
                </div>
            </div>
            <div v-for="day in days" :key="day" class="day-column" v-if="employee">
            <!-- Day header -->
                <div class="day-header" :style="{height : `${100/cellCount}%`}"><h1>{{ day }}</h1></div>
                <!-- Time grid -->
                <div v-for="time in timeSlots" :key="time" class="grid-cell" :style="{height : `${100/cellCount}%`}">
                    <div class="shift" v-if="time > employee.schedule[day].start_time && time <= employee.schedule[day].end_time" >
                        {{ employee.schedule[day] }}
                    </div>
                </div>
            </div>
        </div>
    </div>



    <!-- <div class="button-container">
        <button @click="prevSunday">Prev</button>
        <button @click="nextSunday">Next</button>
    </div> -->
    
    <!-- <div class="calendar-container">
        <div class="placeholder">
            10:00
        </div>
        <div class="week-days" v-for="(day, index) of days" v-if="employee">
            <div class="week-label">
                {{ makeWeek(index).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) }}
            </div>
            <div>
                {{ employee.schedule[day].start_time }} - {{ employee.schedule[day].end_time }}
            </div>
        </div>
    </div> -->

</template>

<style scoped>

    *{
        /* outline: 2px red solid; */
    }

    .container{
        display: flex;
        flex-direction: column;
    }

    .calendar{
        width: 80vw;
        height: 90vh;
        display: grid;
        grid-template-columns: 9% repeat(7, 13%);
    }

    .header-spacer{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .time-slot{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

    }

    .day-header{
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .grid-cell{
        border-bottom: 1px gray solid;
        border-right: 1px gray solid;
    }

    .shift{
        background: aqua;
        height: 100%;
    }

    /* .week-days{
        grid-row: span 2;
    }

    .placeholder{
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .week-label{
        height: 10%;
    } */
</style>