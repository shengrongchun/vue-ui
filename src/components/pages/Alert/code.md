```html
<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code" :description="description1">
            <sc-button type="primary" @click="handleConfirm">弹出确认框</sc-button>
            <sc-button type="warning" @click="handleWarning">弹出警告框</sc-button>
            <sc-button type="danger" @click="handleError">弹出错误框</sc-button>
            <sc-button type="info" @click="handleInfo">弹出通知框</sc-button>
            <sc-button type="success" @click="handleSuccess">弹出成功框</sc-button>
            <sc-button  @click="handlePrompt">弹出输入对话框</sc-button>
        </code-example>
    </div>
</template>

<script>
    import description from './description'
    import code from './code.md'
    export default {
        data() {
            return {
                description1: description.description1,
                code: code
            }
        },
        methods: {
            handleConfirm() {
                this.$alert.confirm('是否确定此项操作?').then((data)=> {
                    alert('确定')
                },(data)=> {
                    alert('取消')
                })
            },
            handleWarning() {
                this.$alert.warning('此操作将不可恢复, 是否继续?').then((data)=> {
                    //alert('确定warning')
                },(data)=> {
                    //alert('取消warning')
                })
            },
            handleError() {
                this.$alert.error('操作失败！').then((data)=> {
                    //alert('确定error')
                })
            },
            handleInfo() {
                this.$alert.info('操作已完成！').then((data)=> {
                    //alert('确定info')
                })
            },
            handleSuccess() {
                this.$alert.success('操作已成功！').then((data)=> {
                    //alert('确定success')
                })
            },
            handlePrompt() {
                this.$alert.prompt('请输入你的姓名：').then((data)=> {
                    alert('你输入的内容为：'+data)
                })
            }
        }
    }
</script>
```