<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-row justify="space-between">
                <sc-col :span="3">
                    <sc-badge value="3">
                        <sc-button type="primary">按钮</sc-button>
                    </sc-badge>
                </sc-col>
                <sc-col :span="3">
                    <sc-badge value="33">
                        <sc-button type="success">按钮</sc-button>
                    </sc-badge>
                </sc-col>
                <sc-col :span="3">
                    <sc-badge value="99+">
                        <sc-button type="default">按钮</sc-button>
                    </sc-badge>
                </sc-col>
                <sc-col :span="3">
                    <sc-badge value="new">
                        <sc-button type="plain-primary">按钮</sc-button>
                    </sc-badge>
                </sc-col>
                <sc-col :span="3">
                    <sc-badge value="你好">
                        <sc-button type="plain-success">按钮</sc-button>
                    </sc-badge>
                </sc-col>
                <sc-col :span="3">
                    <sc-badge>
                        <sc-button type="warning">按钮</sc-button>
                    </sc-badge>
                </sc-col>
                <sc-col :span="3">
                    <sc-badge value="你好"></sc-badge>
                </sc-col>
            </sc-row>
            
            
        </code-example>
    </div>
</template>
<script>
    import description from './description'
    import code1 from './code1.md'
    export default {
        data() {
            return {
                description1: description.description1,
                code1: code1
            }
        }
    }
</script>