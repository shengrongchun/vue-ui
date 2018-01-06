<template>
    <div class="content-wrapper">
        <code-example title='基本使用' :code="code1" :description="description1">
            <sc-progress v-model="value" show-percent></sc-progress>
            <sc-progress v-model="value1" type="success"></sc-progress>
            <sc-progress v-model="value2" type="info"></sc-progress>
            <sc-progress v-model="value3" type="danger"></sc-progress>
            <sc-progress v-model="value4" type="warning"></sc-progress>
            <sc-button @click="random" type="success">随机数</sc-button>
            <sc-button @click="bodyTop" type="primary">点击body顶部出现</sc-button>
        </code-example>
        <br>
        <code-example title='斑马动画' :code="code2" :description="description2">
            <sc-progress v-model="value1" type="success" striped show-percent></sc-progress>
            <sc-progress v-model="value2" type="info" striped-active show-percent></sc-progress>
        </code-example>
        <br>
        <code-example title='尺寸大小' :code="code3" :description="description3">
            <sc-progress v-model="value1" type="success" size="lg" striped-active show-percent></sc-progress>
            <sc-progress v-model="value" show-percent></sc-progress>
            <sc-progress v-model="value2" type="info" size="sm" show-percent></sc-progress>
            <sc-progress v-model="value3" type="danger" size="xm" show-percent></sc-progress>
            <sc-progress v-model="value4" type="warning" size="mi" show-percent></sc-progress>
            <sc-progress v-model="value4" type="primary" size="m" show-percent></sc-progress>
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
                description1: description.description1,
                code1: code1,
                description2: description.description2,
                code2: code2,
                description3: description.description3,
                code3: code3,
                value: 100,
                value1: 20,
                value2: 50,
                value3: 70,
                value4: 40,
                promise: null,
                valueTop: 0,
                setInterval: null
            }
        },
        methods: {
            random() {
                this.value = Math.random()*100
                this.value1 = Math.random()*100
                this.value2 = Math.random()*100
                this.value3 = Math.random()*100
                this.value4 = Math.random()*100
            },
            bodyTop() {
                if(this.promise) {return}
                this.promise = this.$progress({
                    value: this.valueTop
                }).then((instance)=> {
                    instance.destroy()
                    this.promise = null
                    this.valueTop = 0
                })
                //
                if(this.setInterval) {clearInterval(setInterval)}
                this.setInterval = setInterval(()=> {
                    this.valueTop += 10 
                },500)
            }
        },
        watch: {
            valueTop(value,oldvalue) {
                if(this.promise) {
                    this.promise.then.update({
                        value: value
                    })
                }
               
            }
        }
    }
</script>