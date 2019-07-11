import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => require (['@/views/home'], resolve)
    },
    {
      path: '/other',
      other: 'other',
      component: resolve => require (['@/views/other'], resolve)
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require (['@/views/about'], resolve)
    },
    {
      path: '*',
      name: 'error401',
      component: resolve => require (['@/views/error/error401'], resolve)
    }
  ],
  mode: 'history' // 去掉地址栏的#号
})

export default router;
