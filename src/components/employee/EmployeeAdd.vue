<script setup lang="ts">

    import { ref } from 'vue';

    const roles = ["A", "B", "C", "D"];

    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

    const times = ["10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
                    "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];


    const employeeNameString = ref("");
    const employeeRoleString = ref("");
    const employeeEmailString = ref("");
    const employeePhoneString = ref("");

    const mondayStart = ref("");
    const mondayEnd = ref("");
    const tuesdayStart = ref("");
    const tuesdayEnd = ref("");
    const wednesdayStart = ref("");
    const wednesdayEnd = ref("");
    const thursdayStart = ref("");
    const thursdayEnd = ref("");
    const fridayStart = ref("");
    const fridayEnd = ref("");
    const saturdayStart = ref("");
    const saturdayEnd = ref("");
    const sundayStart = ref("");
    const sundayEnd = ref("");


    async function submit() {

        // const employeeNameString = (document.getElementById("employee-name") as HTMLInputElement).value;
        // const employeeRoleString = (document.getElementById("employee-role") as HTMLSelectElement).value;
        // const employeeEmailString = (document.getElementById("employee-email") as HTMLInputElement).value;
        // const employeePhoneString = (document.getElementById("employee-phone") as HTMLInputElement).value;

        console.log(employeeNameString, employeeRoleString, employeeEmailString, employeePhoneString);
        console.log({
            monday: { start: mondayStart.value, end: mondayEnd.value },
            tuesday: { start: tuesdayStart.value, end: tuesdayEnd.value },
            wednesday: { start: wednesdayStart.value, end: wednesdayEnd.value },
            thursday: { start: thursdayStart.value, end: thursdayEnd.value },
            friday: { start: fridayStart.value, end: fridayEnd.value },
            saturday: { start: saturdayStart.value, end: saturdayEnd.value },
            sunday: { start: sundayStart.value, end: sundayEnd.value }
        });

        await fetch("http://localhost:3000/db/employee/add",  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                employeeName : employeeNameString.value,
                employeeRole : employeeRoleString.value,
                employeeEmail : employeeEmailString.value,
                employeePhone : employeePhoneString.value,
                employeeSchedule : {
                    monday : {
                        start_time : mondayStart.value,
                        end_time : mondayEnd.value
                    },
                    tuesday: {
                        start_time: tuesdayStart.value,
                        end_time: tuesdayEnd.value
                    },
                    wednesday: {
                        start_time: wednesdayStart.value,
                        end_time: wednesdayEnd.value
                    },
                    thursday: {
                        start_time: thursdayStart.value,
                        end_time: thursdayEnd.value
                    },
                    friday: {
                        start_time: fridayStart.value,
                        end_time: fridayEnd.value
                    },
                    saturday: {
                        start_time: saturdayStart.value,
                        end_time: saturdayEnd.value
                    },
                    sunday: {
                        start_time: sundayStart.value,
                        end_time: sundayEnd.value
                    }
                }
            })
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
        <input id="employee-name" class="employee-input" placeholder="Employee Name" v-model="employeeNameString"/>
        <select name="role" id="employee-role" class="employee-input" v-model="employeeRoleString">
            <option class="placeholder-option" value="" disabled selected>Select a role</option>
            <option v-for="role in roles" :key="role" :value="role">{{role}}</option>
        </select>
        <input id="employee-email" class="employee-input" placeholder="Employee Email" v-model="employeeEmailString"/>
        <input id="employee-phone" class="employee-input" placeholder="Employee Phone" v-model="employeePhoneString"/>

        <div class="employee-schedule">
            <div class="monday-time">
                <h1>Monday</h1>
                <div>
                    <select id="time-input" v-model="mondayStart">
                        <option value="" disabled selected>start</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                <div>
                    <select id="time-input" v-model="mondayEnd">
                        <option value="" disabled selected>end</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="tuesday-time">
                <h1>Tuesday</h1>
                <div>
                    <select id="time-input" v-model="tuesdayStart">
                        <option value="" disabled selected>start</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                <div>
                    <select id="time-input" v-model="tuesdayEnd">
                        <option value="" disabled selected>end</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                </div>

                <div class="wednesday-time">
                <h1>Wednesday</h1>
                <div>
                    <select id="time-input" v-model="wednesdayStart">
                        <option value="" disabled selected>start</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                <div>
                    <select id="time-input" v-model="wednesdayEnd">
                        <option value="" disabled selected>end</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                </div>

                <div class="thursday-time">
                <h1>Thursday</h1>
                <div>
                    <select id="time-input" v-model="thursdayStart">
                        <option value="" disabled selected>start</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                <div>
                    <select id="time-input" v-model="thursdayEnd">
                        <option value="" disabled selected>end</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                </div>

                <div class="friday-time">
                <h1>Friday</h1>
                <div>
                    <select id="time-input" v-model="fridayStart">
                        <option value="" disabled selected>start</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                <div>
                    <select id="time-input" v-model="fridayEnd">
                        <option value="" disabled selected>end</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                </div>

                <div class="saturday-time">
                <h1>Saturday</h1>
                <div>
                    <select id="time-input" v-model="saturdayStart">
                        <option value="" disabled selected>start</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                <div>
                    <select id="time-input" v-model="saturdayEnd">
                        <option value="" disabled selected>end</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                </div>

                <div class="sunday-time">
                <h1>Sunday</h1>
                <div>
                    <select id="time-input" v-model="sundayStart">
                        <option value="" disabled selected>start</option>
                        <option v-for="time in times" :value="time" :key="time">
                            {{ formatTime(time) }}
                        </option>
                    </select>
                </div>
                <div>
                    <select id="time-input" v-model="sundayEnd">
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