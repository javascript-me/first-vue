import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// TODO: it is hard to understand here...
new Vue({
  render: h => h(App),
}).$mount('#app')
