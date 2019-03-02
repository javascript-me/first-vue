<template>
	<div>
		this is message: {{message}}<br />
		this is dynamicMessage: {{dynamicMessage}}<br />
		this is ageOfCat: {{ageOfCat}}
		<button @click="checkAgeOfCat">check ageOfCat</button>
		this is ageOfDog: {{ageOfDog}}
		<button @click="checkAgeOfDog">check ageOfDog</button>
		this is ageOfFish: {{ageOfFish}}
		<button @click="checkAgeOfFish">check ageOfFish</button>
	</div>
</template>

<script>
export default {
	name: 'PassPropDemo',
	props: [
		'message',
		'dynamicMessage',
		'ageOfCat',
		'ageOfDog',
		'ageOfFish'
	],
	methods: {
		checkAgeOfCat: function () {
			console.log(typeof this.ageOfCat)
		},
		checkAgeOfDog: function () {
			console.log(typeof this.ageOfDog)
		},
		checkAgeOfFish: function () {
			console.log(typeof this.ageOfFish)
		},
	}
}
</script>
