<template>
  <div class="hello">
    <h1>{{ msg }} >> {{ num }}</h1>
    <h2>ID : {{ id }}  NAME : {{ name }}</h2>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
const myData = {
  id: 202,
  name: 'Taro'
}
export default {
  name: 'HelloWorld',
  data(){
    return myData
  },
  props: {
    msg: String,
    num: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
