<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-button type="primary" v-sc-tooltip.dark="data">dark top center</sc-button>
            <sc-button type="success" v-sc-tooltip="data">top center</sc-button>
        </code-example>
        <code-example title="不同位置" :code="code2" :description="description2">
            <sc-button type="primary" v-sc-tooltip="data">top center</sc-button>
            <sc-button type="success" v-sc-tooltip.start="data">top start</sc-button>
            <sc-button type="danger" v-sc-tooltip.end="data">top end</sc-button>
            <sc-button type="primary" v-sc-tooltip.bottom="data">bottom center</sc-button>
            <sc-button type="success" v-sc-tooltip.bottom.start="data">bottom start</sc-button>
            <sc-button type="danger" v-sc-tooltip.bottom.end="data">bottom end</sc-button>

            <p class="margin5"></p>
            <sc-button type="primary" v-sc-tooltip.left="data">left center</sc-button>
            <sc-button type="success" v-sc-tooltip.left.start="data">left start</sc-button>
            <sc-button type="danger" v-sc-tooltip.left.end="data">left end</sc-button>
            
            <sc-button type="primary" v-sc-tooltip.right="data">right center</sc-button>
            <sc-button type="success" v-sc-tooltip.right.start="data">right start</sc-button>
            <sc-button type="danger" v-sc-tooltip.right.end="data">right end</sc-button>
        </code-example>
        <code-example title="点击触发" :code="code3" :description="description3">
            <sc-button type="primary" v-sc-tooltip.dark.click="data">top center</sc-button>
            <sc-button type="success" v-sc-tooltip.dark.start.click="data">top start</sc-button>
            <sc-button type="danger" v-sc-tooltip.dark.end.click="data">top end</sc-button>
        </code-example>
        <br>
        <code-example title="点击元素之外消失" :code="code4" :description="description4">
            <sc-button type="primary" v-sc-tooltip.dark.outsideClick="options">top center</sc-button>
            <sc-button type="success" v-sc-tooltip.dark.start.outsideClick="options">top start</sc-button>
            <sc-button type="danger" v-sc-tooltip.dark.end.outsideClick="options">top end</sc-button>
        </code-example>
        <br>
        <code-example title="更多选项" :code="code5" :description="description5">
            <sc-button type="primary" v-sc-tooltip.dark="options">top center</sc-button>
            <sc-button type="warning" v-sc-tooltip.right="options1">custom content</sc-button>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>

<script>
import Vue from 'vue'
import code1 from './code1.md'
import code2 from './code2.md'
import code3 from './code3.md'
import code4 from './code4.md'
import code5 from './code5.md'
import description from './description'
import dataArray from './dataArray'
    Vue.component('child-component',{
        template:"<div><h1>自定义标题</h1><sc-button type='success'>自定义按钮</sc-button></div>"
    })
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
                code5: code5,
                description5: description.description5,
                dataArray: dataArray,
                data: "tooltip显示位置的测试标题",
                options1: {
                    customComponent: 'child-component'
                },
                options: {
                    title: '标题',
                    content: '这是内容111',
                    //arrowWidth: 18,//箭头大小
                    //space: 20//tooltip与元素间距

                }
            }
        },
    }
</script>