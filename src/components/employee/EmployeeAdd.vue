<script setup lang="ts">

    import { reactive } from 'vue';

    const roles = ["A", "B", "C", "D"];

    const times = ["10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
                    "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];

    type Shifts = {
        start_time : string;
        end_time : string;
    }

    type WeekSchedule = {
        [key in 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday']: Shifts;
    }
    
    const schedule = reactive<WeekSchedule>({
        monday : {
            start_time : "",
            end_time : ""
        },
        tuesday: {
            start_time: "",
            end_time: ""
        },
        wednesday: {
            start_time: "",
            end_time: ""
        },
        thursday: {
            start_time: "",
            end_time: ""
        },
        friday: {
            start_time: "",
            end_time: ""
        },
        saturday: {
            start_time: "",
            end_time: ""
        },
        sunday: {
            start_time: "",
            end_time: ""
        }
    });

    const employeeInformation = reactive({
        employeeName : "",
        employeeRole : "",
        employeeEmail : "",
        employeePhone : "",
        employeeSchedule : schedule
    });

    async function submit() {
        console.log(employeeInformation);

        await fetch("http://localhost:3000/db/employee/add",  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeInformation)
        })
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(e => console.log("Fetch error: ", e))
    }

    function formatTime(time: string): string {
        const timeInt = time.split(':');
        const hour = parseInt(timeInt[0]);
        const minute = timeInt[1];
        const isPM = hour >= 12;
        return `${(isPM && hour != 12) ? hour-12 : hour}:${minute} ${isPM ? 'pm' : 'am'}`;
    }
</script>

<template>
    <div class="employee-container">
        <input id="employee-name" class="employee-input" placeholder="Employee Name" v-model="employeeInformation.employeeName"/>
        <select name="role" id="employee-role" class="employee-input" v-model="employeeInformation.employeeRole">
            <option class="placeholder-option" value="" disabled selected>Select a role</option>
            <option v-for="role in roles" :key="role" :value="role">{{role}}</option>
        </select>
        <input id="employee-email" class="employee-input" placeholder="Employee Email" v-model="employeeInformation.employeeEmail"/>
        <input id="employee-phone" class="employee-input" placeholder="Employee Phone" v-model="employeeInformation.employeePhone"/>

        <div class="employee-schedule">

            <div v-for="(shifts, day) in schedule" :key="day">
                <h1>{{ day }}</h1>
                <div>
                    <select v-model="shifts.start_time">
                        <option value="" disabled selected>start</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                <div>
                    <select v-model="shifts.end_time">
                        <option value="" disabled selected>end</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="button-container">
            <button class="submit-button" @click="submit">Submit</button>
        </div>
    </div>
</template>

<style scoped>

    *{
        /* outline: 2px red solid; */
    }

    .employee-container{
        background: lavender;
        height: 100vh;
        width: 100vw;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .employee-input{
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

    .employee-schedule{
        width: 50vw;
        display: flex;
        justify-content: space-between;
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

</style>