<template>
    <div class="content-wrapper">
        <code-example title="基本用法" :code="code1" :description="description1">
            <sc-row justify="space-between">
                <sc-col :span="6">
                    <sc-dropdown @itemClick="handelClick">
                        <sc-button type="success">dropdowm</sc-button>
                        <sc-dropdowm-menu slot="dropdown">
                            <sc-dropdowm-item value="优秀">优秀</sc-dropdowm-item>
                            <sc-dropdowm-item value="良好">良好</sc-dropdowm-item>
                            <sc-dropdowm-item value="一般">一般</sc-dropdowm-item>
                            <sc-dropdowm-item value="完了">完了</sc-dropdowm-item>
                        </sc-dropdowm-menu>
                    </sc-dropdown>
                </sc-col>
                <sc-col :span="6">
                    <sc-dropdown @itemClick="handelClick">
                        <sc-button type="primary">底线dropdown</sc-button>
                        <sc-dropdowm-menu slot="dropdown">
                            <sc-dropdowm-item value="优秀">优秀</sc-dropdowm-item>
                            <sc-dropdowm-item value="良好">良好</sc-dropdowm-item>
                            <sc-dropdowm-item divided value="一般">一般</sc-dropdowm-item>
                            <sc-dropdowm-item value="完了">完了</sc-dropdowm-item>
                        </sc-dropdowm-menu>
                    </sc-dropdown>
                </sc-col>
                <sc-col :span="6">
                    <sc-dropdown @itemClick="handelClick">
                        <sc-button type="danger">禁用条目dropdown</sc-button>
                        <sc-dropdowm-menu slot="dropdown">
                            <sc-dropdowm-item value="优秀">优秀</sc-dropdowm-item>
                            <sc-dropdowm-item value="良好">良好</sc-dropdowm-item>
                            <sc-dropdowm-item disabled value="一般">一般</sc-dropdowm-item>
                            <sc-dropdowm-item value="完了">完了</sc-dropdowm-item>
                        </sc-dropdowm-menu>
                    </sc-dropdown>
                </sc-col>
                <sc-col :span="6">
                    <sc-dropdown hover>
                        <sc-button type="warning">hover触发dropdown</sc-button>
                        <sc-dropdowm-menu slot="dropdown">
                            <sc-dropdowm-item>优秀</sc-dropdowm-item>
                            <sc-dropdowm-item>良好</sc-dropdowm-item>
                            <sc-dropdowm-item>一般</sc-dropdowm-item>
                            <sc-dropdowm-item>完了</sc-dropdowm-item>
                        </sc-dropdowm-menu>
                    </sc-dropdown>
                </sc-col>
            </sc-row>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>

<script>
    import description from './description'
    import dataArray from './dataArray'
    import code1 from './code1.md'
    export default {
        data() {
            return {
                description1: description.description1,
                code1: code1,
                dataArray: dataArray,
            }
        },
        methods: {
            handelClick(item) {
                //alert(item)
            }
        }
    }
</script>