<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <div class="margin-bottom-5">
                <sc-button type="primary" @click="setStripe">是否斑马样式</sc-button>
                <sc-button type="success" @click="setBorder">是否边框样式</sc-button>
                <sc-button type="info" @click="setSmall">是否小尺寸样式</sc-button>
                <sc-button type="warning" @click="setHeight">是否固定表头</sc-button>
            </div>
            <sc-table :data="tableData" :stripe="stripe" :border="border" :small="small"
                        :height="height">
                <sc-table-column>日期</sc-table-column>
                <sc-table-column>姓名</sc-table-column>
                <sc-table-column>地址</sc-table-column>
            </sc-table>
        </code-example>
        <br>
        <code-example title="操作样式" :code="code2" :description="description2">
            <sc-table :data="tableData" stripe border>
                <sc-table-column>日期</sc-table-column>
                <sc-table-column>姓名</sc-table-column>
                <sc-table-column>地址</sc-table-column>

                <sc-table-column compile slot-name="table-caption1">操作</sc-table-column>
                <template slot="table-caption1" slot-scope="subData">
                    <sc-button type="primary" size="sm" @click="setCallback(subData.data)">设置</sc-button>
                    <sc-button type="danger" size="sm">删除</sc-button>
                </template>
                <sc-table-column compile slot-name="table-caption2">操作二</sc-table-column>
                <template slot="table-caption2" slot-scope="subData">
                    <sc-button :disabled="subData.data.name == '王小贱' " type="plain-primary" size="sm" @click="setCallback2(subData.data)">设置2</sc-button>
                </template>  
                
            </sc-table>
        </code-example>
        <br>
        <code-example title="排序或者过滤" :code="code3" :description="description3">
            <sc-table :data="tableData1">
                <sc-table-column sortable label="date">日期</sc-table-column>
                <sc-table-column label="name">姓名</sc-table-column>
                <sc-table-column filter label="address">地址</sc-table-column>
            </sc-table>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>
<script>
    import description from './description'
    import code1 from './code1.md'
    import code2 from './code2.md'
    import code3 from './code3.md'
    import dataArray from './dataArray'
    export default {
        data() {
            return {
                description1: description.description1,
                code1: code1,
                description2: description.description2,
                code2: code2,
                description3: description.description3,
                code3: code3,
                dataArray: dataArray,
                stripe: false,
                border: false,
                small: false,
                height: null,
                tableData: [{
                    date: '2017-12-11',
                    name: '王小贱',
                    address: '上海市浦东新区杨高南路 5678 弄'
                }, {
                    date: '2017-12-13',
                    name: '王小小贱',
                    address: '上海市浦东新区杨高南路 5678 弄'
                }, {
                    date: '2017-12-14',
                    name: '王大贱',
                    address: '上海市浦东新区杨高南路 5678 弄'
                }, {
                    date: '2017-12-12',
                    name: '王大大贱',
                    address: '上海市浦东新区杨高南路 5678 弄'
                }],
                tableData1: [{
                    date: '2017-12-11',
                    name: '张三',
                    address: '上海市杨高南路 5678 弄'
                }, {
                    date: '2017-12-13',
                    name: '刘六',
                    address: '浦东新区杨高南路 5678 弄'
                }, {
                    date: '2017-12-14',
                    name: '王二',
                    address: '杨高南路 5678 弄'
                }, {
                    date: '2017-12-12',
                    name: '李四',
                    address: '5678 弄'
                }]
            }
        },
        methods: {
            setStripe() {
                this.stripe = !this.stripe
            },
            setBorder() {
                this.border = !this.border
            },
            setSmall() {
                this.small = !this.small
            },
            setHeight() {
                if(this.height) {
                    this.height = null
                }else {
                    this.height = '100px'
                } 
            },
            setCallback(data) {
                alert('你点击了设置,日期：'+data.date+' 姓名：'+data.name+' 地址：'+data.address)
            },
            setCallback2(data) {
                alert('你点击了设置2,日期：'+data.date+' 姓名：'+data.name+' 地址：'+data.address)
            }
        }
    }
</script>