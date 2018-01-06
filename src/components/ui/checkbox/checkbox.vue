<template>
    <label :class="['sc-checkbox',className,
            {'is-disabled':disabled,
            'is-checked':isChecked,
            'is-vertical':$parent.vertical},
            ]">
        <input class="sc-checkbox-input" type="checkbox" v-model="model" :value="label" :disabled="disabled"/>
        <span class="sc-checkbox-label" v-if="$slots.default || label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
import {dispatch} from '../utils'
    export default {
        name: 'scCheckbox',
        data() {
            return {
                selfModel: false
            }
        },
        props: {
            label: {},
            value: {},
            disabled:Boolean,
            checked: Boolean,
            className: String,
        },
        methods: {
            dispatch,
            addToStore() {
                if (Array.isArray(this.model)) {
                    if(this.model.indexOf(this.label) === -1) {
                        this.model.push(this.label)
                    }
                } else {
                    this.model = true
                }
            }
        },
        computed: {
            isGroup() {
                let parent = this.$parent
                while(parent) {
                    if(parent.$options.componentName !== 'scCheckboxGroup') {
                        parent = parent.$parent
                    }else {
                        this._isCheckboxGroup = parent
                        return true
                    }
                    
                }
                return false
            },
            isChecked() {
                if(this.isGroup) { 
                    if ({}.toString.call(this.model) === '[object Boolean]') {
                        return this.model
                    } else if (Array.isArray(this.model)) {
                        return (this.model.indexOf(this.label) > -1)
                    }
                }
                return this.model
            },
            store() {
                return this._isCheckboxGroup ? this._isCheckboxGroup.value : this.value;
            },
            model: {
                get() {
                    return this.isGroup
                    ? this.store : (this.value !== undefined
                    ? this.value : this.selfModel)
                },
                set(val) {
                    if(this.isGroup) {
                        this.dispatch('scCheckboxGroup', 'input', [val])
                    }else {
                        this.selfModel = val
                        this.$emit('input',val)
                        this.$emit('click',val)
                    }  
                }
            }
        },
        created() {
            //
            this.checked && this.addToStore() 
        },
        mounted() {
            if(this.isGroup) {
                if(this.disabled&&!this.checked) {return}
                if(this.disabled&&this.checked) {
                    this._isCheckboxGroup.disCheckList.push(this.label)
                }
                this._isCheckboxGroup.subList.push(this.label)
            } 
        }
    }
</script>