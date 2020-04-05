import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Admin from '../views/Admin.vue'

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
