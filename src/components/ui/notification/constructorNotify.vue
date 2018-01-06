<template>
    <div :style="styleObj" class="sc-notification instance" :class="[type,{'is-show':visible}]">
        <header class="header">
            <span class="title">{{title}}</span>
            <span class="close" @click="close">X</span>
        </header>
        <div v-if="content" class="content">
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: true
            }
        },
        props: {
            title: {
                type: String,
                default: null
            },
            content: {
                type: String,
                default: null
            },
            type: {
                type: String,
                default: 'info'
            },
            width: {
                type: String,
                default: '300px'
            }
        },
        computed: {
            styleObj() {
                return {
                    width: this.width
                }
            }
        },
        methods: {
            close() {
                this.visible = false
                setTimeout(()=> {
                    this.$destroy(true)
                    this.$el.parentNode.removeChild(this.$el)
                },300)
                //实例回调
                this.onClose()
            }
        }
    }
</script>