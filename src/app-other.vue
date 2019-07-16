<template>
  <div id="app-other">
    first slot A:
    <br>
    <FirstSlot>Execuse Me: {{this.slotValue}}</FirstSlot>
    <hr>first slot B:
    <br>
    <FirstSlot/>
    <hr>
    <BaseLayout>
      <template v-slot:header>
        <h1>我是一个title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>我是一个Footer</p>
      </template>
    </BaseLayout>
  </div>
</template>

<script>
import FirstSlot from "./components/first-slot.vue";
import BaseLayout from "./components/base-layout.vue";

export default {
  name: "AppOther",
  components: {
    FirstSlot,
    BaseLayout
  },
  data: () => {
    return {
      slotValue: "slot value..."
    };
  }
};
</script>

<style>
</style>
