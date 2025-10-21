<script lang="ts" setup>
import { countKey } from '@/utils/keys'

const injected = inject(countKey)

if (!injected) throw new Error('count not provided')

const { count, increment } = injected
</script>

<template>
  <div class="pl-10">
    {{ count }}
    <UButton @click="increment">Add count</UButton>
  </div>
</template>
