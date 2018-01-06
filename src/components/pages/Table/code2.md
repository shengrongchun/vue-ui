```html
<sc-table :data="tableData" stripe border>
    <sc-table-column>日期</sc-table-column>
    <sc-table-column>姓名</sc-table-column>
    <sc-table-column>地址</sc-table-column>

    <sc-table-column compile slot-name="table-caption1">操作</sc-table-column>
    <template slot="table-caption1" slot-scope="subData">
        <sc-button type="primary" size="sm" @click="setCallback(subData.data)">设置</sc-button>
        <sc-button type="danger" size="sm">删除</sc-button>
    </template>
    <sc-table-column compile slot-name="table-caption2">操作二</sc-table-column>
    <template slot="table-caption2" slot-scope="subData">
        <sc-button :disabled="subData.data.name == '王小贱' " type="plain-primary" size="sm" @click="setCallback2(subData.data)">设置2</sc-button>
    </template>  
    
</sc-table>
```