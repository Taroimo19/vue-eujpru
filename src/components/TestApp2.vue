<template>
  <div>
    <h2>テスト用コンポーネント</h2>
    <div>
      <button class="btn btn-primary">Test Button</button>
      <p>{{ num }}</p>
    </div>
  </div>
</template>

<script>
export default{
  data:function() {
    return {
      num: 10
    }
  }
}
</script>

<style>
</style>