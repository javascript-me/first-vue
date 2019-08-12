<template>
	<div>Home component</div>
</template>

<script>
export default {
	name: 'TabHome',
	created: function () {
		console.log('TabHome created. ')
		console.log('this.$parent.tabs', this.$parent.tabs)
		console.log('this.$parent.currentTab', this.$parent.currentTab)

	}
}
</script>