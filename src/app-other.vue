<template>
  <div id="app-other">
    first slot A: <br />
    <FirstSlot>
      Execuse Me: {{this.slotValue}}
    </FirstSlot>
	<hr />
    first slot B: <br />
    <FirstSlot />
	<hr />
  </div>
</template>

<script>
import FirstSlot from './components/first-slot.vue'

export default {
  name: 'AppOther',
  components: {
    FirstSlot
  },
	data: () => {
		return {
			slotValue: 'slot value...'
		}
	}
}
</script>

<style>
</style>
