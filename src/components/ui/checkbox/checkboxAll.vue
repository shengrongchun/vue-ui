<template>
    <label :class="['sc-checkbox',className,
            {'is-disabled':disabled,
            'is-checked':selfModel,
            'is-checkAll':checkAll},
            ]">
        <input @click="inputClick" type="checkbox" class="sc-checkbox-input" :disabled="disabled"></input>
        <span class="sc-checkbox-label" v-if="$slots.default || label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'scCheckboxAll',
        data() {
            return {
                selfModel: false,
                allcheckList: null,
                checkAll: false,
                stopWatch: false
            }
        },
        props: {
            label: {},
            value: {
                type: Array,
                default: []
            },
            disabled:Boolean,
            className: String,
        },
        watch: {
            value: {
                handler(newValue) {
                    //
                    if(!this.allcheckList && newValue.allcheckList) {
                        this.allcheckList = newValue.allcheckList
                    }
                    this.checkAll = false
                    //
                    if(newValue.length == 0) {
                        this.selfModel = false
                    }else if(newValue.length == this.allcheckList.length) {
                        this.selfModel = true
                    }else {
                        this.checkAll = true 
                    }
                    
                },
                deep: true
            }
        },
        methods: {
            inputClick() {
                //
                if(this.checkAll) {
                    this.selfModel = true
                    this.$emit('input',this.allcheckList)
                    return
                }
                //
                this.selfModel = !this.selfModel
                if(this.selfModel) {
                    this.$emit('input',this.allcheckList)
                }else {
                    this.$emit('input',[])
                }
            }
        }
    }
</script>