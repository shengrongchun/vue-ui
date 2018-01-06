<template>
    <button @click.stop="handleClick" :disabled="disabled" type="button" class="sc-button"
        :class="[type?'sc-button-'+type:'',
                size?'sc-button-'+size:'',{
                'is-disabled': disabled,
                'is-focus': model===label
            }]">
        <sc-icon @click="handleInnerClick" v-if="icon&&!iconRight" :value="icon"></sc-icon>
        <span @click="handleInnerClick" v-if="label">{{label}}</span>
        <span @click="handleInnerClick" v-else="$slots.default"><slot></slot></span>
        <sc-icon @click="handleInnerClick" v-if="icon&&iconRight" :value="icon"></sc-icon>
    </button>
</template>

<script>
    import {dispatch} from '../utils'
    export default {
        name: 'scRadioButton',
        props: {
            type: String,
            disabled: Boolean,
            icon: String,
            size: String,
            label: {},
            value: {},
            iconRight: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            dispatch,
            handleClick() {
                this.model = this.label;
            },
            handleInnerClick(evt) {
                if (this.disabled) {
                  evt.stopPropagation();
                }
            }
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
                        this.dispatch('scRadioGroup','input', val);
                    }else {
                        this.$emit('input', val);
                    }
                    
                }
            }
        }
    }
</script>