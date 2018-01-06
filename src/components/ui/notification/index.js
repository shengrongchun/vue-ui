import notification from './notification'
import constructorNotify from './constructorNotify'

const Notification = function(Vue) {
    //如果安装过，就无需安装了
    if(Notification.installed) {
        return
    }
    //
    Notification.installed = true
    //
    let notifyConstruction = Vue.extend(constructorNotify)
    let instance = null
    let timeOut = null
    let height = 100
    let width = 100
    //
    const setFun = function(data,reslove,reject) {
        instance = new notifyConstruction({
            propsData: data,
            methods: {
                onClose: reslove
            }
        })
        //
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el)
        height = instance.vm.$el.clientHeight
        width = instance.vm.$el.clientWidth
        //
        setPosition(data.position)
    }//
    const setPosition = function(position) {
        if(timeOut) {
            clearTimeout(timeOut)
        }
        //
        if(position == 'topLeft') {
            instance.vm.$el.style.top = -height+'px'
            timeOut = setTimeout(()=> {
                instance.vm.$el.style.top = '10px'
                instance.vm.$el.style.left = '10px'
            },0)
        }else if(position == 'topRight') {
            instance.vm.$el.style.top = -height+'px'
            timeOut = setTimeout(()=> {
                instance.vm.$el.style.top = '10px'
                instance.vm.$el.style.right = '10px'
            },0)
        }else if(position == 'topCenter') {
            instance.vm.$el.style.top = -height+'px'
            timeOut = setTimeout(()=> {
                instance.vm.$el.style.top = '10px'
                instance.vm.$el.style.left = (window.innerWidth-width)/2+'px'
            },0)
        }else if(position == 'bottomLeft') {
            instance.vm.$el.style.bottom = -height+'px'
            timeOut = setTimeout(()=> {
                instance.vm.$el.style.bottom = '10px'
                instance.vm.$el.style.left = '10px'
            },0)
        }else if(position == 'bottomRight') {
            instance.vm.$el.style.bottom = -height+'px'
            timeOut = setTimeout(()=> {
                instance.vm.$el.style.bottom = '10px'
                instance.vm.$el.style.right = '10px'
            },0)
        }else if(position == 'bottomCenter') {
            instance.vm.$el.style.bottom = -height+'px'
            timeOut = setTimeout(()=> {
                instance.vm.$el.style.bottom = '10px'
                instance.vm.$el.style.left = (window.innerWidth-width)/2+'px'
            },0)
        }else {
            instance.vm.$el.style.bottom = -height+'px'
            timeOut = setTimeout(()=> {
                instance.vm.$el.style.bottom = '10px'
                instance.vm.$el.style.right = '10px'
            },0)
        }
    }
    /**
     * Notification API
     */
    Vue.prototype.$notify = function(options) {
        if(!options.type) {options.type = 'primary'}
            return new Promise(function(reslove,reject) {
                setFun(options,reslove,reject)
            }) 
        }
    //
    Vue.component(notification.name,notification)
}
//
export default Notification