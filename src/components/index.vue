<template>
  <div class="home">
    <hr />
    <h1>ホーム画面</h1>
    <router-link to="/">Home<router-link>
    <router-link to="/testApp3">Test1<router-link>
    <!-- <div>ホーム画面</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
};
</script>

<style scoped></style>
