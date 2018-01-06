```html
<sc-row justify="space-between">
    <sc-col :span="7">
        <sc-input placeholder="请输入内容" v-model="value"/>
    </sc-col>
    <sc-col :span="7">
        <sc-input placeholder="请输入内容" disabled/>
    </sc-col>
    <sc-col :span="7">
        <sc-input placeholder="请输入内容" v-model="value1" @iconClick="handleIconClick" icon="search"/>
    </sc-col>
</sc-row>
```