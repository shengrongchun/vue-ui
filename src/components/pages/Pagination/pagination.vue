<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-row justify="space-between">
                <sc-col :span="12">
                    <p class="margin-bottom-5">小于等于7页效果</p>
                    <sc-pagination v-model="value" :total="total" :perNum="perNum"></sc-pagination>
                </sc-col>
                <sc-col :span="12">
                    <p class="margin-bottom-5">大于7页效果</p>
                    <sc-pagination :total="total1" :perNum="perNum" v-model="value1"></sc-pagination>
                </sc-col>
            </sc-row>
        </code-example>
        <br>
        <code-example title="加附加项效果" :code="code2" :description="description2">
            <sc-row justify="space-between">
                <sc-col :span="12">
                    <p class="margin-bottom-5">小于等于7页效果</p>
                    <sc-pagination totalPage v-model="value" :total="total" :perNum="perNum"></sc-pagination>
                </sc-col>
                <sc-col :span="12">
                    <p class="margin-bottom-5">大于7页效果</p>
                    <sc-pagination goPage :total="total1" :perNum="perNum" v-model="value1"></sc-pagination>
                </sc-col>
            </sc-row>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>

<script>
    import description from './description'
    import dataArray from './dataArray'
    import code1 from './code1.md'
    import code2 from './code2.md'
    export default {
        data() {
            return {
                code1: code1,
                description1: description.description1,
                code2: code2,
                description2: description.description2,
                dataArray: dataArray,
                total: 70,
                total1: 190,
                perNum: 10,
                value: 1,
                value1: 2,
            }
        }
    }
</script>