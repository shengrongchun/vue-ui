<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-tabs v-model="active">
                <sc-tab title="用户管理" name="first">
                    这是tab1的内容
                </sc-tab>
                <sc-tab title="角色管理" name="second" disabled>
                    这是tab2的内容
                </sc-tab>
                <sc-tab title="产品管理" name="third">
                    这是tab3的内容
                </sc-tab>
            </sc-tabs>
        </code-example>
        <br>
        <code-example title="样式一" :code="code2">
            <sc-tabs v-model="active1" type="tabOne">
                <sc-tab title="用户管理" name="first">
                    这是tab1的内容
                </sc-tab>
                <sc-tab title="角色管理" name="second">
                    这是tab2的内容
                </sc-tab>
                <sc-tab title="产品管理" name="third">
                    这是tab3的内容
                </sc-tab>
            </sc-tabs>
        </code-example>
        <br>
        <code-example title="样式二" :code="code3">
            <sc-tabs v-model="active2" type="tabTwo" @tabClick="click">
                <sc-tab title="用户管理" name="first">
                    这是tab1的内容
                </sc-tab>
                <sc-tab title="角色管理" name="second">
                    这是tab2的内容
                </sc-tab>
                <sc-tab title="产品管理" name="third">
                    这是tab3的内容
                </sc-tab>
            </sc-tabs>
        </code-example>
        <br>
        <code-example title="样式三" :code="code4">
            <sc-tabs v-model="active3" type="tabThree">
                <sc-tab title="用户管理" name="first">
                    这是tab1的内容
                </sc-tab>
                <sc-tab title="角色管理" name="second">
                    这是tab2的内容
                </sc-tab>
                <sc-tab title="产品管理" name="third">
                    这是tab3的内容
                </sc-tab>
            </sc-tabs>
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
                code1: code1,
                code2: code2,
                code3: code3,
                code4: code4,
                description1: description.description1,
                dataArray: dataArray,
                active: 'first',
                active1: 'first',
                active2: 'first',
                active3: 'first',
            }
        },
        methods: {
            click(instance) {
                //alert(instance)
            }
        }
    }
</script>