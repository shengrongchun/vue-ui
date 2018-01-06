import loading from './loading'
import template from './template'
const Loading = function(Vue) {
    //如果安装过就返回
    if (Loading.installed) {
      return
    }
    //
    if(timeout) {
        clearTimeout(timeout)
    }
    //
    Loading.installed = true
    const loadingConstructor = Vue.extend(template)
    let instance = null
    let timeout = null
    let options = null
    //
    const setPosition = function() {
        if(options.target) {
            instance.target = document.querySelector(options.target)
            instance.target.parentNode.appendChild(instance.vm.$el)
            instance.vm.$el.style.width = instance.target.offsetWidth+'px'
            instance.vm.$el.style.height = instance.target.offsetHeight+'px'
            instance.vm.$el.style.top = instance.target.offsetTop+'px'
            instance.vm.$el.style.left = instance.target.offsetLeft+'px'
        }else {
            document.body.appendChild(instance.vm.$el)
            instance.vm.$el.style.position = 'fixed'
            instance.vm.$el.style.width = '100%'
            instance.vm.$el.style.height = '100%'
            instance.vm.$el.style.top = 0
            instance.vm.$el.style.left = 0 
        }
    }
    //
    const setFun = function(data,reslove,reject) {
        instance = new loadingConstructor({
            propsData: data,
            methods: {
                loadingClose: ()=> {
                    instance.visible = false 
                    timeout = setTimeout(instance.destroy,1000)
                    reslove(instance)
                    window.removeEventListener('resize',setPosition)
                }
            }
        })
        //
        instance.vm = instance.$mount()
        //
        setPosition()
        //
        window.addEventListener('resize',setPosition)
    }
    //
    Vue.prototype.$loading = (option)=> {
        options = option
        return new Promise(function(reslove,reject) {
            setFun(options,reslove,reject)
        })
    } 
    //
    Vue.directive(loading.name,loading)
}
//
export default Loading