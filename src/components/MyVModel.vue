<template>
	<div>
		[{{value}}]<button @click="increase">increase</button>
	</div>
</template>

<script>
export default {
	props: ['value'],
	methods: {
		increase: function () {
			this.$emit('input', (this.value + 1))
		}
	}
}
</script>

