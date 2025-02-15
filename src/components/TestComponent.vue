<script setup lang="ts">

    import { ref } from 'vue';

    const times = ["10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
                    "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];

    function formatTime(time: string): string {
        const timeInt = time.split(':');
        const hour = parseInt(timeInt[0]);
        const minute = timeInt[1];
        const isPM = hour >= 12;
        return `${(isPM && hour != 12) ? hour-12 : hour}:${minute} ${isPM ? 'pm' : 'am'}`;
    }

    defineProps<{
        label: string
    }>();

    const timeSet = ref("");

</script>

<template>
        <label for="time-input">{{ label }}: </label>
        <select id="time-input" v-model="timeSet">
            <option v-for="time in times" :value="time" :key="time">
                {{ formatTime(time) }}
            </option>
        </select>
</template>

<style scoped>
</style>