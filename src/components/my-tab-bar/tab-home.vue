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

		this.$once('hook:beforeDestroy', function () {
			// 由于my-tab-bar.vue里面使用了<keep-alive>标签，所以只有切换路由，
			// 如从【http://localhost:8080/】跳转到【http://localhost:8080/app-other】
			// 才会触发以下代码的运行。
			console.log('tab home destroy...')
		})
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