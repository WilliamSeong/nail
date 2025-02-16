<script setup lang="ts">

    import { ref, onMounted } from 'vue';

    interface Shifts {
        start_time : string;
        end_tim : string;
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


    const currentSunday = ref(new Date());

    function findSunday() {
        const today = new Date();
        const recentSunday = today.getDate() - today.getDay();
        const sunday = new Date();
        sunday.setDate(recentSunday);
        console.log(sunday);
        currentSunday.value = sunday;
    }

    function prevSunday() {
        currentSunday.value = new Date(new Date(currentSunday.value).setDate(currentSunday.value.getDate() - 7));
    }

    function nextSunday() {
        currentSunday.value = new Date(new Date(currentSunday.value).setDate(currentSunday.value.getDate() + 7));
    }

    const employee = ref<Employee>();
    async function fetchEmployee() {
        try {
            const response = await fetch("http://localhost:3000/db/employee/search",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employeeSearch : "67b0c25360a9b66811113138",
                })
            })

            employee.value = await response.json();
            console.log(employee.value);
        } catch(e) {
            console.log("Employee fetch error: ", e);
        }
    };
    onMounted(async () => {
        findSunday();
        await fetchEmployee();
    });

    function makeWeek(i : number) {
        const currentDay = new Date(new Date(currentSunday.value).setDate(currentSunday.value.getDate() + (i - 1)))
        return currentDay;
    }

    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];


</script>

<template>
    <button @click="prevSunday">Prev</button>
    <button @click="nextSunday">Next</button>

    <div class="calendar-container">
        <div class="placeholdeer">

        </div>
        <div class="week-days" v-for="i in 7" v-if="employee">
            <div class="day-grid">
                {{ makeWeek(i).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) }}
            </div>
            <div class="shift-grid">
                {{ employee.schedule }}
            </div>
        </div>
        <div class="employee-name">
            Employee
        </div>
    </div>
</template>

<style scoped>

    *{
        outline: 2px red solid;
    }

    .calendar-container{
        width: 80vw;
        height: 50vh;
        display: grid;
        /* grid-template-rows: 25% 75%; */
        grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
    }

    .week-days{
        grid-row: span 2;
    }

    .employee-name{
        grid-row: 2;
    }
</style>