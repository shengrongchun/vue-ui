import Vue from 'vue'
import view from './view'

let VtipConstructor = Vue.extend(view)

let VtipInstance = null
export default function Tip(options) {
    VtipInstance = new VtipConstructor({
        propsData: options
    }).$mount()
    VtipInstance.setTip()
    return VtipInstance
}