<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-collapse-group @clickItem="handleClick">
                <sc-collapse title="标题1">{{dataContent}}</sc-collapse>
                <sc-collapse title="标题2">{{dataContent}}</sc-collapse>
                <sc-collapse title="标题3">{{dataContent}}</sc-collapse>
            </sc-collapse-group>
        </code-example>
        <br>
        <code-example title="手风琴效果" :code="code2">
            <sc-collapse-group accordion>
                <sc-collapse title="标题1">{{dataContent}}</sc-collapse>
                <sc-collapse title="标题2">{{dataContent}}</sc-collapse>
                <sc-collapse title="标题3">{{dataContent}}</sc-collapse>
            </sc-collapse-group>
        </code-example>
        <br>
        <code-example title="样式二" :code="code3">
            <sc-collapse-group type="primary" v-model="primaryValue">
                <sc-collapse title="标题1" name="label1">{{dataContent}}</sc-collapse>
                <sc-collapse title="标题2" name="label2">{{dataContent}}</sc-collapse>
                <sc-collapse title="标题3" name="label3">{{dataContent}}</sc-collapse>
            </sc-collapse-group>
        </code-example>
        <br>
        <code-example title="样式三" :code="code4">
            <sc-collapse-group accordion type="success" v-model="successValue">
                <sc-collapse title="标题1" name="label1">{{dataContent}}</sc-collapse>
                <sc-collapse title="标题2" name="label2">{{dataContent}}</sc-collapse>
                <sc-collapse title="标题3" name="label3">{{dataContent}}</sc-collapse>
            </sc-collapse-group>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>
<script>
    import description from './description'
    import dataArray from './dataArray'
    import code1 from './code1.md'
    import code2 from './code2.md'
    import code3 from './code3.md'
    import code4 from './code4.md'
    export default {
        data() {
            return {
                dataArray: dataArray,
                description1: description.description1,
                code1: code1,
                code2: code2,
                code3: code3,
                code4: code4,
                dataContent: '这里的高度是随内容的增大而变化的，俗称响应式。而高度不确定为啥还会有动画呢？这里用到了overflow，和scrollHeight,scrollHeight是内容overflow了也可以获取到实时的高度，所以动画就产生啦！！！',
                primaryValue: ['label1','label2'],
                successValue: 'label3'
            }
        },
        methods: {
            handleClick(instance) {
                //alert('回调'+instance)
                //console.log("回调")
            }
        },
        mounted() {
            // setInterval(()=> {
            //     this.dataContent += this.dataContent
            // },1000)
        }
    }
</script>