<template>
    <span class="sc-radio-group" v-model="value">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'scRadioGroup',
        componentName: 'scRadioGroup',
        props: {
            value: {}
        },
        watch: {
            value(val) {
                this.$emit('change',val);
            }
        }
    }
</script>