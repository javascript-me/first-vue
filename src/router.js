import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import AppOther from './AppOther.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/app-other',
      name: 'app-other',
      component: AppOther
    }
  ]
})
