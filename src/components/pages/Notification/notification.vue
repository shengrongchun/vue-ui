<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-notification 
                title="确认标题" 
                type="primary"
                @close="close"
                >
            </sc-notification>
            <br>
            <sc-notification 
                title="成功标题" 
                type="success"
                >
            </sc-notification>
            <br>
            <sc-notification 
                title="消息标题" 
                type="info"
                >
            </sc-notification>
            <br>
            <sc-notification 
                title="危险标题" 
                type="danger"
                >
            </sc-notification>
            <br>
            <sc-notification 
                title="警告标题" 
                type="warning"
                >
            </sc-notification>
        </code-example>
        <br>
        <code-example title="带内容的notification" :code="code2" :description="description2">
            <sc-notification 
                title="确认标题" 
                type="primary"
                content="这是确认内容"
                >
            </sc-notification>
            <br>
            <sc-notification 
                title="成功标题" 
                type="success"
                content="这是成功内容"
                >
            </sc-notification>
            <br>
            <sc-notification 
                title="消息标题" 
                type="info"
                content="这是消息内容"
                >
            </sc-notification>
            <br>
            <sc-notification 
                title="危险标题" 
                type="danger"
                content="这是危险内容"
                >
            </sc-notification>
            <br>
            <sc-notification 
                title="警告标题" 
                type="warning"
                content="这是警告内容"
                >
            </sc-notification>
        </code-example>
        <br>
        <code-example title="动态加入" :code="code3" :description="description3">
            <sc-row justify="space-between">
                <sc-col :span="2"><span class="title-middle">标题：</span></sc-col>
                <sc-col :span="8"><sc-input v-model="title"></sc-input></sc-col>
                <sc-col :span="2"><span class="title-middle">内容：</span></sc-col>
                <sc-col :span="8"><sc-input v-model="content"></sc-input></sc-col>
            </sc-row>
            <br/>
            <sc-row justify="space-between">
                <sc-col :span="2"><span class="title-middle">位置：</span></sc-col>
                <sc-col :span="8">
                    <sc-select v-model="positionObj" :data="posArray"></sc-select>
                </sc-col>
                <sc-col :span="2"><span class="title-middle">类型：</span></sc-col>
                <sc-col :span="8">
                    <sc-select v-model="typeObj" :data="typeArray">
                    </sc-select>
                </sc-col>
            </sc-row>
            <p class="margin-top-5">
                <sc-button type="primary" @click="handleConfirm">加入信息</sc-button>
            </p>
        </code-example>
    </div>
</template>

<script>
    import description from './description'
    import code1 from './code1.md'
    import code2 from './code2.md'
    import code3 from './code3.md'
    export default {
        data() {
            return {
                code1: code1,
                description1: description.description1,
                code2: code2,
                description2: description.description2,
                code3: code3,
                description3: description.description3,
                title:'这是确认标题',
                content: '这是确认内容',
                positionObj: {key:'下右',value:'bottomRight'},
                typeObj: {key:'确认信息',value:'primary'},
                posArray: [{key:'上左',value:'topLeft'}
                ,{key:'上中',value:'topCenter'}
                ,{key:'上右',value:'topRight'}
                ,{key:'下左',value:'bottomLeft'}
                ,{key:'下右',value:'bottomRight'}
                ,{key:'下中',value:'bottomCenter'}],
                typeArray: [{key:'一般信息',value:'info'}
                ,{key:'确认信息',value:'primary'}
                ,{key:'成功信息',value:'success'}
                ,{key:'警告信息',value:'warning'}
                ,{key:'危险信息',value:'danger'}]
            }
        },
        methods: {
            close() {
                alert('这是回调')
            },
            handleConfirm() {
                this.$notify({
                    title:this.title,
                    content: this.content,
                    position: this.positionObj.value,
                    type: this.typeObj.value,
                }).then(function() {
                    //alert("回调")
                })
            }
        }
    }
</script>
<style scoped>
    .title-middle {
        height: 36px;
        line-height: 36px;
    }
</style>