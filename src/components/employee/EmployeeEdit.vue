<script setup lang="ts">

    import { ref, onMounted } from'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const id = route.params.id


// Employee Fetch
    interface Shifts {
        start_time : string;
        end_time : string;
    }

    interface Employee {
        _id: string;
        name: string;
        email: string;
        phone: string;
        role: string;
        schedule: Record<string, Shifts[]>;
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
                    employeeSearch : id,
                })
            })

            employee.value = await response.json();
            console.log(employee.value);
        } catch(e) {
            console.log("Employee fetch error: ", e);
        }
    };
// Employee Change

    const employeeShiftDayString = ref("");
    const employeeStartTimeString = ref("");
    const employeeEndTimeString = ref("");
    async function change() {
        console.log(employeeShiftDayString.value);

        try{
            const response = await fetch("http://localhost:3000/db/employee/edit",{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    employeeId : id,
                    employeeShiftDay : employeeShiftDayString.value,
                    employeeStartTime : employeeStartTimeString.value,
                    employeeEndTime : employeeEndTimeString.value
                })
            })
        } catch(e) {
            console.log("Employee Edit Error: ", e);
        }
    }

// Timeslots
    const times = ref([""]);
    function generateTimeSlots(startTime : number, endTime : number) {
        const slots = []
        for (let hour = startTime; hour <= endTime; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
            const formattedHour = hour.toString().padStart(2, '0')
            const formattedMinute = minute.toString().padStart(2, '0')
            slots.push(`${formattedHour}:${formattedMinute}`)
            }
        }
        return slots
    }

    function formatTime(time: string): string {
        const timeInt = time.split(':');
        const hour = parseInt(timeInt[0]);
        const minute = timeInt[1];
        const isPM = hour >= 12;
        return `${(isPM && hour != 12) ? hour-12 : hour}:${minute} ${isPM ? 'pm' : 'am'}`;
    }

// OnMounted
    onMounted(() => {
        fetchEmployee();
        times.value = generateTimeSlots(10, 20);
    })

</script>

<template>

<!-- Implement front end for employee editing, create new page, add router link to employee Page same logic as router link in employee search with _id in url, then do a fetch for all the employee information -->
    <div class="employee-edit-container">
        <h1 v-if="employee">{{ employee.name }}</h1>        
        <input type="date" v-model="employeeShiftDayString"/>
        <div>
            <select v-model="employeeStartTimeString">
                <option value="" disabled selected>start</option>
                <option v-for="time in times" :value="time" :key="time">
                    {{ formatTime(time) }}
                </option>
            </select>
        </div>
        <div>
            <select v-model="employeeEndTimeString">
                <option value="" disabled selected>end</option>
                <option v-for="time in times" :value="time" :key="time">
                    {{ formatTime(time) }}
                </option>
            </select>
        </div>
    </div>
    <button @click="change">Add Shift</button>
</template>

<style scoped>

</style>

<!-- 
    {
        employeeId: ObjectId,
        scheduleMap: {
            "2025-02-18": [
                { start_time: "10:30", end_time: "20:00" },
                { start_time: "21:00", end_time: "22:00" }
            ],
            "2025-02-19": [
                { start_time: "09:00", end_time: "17:00" }
            ]
        }
    } 
-->