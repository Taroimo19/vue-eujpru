<template>
  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Test1 />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import Test1 from './components/Test.vue'

export default {
  name: 'App',
  components: {
    HelloWorld : HelloWorld
//    Test1 : Test1
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
