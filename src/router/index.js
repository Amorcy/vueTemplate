import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import aboutMe from '@/components/aboutMe/aboutMe'
import notFound from '@/common/404'
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
        },
        {
          path: '/notFound',
          name: 'notFound',
          component: notFound
        }
      ]
    }
  ]
})
