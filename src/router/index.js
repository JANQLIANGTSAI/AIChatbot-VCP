import Vue from 'vue'
import Router from 'vue-router'

import BrowseLectures from '@/components/Browse'
import TestBot from '@/components/TestBot'
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
      path: '/testBot',
      name: 'TestBot',
      component: TestBot
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '*', redirect: '/' }
  ]
})
