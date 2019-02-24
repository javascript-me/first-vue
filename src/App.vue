<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100">

    <!-- 这样随意的嵌入class的值，真的好么？以前react是使用传入一个skin的属性值来做到这个效果。 -->
    <HelloPanel class='additional' v-bind:class="true ? 'a' : 'b'" />
    <hr />
    
    <HelloWorld messageFromParent="Message from parent"/>

    <hr />

    <MyTabBar />
    
  </div>
</template>

<script>
// 如果这里不作引用，上面就会报错。
import HelloWorld from './components/HelloWorld.vue'
import HelloPanel from './components/HelloPanel.vue'
import MyTabBar from './components/MyTabBar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloPanel,
    MyTabBar
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
