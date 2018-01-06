<template>
    <li :class="['sc-menu-item',{'is-open':open,'is-active':active}]" :style="styleObj">
        <div class="item-header" @click.stop="headerClick">
            <sc-icon v-if="icon" class="menu-header-icon-left" :value="':fa '+icon"></sc-icon>
            <span>{{title}}</span>
            <sc-icon v-if="$slots.default" class="menu-header-icon-right" value=":fa fa-angle-down" size="20"></sc-icon> 
        </div>
        <div class="item-content">
            <slot/>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'scMenuItem',
        data() {
            return {
                open: false,
                height: 0
            }
        },
        props: {
            title: {
                type: String,
                default: null
            },
            icon: {
                type: String,
                default: null
            },
            to: {
                type: String,
                default: null
            },
            openMenu: Boolean
        },
        computed: {
            styleObj() {
                if(this.open) {
                    return {'height':this.height+'px'}
                }
                return null
            },
            active() {
                return this.rootMenu().activeThis == this 
            }
        },
        methods: {
            rootMenu() {
                var parent = this.$parent;
                while (parent && parent.$options.componentName !== 'scMenu') {
                    parent = parent.$parent;
                }
                return parent
            },
            headerClick() {
                if(!this.$slots.default) {
                    if(this.to) {
                        this.$router.push(this.to)
                    }
                    //
                    let rootParent = this.rootMenu()
                    rootParent.$emit('setActiveThis',this)
                    return
                }
                //
                if(this.$parent.accordion&&!this.open) {
                    for(let i in this.$parent.itemList) {
                        this.$parent.itemList[i].open = false
                    }
                }
                //
                this.open = !this.open
            }
        },
        mounted() {
            this.$nextTick(()=> {
                this.height = this.$el.scrollHeight
            })
            //
            this.open = this.openMenu?this.openMenu:false
            this.$parent.itemList.push(this)
        }
    }
</script>