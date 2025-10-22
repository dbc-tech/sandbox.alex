<script setup lang="ts">
import UserInfoObjectPreserve from '~/components/UserInfoObjectPreserve.vue';

const userInfo = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA"
};

</script>

<template>
    <UserInfo
        :name="userInfo.name"
        :age="userInfo.age"
        :email="userInfo.email"
        :phone="userInfo.phone"
        :address="userInfo.address"
    />

    <UserInfoObjectPreserve :user="userInfo" />
</template>