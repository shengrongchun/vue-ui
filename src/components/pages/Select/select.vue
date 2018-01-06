<template>
    <div class="content-wrapper">
        <code-example title="基本用法" :code="code1" :description="description1">
            <sc-select v-model="value" placeholder="请选择内容" position="bottom" :data="dataArray">
            </sc-select>
            <sc-select v-model="value" placeholder="请选择内容" position="bottom" :data="dataArray" disabled>
            </sc-select>
        </code-example>
        <code-example title="下拉显示搜索" :code="code2">
            <sc-select  placeholder="请选择内容" :getData="dataLoadArray" /> 
            <sc-select  :dataLoading="true" placeholder="请选择内容" :getData="dataLoadArray1" />
            <sc-select  :dataLoading="true" placeholder="请选择内容" :getData="dataLoadArray2" /> 
        </code-example>
        <code-example title="下拉显示位置" :code="code3">
            <sc-select placeholder="请选择内容" position="right" :data="dataArray">
            </sc-select>
            <sc-select placeholder="请选择内容" position="left" :data="dataArray">
            </sc-select>
            <sc-select placeholder="请选择内容" position="top" :data="dataArray">
            </sc-select>
        </code-example>
        <code-example title="显示清除图标" :code="code4">
            <sc-select v-model="value1" placeholder="请选择内容" iconClear :data="dataArray">
            </sc-select>
        </code-example>
        <code-example title="自定义显示条目" :code="code5">
            <sc-select  customItem="myItem" v-model="value1" placeholder="请选择内容" :data="dataArray">
            </sc-select>
        </code-example>
    </div>
</template>

<script>
import description from './description'
import code1 from './code1.md'
import code2 from './code2.md'
import code3 from './code3.md'
import code4 from './code4.md'
import code5 from './code5.md'
import Vue from 'vue'
    Vue.component('myItem', {
        functional: true,
        render: function (h, ctx) {
            var item = ctx.props.item;
            return h('li', ctx.data, [
                h('div', { attrs: { class: 'keyClass' } }, [item.key]),
                h('span', { style: { fontSize: '12px',color: '#b4b4b4' } }, [item.key])
            ]);
        },
        props: {
          item: { type: Object, required: true }
        }
    });
    export default {
        data() {
            return {
                code1: code1,
                code2: code2,
                code3: code3,
                code4: code4,
                code5: code5,
                description1: description.description1,
                value: null,
                value1: null,
                dataArray: [
                {key:'上海'}
                ,{key:'北京'}
                ,{key:'安徽'}
                ,{key:'山东'}
                ,{key:'江西'}
                ,{key:'江苏'}
                ,{key:'浙江'}
                ,{key:'天津'}
                ,{key:'吉林'}
                ,{key:'黑龙江'}]
            }
        },
        methods: {
            dataLoadArray(data,cb) {
                setTimeout(()=> {
                    data = null;
                    cb(data);
                },3000)
            },
            dataLoadArray1(data,cb) {
                setTimeout(()=> {
                    data = [];
                    cb(data);
                },3000)
            },
            dataLoadArray2(data,cb) {
                setTimeout(()=> {
                    data = this.dataArray;
                    cb(data);
                },3000)
            }
        }
    }
</script>