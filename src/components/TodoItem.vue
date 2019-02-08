<template>
	<li>
		{{todo.text}}: {{random}}
		<button v-on:click="deleteMyself">delete</button>
	</li>
</template>

<script>
export default {
	name: 'TodoItem',
	props: ['todo', 'random'],
	methods: {
		deleteMyself: function () {
			this.$emit("delete")
			// 这里不需要告诉父结点自己的index值。父结点自己有办法知道这个信息。
		}
	}
}
</script>
