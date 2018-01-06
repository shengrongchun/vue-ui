<template>
    <div class="sc-notification" :class="[type,{'is-show':visible}]">
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
        name: 'scNotification',
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
            }
        },
        methods: {
            close() {
                this.visible = false
                this.$emit('close')
                setTimeout(()=> {
                    this.$destroy(true)
                    this.$el.parentNode.removeChild(this.$el)
                },300)
            }
        }
    }
</script>