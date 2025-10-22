<script setup lang="ts">
defineProps<{
    user: {
        name: string;
        age: number;
        email: string;
        phone: string;
        address?: string;
    }
}>();

</script>


<template>
    <div>
        <h2>User Information</h2>
        <p>Name: {{ user.name }}</p>
        <p>Age: {{ user.age }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
        <p v-if="user.address">Address: {{ user.address }}</p>
    </div>
</template>