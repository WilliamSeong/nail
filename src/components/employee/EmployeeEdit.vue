<script setup lang="ts">

    import { useRoute } from 'vue-router';

    const route = useRoute()
    const id = route.params.id


</script>

<template>

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

<!-- Implement front end for employee editing, create new page, add router link to employee Page same logic as router link in employee search with _id in url, then do a fetch for all the employee information -->
    <div>
        <h1>EDITING</h1>
    </div>
</template>

<style scoped>

</style>