```html
<div class="margin-bottom-5">
    <sc-button type="primary" @click="setStripe">是否斑马样式</sc-button>
    <sc-button type="success" @click="setBorder">是否边框样式</sc-button>
    <sc-button type="info" @click="setSmall">是否小尺寸样式</sc-button>
    <sc-button type="warning" @click="setHeight">是否固定表头</sc-button>
</div>
<sc-table :data="tableData" :stripe="stripe" :border="border" :small="small"
            :height="height">
    <sc-table-column>日期</sc-table-column>
    <sc-table-column>姓名</sc-table-column>
    <sc-table-column>地址</sc-table-column>
</sc-table>

export default {
    data() {
        return {
            description1: description.description1,
            stripe: false,
            border: false,
            small: false,
            height: null,
            tableData: [{
                date: '2017-12-11',
                name: '王小贱',
                address: '上海市浦东新区杨高南路 5678 弄'
            }, {
                date: '2017-12-13',
                name: '王小小贱',
                address: '上海市浦东新区杨高南路 5678 弄'
            }, {
                date: '2017-12-14',
                name: '王大贱',
                address: '上海市浦东新区杨高南路 5678 弄'
            }, {
                date: '2017-12-12',
                name: '王大大贱',
                address: '上海市浦东新区杨高南路 5678 弄'
            }],
            tableData1: [{
                date: '2017-12-11',
                name: '张三',
                address: '上海市杨高南路 5678 弄'
            }, {
                date: '2017-12-13',
                name: '刘六',
                address: '浦东新区杨高南路 5678 弄'
            }, {
                date: '2017-12-14',
                name: '王二',
                address: '杨高南路 5678 弄'
            }, {
                date: '2017-12-12',
                name: '李四',
                address: '5678 弄'
            }]
        }
    },
    methods: {
        setStripe() {
            this.stripe = !this.stripe
        },
        setBorder() {
            this.border = !this.border
        },
        setSmall() {
            this.small = !this.small
        },
        setHeight() {
            if(this.height) {
                this.height = null
            }else {
                this.height = '100px'
            } 
        },
        setCallback(data) {
            alert('你点击了设置,日期：'+data.date+' 姓名：'+data.name+' 地址：'+data.address)
        },
        setCallback2(data) {
            alert('你点击了设置2,日期：'+data.date+' 姓名：'+data.name+' 地址：'+data.address)
        }
    }
}

```