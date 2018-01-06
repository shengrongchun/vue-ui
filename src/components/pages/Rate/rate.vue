<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-rate :length="5" :value="2" :showcount="true"
            :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']"
            ></sc-rate>
        </code-example>
        <br>
        <code-example title="只读" :code="code2" :description="description2">
            <sc-rate :length="5" :value="2" :showcount="true"
            :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']"
            readonly></sc-rate>
        </code-example>
        <br>
        <code-example title="禁用" :code="code3" :description="description3">
            <sc-rate :length="5" :value="2" :showcount="true"
            :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']"
            disabled></sc-rate>
        </code-example>
        <br>
        <code-example title="回调" :code="code4" :description="description4">
            <sc-rate :length="5" :value="2" :showcount="true"
            :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']"
            @beforeRate="onBeforeRate" @afterRate="onAftereRate" required></sc-rate>
        </code-example>
        <code-table :title="API" :data="dataArray.data"></code-table>
    </div> 
</template>

<script>
    import code1 from './code1.md'
    import code2 from './code2.md'
    import code3 from './code3.md'
    import code4 from './code4.md'
    import dataArray from './dataArray'
    import description from './description'
    export default {
        data() {
            return {
                code1: code1,
                dataArray: dataArray,
                description1: description.description1,
                code2: code2,
                description2: description.description2,
                code3: code3,
                description3: description.description3,
                code4: code4,
                description4: description.description4,
            }
        },
        methods: {
            onBeforeRate(rate) {
                alert('之前的值为：'+rate)
            },
            onAftereRate(rate) {
                alert('现在的值为：'+rate)
            }
        }
    }
</script>