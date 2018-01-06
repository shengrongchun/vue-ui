<template>
    <ul class="sc-menu-item-group">
        <header class="sc-menu-item-group-title" v-if="title">{{title}}</header>
        <slot/>
    </ul>
</template>

<script>
    export default {
        name: 'scMenuItemGroup',
        data() {
            return {
                itemList:[],
            }
        },
        props: {
            title: {
                type: String,
                default: null
            }
        }
    }
</script>