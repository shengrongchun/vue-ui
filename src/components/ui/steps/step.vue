<template>
    <div :class="['sc-step',{'is-active':active == (index+1),
            'is-primary':active > (index+1) && !success,
            'is-success':active > (index+1) && success
            }]"  
        :style="styleObj">
        <div class="step-circle">
            <sc-icon class="step-icon" value=":fa fa-check"></sc-icon>
            <span>{{index+1}}</span>
            </div>
        <div class="step-line">
            <span :class="['step-line-color',{'is-all':(active-2)>index}]"></span>
        </div>
        <p v-if="title" class="step-title">{{title}}</p>
        <p v-if="$slots.default" class="step-description"><slot></slot></p>
    </div>
</template>

<script>
    export default {
        name: 'scStep',
        data() {
            return {
                dataWidth: null,
                index: -1,
                length: 0,
                success: false
            }
        },
        props: {
            title: String
        },
        methods: {
        },
        computed: {
            styleObj() {
                return {
                    width: this.dataWidth
                }
            },
            active() {
                if(this.$parent.active>this.length+1) {
                    return this.length+1
                }else if(this.$parent.active<1) {
                    return 1
                }
                return this.$parent.active
            }
        },
        beforeCreate(){
            this.$parent.steps.push(this)
        },
        mounted() {
            if(this.$parent.width) {
                this.dataWidth = this.$parent.width
            }else {
                this.dataWidth = (100/this.$parent.steps.length)+'%'
            }
            //
            if(this.$parent.success) {
                this.success = this.$parent.success
            }
            this.length = this.$parent.steps.length
            this.index = this.$parent.steps.indexOf(this)
        }
    }
</script>