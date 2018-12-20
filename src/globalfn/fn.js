//全局的一些方法
import { toTime,DIYtoast } from './../utils/tool'


const fn = {}
fn.install = function (Vue) {
    /**
     * use | return_txt
     * @param {String} val 
     * 用于过滤大段文字显示 {50} 个文字
     */
    Vue.filter('return_txt', val => {
        if (val) {
            if (val.length > 50) return val.slice(0, 50) + '...'
            else return val
        } else return val
    })



    /**
     * use | _ymd
     * @param {number} val (tool中拥有判断 时间戳可10/13位)
     * 得到时间格式 y - m - d
     */
    Vue.filter('_ymd',val =>{
        if(val){
            return toTime(val,'y-m-d')
        } else return val
    })
    

    /**
     * use | _hm
     * @param {number} val (tool中拥有判断 时间戳可10/13位)
     * 得到时间格式 h : m
     */
    Vue.filter('_hm',val =>{
        if(val){
            return toTime(val,'h:m')
        } else return val
    })



    /**
     * use: v-exp='val'
     * @param {number} val 
     * 经验条 {val} %
     */
    Vue.directive('exp', {
        bind(el, val) {
            el.style.width = val.value + '%';
        }
    })

    /**
     * use $toast('msg')
     * @param {String}
     * 小弹框提示 用法与 {element-ui} 一致
     */
    Vue.prototype.$toast = DIYtoast;

}

export default fn;