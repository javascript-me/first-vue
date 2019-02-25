import Vue from 'vue'
import Main from './Main.vue'
import router from './router'

Vue.config.productionTip = false

// TODO: it is hard to understand here...
new Vue({
  router,
  render: h => h(Main),
}).$mount('#app')
