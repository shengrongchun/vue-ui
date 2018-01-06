<template>
    <span 
        v-sc-tooltip.dark.outsideClick="tooltip?value:null"
        class="sc-slider-scroll"
        :class="{'is-dragging':dragging}"
        :style="wrapperStyle"  
        @mousedown.stop="mouseDown"
        
        ></span>
</template>

<script>
    export default {
        name: 'sliderButton',
        data() {
            return {
                dragging: false,
                startX: 0,
                currentX: 0,
                startY: 0,
                currentY: 0,
                startPosition: 0,
                newPosition: null,




                //oldValue: this.value
            }
        },
        props: {
            disabled: Boolean,
            vertical: Boolean,
            tooltip: Boolean,
            min: Number,
            max: Number,
            value: Number,
            steps: Number
        },
        computed: {
            wrapperStyle() {
                return this.vertical ? { top: this.currentPosition } : { left: this.currentPosition }
            },
            currentPosition() {
                return `${ (this.value - this.min) / (this.max - this.min) * 100 }%`
            },
        },
        methods: {
            mouseDown(event) {
                if (this.disabled) return;
                event.preventDefault();
                this.onDragStart(event);
                window.addEventListener('mousemove', this.onDragging)
                window.addEventListener('mouseup', this.onDragEnd)
                window.addEventListener('contextmenu', this.onDragEnd)
            },

            onDragStart(event) {
                this.dragging = true
                if (this.vertical) {
                  this.startY = event.clientY
                } else {
                  this.startX = event.clientX
                }
                this.startPosition = parseFloat(this.currentPosition)
                this.newPosition = this.startPosition
            },

            onDragging(event) {
                if (this.dragging) {
                    
                    let diff = 0
                    if (this.vertical) {
                        this.currentY = event.clientY
                        diff = (this.currentY - this.startY) / this.$parent.$el.clientHeight * 100
                    } else {
                        this.currentX = event.clientX
                        diff = (this.currentX - this.startX) / this.$parent.$el.clientWidth * 100
                    }
                    
                    this.newPosition = this.startPosition + diff
                    this.setPosition(this.newPosition)
                }
            },

            onDragEnd() {
                if (this.dragging) {
                  /*
                   * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
                   * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
                   */
                    setTimeout(() => {
                        this.dragging = false
                        this.setPosition(this.newPosition)
                    }, 0)
                    window.removeEventListener('mousemove', this.onDragging)
                    window.removeEventListener('mouseup', this.onDragEnd)
                    window.removeEventListener('contextmenu', this.onDragEnd)
                }
            },

            setPosition(newPosition) {
                if (newPosition === null) return;
                if (newPosition < 0) {
                    newPosition = 0
                } else if (newPosition > 100) {
                    newPosition = 100
                }
                let value = newPosition*(this.max-this.min)/100 + this.min

                this.$emit('input', Math.round(value))
                
                // if (!this.dragging && this.value !== this.oldValue) {
                //     this.oldValue = this.value
                // }
            }
        }













    }
</script>