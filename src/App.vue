<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloPanel />
  </div>
</template>

<script>
// 如果这里不作引用，上面就会报错。
import HelloWorld from './components/HelloWorld.vue'
import HelloPanel from './components/HelloPanel.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloPanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
