<template>
	<div>
		ageOfMan: {{ageOfMan}}<br />
		gender: {{gender}}<br />
		phone: {{phone}}<br />
		<button @click="showAuthor">Show Author</button>
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
			console.log('author', JSON.stringify(this.author, null, 4))
		}
	}
}
</script>

