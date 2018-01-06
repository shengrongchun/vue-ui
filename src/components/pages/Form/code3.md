```html
<sc-form :label-position="position">
    <sc-form-item label="姓名">
        <sc-row>
            <sc-col :span="12">
                <sc-input placeholder="请输入内容"></sc-input>
            </sc-col>
        </sc-row>
    </sc-form-item>
    <sc-form-item label="家庭住址">
        <sc-row>
            <sc-col :span="12">
                <sc-input placeholder="请输入内容"></sc-input>
            </sc-col>
        </sc-row>
    </sc-form-item>
    <sc-form-item label="工作地点">
        <sc-row>
            <sc-col :span="12">
                <sc-input placeholder="请输入内容"></sc-input>
            </sc-col>
        </sc-row>
    </sc-form-item>
    <sc-form-item>
        <sc-button type="primary">提交</sc-button>
        <sc-button type="default">取消</sc-button>
    </sc-form-item>
</sc-form>
```