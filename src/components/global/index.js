// ==============================  全局组件  =================

import bordertxt from './bordertxt.vue'


const globals = {
    install: function (Vue){
        Vue.component('bor',bordertxt)
    }
}


export default globals