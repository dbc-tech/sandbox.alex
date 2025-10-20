<script lang="ts" setup>
import { inject } from 'vue'
import { countKey } from '@/utils/keys'

const injected = inject(countKey)
if (!injected) throw new Error('count not provided')

const { count, increment } = injected
</script>

<template>
  <div>
    {{ count }}
    <UButton @click="increment">Add count</UButton>
  </div>
</template>
