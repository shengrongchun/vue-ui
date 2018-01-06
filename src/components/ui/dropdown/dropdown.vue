<template>
    <div :class="['sc-dropdown',{'is-active': active}]" v-clickoutside="outClick">
        <slot/>
        <slot name="dropdown"/>
    </div>
</template>

<script>
    import clickoutside from '../utils/clickoutside'
    export default {
        name: "scDropdown",
        componentName: "scDropdown",
        data() {
            return {
                active: false,
                defaultEle: null,
                dropdownEle: null
            }
        },
        props: {
            hover: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handelClick() {
                this.active = !this.active
            },
            outClick() {
                this.active = false
            }
        },
        directives: {
            clickoutside
        },
        mounted() {
            this.defaultEle = this.$slots.default[0].elm
            if(this.hover) {
                this.dropdownEle = this.$slots.dropdown[0].elm
                this.defaultEle.addEventListener('mouseenter',this.handelClick)
                this.defaultEle.addEventListener('mouseleave',this.outClick)
                this.dropdownEle.addEventListener('mouseenter',this.handelClick)
                this.dropdownEle.addEventListener('mouseleave',this.outClick)
            }else {
                this.defaultEle.addEventListener('click',this.handelClick)
            }
        },
        beforeDestroy() {
            if(this.defaultEle) {
                this.defaultEle.removeEventListener('mouseenter',this.handelClick)
                this.defaultEle.removeEventListener('mouseleave',this.outClick)
                this.defaultEle.removeEventListener('click',this.handelClick)
            }
            if(this.dropdownEle) {
                this.dropdownEle.addEventListener('mouseenter',this.handelClick)
                this.dropdownEle.addEventListener('mouseleave',this.outClick)
            }  
        }
    }
</script>