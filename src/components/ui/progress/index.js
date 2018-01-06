import progress from './progress'
const Progress = function(Vue) {
    //如果安装过就返回
    if (Progress.installed) {
      return
    }
    //
    Progress.installed = true
    const progressConstructor = Vue.extend(progress)
    let instance = null
    let promise = null
    let options = {
        type: 'primary',
        size: 'm'
    }
    const setPosition = function() {
        document.body.appendChild(instance.vm.$el)
        instance.vm.$el.style.position = 'fixed'
        instance.vm.$el.style.top = 0
        instance.vm.$el.style.left = 0 
    }
    const setFun = (data,reslove)=> {
        instance = new progressConstructor({
            data: {bodyTop: true},
            propsData: data,
            methods: {
                callback: reslove
            }
        })
        //
        instance.vm = instance.$mount()
        setPosition()
    }
    
    Vue.prototype.$progress = (option)=> {
        options = Object.assign(options,option)
        //
        promise = new Promise(function(reslove,reject) {
            setFun(options,reslove,reject)
        })
        //
        promise.then.update = (newData)=> {
            for(let i=0;i<Object.keys(newData).length;i++) {
                instance[Object.keys(newData)[i]] = newData[Object.keys(newData)[i] ]
            }
        }
        //
        return promise

    } 
    //
    Vue.component(progress.name,progress)
}
//
export default Progress