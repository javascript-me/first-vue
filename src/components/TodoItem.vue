<template>
	<li>{{todo.text}}: {{random}}</li>
</template>

<script>
export default {
	name: 'TodoItem',
	props: ['todo', 'random']
}
</script>
