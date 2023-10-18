<template>
    <p class="username">{{ username }}</p>
</template>

<script>

export default {
  props: {
    username: {
      type: String,
      required: true
    }
  }
}

</script>

<style  lang="css" scoped>
.username {
    font-size: 50pt;
    color:#DCAE1D;
}

</style>
