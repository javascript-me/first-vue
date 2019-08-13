<template>
	<div>
		Archive component
		<button @click="doForceUpdate">force update</button>
	</div>
</template>

<script>
export default {
	name: 'TabArchive',
	created: function () {
		console.log('TabArchive created. ')
	},
	methods: {
		doForceUpdate: function () {
			console.log('ddd')
			this.$forceUpdate()
		}
	},
	updated: function () {
		console.log('updated. ')
	}
}
</script>