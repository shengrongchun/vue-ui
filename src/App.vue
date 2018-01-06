<template>
    <div id="app">
        <div v-if="!isHomePage" class="example-bar" :class="{'nav-hide': !open}">
            <div class="bar-left">
                <router-link to="/index">
                    <h2>VUE-UI</h2>
                </router-link>
            </div>
            <div class="bar-right" >
                <div class="hideBtn" @click="toggle()">
                    <sc-icon v-if="open" value="angle-double-left" :size="18"></sc-icon>
                    <sc-icon v-else value="angle-double-right" :size="18"></sc-icon>
                </div>
            </div>
        </div>
        <div v-if="!isHomePage" class="example-nav-bar" :class="{'nav-hide': !open}">
        
            <sc-menu v-if="!isHomePage" bgColor="#fff">
                <sc-menu-item-group :title="item.title" v-for="(item,index) in navData" :key="index">
                    <sc-menu-item :to="child.to" :title="child.title" v-for="(child,index) in item.children" :key="index" />
                </sc-menu-item-group>
            </sc-menu>
        </div>
        <div class="example-content" :class="{'nav-hide': !open, 'home-page': isHomePage}">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                open: true,
                navData: [{
                    title:'分组一',
                    children: [{
                        title: 'layout 布局',
                        to: '/layout'
                    },{
                        title: 'icon 图标',
                        to: '/icon'
                    },{
                        title: 'button 按钮',
                        to: '/button'
                    },{
                        title: 'timePicker 时间选择器',
                        to: '/timePicker'
                    },{
                        title: 'datePicker 日期选择器',
                        to: '/datePicker'
                    }]
                },{
                    title:'分组二',
                    children: [{
                        title: 'radio 单选框',
                        to: '/radio'
                    },{
                        title: 'checkbox 多选框',
                        to: '/checkbox'
                    },{
                        title: 'input 输入框',
                        to: '/input'
                    },{
                        title: '自动完成 autocomplete',
                        to: '/autocomplete'
                    },{
                        title: 'select 选择器',
                        to: '/select'
                    },{
                        title: 'tooltip 文字提示',
                        to: '/tooltip'
                    },{
                        title: 'switch 开关',
                        to: '/switch'
                    },]
                },{
                    title:'分组三',
                    children: [{
                        title: 'slider 滑块',
                        to: '/slider'
                    },{
                        title: 'upload 上传',
                        to: '/upload'
                    },{
                        title: 'rate 评分',
                        to: '/rate'
                    },{
                        title: 'transfer 穿梭框',
                        to: '/transfer'
                    }]
                },{
                    title:'分组四',
                    children: [{
                        title: 'modal 模态框',
                        to: '/modal'
                    },{
                        title: 'alert 警告框',
                        to: '/alert'
                    },{
                        title: 'notification 通知框',
                        to: '/notification'
                    },{
                        title: 'loading 加载',
                        to: '/loading'
                    }]
                },{
                    title:'分组五',
                    children: [{
                        title: 'breadcrumb 面包屑',
                        to: '/breadcrumb'
                    },{
                        title: 'steps 步骤条',
                        to: '/steps'
                    },{
                        title: 'tabs 标签',
                        to: '/tabs'
                    },{
                        title: 'collapse 折叠面板',
                        to: '/collapse'
                    },{
                        title: 'carousel 走马灯',
                        to: '/carousel'
                    },{
                        title: 'navigation 多级导航',
                        to: '/navigation'
                    }]
                },{
                    title:'分组六',
                    children: [{
                        title: 'badge 标记',
                        to: '/badge'
                    },{
                        title: 'progress 进度条',
                        to: '/progress'
                    },{
                        title: 'pagination 分页',
                        to: '/pagination'
                    },{
                        title: 'dropdown 下拉菜单',
                        to: '/dropdown'
                    },{
                        title: 'table 表格',
                        to: '/table'
                    },{
                        title: 'form 表单验证',
                        to: '/form'
                    }]
                }]
            }
        },
        computed: {
            isHomePage() {
                return this.$route.fullPath === '/index';
            }
        },
        methods: {
            toggle() {
                this.open = !this.open;
            }
        },
        components: {
            //私有组件
        }
    }
</script>

<style scoped lang="scss">
    @import url('./assets/styles/base.scss');
    #app {
        height: 100%;
    }
    .example-content {
        height: 100%;
        margin-left: 256px;
        margin-top: 56px;
        transition: all .45s;
        
        &.nav-hide {
            margin-left: 0;
        }

        &.home-page {
            margin-left: 0;
            margin-top: 0;
        }
    }
    
    .example-bar {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 56px;
        background: #09bb58;
        z-index: 1;
        
        .hideBtn {
            transition: all .2s;
            border-radius: 5px 0 0 5px;
            display: inline-block;
            box-sizing: border-box;
            width: 25px;
            margin-left: -25px;
            background: #42b983;
            margin-top: 13px;
            padding: 5px 8px;
            color: #fff;
            cursor: pointer;
            
            &:hover {
                padding-left: 3px;
            }
        }
        &.nav-hide {
            .bar-left {
               margin-left: -256px; 
            }

            .bar-right {
                margin-left: 0;
                .hideBtn {
                    margin-left: 0;
                    background: #09bb58;
                    border-radius: 0 5px 5px 0;
                    padding-left: 4px;
                    &:hover {
                        padding-left: 8px;
                    }
                }
            } 
        }

        .bar-left {
            transition: all .45s;
            width: 256px;
            height: 100%;
            float: left;
            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
        
            h2 {
                margin: 15px;
                color: #fff;
            } 
        }

        .bar-right {
            background: #42b983;
            transition: all .45s;
            width: 100%;
            height: 100%;
            margin-left: 256px;
        }
    }

    .example-nav-bar {
        transition: all .45s;
        position: fixed;
        z-index: 1;
        top: 56px;
        width: 256px;
        height: 100%;
        overflow: auto;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
        
        &.nav-hide {
            margin-left: -256px;
        }
    }

    .content-wrapper{
        padding: 48px 72px;
    }
</style>
