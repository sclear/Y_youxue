import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //主页
      path: '/home', component: resolve => require(['@/components/home/home.vue'], resolve)
    },
    {
      //看视频课程
      path: '/', component: resolve => require(['@/components/buyvideo/svideo.vue'], resolve)
    },
    {
      //播放视频
      path: '/player', component: resolve => require(['@/components/player/player.vue'], resolve)
    },
    {
      //课程分类
      path: '/classify', component: resolve => require(['@/components/classify/classify.vue'], resolve)
    },
    {
      //系统信息
      path: '/messge', component: resolve => require(['@/components/messge/messge.vue'], resolve)
    },
    {
      //更多课程
      path: '/moreclass', component: resolve => require(['@/components/moreclass/moreclass.vue'], resolve)
    },
    {
      //分类2
      path: '/classify2', component: resolve => require(['@/components/classify2/classify2.vue'], resolve)
    },
  ]
})
