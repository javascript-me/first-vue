<template>
  <div id="app-other">
    first slot A: <br />
    <FirstSlot>
      Execuse Me: {{this.slotValue}}
    </FirstSlot>
    first slot B: <br />
    <FirstSlot />
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
