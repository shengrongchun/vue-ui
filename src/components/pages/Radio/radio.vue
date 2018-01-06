<template>
    <div class="content-wrapper">
        <code-example title="基础用法" :code="code1" :description="description1">
            <sc-radio v-model="value1" label="1">备选项1</sc-radio>
            <sc-radio v-model="value1" label="2">备选项2</sc-radio>
        </code-example>
        <br>
        <code-example title="禁用状态" :code="code2" :description="description2">
            <sc-radio disabled name="radio" v-model="value" label="1">备选项1</sc-radio>
            <sc-radio disabled name="radio" v-model="value" label="2">备选项2</sc-radio>
        </code-example>
        <br>
        <code-example title="单选框组" :code="code3" :description="description3">
            <sc-radio-group v-model="value2" @change="change">
                <sc-radio label="1">备选项1</sc-radio>
                <sc-radio label="2">备选项2</sc-radio>
                <sc-radio label="3">备选项3</sc-radio>
            </sc-radio-group>
        </code-example>
        <br>
        <code-example title="按钮样式" :code="code4" :description="description4">
            <sc-radio-group v-model="value3" @change="change">
                <sc-radio-button type="primary" label="备选项1">备选项1</sc-radio-button>
                <sc-radio-button type="primary" label="备选项2">备选项2</sc-radio-button>
                <sc-radio-button type="primary" label="备选项3">备选项3</sc-radio-button>
            </sc-radio-group>
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
                value: '1',
                value1: '1',
                value2: null,
                value3: '备选项2',
                code1: code1,
                description1: description.description1,
                code2: code2,
                description2: description.description2,
                code3: code3,
                description3: description.description3,
                code4: code4,
                description4: description.description4,
                dataArray: dataArray,
            }
        },
        methods: {
            change(val) {
                //console.log("你点击了"+val);
            }
        }
    }
</script>