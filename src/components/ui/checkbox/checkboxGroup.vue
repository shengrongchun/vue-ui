<template>
    <label :class="['sc-checkbox-group',className]">
        <slot></slot>
    </label>
</template>

<script>
import Vue from 'vue'
    export default {
        name: 'scCheckboxGroup',
        componentName: 'scCheckboxGroup',
        data() {
            return {
                subList: [],
                disCheckList:[]
            }
        },
        props: {
            value: {
                type: Array,
                default: []
            },
            className: String,
            vertical: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            value() {
                if(this.value&&this.value.length==0) {
                    this.$emit('input',this.disCheckList)
                }
            }
        },
        mounted() {
            /*这玩意太厉害了*/
            Vue.set(this.value,'allcheckList',this.subList)
        }
    }
</script>