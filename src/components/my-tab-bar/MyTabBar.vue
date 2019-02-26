<template>
	<div id="dynamic-component-demo" class="dynamic-component-demo">
		<button
			v-for="tab in tabs"
			v-bind:key="tab"
			v-bind:class="['tab-button', { active: currentTab === tab }]"
			v-on:click="currentTab = tab"
		>{{ tab }}</button>

		<!-- v-bind:is语法可以动态使用指定名称的组件来完全替换当前结点。 -->
		<component
			v-bind:is="currentTabComponent"
			class="tab"
		></component>
	</div>
</template>

<script>
import TabHome from './TabHome.vue'
import TabPosts from './TabPosts.vue'
import TabArchive from './TabArchive.vue'

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
	components: {
		TabHome,
		TabPosts,
		TabArchive
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