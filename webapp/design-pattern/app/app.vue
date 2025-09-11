<script setup lang="ts">
const message = ref('Hello from Parent!')
provide('sharedMessage', message)
</script>

<template>
  <div class="p-4 border rounded">
    <h2>Parent (Level 1)</h2>
    <p>Message in parent: {{ message }}</p>
    <Child />
  </div>
</template>