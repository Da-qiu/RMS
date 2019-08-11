import Vue from 'vue'
import Router from 'vue-router'
import Adduser from './views/addUser/Adduser.vue'
import Detail from './views/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
