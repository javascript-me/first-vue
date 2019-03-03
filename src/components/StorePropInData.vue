<template>
	<div>
		id: {{bookInfo.id}}<br />
		name: {{bookInfo.name}}<br />
		<button @click="showLocalBookInfo">Show Local Book Info</button><br />
		<button @click="replaceBookInfoOfProps">replace book info of props</button>this will cause vue error<br />
		<button @click="updateIdOfProps">Update id of props</button>子组件改变props变量的内部属性，是生效的。但可能不是最佳实践。<br />
	</div>
</template>

<script>
export default {
	name: 'StorePropInData',
	props: [
		'bookInfo'
	],
	data: function () {
		return {
			localBookInfo: this.bookInfo
		}
	},
	methods: {
		showLocalBookInfo: function () {
			console.log('localBookInfo', JSON.stringify(this.localBookInfo))
		},
		replaceBookInfoOfProps: function () {
			this.bookInfo = {
				id: '2222',
				name: 'ruby'
			}
		},
		updateIdOfProps: function () {
			this.bookInfo.id = '999'
		}
	}
}
</script>
