import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Admin from '../views/Admin.vue'

import store from '../store/index'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    // redirect: '/admin/login',
    redirect: () => {
      return store.state.token ? '/admin/panel' : '/admin/login'
    },
    component:  () => import(/* webpackChunkName: "admin-group" */ '../views/Admin.vue'),
    children: [
      {
        path: 'login',
        name: 'AdminLogin',
        component: () => import(/* webpackChunkName: "admin-group" */ '../components/admin/Login.vue')
      },
      {
        path: 'panel',
        name: 'AdminPanel',
        component: () => import(/* webpackChunkName: "admin-group" */ '../components/admin/Panel.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
