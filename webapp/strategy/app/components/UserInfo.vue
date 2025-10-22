<script setup lang="ts">
defineProps<{
    name: string;
    age: number;
    email: string;
    phone: string;
    address: string;
}>();

</script>


<template>
    <div>
        <h2>User Information</h2>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
        <p>Address: {{ address }}</p>   
    </div>
</template>