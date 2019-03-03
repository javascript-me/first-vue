<template>
	<div>
		ageOfMan: {{ageOfMan}}<br />
		gender: {{gender}}<br />
		phone: {{phone}}<br />
	</div>
</template>

<script>
export default {
	name: 'PassPropWithTypeCheckingDemo',
	props: {
		ageOfMan: Number,
		gender: String,
		phone: Number
	}
}
</script>

