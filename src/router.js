import Vue from 'vue'
import Router from 'vue-router'
import AppOne from './app-one.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      component: AppOne
    },
    {
      path: '/app-other',
      name: 'app-other',
      component: () => import(/* webpackChunkName: "app-other" */ '@/app-other.vue')
    }
  ]
})
