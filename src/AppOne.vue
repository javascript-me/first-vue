<template>
  <div id="app-one">
    <img alt="Vue logo" src="./assets/logo.png" width="100">

    <!-- 这样随意的嵌入class的值，真的好么？以前react是使用传入一个skin的属性值来做到这个效果。 -->
    <HelloPanel class='additional' v-bind:class="true ? 'a' : 'b'" />
    <hr />
    
    <!-- 也可以使用messageFromParent -->
    <RichDemo message-from-parent="Message from parent"/>

    <hr />

    <MyTabBar />
    
  </div>
</template>

<script>
// 如果这里不作引用，上面就会报错。
import RichDemo from './components/RichDemo.vue'
import HelloPanel from './components/HelloPanel.vue'
import MyTabBar from './components/my-tab-bar/MyTabBar.vue'

export default {
  name: 'AppOne',
  components: {
    RichDemo,
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
