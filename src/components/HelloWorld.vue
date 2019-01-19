<template>
  <div class="hello-world-component">
    <h2>计算属性</h2>
    <div>{{reversedMessage}}</div>
    <hr />

    <div>TODO: 修饰符到底有没有用？</div>
    <hr />

    <h2>formula</h2>
    <!-- formula也可以使用内部的方法 -->
    <div>{{sum()}}</div>
    <!-- 属性值里面也可以使用formula -->
    <input v-bind:value='sum() + "111"' />
    <hr />

    <h2>失去作用的button</h2>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    <hr />

    <!-- v-html的值不会替换结点本身，而只会作为子结点加入去。 -->
    <p>Using v-html directive: <span v-html="rawHtml">okok</span></p>
    <hr />

    <!-- 所谓响应式，就是指结点使用了一个不是硬编码的东西，即变量 -->
    <h2>greeting: {{ greeting }}</h2>
    <h2 v-once>greeting once: {{ greeting }}</h2>

    <input v-bind:value="greeting" /><br />
    
    <div v-bind:title="greeting">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </div>

    <button v-on:click="reverseGreeting">逆转消息</button><br />

    <hr />

    <!-- react里面是没有这种直接的绑定的，vue的这种东西真的有用吗？ -->
    <input v-model="message" /><br />
    <button v-on:click="showMessage">Show message</button><br />
    
    <hr />

    <h2>props value: {{ messageFromParent }}</h2>
    
    <hr />

    <ul>
      <TodoItem v-for="item in todos"
        v-bind:todo="item"
        v-bind:random=String(Math.random())
        v-bind:key="item.text" />
    </ul>
    
    <hr />

    <p v-if="seen">现在你看到我了</p>

    <hr />

    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'HelloWorld',
  props: {
    messageFromParent: String
  },
  data: () => {
    return {
      isButtonDisabled: true,
      rawHtml: '<span style="color:red">ok</span>',
      greeting: '12345',
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      message: 'message from myself'
    }
  },
  methods: {
    reverseGreeting: function () {
      this.greeting = this.greeting.split('').reverse().join('')
    },
    showMessage: function () {
      console.log(this.message)
    },
    sum: function () {
      return this.greeting + 'ooo'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.greeting.split('').reverse().join('')
    }
  },
  created: function () {
    console.log('greeting', this.greeting)
  },
  watch: {
    greeting: function (newValue, oldValue) {
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    }
  },
  components: {
    TodoItem
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
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
