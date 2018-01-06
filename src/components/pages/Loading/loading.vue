<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <div class="margin-bottom-5">
                <sc-row justify="space-between">
                    <sc-col :span="2"><span class="title-middle">类型：</span></sc-col>
                    <sc-col :span="6">
                        <sc-select v-model="options.type" :data="data1" outputValue></sc-select>
                    </sc-col>
                    <sc-col :span="2"><span class="title-middle">尺寸：</span></sc-col>
                    <sc-col :span="6">
                        <sc-select v-model="options.size" :data="data2" outputValue></sc-select>
                    </sc-col>
                    <sc-col :span="2"><span class="title-middle">颜色：</span></sc-col>
                    <sc-col :span="6">
                        <sc-select v-model="options.color" :data="data3" outputValue></sc-select>
                    </sc-col>
                </sc-row>
                <br/>
                <sc-row>
                    <sc-col :span="2"><span class="title-middle">是/否显示：</span></sc-col>
                    <sc-col :span="6" class="title-middle">
                        <sc-switch v-model="options.visible" on-text="是" off-text="否"></sc-switch>
                    </sc-col>
                    <sc-col :span="3"><span class="title-middle">是/否点击消失：</span></sc-col>
                    <sc-col :span="6" class="title-middle">
                        <sc-switch v-model="options.clickClose" on-text="是" off-text="否"></sc-switch>
                    </sc-col>
                </sc-row>
            </div>
            <div v-sc-loading="options" class="area"></div>
        </code-example>
        <br>
        <code-example title="指令全屏显示" :code="code2" :description="description2">
            <div class="margin-bottom-5">
                <sc-row>
                    <sc-col :span="2"><span class="title-middle">是/否显示：</span></sc-col>
                    <sc-col :span="3" class="title-middle">
                        <sc-switch v-model="option.visible" on-text="是" off-text="否"></sc-switch>
                    </sc-col>
                    <sc-col :span="6" class="title-middle" style="color:red;">
                        *注：显示后默认是点击后消失
                    </sc-col>
                </sc-row>
                
            </div>
            <div v-sc-loading.fullScreen="option" class="area"></div>
        </code-example>
        <br>
        <code-example title="js实例显示" :code="code3" :description="description3">
            <sc-button type="primary" @click="showLoading">点击出现loading,默认全屏</sc-button>
            <sc-button class="loadingBtn" type="success" @click="showLoadingArea">点击出现loading,指定target</sc-button>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>
<script>
    import description from './description'
    import dataArray from './dataArray'
    import code1 from './code1.md'
    import code2 from './code2.md'
    import code3 from './code3.md'
    export default {
        data() {
            return {
                dataArray: dataArray,
                code1: code1,
                description1: description.description1,
                code2: code2,
                description2: description.description2,
                code3: code3,
                description3: description.description3,
                options: {
                    size: 'md',
                    type: 'circular',
                    color: 'primary',
                    visible: true,
                    clickClose: false
                },
                option: {
                    size: 'lg',
                    type: 'circular',
                    color: 'primary',
                    visible: false,
                    clickClose: true
                },
                data1:[{
                    key: 'circular',
                    value: 'circular'
                },{
                    key: 'default',
                    value: 'default'
                },{
                    key: 'circular-wider',
                    value: 'circular-wider'
                },{
                    key: 'circular2',
                    value: 'circular2'
                },{
                    key: 'ball-pulse',
                    value: 'ball-pulse'
                },{
                    key: 'line-scale',
                    value: 'line-scale'
                }],
                data2:[{
                    key: 'xl',
                    value: 'xl'
                },{
                    key: 'lg',
                    value: 'lg'
                },{
                    key: 'md',
                    value: 'md'
                },{
                    key: 'sm',
                    value: 'sm'
                },{
                    key: 'xs',
                    value: 'xs'
                }],
                data3:[{
                    key: 'primary',
                    value: 'primary'
                },{
                    key: 'warning',
                    value: 'warning'
                },{
                    key: 'danger',
                    value: 'danger'
                },{
                    key: 'info',
                    value: 'info'
                },{
                    key: 'success',
                    value: 'success'
                },{
                    key: '#000',
                    value: '#000'
                },{
                    key: 'yellow',
                    value: 'yellow'
                }],
                data4:[{
                    key: '是',
                    value: true
                },{
                    key: '否',
                    value: false
                }],
                data5:[{
                    key: '是',
                    value: true
                },{
                    key: '否',
                    value: false
                }]
            }
        },
        methods: {
            showLoading() {
                this.$loading({
                    size: 'lg',
                    type: 'circular',
                    color: 'primary',
                    clickClose: true,
                    //visible: true
                }).then(()=> {
                    //alert('关闭')
                })
            },
            showLoadingArea() {
                this.$loading({
                    size: 'sm',
                    type: 'circular2',
                    color: 'warning',
                    clickClose: true,
                    target: '.loadingBtn'
                    //visible: true
                }).then(()=> {
                    //alert('关闭')
                })
            }
        }
    }
</script>
<style scoped>
    .area {
        width: 100%;
        height: 100px;
        background: #ccc;
    }
    .title-middle {
        height: 36px;
        line-height: 36px;
    }
</style>
