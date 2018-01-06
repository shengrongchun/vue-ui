<script>
    import template from './template'
    import Vue from 'vue'
    let constructor = Vue.extend(template)
    export default {
        name: 'scLoading',
        deep: true,
        bind(el, binding, vNode) {
            //
            el._setValue = (obj)=> {
                if(obj && typeof obj == 'object') {
                    //
                    el.data = obj
                }else {
                    el.data = {}
                }
            }
            //
            el._setPosition = (ele)=> {
                el.instance.vm.$el.style.width = ele.offsetWidth+'px'
                el.instance.vm.$el.style.height = ele.offsetHeight+'px'
                el.instance.vm.$el.style.top = ele.offsetTop+'px'
                el.instance.vm.$el.style.left = ele.offsetLeft+'px'
            }
            //
            el._setFullScreenPosition = ()=> {
                el.instance.vm.$el.style.position = 'fixed'
                el.instance.vm.$el.style.width = '100%'
                el.instance.vm.$el.style.height = '100%'
                el.instance.vm.$el.style.top = 0
                el.instance.vm.$el.style.left = 0
            }
            //
            el._onResize = ()=> {
                if(!binding.modifiers['fullScreen']) {
                    el._setPosition(el)
                } 
            }
            //
            el._setValue(binding.value)
            //
            el.instance = new constructor({
                propsData: el.data,
                methods: {
                    loadingClose: ()=> {el.data.visible = false}
                }
            })
            //
            el.instance.vm = el.instance.$mount()
            //
            window.addEventListener('resize',el._onResize)
            
        },
        inserted(el, binding) {
            //
            if(binding.modifiers['fullScreen']) {
                el._setFullScreenPosition()
                document.body.appendChild(el.instance.vm.$el)
            }else {
                el._setPosition(el)
                if(el.parentNode) {
                   el.parentNode.appendChild(el.instance.vm.$el) 
                }else {
                    document.body.appendChild(el.instance.vm.$el)
                } 
            }
            
        },
        update(el,{value, oldValue}) {
            //if(value == oldValue) {return}
            el._setValue(value)
            Object.keys(el.data).forEach((key)=> {
                el.instance[key] = el.data[key]
            })
        },
        unbind(el) {
            const instance = el.instance
            if (instance && instance.destroy) {
                instance.destroy()
            }
            //
            window.removeEventListener('resize',el._onResize)
        }
    }
</script>