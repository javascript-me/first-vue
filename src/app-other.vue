<template>
  <div id="app-other">
		<hr />
		<div id="demo">
			<button v-on:click="showA = !showA">
				Toggle A
			</button><br />
			<transition name="fade">
				<p v-if="showA">hello</p>
			</transition>

			<button v-on:click="showB = !showB">
				Toggle B
			</button><br />
			<transition name="slide-fade">
				<p v-if="showB">hello</p>
			</transition>
		</div>

	  <hr />
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
		showA: true,
		showB: true,
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
/* for toggle A */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* for toggle B */
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
