<template>
    <ul :class="['sc-menu',{'is-dark':dark}]" :style="styleObj">
        <slot/>
    </ul>
</template>

<script>
    export default {
        name: 'scMenu',
        componentName: 'scMenu',
        data() {
            return {
                itemList:[],
                activeThis: null
            }
        },
        props: {
            accordion: Boolean,
            active: null,
            dark: Boolean,
            bgColor: String
        },
        computed: {
            styleObj() {
                return {'background': this.bgColor?this.bgColor:null}
            }
        },
        mounted() {
            this.activeThis = this.active?this.active:null
            this.$on('setActiveThis',(that)=> {
                this.activeThis = that
            })
        }
    }
</script>