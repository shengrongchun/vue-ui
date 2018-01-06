<template>
    <div class="content-wrapper">
        <code-example title="图标显示" :code="code" :description="description">
            <sc-icon value="bell-o" size="50" @click="iconClick"></sc-icon>
            <sc-icon value="bell-o" size="40" color="blue" @click="iconClick"></sc-icon>
            <sc-icon value="bell-o" size="30" color="#ccc" @click="iconClick" className="customClass"></sc-icon>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>

<script>
    import description from './description'
    import dataArray from './dataArray'
    import code from './code.md'
    export default {
        data() {
            return {
                description: description,
                code: code,
                dataArray: dataArray
            }
        },
        methods: {
            iconClick() {
                alert('你点击了图标')
            }
        }
    }
</script>
