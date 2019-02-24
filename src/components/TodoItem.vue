<template>
	<li>
		{{todo.text}}: {{random}}: {{id}}
		<button v-on:click="deleteMyself">delete</button>
		<slot />
	</li>
</template>

<script>
export default {
	name: 'TodoItem',
	props: ['todo', 'random'],
	data: () => {
		return {
			id: "ooo"
		}
	},
	methods: {
		deleteMyself: function () {
			console.log('todo', this.todo)
			this.$emit("delete", this.todo.text, new Date())
			// 这里不需要告诉父结点自己的index值。父结点自己有办法知道这个信息。
		}
	}
}
</script>
