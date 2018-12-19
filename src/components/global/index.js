// ==============================  全局组件  =================

import bordertxt from './bordertxt.vue'
import pagin from './pagin.vue'


const globals = {
    install: function (Vue){
        Vue.component('bor',bordertxt)
        Vue.component('pagination',pagin)
    }
}


export default globals