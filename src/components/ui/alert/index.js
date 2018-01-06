import alert from './alert'

const Alert = function(Vue) {
    //如果安装过就返回
    if (Alert.installed) {
        return
    }
    //
    Alert.installed = true
    //
    let alertConstructor = Vue.extend(alert)
    let instance = null
    //
    let alertFun = function(options,onConfirm,onClose) {
        instance = new alertConstructor({
            data: Object.assign(options,{name: 'sc-alert'+new Date()}),
            methods: {
                onClose: onClose,
                onConfirm: onConfirm
            }
        })
        //使用 vm.$mount() 手动地挂载一个未挂载的实例。
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el)
        instance.vm.show()
    }
    /**
     * Alert API
     */
    Vue.prototype.$alert = {
        confirm (content) {
            //
            return new Promise(function(resolve, reject) {
                alertFun({
                    type: 'primary',
                    content: content
                },resolve,reject)
            })
        },
        warning (content) {
            //
            return new Promise(function(resolve, reject) {
                alertFun({
                    type: 'warning',
                    content: content
                },resolve,reject)
            })
        },
        error (content) {
            //
            return new Promise(function(resolve, reject) {
                alertFun({
                    type: 'danger',
                    content: content
                },resolve,reject)
            })
        },
        info (content) {
            //
            return new Promise(function(resolve, reject) {
                alertFun({
                    type: 'info',
                    content: content
                },resolve,reject)
            })
        },
        success (content) {
            //
            return new Promise(function(resolve, reject) {
                alertFun({
                    type: 'success',
                    content: content
                },resolve,reject)
            })
        },
        prompt (content) {
            //
            return new Promise(function(resolve, reject) {
                alertFun({
                    type: 'prompt',
                    content: content
                },resolve,reject)
            })
        },

    }
    
}
//
export default Alert