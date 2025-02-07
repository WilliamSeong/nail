<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';


    interface Employee {
        _id: string;
        name: string;
        email: string;
        phone: string;
        role: string;
    }


    const route = useRoute()
    const id = route.params.id

    const employee = ref<Employee>();
    const fetchEmployee = async () => {
        try {
            const response = await fetch("http://localhost:3000/dev/employee/search",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    employeeSearch : id,
                })
            })

            employee.value = await response.json();
            // console.log(employee.value);
        } catch(e) {
            console.log("Employee fetch error: ", e);
        }
    };

    onMounted(() => {
        fetchEmployee();
    })

</script>

<template>

    <div class="employee-page-container" v-if="employee">
        <h1>Name: {{ employee.name }}</h1>
        <h1>Email: {{ employee.email }}</h1>
        <h1>Phone: {{ employee.phone }}</h1>
        <h1>Role: {{ employee.role }}</h1>
    </div>

</template>

<style scoped>
    
</style>