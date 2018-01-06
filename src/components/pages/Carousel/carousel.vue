<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-carousel-group :interval="5000" @itemClick="callback">
                <sc-carousel v-for="(item,index) in slides" :key="index">
                    <img :src="item.image" :style="{height:'100%',width:'100%'}"/>
                    <span class="carousel-title">{{item.text}}</span>
                </sc-carousel>
            </sc-carousel-group>
        </code-example>
        <br>
        <code-example title="card类型" :code="code2">
            <sc-carousel-group  :interval="5000" card>
                <sc-carousel v-for="(item,index) in slides" :key="index">
                    <img :src="item.image" :style="{height:'100%',width:'100%'}"/>
                    <span class="carousel-title">{{item.text}}</span>
                </sc-carousel>
            </sc-carousel-group>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>

<script>
    import description from './description'
    import dataArray from './dataArray'
    import code1 from './code1.md'
    import code2 from './code2.md'
    export default {
        data() {
            return {
                code1: code1,
                code2: code2,
                description1: description.description1,
                dataArray: dataArray,
                slides: [
                    {
                        image: 'https://assets.imgix.net/examples/blueberries.jpg?auto=format&fit=crop&h=580&ixjsv=1.2.0&q=60&w=1140',
                        text: 'Slide1'
                    },
                    {
                        image: 'https://assets.imgix.net/examples/clownfish.jpg?auto=format&fit=crop&h=580&ixjsv=1.2.0&q=60&w=1140',
                        text: 'Slide2'
                    },
                    {
                        image: 'https://assets.imgix.net/examples/puffins.jpg?auto=format&fit=crop&h=580&ixjsv=1.2.0&q=60&w=1140',
                        text: 'Slide3'
                    },
                    {
                        image: 'https://assets.imgix.net/examples/redleaf.jpg?auto=format&fit=crop&h=580&ixjsv=1.2.0&q=60&w=1140',
                        text: 'Slide4'
                    },
                    {
                        image: 'https://assets.imgix.net/examples/butterfly.jpg?auto=format&fit=crop&h=580&ixjsv=1.2.0&q=60&w=1140',
                        text: 'Slide5'
                    }
                ]
            }
        },
        methods: {
            callback(item) {
                //console.log(item)
            }
        }
    }
</script>