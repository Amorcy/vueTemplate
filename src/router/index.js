import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import aboutMe from '@/components/aboutMe/aboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/aboutme',
          name: 'aboutme',
          component: aboutMe
        }
      ]
    }
  ]
})
