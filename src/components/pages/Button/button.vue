<template>
    <div class="content-wrapper">
        <code-example title="基础用法" :code="code1" :description="description1">
            <sc-button>默认按钮</sc-button>
            <sc-button type="primary">主要按钮</sc-button>
            <sc-button type="success">成功按钮</sc-button>
            <sc-button type="danger">危险按钮</sc-button>
            <sc-button type="warning">警告按钮</sc-button>
            <sc-button type="info">信息按钮</sc-button>
            <sc-button type="info" :disabled="true">默认按钮</sc-button>

            <div class="margin25"></div>
            <sc-button type="plain">默认按钮</sc-button>
            <sc-button type="plain-primary">主要按钮</sc-button>
            <sc-button type="plain-success">成功按钮</sc-button>
            <sc-button type="plain-danger">危险按钮</sc-button>
            <sc-button type="plain-warning">警告按钮</sc-button>
            <sc-button type="plain-info">信息按钮</sc-button>
            <sc-button :disabled="true" type="plain">主要按钮</sc-button>

            <div class="margin25"></div>
            <sc-button type="text">默认按钮</sc-button>
            <sc-button type="text-primary">主要按钮</sc-button>
            <sc-button type="text-success">成功按钮</sc-button>
            <sc-button type="text-danger">危险按钮</sc-button>
            <sc-button type="text-warning">警告按钮</sc-button>
            <sc-button type="text-info">信息按钮</sc-button>
            <sc-button :disabled="true" type="text-success">主要按钮</sc-button>

            <div class="margin25"></div>
            <sc-button type="text" icon="bell-o" iconSize="30"></sc-button>
            <sc-button type="text-primary" icon="bell-o" iconSize="30"></sc-button>
            <sc-button type="text-success" icon="bell-o" iconSize="30"></sc-button>
            <sc-button type="text-danger" icon="bell-o" iconSize="30"></sc-button>
            <sc-button type="text-warning" icon="bell-o" iconSize="30"></sc-button>
            <sc-button type="text-info" icon="bell-o" iconSize="30"></sc-button>
            <sc-button :disabled="true" type="text-primary" icon="bell-o" iconSize="30"></sc-button>
        </code-example>
        <br>
        <code-example title="图标字体按钮" :code="code2" :description="description2">
            <sc-button>默认按钮 <sc-icon value="bell-o"/></sc-button>
            <sc-button :disabled="true" type="primary" icon="bell-o">主要按钮</sc-button>
            <sc-button type="danger" icon="pencil">危险按钮</sc-button>
            <sc-button type="plain-warning" icon="plus" :icon-right="true">警告按钮</sc-button>
            <sc-button type="plain-info" icon="circle-o-notch fa-spin fa-3x fa-fw">loading</sc-button>
            <sc-button :disabled="true" type="primary" icon="spinner fa-spin fa-3x fa-fw">加载中</sc-button>
            <sc-button type="primary" icon="spinner fa-pulse fa-3x fa-fw">加载中</sc-button>
            <sc-button type="primary" icon="refresh fa-spin fa-3x fa-fw">加载中</sc-button>
        </code-example>
        <br>
        <code-example title="大小按钮" :code="code3" :description="description3">
            <sc-button size="lg">大型按钮 <sc-icon value="plus"/></sc-button>
            <sc-button type="primary" icon="bell-o">正常按钮</sc-button>
            <sc-button size="sm" type="danger" icon="pencil">小型按钮</sc-button>
            <sc-button size="mi" href="#/layout" type="plain-warning">超小按钮 <sc-icon value="plus"/></sc-button>
        </code-example>
        <br>
        <code-example title="按钮组" :code="code4" :description="description4">
            <sc-button-group>
                <sc-button   type="plain-primary" icon="chevron-left">上一页</sc-button>
                <sc-button   type="plain-primary">中间页</sc-button>
                <sc-button   type="plain-primary">中间页</sc-button>
                <sc-button   type="plain-primary" icon="chevron-right" :icon-right="true">下一页</sc-button>
            </sc-button-group>
            <sc-button-group>
                <sc-button  type="primary" icon="chevron-left"></sc-button>
                <sc-button  type="primary" icon="pencil"></sc-button>
                <sc-button  type="primary" icon="pencil"></sc-button>
                <sc-button  type="primary" icon="chevron-right"></sc-button>
            </sc-button-group>
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
    import code4 from './code4.md'
    export default {
        data() {
            return {
                description1: description.description1,
                dataArray: dataArray,
                code1: code1,
                code2: code2,
                description2: description.description2,
                code3: code3,
                description3: description.description3,
                code4: code4,
                description4: description.description4,
            }
        }
    }
</script>