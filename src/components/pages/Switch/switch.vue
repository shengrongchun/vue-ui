<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-switch v-model="value"></sc-switch>  
            <sc-switch v-model="value1" on-text="ON" off-text="OFF"></sc-switch>
            <sc-switch v-model="value2" on-text="是" off-text="否" on-color="#20a0ff" off-color="red"></sc-switch>
        </code-example>
        <code-example title="禁用状态" :code="code2" :description="description2">
            <sc-switch disabled ></sc-switch>  
            <sc-switch disabled on-text="ON" off-text="OFF"></sc-switch>
            <sc-switch disabled on-text="是" off-text="否" on-color="#20a0ff" off-color="red"></sc-switch>
        </code-example>
        <code-example title="设置值" :code="code3" :description="description3">
            <sc-switch  v-sc-tooltip.dark="value3" v-model="value3" :on-value="true" :off-value="false"></sc-switch>  
            <sc-switch  v-sc-tooltip.dark="value4" v-model="value4" :on-value="11" :off-value="22" on-text="ON" off-text="OFF"></sc-switch>
            <sc-switch  v-sc-tooltip.dark="value5" v-model="value5" on-value="你好" off-value="他好" on-text="是" off-text="否" on-color="#20a0ff" off-color="red"></sc-switch>
        </code-example>
        <code-example title="改变值事件" :code="code4" :description="description4">
            <sc-switch @change="changeValue" v-sc-tooltip.dark="value6" v-model="value6" on-value="hello" off-value="hi" on-text="是" off-text="否" on-color="#20a0ff" off-color="red"></sc-switch>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>

<script>
    import code1 from './code1.md'
    import code2 from './code2.md'
    import code3 from './code3.md'
    import code4 from './code4.md'
    import description from './description'
    import dataArray from './dataArray'
    export default {
        data() {
            return {
                code1: code1,
                description1: description.description1,
                code2: code2,
                description2: description.description2,
                code3: code3,
                description3: description.description3,
                code4: code4,
                description4: description.description4,
                dataArray: dataArray,
                value: true,
                value1: false,
                value2: false,
                value3: true,
                value4: 22,
                value5: '你好',
                value6: 'hello',
            }
        },
        methods: {
            changeValue() {
                alert('switch值改变了')
            }
        }
    }
</script>