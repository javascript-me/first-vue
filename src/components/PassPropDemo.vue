<template>
	<div>
		this is message: {{message}}<br />
		this is dynamicMessage: {{dynamicMessage}}<br />
		this is ageOfCat: {{ageOfCat}}
		<button @click="checkAgeOfCat">check ageOfCat</button>

		
	</div>
</template>

<script>
export default {
	name: 'PassPropDemo',
	props: [
		'message',
		'dynamicMessage',
		'ageOfCat'
	],
	methods: {
		checkAgeOfCat: function () {
			console.log(typeof this.ageOfCat)
		}
	}
}
</script>
