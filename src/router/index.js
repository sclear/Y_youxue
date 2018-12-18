import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: resolve => require(['@/components/home/home.vue'],resolve)
    },
    {
      path: '/',
      component: resolve => require(['@/components/buyvideo/svideo.vue'],resolve)
    },
    {
      path: '/player',
      component: resolve => require(['@/components/player/player.vue'],resolve)
    },
    {
      path: '/classify',
      component: resolve => require(['@/components/classify/classify.vue'],resolve)
    },
  ]
})
