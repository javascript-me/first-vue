<template>
  <div class="hello-world-component">

    <h3>StorePropInData</h3>
    <StorePropInData v-bind:bookInfo="bookInfo" />
    <button @click="showBookInfo">Show Book Info</button>

    <hr />
    <h3>PassPropWithTypeCheckingDemo</h3>

    <PassPropWithTypeCheckingDemo v-bind:ageOfMan='20' v-bind="{
      gender: 'male',
      phone: 1234567890
    }"
      v-bind:author="author"
      notExist="kkk"
      v-bind:otherAttribute="true" />
    <hr />

    <h3>PassPropDemo</h3>

    <PassPropDemo message="yyy"
      v-bind:dynamicMessage="dynamicMessage"
      v-bind:ageOfCat="ageOfCat"
      ageOfDog='4'
      age-of-dog-dash='99'
      v-bind:ageOfFish="ageOfFish" />
      
    <hr />

    BaseCheckbox: <BaseCheckbox v-model="valueOfBaseCheckbox" /><br />

    Base Button: <BaseButton /> This button is register in main.js. <br />
    Base Input: <BaseInput v-model="username"
      placeholder="Enter your username"
    />

    <hr />

    <MyVModel v-model="valueOfMyVModel" />

    <hr />
    input真有一个事件叫做'input'么?有的。<input v-bind:value="myInputValue" v-on:input="handleMyInputChange" />
    <hr />
    用户只能输入数字和点号<input v-model.number="age" type="number"><br />

    我的字面值是来自一个变量pickShaddow<input type="radio" v-model="pick" v-bind:value="pickShaddow">
    <span>pick: {{pick}}</span>
    <br />

    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>


    <div id="example-6">
      <select v-model="multipleSelected" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ multipleSelected }}</span>
    </div>

    <div id="example-5">
      <select v-model="singleSelected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ singleSelected }}</span>
    </div>


    <div id="example-4">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>

    <!-- 如此原始的绑定关系，真的有实际应用价值么？ -->
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>


    <input type="checkbox" id="checkbox" v-model="fieldChecked">
    <label for="checkbox">{{ fieldChecked }}</label><br />


    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ richTextContent }}</p>
    <br>
    <textarea v-model="richTextContent" placeholder="add multiple lines"></textarea>

    <hr />
    Try to press Shift and click<button @click.shift.exact="warn('Are you OK?', $event)">A</button><br />
    Try to press Shift + C<input @keyup.shift.67="warn('Are you OK?', $event)"><br />
    Try to press "enter"<input v-on:keyup.13="warn('Are you OK?', $event)"><br />
    Try to press "enter"<input v-on:keyup.enter="warn('Are you OK?', $event)"><br />

    <button v-on:click="warn('Are you OK?', $event)">
      Submit
    </button>

    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
    <hr />

    <div>
      <span v-for="(n, index) in 10" :key="index">{{ n }} </span>
    </div>
    <ul>
      <!-- 如果li是位于一个ul之内的话，li上的:key就直接使用值index即可。
      如果多个li忘记了被各自的ul所包裹，那么li上的:key，就有可能相同而发生冲突。 -->
      <li v-for="(n, index) in even(numbers)" v-bind:key="index">{{ n }}</li>
    </ul>
    <ul>
      <li v-for="(n, index) in evenNumbers" v-bind:key="index">{{ n }}</li>
    </ul>
    <hr />

    <ul id="v-for-object" class="demo">
      <li v-for="(value, key) in goodObject" v-bind:key="key">
        {{ value }}
      </li>
    </ul>
    <button v-on:click="addMoreProperty">add more property</button>

    <ul id="example-1">
      <li v-for="item in items" v-bind:key="item.message">
        {{ item.message }}
      </li>
    </ul>

    <button v-on:click="changeMyArray">Change my array</button>

    <ul id="example-1.1">
      <li v-for="item of items" v-bind:key="item.message">
        {{ item.message }}
      </li>
    </ul>    
    <ul id="example-2">
      <li v-for="(item, index) in items" v-bind:key="index">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    <hr />

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
      <TodoItem v-for="(item, index) in completedTodos(todos)"
        v-bind:todo="item"
        v-bind:random="String(Math.random())"
        v-bind:key="index"
        v-on:delete="(text, timeStamp) => {
          handleDelete(text, timeStamp, index)
        }">0-0-0-0-0</TodoItem>
        <!-- 如果想往handleDelete这个方法传入额外的值，可以做得到么？react是可以做到的，像下面这样
        （） => {executeRealHandler(index, etc...)} 
          事实表明，vue也是可以做到的，请看上面的实现方法。
        -->
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
import MyVModel from './MyVModel.vue'
import TodoItem from './TodoItem.vue'
import PassPropDemo from './PassPropDemo.vue'
import StorePropInData from './StorePropInData.vue'
import PassPropWithTypeCheckingDemo from './PassPropWithTypeCheckingDemo.vue'
import Person from './Person'

import _ from 'lodash'
import axios from 'axios'

export default {
  name: 'RichDemo',
  components: {
    TodoItem,
    MyVModel,
    PassPropDemo,
    PassPropWithTypeCheckingDemo,
    StorePropInData
  },
  props: {
    messageFromParent: String
  },
  data: () => {
    return {
      valueOfBaseCheckbox: false,
      username: 'HELLO KITTY',
      author: new Person('anthony', 'chen'),
      bookInfo: {
        id: '11111',
        name: 'java'
      },
      ageOfFish: 5,
      ageOfCat: '3',
      dynamicMessage: 'ddddd',
      valueOfMyVModel: 10,
      myInputValue: 'ttt',
      age: 20,
      pick: '',
      pickShaddow: 'okok',
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      multipleSelected: [],
      singleSelected: '',
      picked: '',
      checkedNames: [],
      fieldChecked: false,
      richTextContent: '',
      counter: 0,
      numbers: [ 1, 2, 3, 4, 5 ],
      goodObject: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      parentMessage: 'Parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
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
        { text: '学习 JavaScript', isComplete: true },
        { text: '学习 Vue', isComplete: false },
        { text: '整个牛项目', isComplete: true }
      ],
      message: 'message from myself'
    }
  },
  methods: {
    showBookInfo: function () {
      console.log('bookInfo', JSON.stringify(this.bookInfo, null, 4))
    },
    handleMyInputChange: function (e) {
      console.log('new value: ', e.target.value)
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) event.preventDefault()
      console.log(message, event.target.tagName)
    },
    handleDelete: function (text, timeStamp, index) {
      console.log('text', text, 'timeStamp', timeStamp, 'index', index)
      this.todos = this.todos.filter((item) => {
        return item.text != text
      })
    },
    completedTodos: function (todos) {
      return todos.filter((item) => {
        return item.isComplete
      })
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
    addMoreProperty: function () {
      this.goodObject = Object.assign({}, this.goodObject, {
        time: '2019-02-08'
      })
    },
    changeMyArray: function () {
      this.items.splice(0, 1, {
        message: 'ggg'
      })
    },
    reverseGreeting: function (event) {
      this.greeting = this.greeting.split('').reverse().join('')
      console.log(event.target.tagName)
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
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
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
