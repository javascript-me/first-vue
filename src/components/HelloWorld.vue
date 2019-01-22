<template>
  <div class="hello-world-component">

    <h1 v-show="true">Hello!</h1>
    <template v-if="Math.random() > 0.5">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <h1 v-if="Math.random() > 0.5">条件渲染：Yes</h1>
    <h1 v-else>条件渲染：No</h1>
    <hr />

    <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">multiple prefix</div>
    <div v-bind:style="[baseStyles, overridingStyles]">multiple object variable</div>
    <div v-bind:style="styleObject">bind first style object variable</div>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">bind first style object</div>
    <hr />

    <!-- 这个有点接近react的ClassNames()的用法了 -->
    <div v-bind:class="[
      {active: isActive},
      errorClass
    ]">
      condition class with object shortcut
    </div>    
    <!-- 某一个类的单词，居然也定义成变量，这种情况实际上是少之又少的。 -->
    <div v-bind:class="[isActive ? activeClass : '', errorClass]">condition class</div>
    <div v-bind:class="[activeClass, errorClass]">array to class</div>
    <div v-bind:class="computedClassObject">computed class object</div>
    <div v-bind:class="classObject">class object</div>
    <div class="okok" v-bind:class="{ active: isActive, 'has-error': true }">is active class</div>
    <hr />

    <div id="watch-example">
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
      <img alt="Vue logo" v-bind:src="answerImagePath" width="100">
    </div>
    <hr />

    <h2>计算属性。计算属性里面如果分开来做get和set，将会带来职责过多的后果，将不可维护。变化将不再是单向的了。</h2>
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
import _ from 'lodash'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    messageFromParent: String
  },
  data: () => {
    return {
      baseStyles: {
        fontSize: '40px'
      },
      overridingStyles: {
        color: 'blue'
      },
      styleObject: {
        backgroundColor: 'grey'
      },
      activeColor: 'red',
      fontSize: 20,
      activeClass: 'active',
      errorClass: 'text-danger',
      classObject: {
        active: true,
        'text-danger': true
      },
      isActive: true,
      answerImagePath: require('../assets/logo.png'),
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
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
    },
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
          vm.answerImagePath = response.data.image
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  },
  computed: {
    reversedMessage: function () {
      return this.greeting.split('').reverse().join('')
    },
    computedClassObject: function () {
      return {
        active: true,
        'text-danger': true
      }
    }
  },
  created: function () {
    console.log('greeting', this.greeting)
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  watch: {
    greeting: function (newValue, oldValue) {
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
    },
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
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
