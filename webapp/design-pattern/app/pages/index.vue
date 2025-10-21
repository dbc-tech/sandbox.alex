<script lang="ts" setup>

import { countStringKey } from '@/utils/keys'

const count = ref('this is a string')

provide(countStringKey, { count, changeString })

function changeString() {
    count.value = "new string"
}
</script>

<template>
  <div>
    <InjectedComponent />
  </div>
</template>
