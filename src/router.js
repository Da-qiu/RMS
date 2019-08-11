import Vue from 'vue'
import Router from 'vue-router'
import Adduser from './views/addUser/Adduser.vue'
import Detail from './components/detail/Detail.vue'
import Home from './views/home/Home.vue'
import About from './views/about/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: Adduser
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
