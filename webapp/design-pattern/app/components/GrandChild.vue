
<script setup lang="ts">

// Inject from the root provider
const sharedMessage = inject<Ref<string>>('sharedMessage')

if (!sharedMessage) {
  throw new Error('sharedMessage not provided!')
}
</script>

<template>
  <div class="mt-4 p-2 border rounded">
    <h4>GrandChild (Level 3)</h4>
    <p>Injected message: {{ sharedMessage }}</p>

    <!-- Two-way binding works because parent provided a ref -->
    <input v-model="sharedMessage" class="border p-1 rounded" />
  </div>
</template>
