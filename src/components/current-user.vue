<template>
  <span>
    <slot>placeholder for lastName: {{this.incomingUser.lastName}}</slot>
  </span>
</template>

<script>
export default {
  name: "CurrentUser",
  props: [
	  'incomingUser'
  ],
  data: () => {
	  return {
	  }
  }
};
</script>

<style>
</style>
