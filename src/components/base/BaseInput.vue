<template>
	    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >

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
	}
}
</script>

<style>

</style>
