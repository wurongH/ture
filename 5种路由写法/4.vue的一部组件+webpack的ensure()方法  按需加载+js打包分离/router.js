import Vue from 'vue'
import Router from 'vue-router'

const home = v => require.ensure([], () => v(require('@/views/home')), 'home')
const other = v => require.ensure([], () => v(require('@/views/other')), 'other')
const about = v => require.ensure([], () => v(require('@/views/about')), 'about')
const error401 = v => require.ensure([], () => v(require('@/views/error/error401')), 'error401')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/other',
      other: 'other',
      component: other
    },
    {
      path: '/about',
      name: 'about',
      component: about
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
