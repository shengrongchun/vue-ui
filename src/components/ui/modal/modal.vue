<template>
    <transition :duration="{leave:200}" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <div v-show="visibility.overLay" class="sc-modal"  @click.stop.prevent="handleBgClick">
        <transition
        enter-active-class="animated fadeInDown" 
        leave-active-class="animated fadeOutUp">
            
            <div ref="main" v-if="visibility.modal" :class="['main-modal',size]" :style="styleObj" @click.stop.prevent @mousedown.stop @touchstart.stop>
                <header v-if="header" class="modal-header">
                    <span>{{title}}</span>
                    <span v-if="close" class="close" @click.stop.prevent="hidden">X</span>
                </header>
                <div v-if="$slots['modal-content']" class="modal-content">
                    <slot name="modal-content"></slot>
                </div>
                <div v-if="$slots['modal-footer']" class="modal-footer">
                    <slot name="modal-footer"></slot>
                </div>
                <resizer v-if="resizable"
                   :min-width="minWidth"
                   :min-height="minHeight"
                   @resize="onModalResize"/>

                <div v-if="$slots['alert-content']" class="alert-content">
                    <slot name="alert-content"></slot>
                </div>
                <div v-if="$slots['alert-footer']" class="alert-footer">
                    <slot name="alert-footer"></slot>
                </div>
            </div>
        </transition>
    </div>
    </transition>
</template>

<script>
    import Model from './index'
    import Resizer from './Resizer'
    export default {
        name: 'scModal',
        data() {
            return {
                visible: false,
                visibility: {
                    overLay: false,
                    modal: false
                },
                modalWidth: 0,
                modalHeight: 0,
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            }
        },
        props: {
            name: {
                required: true,
                type: String
            },
            size: {
                type: String,
                default: 'md'
            },
            position: {
                type: String,
                default: 'center'
            },
            header: {
                type: Boolean,
                default: false
            },
            resizable: {
                type: Boolean,
                default: false
            },
            close: {
                type: Boolean,
                default: false
            },
            bgClose: {
                type: Boolean,
                default: false
            },
            title: String,
            draggable: {
                type: Boolean,
                default: false
            },
            minWidth: Number,
            minHeight: Number

        },
        computed: {
            styleObj() {
                return {
                    top: this.calc.top+'px',
                    left: this.calc.left+'px'
                }
            },
            calc() {
                const {modalWidth, modalHeight} = this
                let top = (this.windowHeight-this.modalHeight)/2
                let left = (this.windowWidth-this.modalWidth)/2
                //
                if(this.position == 'top') {
                    top = this.windowHeight*0.1
                }else if(this.position == 'bottom'){
                    top = this.windowHeight*0.9-modalHeight
                }else if(this.position == 'left'){
                    left = 0
                }else if(this.position == 'right'){
                    left = this.windowWidth-modalWidth
                }
                //
                return {
                    left: left,
                    top: top
                }
            }
        },
        watch: {
            visible(val,oldvalue) {
                if(!val) {
                    this.visibility.modal = val
                    setTimeout(()=> {
                        this.visibility.overLay = val
                        //
                    },100)
                    this.removeDraggableListeners(this.$refs.main)
                }else {
                    this.visibility.overLay = val
                    this.visibility.modal = val
                    this.$nextTick(function() {
                        this.modalHeight = this.$refs.main.clientHeight
                        this.modalWidth = this.$refs.main.clientWidth
                        //判断是否拖动
                        this.addDraggableListeners(this.$refs.main)
                    })
                    
                }
                
            }
        },
        methods: {
            hidden() {
                this.visible = false
                this.$emit('close-alert')
            },
            handleBgClick() {
                if(this.bgClose) { this.hidden()}
            },
            onModalResize (event) {
                this.modalWidth = event.size.width
                this.modalHeight= event.size.height
            },
            onWindowResize() {
                this.windowHeight = window.innerHeight
                this.windowWidth = window.innerWidth
                if(!this.visible) {return}
                this.modalHeight = this.$refs.main.clientHeight
                this.modalWidth = this.$refs.main.clientWidth
            },
            addDraggableListeners(element) {
                if(!this.draggable) {return}
                if(!element) {return}
                    
                let startX = 0
                let startY = 0
                let cachedShiftX = 0
                let cachedShiftY = 0
                //
                let getPosition = (event) => {
                    return event.touches && event.touches.length > 0
                      ? event.touches[0]
                      : event
                }
                //
                let mousedown = (event) => {
                    let { clientX, clientY } = getPosition(event)
                    startX = clientX
                    startY = clientY
                    cachedShiftX = parseFloat(element.style.left)
                    cachedShiftY = parseFloat(element.style.top)
                    //
                    document.addEventListener('mousemove', mousemove)
                    document.addEventListener('mouseup', mouseup)
                    document.addEventListener('touchmove', mousemove)
                    document.addEventListener('touchend', mouseup) 
                    event.preventDefault() 
                }
                //
                let mousemove = (event) => {
                    let { clientX, clientY } = getPosition(event)
                    let left = (cachedShiftX + clientX - startX)
                    let top = (cachedShiftY + clientY - startY)
                    if(left>(this.windowWidth-this.modalWidth)) {
                        left = this.windowWidth-this.modalWidth
                    }
                    //
                    if(top>(this.windowHeight-this.modalHeight)) {
                        top = this.windowHeight-this.modalHeight
                    }
                    //
                    element.style.left = left<0?0:left+'px'
                    element.style.top = top<0?0:top+'px'
                    event.preventDefault()
                }
                //
                let mouseup = (event) => {
                    document.removeEventListener('mousemove', mousemove)
                    document.removeEventListener('mouseup', mouseup)
                    document.removeEventListener('touchmove', mousemove)
                    document.removeEventListener('touchend', mouseup)
                    event.preventDefault()
                }
                //
                element.addEventListener('mousedown', mousedown)
                element.addEventListener('touchstart', mousedown)
            },
            removeDraggableListeners(element) {
                if(element) {
                    element.removeEventListener('mousedown', this.addDraggableListeners.mousedown)
                    element.removeEventListener('touchstart', this.addDraggableListeners.mousedown)
                }
            }

        },
        components: {
            Resizer
        },
        beforeMount() {
            window.addEventListener('resize',this.onWindowResize)
            Model.event.$on('toggle', (name, state, params)=> {
                if(name == this.name) {
                    if(typeof state == 'undefined') {
                        this.visible = !this.visible
                    }
                    //
                    
                    if(typeof params == 'object') {
                        for(let key in params) {
                            if(this[key]) {
                                this[key] = params[key]
                            }
                        }
                    }
                    //
                    this.visible = state
                }
            })
        },
        beforeDestory() {
            window.removeEventListener('resize',this.onWindowResize)
        }
    }
</script>