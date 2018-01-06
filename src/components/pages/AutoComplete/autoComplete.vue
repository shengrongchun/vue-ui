<template>
    <div class="content-wrapper">
        <code-example title="基本用法" :code="code1" :description="description1">
            <sc-auto-complete v-model="value" placeholder="请输入内容" :data="customDataArray">
            </sc-auto-complete>
            <sc-auto-complete v-model="value1" placeholder="请输入内容" :data="customDataArray" icon="search" iconClear>
            </sc-auto-complete>
            <sc-auto-complete :data="customDataArray" placeholder="请输入内容" disabled></sc-auto-complete>
        </code-example>
        <code-example title="下拉显示搜索" :code="code2" :description="description2">
            <sc-auto-complete  placeholder="请输入内容" :getData="dataLoadArray" /> 
            <sc-auto-complete  :dataLoading="true" placeholder="请输入内容" :getData="dataLoadArray1" />
            <sc-auto-complete  :dataLoading="true" placeholder="请输入内容" :getData="dataLoadArray2" /> 
        </code-example>
        <code-example title="下拉显示位置" :code="code3" :description="description3">
            <sc-auto-complete placeholder="请输入内容" position="right" :data="customDataArray">
            </sc-auto-complete>
            <sc-auto-complete placeholder="请输入内容" position="left" :data="customDataArray">
            </sc-auto-complete>
            <sc-auto-complete placeholder="请输入内容" position="top" :data="customDataArray">
            </sc-auto-complete>
        </code-example>
        <code-example title="自定义显示条目" :code="code4" :description="description4">
            <sc-auto-complete  customItem="myItem" v-model="value1" placeholder="请输入内容" icon=":fa fa-pencil" :data="customDataArray">
            </sc-auto-complete>
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
    import dataArray from './dataArray'
    import description from './description'

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
                dataArray: dataArray,
                value: null,
                value1: null,
                customDataArray: [
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
                    data = this.customDataArray;
                    cb(data);
                },3000)
            }
        }
    }
</script>