<script>
    import Tip from './tip'

    function clearEvent (el) {
      if (el._tipHandler) {
        el.removeEventListener('click', el._tipHandler)
        el.removeEventListener('mouseenter', el._tipHandler)
      }
      if (el._tipMouseleaveHandler) {
        el.removeEventListener('mouseleave', el._tipMouseleaveHandler)
      }
      delete el._tipHandler
      delete el._tipMouseleaveHandler
      delete el._tipOption
      delete el._tipInstance
    }
    export default {
        name: 'scTooltip',
        deep: true,
        bind(el, binding, vnode) {
            clearEvent(el)
            const placementsArray = ['top','right','bottom','left']
            const positionsArray = ['start','end','center']
            const placementObj = {place:'top',position: 'center'}
            const {click,transition,dark,outsideClick,show} = binding.modifiers
            const mixins = {
                show,
                transition,
                outsideClick,
                theme: dark?'dark':'light',
                target: el
            }

            el._tipOption = binding.value
            el._updatOption = false
            el._setPlacementObj = function() {
                for(let i=0;i<placementsArray.length;i++) {
                    if(binding.modifiers[ placementsArray[i] ]) {
                        placementObj.place = placementsArray[i]
                        return
                    }
                }
            }
            //
            el._setPositionObj = function() {
                for(let j=0;j<positionsArray.length;j++) {
                    if(binding.modifiers[ positionsArray[j] ]) {
                        placementObj.position = positionsArray[j]
                        return
                    }
                }
            }
            //
            el._tipHandler = function (argument) {
                //Tip()
                if(el._tipOption == null) {return;}
                if(typeof el._tipOption == 'object') {
                    Object.assign(mixins, placementObj, el._tipOption)
                }else {
                    Object.assign(mixins, placementObj, {content: String(el._tipOption)})
                }
                //
                if(!this._tipInstance || this._updatOption) {//没有实例创建 或者有实例更新属性
                    if(this._tipInstance) {this._tipInstance.destroy()}//销毁
                    //
                    this._tipInstance = Tip(mixins)
                }else {
                    this._tipInstance.showTip()  
                }
                
                this._updatOption = false
            }
            //
            el._tipMouseleaveHandler = function tipMouseleaveHandler () {
                if (this._tipInstance) {
                    this._tipInstance.hideTip()
                }
            }
            //
            if (click) {
                el.addEventListener('click', el._tipHandler)
            }else {
                el.addEventListener('mouseenter', el._tipHandler)
            }
            if(!outsideClick) {
               el.addEventListener('mouseleave', el._tipMouseleaveHandler) 
            }
            
            //
            el._setPlacementObj()
            el._setPositionObj()

        },
        update(el, { value, oldValue }) {
            if (value === oldValue&&!el._tipInstance) return
            el._tipOption = value
            el._updatOption = true

            if(el._tipInstance&&el._tipInstance.visible) {
                el._tipHandler()
            }
        },
        unbind(el) {
            const instance = el._tipInstance
            if (instance && instance.destroy) {
              instance.destroy()
            }
            clearEvent(el)
        }
    }
</script>