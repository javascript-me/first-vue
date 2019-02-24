<template>
	<div id="dynamic-component-demo" class="demo">
		<button
			v-for="tab in tabs"
			v-bind:key="tab"
			v-bind:class="['tab-button', { active: currentTab === tab }]"
			v-on:click="currentTab = tab"
		>{{ tab }}</button>

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