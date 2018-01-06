<template>
    <div class="content-wrapper">
        <code-example title="基本用法" :code="code1" :description="description1">
            <sc-row justify="space-between">
                {{value}}
                <sc-col :span="10">
                    <sc-slider v-model="value" :min="0" :max="100" ></sc-slider>
                </sc-col>
                {{value1}}
                <sc-col :span="10">
                    <sc-slider v-model="value1"></sc-slider>
                </sc-col>
            </sc-row>
            <sc-row justify="space-between">
                {{value2}}
                <sc-col :span="10">
                    <sc-slider v-model="value2"></sc-slider>
                </sc-col>
                {{value}}
                <sc-col :span="10">
                    <sc-slider v-model="value1" disabled></sc-slider>
                </sc-col>
            </sc-row>
        </code-example>
        <code-example title="加个tooltip" :code="code2" :description="description2">
            <sc-row justify="space-between">
                {{value}}
                <sc-col :span="10">
                    <sc-slider tooltip v-model="value" :min="0" :max="100" ></sc-slider>
                </sc-col>
                {{value1}}
                <sc-col :span="10">
                    <sc-slider tooltip v-model="value1"></sc-slider>
                </sc-col>
            </sc-row>
            <sc-row justify="space-between">
                {{value2}}
                <sc-col :span="20">
                    <sc-slider tooltip v-model="value2"></sc-slider>
                </sc-col>
            </sc-row>
        </code-example>
        <code-example title="竖着方向" :code="code3" :description="description3">
            <sc-row justify="space-between">
                <sc-col :span="10">
                    <sc-slider vertical tooltip v-model="value4"></sc-slider>
                </sc-col>
                <sc-col :span="10">
                    <sc-slider vertical tooltip v-model="value5"></sc-slider>
                </sc-col>
            </sc-row>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>

<script>
    import code1 from './code1.md'
    import code2 from './code2.md'
    import code3 from './code3.md'
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
                dataArray: dataArray,
                value: 0,
                value1: 20,
                value2: [10,60],
                value3: 40,
                value4: 40,
                value5: [10,60],
            }
        }
    }
</script>