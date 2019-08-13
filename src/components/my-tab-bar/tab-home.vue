<template>
	<div>
		Home component
		<button @click="callParentMethod">get map</button>
	</div>
	
</template>

<script>
export default {
	name: 'TabHome',
	created: function () {
		console.log('TabHome created. ')
		console.log('this.$parent.tabs', this.$parent.tabs)
		console.log('this.$parent.currentTab', this.$parent.currentTab)
	},
	methods: {
		callParentMethod: function () {
			console.log('call parent method...')
			this.getMap()
		}
	},
	inject: ['getMap']
}
</script>