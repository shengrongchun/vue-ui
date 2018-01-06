```html
<sc-row justify="space-between">
    {{value}}
    <sc-col :span="10">
        <sc-slider tooltip v-model="value" :min="0" :max="100" ></sc-slider>
    </sc-col>
    {{value1}}
    <sc-col :span="10">
        <sc-slider tooltip v-model="value1"></sc-slider>
    </sc-col>
</sc-row>
<sc-row justify="space-between">
    {{value2}}
    <sc-col :span="20">
        <sc-slider tooltip v-model="value2"></sc-slider>
    </sc-col>
</sc-row>
```