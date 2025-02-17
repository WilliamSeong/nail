<script setup lang="ts">

import { ref, onMounted } from 'vue';

    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "fridays", "saturday"]

    const timeSlots = ref([""]);

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

    onMounted(() => {
        timeSlots.value = generateTimeSlots(10, 20);
    })

</script>

<template>
    <div class="test-container">
        
        <div class="calendar-container">
            <div class="time-column">
                <div class="header-spacer">Employee</div>
                <div v-for="time in timeSlots" :key="time" class="time-slot">
                    {{ time }}
                </div>
            </div>
            <div v-for="day in days" :key="day" class="day-column">
            <!-- Day header -->
                <div class="day-header"><h1>{{ day }}</h1></div>
                <!-- Time grid -->
                <div v-for="time in timeSlots" :key="time" class="grid-cell"></div>
            </div>
        </div>
        
    </div>
</template>

<style scoped>

    *{
        /* outline: 2px red solid; */
    }

    .test-container{
        width: 100vw;
        height: 100vh;
    }

    .calendar-container {
        display: grid;
        grid-template-columns: 9% repeat(7, 13%);
        height: 100vh;
    }


    .time-column,
    .day-column{
    }

    .header-spacer{
        height: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .day-header{
        height: 5%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .time-slot{
        height: 5%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        border-right: 1px gray solid;
    }
    .grid-cell{
        height: 5%;
        border-bottom: 1px gray solid;
        border-right: 1px gray solid
    }

</style>