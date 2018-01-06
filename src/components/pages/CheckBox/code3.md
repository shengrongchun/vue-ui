```html
<sc-checkbox-group v-model="moreSelect" @change="listChange">
    <sc-checkbox label="备选项1">备选项1</sc-checkbox>
    <sc-checkbox label="备选项2">备选项2</sc-checkbox>
    <sc-checkbox label="备选项3" checked>备选项3</sc-checkbox>
</sc-checkbox-group>
<div class="margin25"></div>
<sc-checkbox-group v-model="moreSelect" @change="listChange" vertical>
    <sc-checkbox label="备选项1">备选项1</sc-checkbox>
    <sc-checkbox label="备选项2">备选项2</sc-checkbox>
    <sc-checkbox label="备选项3" checked>备选项3</sc-checkbox>
</sc-checkbox-group>
```