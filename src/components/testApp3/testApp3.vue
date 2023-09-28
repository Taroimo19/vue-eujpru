<template>
  <div class="test">
    <hr />
    <h2>Vue-Router確認用テストコンポーネント</h2>
      <p>{{ msg }}</p>
      <router-link to="/">Home</route-link>
      <router-link to="/testApp3">Test3<router-link>
  </div>
</template>

<script>
export default{
  name:'test3',
  data() {
    return {
      msg: 'Vue-Router確認用のサンプルページです。'
    }
  },
  methods:{}
}
</script>

<style scoped>
a{
  color: #418883;
  text-decoration: none;
}
</style>