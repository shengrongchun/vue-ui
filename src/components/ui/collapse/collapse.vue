<template>
    <div :class="['sc-collapse',{'is-open':visible},type]" :style="styleObj">
        <header @click="handleClick">
            <span>{{title}}</span>
            <sc-icon value=":fa fa-angle-right"></sc-icon>
        </header>

        <div class="sc-collapse-content"><slot></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'scCollapse',
        data() {
            return {
                visible: false,
                height: 0,
                type: null
            }
        },
        props: {
            title: {},
            name: String
        },
        methods: {
            handleClick() {
                this.visible = !this.visible
                this.$parent.$emit('clickItem',this)
                //
                if(this.$parent.accordion&&this.visible) {
                    
                    for(let i in this.$parent.itemList) {
                        if(this.$parent.itemList[i].visible&&this.$parent.itemList[i]!=this) {
                            this.$parent.itemList[i].visible = false
                        }
                    }
                }
            }
        },
        computed: {
            styleObj() {
                return this.visible? {'height':this.height+'px'}:null
            }
        },
        mounted() {
            this.height = this.$el.scrollHeight
            this.$parent.itemList.push(this)
            this.type = this.$parent.type?this.$parent.type:null
            //
            if(this.$parent.value&&this.name) {
                //
                if(Array.isArray(this.$parent.value)) {
                    if(this.$parent.value.indexOf(this.name)>-1) {
                        this.visible = true
                    }
                }else  {
                    if(this.$parent.value == this.name) {
                        this.visible = true
                    }
                }
            }
        },
        updated() {
            this.height = this.$el.scrollHeight
        }
    }
</script>