
<template>
	<div>
		Posts component
		<!-- Use <TabPosts /> here will cause error -->
		<!-- [Vue warn]: Error in nextTick: "RangeError: Maximum call stack size exceeded" -->
		<!-- <TabPosts /> -->

	</div>
</template>

<script>
export default {
	name: 'TabPosts',
	created: function () {
		console.log('TabPosts created. ')
	}
}
</script>