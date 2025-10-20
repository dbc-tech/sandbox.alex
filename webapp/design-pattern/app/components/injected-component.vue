<script lang="ts" setup>
import { countKey } from '@/utils/keys'

const count = inject(countKey)
if (!count) throw new Error('count not provided')

</script>

<template>
  <div>
    {{ count }}
    <UButton @click="count++">Add count</UButton>
  </div>
</template>
