// ==============================  全局组件  =================

import bordertxt from './bordertxt.vue'
import pagin from './pagin.vue'


const globals = {
    install: function (Vue){

        /**
         * @param 左侧加border文本
         */
        Vue.component('bor',bordertxt)

        /**
         * @param 分页 用法与{element-ui一致}
         */
        Vue.component('pagination',pagin)
    }
}


export default globals