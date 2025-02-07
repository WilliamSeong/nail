<script setup lang="ts">

    import { ref } from "vue";

    interface Employee {
        _id: string;
        name: string;
        email: string;
        phone: string;
        role: string;
    }

    const employees = ref<Employee[]>([]);

    async function submit() {

        const employeeSearchElement = document.getElementById("search-box") as HTMLInputElement
        const employeeSearchString = employeeSearchElement.value;

        const response = await fetch("http://localhost:3000/dev/employee/search",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                employeeSearch : employeeSearchString,
            })
        })
        
        employees.value = await response.json();
    }


</script>

<template>
    <div class="search-container">
        <input id="search-box" class="search-box" />
        <div class="button-container">
            <router-link to="/employee/add" class="employee-add-button">Employee Add</router-link>
            <button @click="submit" class="submit-button">Submit</button>
        </div>

        <div class="search-results" v-for="employee in employees" :key="employee._id">
            <p>Name: {{ employee.name }}</p>
            <p>ID: {{ employee._id }}</p>
            <p>Phone: {{ employee.phone }}</p>
            <router-link :to="`/employee/${employee._id}`" target="_blank">View Profile</router-link>
        </div>
    </div>
</template>

<style scoped>

    *{
        /* outline: 2px red solid; */
    }

    .search-container{
        background: lavender;
        height: 100vh;
        width: 100vw;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .search-box{
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

    .button-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 10%;
    }

    .employee-add-button{
        background: rgba(255,255,255,0.5);
        border: 1px black solid;
        text-decoration: none;
        color: black;
        margin: 1vw;
        width: 40%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1vw;
    }

    .submit-button{
        margin: 1vw;
        background: rgba(255,255,255,0.5);
        border: 1px black solid;
        width: 40%;
        height: 80%;
        font-size: 1vw;
    }

    .search-results{
        margin: 1vmin;
        border: solid;
        padding: 1vmin;
    }

    
</style>