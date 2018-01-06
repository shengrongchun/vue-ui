import modal from './modal'

const Model = function(Vue) {
    //如果安装过就返回
    if (Model.installed) {
      return
    }
    //
    Model.installed = true
    Model.event = new Vue()
    /**
     * Model API
     */
    Vue.prototype.$modal = {
        show (name, params) {
            Model.event.$emit('toggle', name, true, params)
        },

        hide (name, params) {
            Model.event.$emit('toggle', name, false, params)
        },

        toggle (name, params) {
            Model.event.$emit('toggle', name, undefined, params)
        }
    }
    //
    Vue.component(modal.name,modal)
}
//
export default Model