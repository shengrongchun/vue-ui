<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-steps :active="active">
                <sc-step title="步骤1">这是描述文字</sc-step>
                <sc-step title="步骤2">这是描述文字</sc-step>
                <sc-step title="步骤3">这是描述文字</sc-step>
                <sc-step title="步骤4">这是描述文字</sc-step>
            </sc-steps>
            <sc-button type="primary" @click="nextStep">下一步</sc-button>
            <sc-button type="success" @click="preStep">上一步</sc-button>
        </code-example>
        <br>
        <code-example title="自定义设置宽度" :code="code2">
            <sc-steps :active="active2" width="100px">
                <sc-step title="步骤1">这是描述文字</sc-step>
                <sc-step title="步骤2">这是描述文字</sc-step>
                <sc-step title="步骤3">这是描述文字</sc-step>
                <sc-step title="步骤4">这是描述文字</sc-step>
            </sc-steps>
        </code-example>
        <br>
        <code-example title="success类型" :code="code3">
            <sc-steps :active="active1" success>
                <sc-step title="步骤1">这是描述文字</sc-step>
                <sc-step title="步骤2">这是描述文字</sc-step>
                <sc-step title="步骤3">这是描述文字</sc-step>
            </sc-steps>
            <sc-button type="primary" @click="nextStep1">下一步</sc-button>
            <sc-button type="success" @click="preStep1">上一步</sc-button>
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
                code2: code2,
                code3: code3,
                description1: description.description1,
                active: 1,
                active1: 1,
                active2: 1,
            }
        },
        methods: {
            nextStep() {
                if (this.active++ > 4) this.active = 5;
            },
            preStep() {
                if (this.active-- < 1) this.active = 1;
            },
            nextStep1() {
                if (this.active1++ > 3) this.active1 = 4;
            },
            preStep1() {
                if (this.active1-- < 1) this.active1 = 1;
            }
        }
    }
</script>