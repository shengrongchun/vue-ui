```html
<div class="margin-bottom-5">
    <sc-row justify="space-between">
        <sc-col :span="2"><span class="title-middle">类型：</span></sc-col>
        <sc-col :span="6">
            <sc-select v-model="options.type" :data="data1" outputValue></sc-select>
        </sc-col>
        <sc-col :span="2"><span class="title-middle">尺寸：</span></sc-col>
        <sc-col :span="6">
            <sc-select v-model="options.size" :data="data2" outputValue></sc-select>
        </sc-col>
        <sc-col :span="2"><span class="title-middle">颜色：</span></sc-col>
        <sc-col :span="6">
            <sc-select v-model="options.color" :data="data3" outputValue></sc-select>
        </sc-col>
    </sc-row>
    <br/>
    <sc-row>
        <sc-col :span="2"><span class="title-middle">是/否显示：</span></sc-col>
        <sc-col :span="6" class="title-middle">
            <sc-switch v-model="options.visible" on-text="是" off-text="否"></sc-switch>
        </sc-col>
        <sc-col :span="3"><span class="title-middle">是/否点击消失：</span></sc-col>
        <sc-col :span="6" class="title-middle">
            <sc-switch v-model="options.clickClose" on-text="是" off-text="否"></sc-switch>
        </sc-col>
    </sc-row>
</div>
<div v-sc-loading="options" class="area"></div>

options: {
    size: 'md',
    type: 'circular',
    color: 'primary',
    visible: true,
    clickClose: false
},
```