<template>
    <li @click.stop.prevent="clickItem" :class="['sc-dropdown-item',
    {'is-divided':divided},
    {'is-disabled':disabled}]">
        <slot/>
    </li>
</template>

<script>
    export default {
        name: "scDropdowmItem",
        props: {
            value: {},
            divided: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            getRootParent() {
                let parent = this.$parent
                while (parent && parent.$options.componentName !== 'scDropdown') {
                    parent = parent.$parent
                }
                return parent
            },
            clickItem() {
                if(this.disabled) {return}
                let parent = this.getRootParent()
                parent.outClick()
                parent.$emit('itemClick',this.value)
            }
        }
    }
</script>