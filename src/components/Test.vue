<template>
  <input type="text" v-model="msg" />
  <p>{{ msg ?? "Input anything." }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: null,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 2rem;
  color: #ffb6c1;
}
</style>
