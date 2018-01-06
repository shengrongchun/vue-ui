<template>
    <div class="content-wrapper">
        <code-example title="基本用法" :code="code1" :description="description1">
            <sc-checkbox @click="handleClick" v-model="checked1">备选项1</sc-checkbox>
            <sc-checkbox checked v-model="checked2">备选项2</sc-checkbox>
        </code-example>
        <br>
        <code-example title="禁用状态" :code="code2" :description="description2">
            <sc-checkbox  disabled checked >备选项1</sc-checkbox>
            <sc-checkbox disabled>备选项2</sc-checkbox>
        </code-example>
        <br>
        <code-example title="多选框组" :code="code3" :description="description3">
            <sc-checkbox-group v-model="moreSelect">
                <sc-checkbox label="备选项1">备选项1</sc-checkbox>
                <sc-checkbox label="备选项2">备选项2</sc-checkbox>
                <sc-checkbox label="备选项3" checked>备选项3</sc-checkbox>
            </sc-checkbox-group>
            <div class="margin25"></div>
            <sc-checkbox-group v-model="moreSelect2" vertical>
                <sc-checkbox label="备选项1">备选项1</sc-checkbox>
                <sc-checkbox label="备选项2">备选项2</sc-checkbox>
                <sc-checkbox label="备选项3" checked>备选项3</sc-checkbox>
            </sc-checkbox-group>
            <div class="margin25">{{moreSelect}}</div>
        </code-example>
        <br>
        <code-example title="全选状态" :code="code4" :description="description4">
            <sc-checkbox-all v-model="moreSelect1">全选</sc-checkbox-all>
            <sc-checkbox-group v-model="moreSelect1">
                <sc-checkbox label="备选项1">备选项1</sc-checkbox>
                <sc-checkbox label="备选项2" checked>备选项2</sc-checkbox>
                <sc-checkbox label="备选项3">备选项3</sc-checkbox>
            </sc-checkbox-group>
            <div class="margin25">{{moreSelect1}}</div>
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
                checked1: false,
                checked2: false,
                checked3: false,
                disabled: true,
                moreSelect: [],
                moreSelect1: [],
                moreSelect2: [],
                code1: code1,
                description1: description.description1,
                code2: code2,
                description2: description.description2,
                code3: code3,
                description3: description.description3,
                code4: code4,
                description4: description.description4,
                dataArray: dataArray
            }
        },
        methods: {
            handleClick(val) {
                //console.log(val)
            }
        }
    }
</script>