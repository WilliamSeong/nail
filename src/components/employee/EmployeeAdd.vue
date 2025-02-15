<script setup lang="ts">

    const roles = ["A", "B", "C", "D"];

    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]


    async function submit() {

        const employeeNameString = (document.getElementById("employee-name") as HTMLInputElement).value;
        const employeeRoleString = (document.getElementById("employee-role") as HTMLSelectElement).value;
        const employeeEmailString = (document.getElementById("employee-email") as HTMLInputElement).value;
        const employeePhoneString = (document.getElementById("employee-phone") as HTMLInputElement).value;

        console.log(employeeNameString, employeeRoleString, employeeEmailString, employeePhoneString);

        await fetch("http://localhost:3000/db/employee/add",  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            employeeName : employeeNameString,
            employeeRole : employeeRoleString,
            employeeEmail : employeeEmailString,
            employeePhone : employeePhoneString
            })
        })
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(e => console.log("Fetch error: ", e))
    }
</script>

<template>
    <div class="employee-container">
        <input id="employee-name" class="employee-input" placeholder="Employee Name"/>
        <select name="role" id="employee-role" class="employee-input">
            <option class="placeholder-option" value="" disabled selected>Select a role</option>
            <option v-for="role in roles" :key="role" :value="role">{{role}}</option>
        </select>
        <input id="employee-email" class="employee-input" placeholder="Employee Email"/>
        <input id="employee-phone" class="employee-input" placeholder="Employee Phone"/>

        <div class="employee-schedule">
            <div v-for="day in days">
                <h1>{{ day }}</h1>
                <input type="time" step="1800"/>
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