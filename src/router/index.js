import Vue from 'vue'
import Router from 'vue-router'

import BrowseLectures from '@/components/Browse'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BrowseLectures',
      component: BrowseLectures
    },
    {
      path: '/browse',
      name: 'BrowseLectures',
      component: BrowseLectures
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '*', redirect: '/' }
  ]
})
