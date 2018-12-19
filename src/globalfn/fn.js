//全局的一些方法
const fn = {}
fn.install = function (Vue) {
    //过滤信件 文字过多(messge)
    Vue.filter('return_txt', val => {
        if (val) {
            if (val.length > 50) return val.slice(0, 50) + '...'
            else return val
        } else return val
    })

    //学习进度条
    Vue.directive('exp',{
        bind(el,val){
            el.style.width = val.value +'%';
        }
    })

}

export default fn;