<template>
    <div :class="['sc-progress',size,{'is-bodyTop': bodyTop}]">
        <div :class="['sc-progress-bar',type,{'is-striped': striped || stripedActive}
                    ,{'is-striped-active': stripedActive}]" 

                    :style="styleObj">
            <span v-if="showPercent">{{percent}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scProgress',
        data() {
            return {
                bodyTop: false,
                dataValue: 0,
                setTime: null
            }
        },
        props: {
            max: {
                type:Number,
                default : 100
            },
            min: {
                type:Number,
                default : 0
            },
            value: {
                type: Number,
                default: 0
            },
            type: {
                type: String,
                default: 'primary'
            },
            striped: {
                type: Boolean,
                default: false
            },
            stripedActive: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: null
            },
            showPercent: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            setValue() {
                if(this.dataValue>this.max) {
                    this.dataValue = this.max
                }else if(this.dataValue<this.min) {
                    this.dataValue = this.min
                }else {
                    this.dataValue = this.value
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
        },
        computed: {
            styleObj() {
                this.setValue()
                //
                return {'width':100*this.dataValue/(this.max-this.min)+'%'}
            },
            percent() {
                this.setValue()
                //
                return Math.round( 100*this.dataValue/(this.max-this.min) ) +'%'
            }
        },
        updated() {
            
            if(this.value==this.max||this.value>this.max) {
                clearTimeout(this.setTime)
                //
                this.setTime = setTimeout(()=> {
                    this.callback(this)
                },1000)
            } 
            
        }
    }
</script>