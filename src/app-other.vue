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

      <template v-slot:default>
        <p>我是主体内容。。。</p>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:footer>
        <p>我是一个Footer</p>
      </template>
    </BaseLayout>

    <hr>
	default current user:
    <current-user>
    </current-user>

    <hr>
	current user with replacement:
    <current-user>
      <template v-slot:default>replacement</template>
    </current-user>
  </div>
</template>

<script>
import FirstSlot from "./components/first-slot.vue";
import BaseLayout from "./components/base-layout.vue";
import CurrentUser from "./components/current-user.vue";

export default {
  name: "AppOther",
  components: {
    FirstSlot,
    BaseLayout,
    CurrentUser
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
