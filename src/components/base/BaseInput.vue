<template>
	    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
		<!-- 组件外的所有事件，都会被绑定到上面的input结点上。这样就不用手动一个一个事件地绑上去给它了。 -->
	  <button @click="showRootAttrs">Show Root attrs</button>
	  <button @click="showListeners">Show Listeners</button>
    </label>
</template>

<script>
export default {
	name: 'BaseInput',
	// 组件的根元素通常是div，就算它继承了一些属性，也是无功能影响的。但它们确实是多余代码！！！
	// 无数的地方表明，vue是如此的支离破碎，它企图做到所有的事情，想变成一把瑞士军刀，
	// 而不是像react那样，做最简单的事情，如专心做一个锤子。
	inheritAttrs: false,
	// 如果这里的inheritAttrs设置为true，就会出现下面这个带有placeholder的畸形的label标签。
	// <label data-v-dc52b4e2="" placeholder="Enter your username">

	props: ['label', 'value'],
	methods: {
		showRootAttrs: function () {
			console.log('this.$attrs', this.$attrs)
		},
		showListeners: function () {
			console.log('this.$listeners', this.$listeners)
		}
	},
	computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
}
</script>

<style>

</style>
