<template>
    <div :style="styleObj" class="sc-switch" :class="{'is-checked':model,'is-disabled':disabled}">
        <input type="checkbox" v-model="model" :disabled="disabled"/>
        <span class="ball"></span>
        <span class="on">{{onText}}</span>
        <span class="off">{{offText}}</span>
    </div>
</template>

<script>
    export default {
        name: 'scSwitch',
        data() {
            return {
                parentWidth: null,
                disBgColor: 'rgb(228,232,241)'
            }
        },
        props: {
            value: {},
            disabled: Boolean,
            onText: String,
            offText: String,
            onValue: {},
            offValue: {},
            onColor: {
                type: String,
                default: 'rgb(19, 206, 102)'
            },
            offColor: {
                type: String,
                default: 'rgb(191, 203, 217)'
            }
        },
        computed: {
            model: {
                get() {
                    if(this.onValue) {
                        return this.value == this.onValue
                    }
                    if(this.offValue) {
                        return this.value == this.offValue
                    }
                    return this.value 
                },
                set(val) {
                    if(val) {
                        this.$emit('change')
                        this.$emit('input',this.onValue?this.onValue:val)
                    }else {
                        this.$emit('change')
                        this.$emit('input',this.offValue?this.offValue:val)
                    }
                }
            },
            styleObj: function() {
                if(!this.disabled) {
                    return {
                        width:this.parentWidth,
                        background: this.model?this.onColor:this.offColor,
                        borderColor: this.model?this.onColor:this.offColor
                    }
                }
                return {
                    width:this.parentWidth,
                    background: this.disBgColor,
                    borderColor: this.disBgColor
                }
            }
        },
        mounted() {
            this.parentWidth = 'auto'
        },
        updated() {//只有data,props等数据发生变化时候，才触发。这里是会重新渲染和修补的
            if(this.$el.children[2].clientWidth>this.$el.children[3].clientWidth) {
                this.parentWidth = 5+26+this.$el.children[2].clientWidth+'px';
            }else {
                this.parentWidth = 5+26+this.$el.children[3].clientWidth+'px';
            }
        }
    }
</script>