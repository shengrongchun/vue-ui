```html
<sc-checkbox-all v-model="moreSelect">全选</sc-checkbox-all>
<sc-checkbox-group v-model="moreSelect" @change="listChange">
    <sc-checkbox label="备选项1">备选项1</sc-checkbox>
    <sc-checkbox label="备选项2" checked>备选项2</sc-checkbox>
    <sc-checkbox label="备选项3">备选项3</sc-checkbox>
</sc-checkbox-group>
```