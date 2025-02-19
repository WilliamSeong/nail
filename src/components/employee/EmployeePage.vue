<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const id = route.params.id

    interface Shifts {
        start_time : string;
        end_time : string;
    }

    interface WeekSchedule {
        monday : Shifts;
        tuesday : Shifts;
        wednesday: Shifts;
        thursday: Shifts;
        friday: Shifts;
        saturday: Shifts;
        sunday: Shifts;
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


    const employee = ref<Employee>();
    async function fetchEmployee() {
        try {
            const response = await fetch("http://localhost:3000/db/employee/search",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employeeSearch : id,
                })
            })

            employee.value = await response.json();
            console.log(employee.value);
        } catch(e) {
            console.log("Employee fetch error: ", e);
        }
    };

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
// Calendar Formatting
    const timeSlots = ref([""]);
    const cellCount = ref(0);

    function makeWeek(i : number) {
        const unixCode = new Date(currentSunday.value).setDate(currentSunday.value.getDate() + (i - 1));
        const day = new Date(unixCode)
        return day;
    }


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

    onMounted(() => {
        findSunday();
        timeSlots.value = generateTimeSlots(10, 20);
        fetchEmployee();
    })

</script>

<template>

    <div class="employee-page-container" v-if="employee">
        <router-link :to="`/employee/edit/${employee._id}`" target="_blank">Edit Profile</router-link>
        <h1>Name: {{ employee.name }}</h1>
        <h1>Email: {{ employee.email }}</h1>
        <h1>Phone: {{ employee.phone }}</h1>
        <h1>Role: {{ employee.role }}</h1>
        <div class="calendar">
            <div class="time-column">
                <div class="header-spacer" :style="{height : `${100/cellCount}%`}"></div>
                <div v-for="time in timeSlots" :key="time" class="time-slot" :style="{height : `${100/cellCount}%`}">
                    {{ formatTime(time) }}
                </div>
            </div>
            <div v-for="(day, index) in days" :key="day" class="day-column" v-if="employee">
            <!-- Day header -->
                <div class="day-header" :style="{height : `${100/cellCount}%`}">
                    <h1>{{ day }}</h1>
                    <h2>{{ makeWeek(index).toLocaleDateString("en-US") }}</h2>
                </div>
                <!-- Time grid -->
                <div v-for="time in timeSlots" :key="time" class="grid-cell" :style="{height : `${100/cellCount}%`}">
                    <div class="shift" v-if="time > employee.schedule[day].start_time && time <= employee.schedule[day].end_time" >
                    </div>
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .grid-cell{
        border-bottom: 1px gray solid;
        border-right: 1px gray solid;
    }

    .shift{
        background: rgb(123, 123, 206);
        height: 100%;
    }
</style>