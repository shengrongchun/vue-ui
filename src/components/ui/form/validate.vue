<script>
    export default {
        name: 'scValidate',
        bind(el, binding, vnode) {
            //
            el.getForm = ()=> {
                el.parent = vnode.componentInstance.$parent
                while (el.parent && el.parent.$options.componentName !== 'scFormItem') {
                    el.parent = el.parent.$parent
                }
                return el.parent
            }
            //
            el.Form = ()=> {
                el.formParent = vnode.componentInstance.$parent
                while (el.formParent && el.formParent.$options.componentName !== 'scForm') {
                    el.formParent = el.formParent.$parent
                }
                el.formParent.requiredList.push(el)
            }
            //
            el.required = ()=> {
                if(!el.havaRequired || el.modelValue&&binding.value) {
                    return
                }
                //
                if(el.modelValue || (typeof el.modelValue == 'number'&&el.modelValue==0) ) {
                     el.parent.show = false
                }else {
                    el.parent.show = true
                    el.parent.showMessage = el.vnode.data.attrs['required-message']?el.vnode.data.attrs['required-message']:'这是必填项'
                }
            }
            //
            el.promise = ([mask,message])=> {
                el.parent.show = !mask
                if(!mask) {
                    el.parent.showMessage = message
                }
            }
            //
            el.customValidate = ()=> {
                //
                if(!el.modelValue || el.valKeyList.length==0) {return}
                //
                let mask = true
                let message = null
                //
                for(let i=0;i<el.valKeyList.length;i++) {
                    if(el.vnode.data.attrs[el.valKeyList[i]+'-validate']  !== undefined) {
                        if(typeof el.vnode.data.attrs[el.valKeyList[i]+'-validate'] == 'function') {
                            //
                            let result = null
                            let promise = el.vnode.data.attrs[el.valKeyList[i]+'-validate'](el.modelValue)
                            
                            if(typeof promise == 'object') {
                                result = promise.result?promise.result:false
                                promise.then(el.promise)
                            }else {
                                result = promise
                            }
                            //
                            if( !result ) {
                                mask = false
                                message = el.vnode.data.attrs[el.valKeyList[i]+'-message']?el.vnode.data.attrs[el.valKeyList[i]+'-message']:'所填内容不符合'
                            }
                        }

                    }   
                }
                //
                el.parent.show = !mask
                if(!mask) {
                    el.parent.showMessage = message
                }
            }
            //
            if(!binding.value&&!binding.modifiers.required) {
                return
            }
            //
            if(!el.getForm()) {
                return
            }
            //
            el.modelValue = vnode.data.model.value
            el.vnode = vnode
            el.valKeyList = []
            el.havaRequired = false
            //
            if(typeof binding.value == 'string') {
                el.valKeyList.push(binding.value)
            }else if(Array.isArray(binding.value)) {
                el.valKeyList = binding.value
            }
            //
            if(binding.modifiers.required) {
                el.havaRequired = true
            }
            //
            if(el.havaRequired) {
                el.addEventListener('blur',()=> {
                    el.customValidate()
                    el.required()
                },true)
                //
            }
            //
            if(el.havaRequired || el.valKeyList.length>0) {
                el.parent.required = true
            }
            //
            el.Form() 
            
        },
        update(el, { value, oldValue },vnode,oldVnode) {
            if(vnode === oldVnode) {
                return
            }
            //
            if(vnode.data.model.value == oldVnode.data.model.value) {return}
            el.modelValue = vnode.data.model.value
            el.vnode = vnode
            //自定义验证
            el.customValidate()
            //required验证
            el.required()
        },
        unbind(el) {
            //
            if(el.havaRequired) {
                el.removeEventListener('blur',()=> {
                    el.customValidate()
                    el.required()
                },true)
            }
        }
    }
</script>