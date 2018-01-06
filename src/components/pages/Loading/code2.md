```html
<div class="margin-bottom-5">
    <sc-row>
        <sc-col :span="2"><span class="title-middle">是/否显示：</span></sc-col>
        <sc-col :span="3" class="title-middle">
            <sc-switch v-model="option.visible" on-text="是" off-text="否"></sc-switch>
        </sc-col>
        <sc-col :span="6" class="title-middle" style="color:red;">
            *注：显示后默认是点击后消失
        </sc-col>
    </sc-row>
    
</div>
<div v-sc-loading.fullScreen="option" class="area"></div>
```