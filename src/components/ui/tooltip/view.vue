<template>
    <transition name="fade">
        <div @mouseenter="showTip" 
            @mouseleave="mouseLeave" 
            v-clickoutside="outClick" 
            v-show="visible || show" class="sc-tooltip" 
            :class="[place,theme,{transition:transition}]" 
            :style="{top:top+'px',left:left+'px',opacity:opacity}">

            <p v-if="title" class="title">{{title}}</p>
            <span v-if="content" class="content">{{content}}</span>

            <component
                v-if="customComponent"
                :is="customComponent"
                >
            </component>

            <span class="arrow" :style="{top:arrowTop,left:arrowLeft,borderWidth:arrowWidth+'px'}"></span>
        </div>
    </transition>
</template>

<script>
    import clickoutside from '../utils/clickoutside'
    export default {
        name: 'tip',
        data() {
            return {
                top: 0,
                left: 0,
                arrowTop: 0,
                arrowLeft: 0,
                visible: true,
                opacity: 0
            }
        },
        props: {
            target: null,
            place: String,
            position: String,
            customComponent: String,
            transition: Boolean,
            outsideClick: Boolean,
            show: {
                type: Boolean,
                default: false
            },
            theme: String,
            space: {
                type: Number,
                default: 10
            },
            arrowWidth: {
                type: Number,
                default: 8
            },
            title: String,
            content: String
        },
        directives: {
            clickoutside
        },
        methods: {
            setPosition(top,left,height,width,selfHeight,selfWidth) {
                if(this.place == 'top') {
                    this.arrowTop = "100%"
                    this.arrowLeft = "50%"
                    this.top = top-selfHeight-this.space
                    if(this.position == 'start') {
                        this.left = left;
                        //
                        if(selfWidth>width) {
                            this.arrowLeft = width/2+'px'
                        }
                    }else if(this.position == 'end') {
                        this.left = left+width-selfWidth
                        //
                        if(selfWidth>width) {
                            this.arrowLeft =(selfWidth- width/2)+'px'
                        }
                    }else {
                        this.left = left+(width-selfWidth)/2
                    }
                }else if(this.place == 'right') {
                    this.left = left+width+this.space
                    this.arrowTop = '50%'
                    this.arrowLeft = -this.arrowWidth*2+'px'
                    if(this.position == 'start') {
                        this.top = top
                        //
                        if(selfHeight>height) {
                            this.arrowTop = height/2+'px'
                        }
                    }else if(this.position == 'end') {
                        this.top = top+height-selfHeight
                        //
                        if(selfHeight>height) {
                            this.arrowTop = (selfHeight-height/2)+'px'
                        }
                    }else {
                        this.top = top+(height-selfHeight)/2
                    }
                }else if(this.place == 'left') {
                    this.left = left-selfWidth-this.space
                    this.arrowTop = '50%'
                    this.arrowLeft = (selfWidth-2)+'px'
                    if(this.position == 'start') {
                        this.top = top
                        //
                        if(selfHeight>height) {
                            this.arrowTop = height/2+'px'
                        }
                    }else if(this.position == 'end') {
                        this.top = top+height-selfHeight
                        //
                        if(selfHeight>height) {
                            this.arrowTop = (selfHeight-height/2)+'px'
                        }
                    }else {
                        this.top = top+(height-selfHeight)/2
                    } 
                }else {//bottom
                    this.arrowTop = -this.arrowWidth*2+'px'
                    this.arrowLeft = "50%"
                    this.top = top+height+this.space
                    if(this.position == 'start') {
                        this.left = left;
                        //
                        if(selfWidth>width) {
                            this.arrowLeft = width/2+'px'
                        }
                    }else if(this.position == 'end') {
                        this.left = left+width-selfWidth
                        //
                        if(selfWidth>width) {
                            this.arrowLeft =(selfWidth- width/2)+'px'
                        }
                    }else {
                        this.left = left+(width-selfWidth)/2
                    }
                }
            },
            setTip() {
                if(this.target&&this.target.parentNode) {
                    this.target.parentNode.appendChild(this.$el)
                    this.setPosition(this.target.offsetTop,this.target.offsetLeft,this.target.offsetHeight,this.target.offsetWidth,this.$el.offsetHeight,this.$el.offsetWidth) 
                } 
                this.opacity = 1
            },
            showTip() {
                this.visible = true
            },
            hideTip() {
                this.visible = false
            },
            mouseLeave() {
                if(this.outsideClick) {
                    this.visible = true
                }else {
                   this.visible = false 
                } 
            },
            outClick() {
                if(this.outsideClick) {
                    this.visible = false
                }
            },





            removeParentNode () {
                if (this.$el.parentNode) {
                    this.$el.parentNode.removeChild(this.$el)
                }
            },
            destroy () {
                this.removeParentNode()
                this.$destroy()
            }
        }
    }
</script>

