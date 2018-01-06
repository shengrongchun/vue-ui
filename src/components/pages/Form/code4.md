```html
<sc-form @submit="submitClick">
    <sc-form-item label="姓名">
        <sc-row>
            <sc-col :span="12">
                <sc-input v-model="name" placeholder="请输入姓名 (这里用到了必填和汉字验证)"
                v-sc-validate.required="'name'"
                :name-validate="nameValidate"
                name-message="这里只能输入汉字"></sc-input>
            </sc-col>
        </sc-row>
    </sc-form-item>
    <sc-form-item label="年龄">
        <sc-row>
            <sc-col :span="12">
                <sc-input v-sc-validate.required="['age','number']" v-model="age" placeholder="请输入年龄 (这里用到了必填，数字类型和0<X<=100验证)" required-message="亲，这里不能为空哦"
                :age-validate="ageValidate" age-message="值必须要大于0小于等于100哦"
                :number-validate="numberValidate" number-message="必须为number类型"></sc-input>
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
    <sc-form-item label="工作描述">
        <sc-row>
            <sc-col :span="12">
                <sc-input placeholder="请输入工作描述关键字，便于在服务器获取描述信息"  type="textarea" v-model="work"
                v-sc-validate.required="'work'" :work-validate="promiseValidate"
                :work-message="workMessage"
                ></sc-input>
            </sc-col>
        </sc-row>
    </sc-form-item>
    <sc-form-item>
        <sc-button type="primary" nativeType="submit">提交</sc-button>
        <sc-button type="default">取消</sc-button>
    </sc-form-item>
</sc-form>
```