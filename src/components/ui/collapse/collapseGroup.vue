<template>
    <div class="sc-collapse-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'scCollapseGroup',
        data() {
            return {
                itemList: []
            }
        },
        props: {
            accordion: {
                type: Boolean,
                default: false
            },
            type: {},
            value: {String,Array}
        }
    }
</script>