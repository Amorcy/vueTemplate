// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  console.log(to, '----------->to')
  console.log(from, '----------->from')
  if (to.matched.length === 0) {                                        //如果未匹配到路由
    // from.name ? next({ name: from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
    router.push('/notFound')
  } else {
    next();                                                                            //如果匹配到正确跳转
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
