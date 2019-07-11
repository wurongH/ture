import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// vue的异步组件+webpack的ensure()方法。（按需加载+js打包分离）

//首页
const home = v => require.ensure([], () => v(require('@/views/home')), 'home')

//其他
const other = v => require.ensure([], () => v(require('@/views/other')), 'other')

// 关于
const about = v => require.ensure([], () => v(require('@/views/about')), 'about')

//错误页面
const error401 = v => require.ensure([], () => v(require('@/views/error/error401')), 'error401')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
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

router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach(() => {
  nprogress.done()
})

export default router;
