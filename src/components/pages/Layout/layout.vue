<template>
    <div class="content-wrapper">
        <code-example :title="title1" :code="code1" :description="description1">
            <sc-row>
                <sc-col :span="24"><div class="content"></div></sc-col>
            </sc-row>
            <br>
            <sc-row>
                <sc-col :span="12"><div class="content"></div></sc-col>
                <sc-col :span="12"><div class="content apha8"></div></sc-col>
            </sc-row>
            <br>
            <sc-row>
                <sc-col :span="8"><div class="content"></div></sc-col>
                <sc-col :span="8"><div class="content apha6"></div></sc-col>
                <sc-col :span="8"><div class="content apha2"></div></sc-col>
            </sc-row>
            <br>
            <sc-row>
                <sc-col :span="6"><div class="content"></div></sc-col>
                <sc-col :span="6"><div class="content apha8"></div></sc-col>
                <sc-col :span="6"><div class="content apha6"></div></sc-col>
                <sc-col :span="6"><div class="content apha4"></div></sc-col>
            </sc-row>
        </code-example>
        <br>
        <code-example :title="title2" :code="code2" :description="description2">
            <sc-row :space="space">
                <sc-col :span="6"><div class="content"></div></sc-col>
                <sc-col :span="6"><div class="content apha8"></div></sc-col>
                <sc-col :span="6"><div class="content apha6"></div></sc-col>
                <sc-col :span="6"><div class="content apha4"></div></sc-col>
            </sc-row>
        </code-example>
        <br>
        <code-example :title="title3" :code="code3" :description="description3">
            <sc-row>
                <sc-col :span="6"><div class="content"></div></sc-col>
                <sc-col :span="6" :offset="12"><div class="content apha8"></div></sc-col>
            </sc-row>
        </code-example>
        <br>
        <code-example :title="title4" :code="code4" :description="description4">
            <sc-row justify="start">
                <sc-col :span="6"><div class="content"></div></sc-col>
                <sc-col :span="6"><div class="content apha8"></div></sc-col>
                <sc-col :span="6"><div class="content apha6"></div></sc-col>
            </sc-row>
            <br>
            <sc-row justify="end">
                <sc-col :span="6"><div class="content"></div></sc-col>
                <sc-col :span="6"><div class="content apha8"></div></sc-col>
                <sc-col :span="6"><div class="content apha6"></div></sc-col>
            </sc-row>
            <br>
            <sc-row justify="center">
                <sc-col :span="6"><div class="content"></div></sc-col>
                <sc-col :span="6"><div class="content apha8"></div></sc-col>
                <sc-col :span="6"><div class="content apha6"></div></sc-col>
            </sc-row>
            <br>
            <sc-row justify="space-between">
                <sc-col :span="6"><div class="content"></div></sc-col>
                <sc-col :span="6"><div class="content apha8"></div></sc-col>
                <sc-col :span="6"><div class="content apha6"></div></sc-col>
            </sc-row>
            <br>
            <sc-row justify="space-around">
                <sc-col :span="6"><div class="content"></div></sc-col>
                <sc-col :span="6"><div class="content apha8"></div></sc-col>
                <sc-col :span="6"><div class="content apha6"></div></sc-col>
            </sc-row>
        </code-example>
        <br>
        <code-example :title="title5" :code="code5" :description="description5">
            <sc-row>
                <sc-col :span="6" :sm="4" :md="8"><div class="content"></div></sc-col>
                <sc-col :span="6" :sm="4" :md="8"><div class="content apha8"></div></sc-col>
                <sc-col :span="6" :sm="16" :md="8"><div class="content apha6"></div></sc-col>
            </sc-row>
            <br>
            <sc-row>
                <sc-col :span="6" :xs="2" :lg="12"><div class="content"></div></sc-col>
                <sc-col :span="6" :xs="2" :lg="8"><div class="content apha8"></div></sc-col>
                <sc-col :span="6" :xs="20" :lg="4"><div class="content apha6"></div></sc-col>
            </sc-row>
        </code-example>
        <code-table :title="title" :data="dataArray"></code-table>
    </div>
</template>

<script>
import code1 from './code1.md'
import code2 from './code2.md'
import code3 from './code3.md'
import code4 from './code4.md'
import code5 from './code5.md'
import description from './description'



import dataArray from './dataArray'
    export default {
        data() {
            return {
                title: 'API',
                title1: '基础布局',
                title2: '分栏间隔',
                title3: '分栏偏移',
                title4: '对齐方式 flex',
                title5: '响应式布局',
                space: 20,
                code1: code1,
                description1: description.description1,
                code2: code2,
                description2: description.description2,
                code3: code3,
                description3: description.description3,
                code4: code4,
                description4: description.description4,
                code5: code5,
                description5: description.description5,
                dataArray: dataArray.data
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        min-height: 35px;
        background: #13ce66;
        border-radius: 4px;
        
        &.apha6 {
            opacity: 0.6;
        }

        &.apha4 {
            opacity: 0.4;
        } 

        &.apha2 {
            opacity: 0.2;
        } 

        &.apha8 {
            opacity: 0.8;
        } 
    }
</style>