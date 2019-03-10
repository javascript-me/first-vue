<template>
	<div>
		ageOfMan: {{ageOfMan}}<br />
		gender: {{gender}}<br />
		phone: {{phone}}<br />
		<button @click="showAuthor">Show Author</button><br />
		<button @click="showNotExist">Show not exist</button><br />


	</div>
</template>

<script>
import Person from './Person'

export default {
	name: 'PassPropWithTypeCheckingDemo',
	props: {
		ageOfMan: Number,
		gender: String,
		phone: Number,
		author: Person
	},
	methods: {
		showAuthor: function () {
			console.log('author: ', JSON.stringify(this.author, null, 4))
		},
		showNotExist: function () {
			// this.$attrs包含了上面props里面不存在的由用户传入的属性。
			console.log('not exist: ', this.$attrs)
		}
	}
}
</script>

