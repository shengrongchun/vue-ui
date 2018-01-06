<template>
    <div class="sc-radio" :class="{
        'is-checked':model===label,
        'is-disabled': disabled}">

        <span class="sc-radio-input">
            <input v-model="model" type="radio" :name="name" :value="label" :disabled="disabled"/>
        </span><span class="sc-radio-content">
            <slot v-if="$slots.default"></slot>
            <span v-if="!$slots.default">{{label}}</span>
        </span>
    </div>
</template>

<script>
    import {dispatch} from '../utils'
    export default {
        name:'scRadio',
        props: {
            name: {
                type: String,
                default: 'sc-radio-name'
            },
            label: {},
            value: {},
            disabled: Boolean
        },
        methods: {
            dispatch
        },
        computed: {
            isGroup() {
                let parent = this.$parent;
                while(parent) {
                    if(parent.$options.componentName !== 'scRadioGroup') {
                        parent = parent.$parent;
                    }else {
                        this._isRadioGroup = parent;
                        return true;
                    }
                    
                }
                return false;
            },
            model: {
                get() {
                    return this.isGroup?this._isRadioGroup.value:this.value;
                },
                set(val) {
                    /*这里说明下，为什么是input,因为v-model就是v-bind:value="dataA" v-on:input="dataA = $event.target.value"*/
                    if(this.isGroup) {
                        this.dispatch('scRadioGroup','input', val)
                    }else {
                        this.$emit('input', val);
                    }
                    
                }
            }
        }
    }
</script>