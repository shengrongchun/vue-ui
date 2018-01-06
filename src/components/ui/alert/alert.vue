<template>
    <sc-modal :name="name" position="top" size="sm"
        header close title="提示" @close-alert="close">
        <template slot="modal-content">
            <div class="alert" :class="type">
                <sc-icon v-if="type == 'primary'" value=":fa fa-question-circle"></sc-icon>
                <sc-icon v-if="type == 'warning'" value=":fa fa-exclamation-triangle"></sc-icon>
                <sc-icon v-if="type == 'danger'" value=":fa fa-exclamation-circle"></sc-icon>
                <sc-icon v-if="type == 'info'" value=":fa fa-exclamation-circle"></sc-icon>
                <sc-icon v-if="type == 'success'" value=":fa fa-check-circle"></sc-icon>
                <sc-icon v-if="type == 'prompt'" value=":fa fa-pencil"></sc-icon>
                <span>{{content}}</span>
                <sc-input v-if="type == 'prompt'" v-model="inputValue"></sc-input>
            </div>
        </template>
        <template slot="modal-footer">
            <sc-button v-if="doubleBtn" size="md" type="plain" @click.prevent.stop="cancle">取消</sc-button>
            <sc-button v-if="doubleBtn" size="md" :type="type" @click.prevent.stop="confirm">确定</sc-button>
            <sc-button v-if="!doubleBtn" size="md" type="plain" @click.prevent.stop="confirm">确定</sc-button>
        </template>
    </sc-modal>
</template>

<script>
    export default {
        data() {
            return {
                inputValue: null,
                doubleBtn: false,
                name: null,
                content: null,
                type: null
            }
        },
        methods: {
            show() {
                this.$modal.show(this.name)
            },
            hide() {
                this.$modal.hide(this.name)
            },
            close() {
                setTimeout(()=> {
                    this.$destroy(true)
                    this.$el.parentNode.removeChild(this.$el)
                },500)
            },
            cancle() {
                this.hide()
                this.close()
                this.onClose(this)
            },
            confirm() {
                this.hide()
                this.close()
                this.onConfirm(this.type == 'prompt'?this.inputValue:this)
            }
        },
        mounted() {
            if(this.type == 'primary' || this.type == 'warning') {
                this.doubleBtn = true
            }
        }

    }
</script>