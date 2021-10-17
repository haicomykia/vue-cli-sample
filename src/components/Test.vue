<template>
  <input type="text" v-model="msg">
  <p>{{msg}}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "上原歩夢"
    }
  },
}
</script>

<style scoped>
  p {
    font-size: 2rem;
    color:#FFB6C1;
  }
</style>