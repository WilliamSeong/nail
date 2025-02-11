<script setup lang="ts">

    async function fetchAuthorization() {
        await fetch("http://localhost:3000/reservation/authorization");
    }

</script>

<template>

    <div>

        <button @click="fetchAuthorization">Do the thing</button>

    </div>

</template>

<style scoped>

</style>