<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <div class="margin5">
                {{time}}
            </div>
            <sc-time-picker placeholder="请选择时间"></sc-time-picker>
            <sc-time-picker placeholder="请选择时间" disabled></sc-time-picker>
            <sc-time-picker placeholder="请选择时间" v-model="time"></sc-time-picker>
            <sc-time-picker placeholder="请选择时间" outsideClickNone></sc-time-picker>
        </code-example>
        <code-example title="基本使用" :code="code2" :description="description2">
            <sc-row justify="space-between">
                <sc-col :span="8">
                    <sc-time-picker placeholder="请选择时间" showFormat="hh,mm"></sc-time-picker>
                </sc-col>
                <sc-col :span="8">
                     <sc-time-picker placeholder="请选择时间" showFormat="hh"></sc-time-picker>
                </sc-col>
                <sc-col :span="8">
                     <sc-time-picker placeholder="请选择时间" v-model="time2" showTime showFormat="ss,mm,hh"></sc-time-picker>
                </sc-col>
            </sc-row>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>

<script>
    import code1 from './code1.md'
    import code2 from './code2.md'
    import description from './description'
    import dataArray from './dataArray'
    export default {
        data() {
            return {
                time: '12/10/02',
                time1: null,
                time2: '02:03:05',
                code1: code1,
                description1: description.description1,
                code2: code2,
                description2: description.description2,
                dataArray: dataArray
            }
        }
    }
</script>