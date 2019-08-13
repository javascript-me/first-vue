<template>
	<div id="dynamic-component-demo" ref="helloDiv" class="dynamic-component-demo">
		<button
			v-for="tab in tabs"
			v-bind:key="tab"
			v-bind:class="['tab-button', { active: currentTab === tab }]"
			v-on:click="currentTab = tab"
		>{{ tab }}</button>

		<!-- v-bind:is语法可以动态使用指定名称的组件来完全替换当前结点。 -->
		<keep-alive>
			<component v-bind:is="currentTabComponent" class="tab"></component>
		</keep-alive>

		<button @click="accessChild">access child</button>
	</div>
</template>

<script>
import TabHome from './tab-home.vue'

export default {
	name: 'MyTabBar',
	data: () => {
		return {
			currentTab: 'Home',
			tabs: ['Home', 'Posts', 'Archive']
		}
	},
	computed: {
		currentTabComponent: function () {
			return 'Tab' + this.currentTab
		}
	},
	beforeCreate: function () {
		// 这是引用外部UI组件的新方法。
		this.$options.components.TabPosts = require('./tab-posts.vue').default
	},
	// TabArchive是一个异步组件。
	components: {
		TabHome,
		// TabPosts,
		TabArchive: () => import('./tab-archive.vue')
	},
	methods: {
		accessChild: function () {
			console.log('child: ', this.$refs.helloDiv.clientWidth)
		},
		getMap: function () {
			console.log('get map...')
		}
	},
	provide: function () {
		// Provode a method that can be accessed by all children. 
		return {
			getMap: this.getMap
		}
	}
}
</script>

<style scoped>
.dynamic-component-demo {
	text-align: left;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>