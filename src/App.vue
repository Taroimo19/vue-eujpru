<template>
  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" num="332" />
    <Test1 />
    <!-- <Test2 /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test1 from './components/TestApp.vue'
// import Test2 from './components/TestApp2.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test1,
    // Test2, 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
