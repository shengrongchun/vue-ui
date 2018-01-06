<template>
    <label class="sc-slider" ref="slider" :class="{'is-vertical':vertical,'is-disabled':disabled}" @click="changeClick"> 
        <span :style="styleObj" class="sc-slider-check" @click="changeClick"></span>
        
        <slider-button :tooltip="tooltip" ref="btnA" v-model="modelA" :min="min" :max="max" :vertical="vertical" :disabled="disabled"></slider-button>
        <slider-button :tooltip="tooltip" ref="btnB" v-if="double" v-model="modelB" :min="min" :max="max" :vertical="vertical" :disabled="disabled"></slider-button>
    </label>
</template>

<script>
    import sliderButton from './sliderButton'
    export default {
        name: 'scSlider',
        data() {
            return {
                double: false,
                dataA: 0,
                dataB: 0
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            vertical: {
                type: Boolean,
                default: false
            },
            tooltip: {
                type: Boolean,
                default: false
            },
            max: {
                type: Number,
                default: 100
            },
            min: {
                type: Number,
                default: 0
            },
            steps: {
                type: Number,
                default: 1
            },
            value: {
                type: [Number,Array],
                default: 0
            }
        },
        methods: {
            setPosition(per) {
                if(!this.double) {
                    this.$refs.btnA.setPosition(per)
                    return
                }
                //
                const targetValue = this.min + per * (this.max - this.min) / 100
                let button;
                if (Math.abs(this.dataA - targetValue) < Math.abs(this.dataB - targetValue)) {
                    button = 'btnA'
                } else {
                    button = 'btnB'
                }
                this.$refs[button].setPosition(per)
            },
            changeClick(e) {
                if(this.disabled) {return}
                    if(this.vertical) {
                        const sliderOffsetTop = this.$refs.slider.getBoundingClientRect().top
                        this.setPosition((e.clientY - sliderOffsetTop) / this.$refs.slider.clientHeight * 100)
                    }else {
                        const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left
                        this.setPosition((e.clientX - sliderOffsetLeft) / this.$refs.slider.clientWidth * 100)
                    }
                
            }
        },
        computed: {
            modelA: {
                get() {
                    return this.dataA
                },
                set(val) {
                    if(!this.double) {
                        this.$emit('input',val)
                    }else {
                        this.$emit('input',val>this.dataB?[this.dataB,val]:[val,this.dataB])
                    }
                    this.dataA = val
                }
            },
            modelB: {
                get() {
                    return this.dataB
                },
                set(val) {
                    this.$emit('input',val>this.dataA?[this.dataA,val]:[val,this.dataA])
                    this.dataB = val
                }
            },
            styleObj() {
                if(this.vertical) {
                    return {top:`${100*[Math.min(this.dataA,this.dataB)-this.min]/Math.abs(this.max-this.min)}%`,height:`${100*Math.abs(this.dataA-this.dataB)/Math.abs(this.max-this.min)}%`}
                }
                return {left:`${100*[Math.min(this.dataA,this.dataB)-this.min]/Math.abs(this.max-this.min)}%`,width:`${100*Math.abs(this.dataA-this.dataB)/Math.abs(this.max-this.min)}%`}
            }
        },
        components: {
            sliderButton
        },
        mounted() {
            if(Array.isArray(this.value) && this.value.length>1) {
                if(typeof parseFloat(this.value[0]) == "number" && !isNaN(parseFloat(this.value[0]))) {
                    this.dataA = parseFloat(this.value[0])
                }else {
                    this.dataA = 0
                }
                if(typeof parseFloat(this.value[1]) == "number" && !isNaN(parseFloat(this.value[1]))) {
                    this.dataB = parseFloat(this.value[1])
                }else {
                    this.dataB = 0
                }
                this.double = true
            }else if(Array.isArray(this.value) && this.value.length==1){
                if(typeof parseFloat(this.value[0]) == "number" && !isNaN(parseFloat(this.value[0]))) {
                    this.dataA = parseFloat(this.value[0])
                }else {
                    this.dataA = 0
                }
                this.double = false
            }else {
                //console.log(typeof parseFloat(this.value))
                if(typeof parseFloat(this.value) == "number" && !isNaN(parseFloat(this.value))) {
                    this.dataA = parseFloat(this.value)
                }else {
                    this.dataA = 0
                }
                this.double = false
            }

            //
            this.dataA = this.dataA<this.min ? this.min : this.dataA
            this.dataA = this.dataA>this.max ? this.max : this.dataA

            this.dataB = this.dataB<this.min ? this.min : this.dataB
            this.dataB = this.dataB>this.max ? this.max : this.dataB
        }
    }
</script>