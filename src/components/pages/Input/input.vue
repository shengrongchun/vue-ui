<template>
    <div class="content-wrapper">
        <code-example title="基础用法" :code="code1" :description="description1">
            <div class="margin5">你输入的是：{{value}}</div>
            <sc-row justify="space-between">
                <sc-col :span="7">
                    <sc-input placeholder="请输入内容" v-model="value"/>
                </sc-col>
                <sc-col :span="7">
                    <sc-input placeholder="请输入内容" disabled/>
                </sc-col>
                <sc-col :span="7">
                    <sc-input placeholder="请输入内容" v-model="value1" @iconClick="handleIconClick" icon="search"/>
                </sc-col>
            </sc-row>
        </code-example>
        <br>
        <code-example title="各种尺寸" :code="code2" :description="description2">
            <sc-row justify="space-between">
                <sc-col :span="5">
                    <sc-input placeholder="请输入内容" size="lg"/>
                </sc-col>
                <sc-col :span="5">
                    <sc-input placeholder="请输入内容"/>
                </sc-col>
                <sc-col :span="5">
                    <sc-input placeholder="请输入内容" size="sm"/>
                </sc-col>
                <sc-col :span="5">
                    <sc-input placeholder="请输入内容" size="mi"/>
                </sc-col>
            </sc-row>
        </code-example>
        <br>
        <code-example title="复合型输入" :code="code3" :description="description3">
            <sc-input placeholder="请输入内容">
                <span slot="after">
                    <sc-icon value="search" @click="handleIconClick"></sc-icon>
                </span>
            </sc-input> 
            <div class="margin5"></div>
            <sc-input placeholder="请输入内容" size="sm">
                <span slot="before">
                    Http://
                </span>
                <span slot="after">
                    Search
                </span>
            </sc-input>
            <div class="margin5"></div>
            <sc-input placeholder="请输入内容" disabled size="lg">
                <span slot="before">
                    Http://
                </span>
                <span slot="after">
                    <sc-button type="success" size="sm">搜索</sc-button>
                </span>
            </sc-input>
        </code-example>
        <br>
        <code-example title="文本域" :code="code4" :description="description4">
            <sc-input placeholder="请输入内容" type="textarea" height="100px" width="350px"/>
            <sc-input placeholder="请输入内容" type="textarea" height="100px" width="350px" autoSize/>
        </code-example> 
        <br>
        <code-table :data="dataArray.data"></code-table>
    </div>
</template>

<script>
    import description from './description'
    import code1 from './code1.md'
    import code2 from './code2.md'
    import code3 from './code3.md'
    import code4 from './code4.md'
    import dataArray from './dataArray'
    export default {
        data() {
            return {
                value: null,
                value1: null,

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
            handleIconClick(val) {
                alert("你点击了搜索"+val);
            }
        }
    }
</script>