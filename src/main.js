// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/public.css'  //全局样式(动画)
import 'swiper/dist/css/swiper.min.css';
Vue.config.productionTip = false
import globalCom from './components/global/index' //自定义全局组件
Vue.use(globalCom)
import fn from './globalfn/fn'  //自定义全局方法
Vue.use(fn)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
