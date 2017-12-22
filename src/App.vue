<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
  zoom: 1;
}
html:before, html:after{
  content: '';
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
