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

    <hr>default current user:
    <current-user :incomingUser="goodUser"></current-user>

    <hr>current user with replacement (这里使用firtName来覆盖组件内部默认的lastName，这是一个奇怪的需求):
    <current-user :incomingUser="goodUser">
      <template v-slot:default="{goodUser}">{{goodUser.firstName}}</template>
    </current-user>

    <hr>
	这个功能已经演示了slot最有用的东西了，就是用新的组件去替换默认的组件，但是它们使用的数据源是相同的。。。
    <SlotList :items="listItems">
      <div slot-scope="row" class="list-item1">{{row.item.text}}</div>
    </SlotList>
  </div>
</template>

<script>
import FirstSlot from "./components/first-slot.vue";
import BaseLayout from "./components/base-layout.vue";
import CurrentUser from "./components/current-user.vue";
import SlotList from "./components/slot-list.vue";

export default {
  name: "AppOther",
  components: {
    FirstSlot,
    BaseLayout,
    CurrentUser,
    SlotList
  },
  data: () => {
    return {
	  slotValue: "slot value...",
	  goodUser: {
		  firstName: 'joanna',
		  lastName: 'wang'
	  },
      listItems: [
        { text: "First item", icon: "fa fa-user" },
        { text: "Second item", icon: "fa fa-copy" },
        { text: "Third item", icon: "fa fa-cut" }
      ]
    };
  }
};
</script>

<style>
</style>
