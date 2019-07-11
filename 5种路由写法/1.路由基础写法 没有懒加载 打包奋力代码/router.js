import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import About from '@/views/about'
import Other from '@/views/other'
import error401 from '@/views/error/error401'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component:Home
    },
    {
      path: '/other',
      other: 'other',
      component: Other
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: 'error401',
      component: error401
    }
  ],
  mode: 'history' // 去掉地址栏的#号
})

export default router;
