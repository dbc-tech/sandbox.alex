<script lang="ts" setup>
import { ref, provide } from 'vue'
import { countKey } from '@/utils/keys'

const count = ref(0)

provide(countKey, count)
</script>

<template>
  <div>
    <InjectedComponent />
  </div>
</template>
