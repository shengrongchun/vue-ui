```html
<sc-row justify="space-between">
    <sc-col :span="12">
        <p class="margin-bottom-5">小于等于7页效果</p>
        <sc-pagination v-model="value" :total="total" :perNum="perNum"></sc-pagination>
    </sc-col>
    <sc-col :span="12">
        <p class="margin-bottom-5">大于7页效果</p>
        <sc-pagination :total="total1" :perNum="perNum" v-model="value1"></sc-pagination>
    </sc-col>
</sc-row>
```