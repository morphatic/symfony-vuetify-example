import Vue from 'vue'
import Router from 'vue-router'
import TheHomePage from './components/TheHomePage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './components/TheAboutPage'),
    }
  ]
})

export default router
