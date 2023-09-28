<template>
  <div>
    <hr />
    <h2>テスト用コンポーネント</h2>
    <div>
      <button class="btn btn-primary" @click="countup">Test Button</button>
      <p>{{ num }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      num: 0,
    };
  },
  methods: {
    countup() {
      this.num++;
    },
  },
};
</script>

<style scoped></style>
