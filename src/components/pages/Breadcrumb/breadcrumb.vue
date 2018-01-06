<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-breadcrumb>
                <sc-breadcrumb-item to="/">首页</sc-breadcrumb-item>
                <sc-breadcrumb-item>页面管理</sc-breadcrumb-item>
                <sc-breadcrumb-item>页面开发</sc-breadcrumb-item>
                <sc-breadcrumb-item active>页面详情</sc-breadcrumb-item>
            </sc-breadcrumb>
        </code-example>
        <code-example title="可以自定义图标" :code="code2">
            <sc-row>
                <sc-col :span="12">
                <sc-breadcrumb icon="hand-o-right">
                    <sc-breadcrumb-item to="/">首页</sc-breadcrumb-item>
                    <sc-breadcrumb-item>页面管理</sc-breadcrumb-item>
                    <sc-breadcrumb-item>页面开发</sc-breadcrumb-item>
                    <sc-breadcrumb-item active>页面详情</sc-breadcrumb-item>
                </sc-breadcrumb>
                </sc-col>
                <sc-col :span="12">
                <sc-breadcrumb icon="chevron-right">
                    <sc-breadcrumb-item to="/">首页</sc-breadcrumb-item>
                    <sc-breadcrumb-item>页面管理</sc-breadcrumb-item>
                    <sc-breadcrumb-item>页面开发</sc-breadcrumb-item>
                    <sc-breadcrumb-item active>页面详情</sc-breadcrumb-item>
                </sc-breadcrumb>
                </sc-col>
            </sc-row>
        </code-example>
    </div>
</template>

<script>
    import code1 from './code1.md'
    import code2 from './code2.md'
    import description from './description'
    export default {
        data() {
            return {
                code1: code1,
                code2: code2,
                description1: description.description1
            }
        }
    }
</script>