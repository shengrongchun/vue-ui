<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-form>
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
        </code-example>
        <br/>
        <code-example title="一行显示" :code="code2" :description="description2">
            <sc-form inline>
                <sc-form-item label="姓名">
                    <sc-row>
                        <sc-input placeholder="请输入内容"></sc-input>
                    </sc-row>
                </sc-form-item>
                <sc-form-item label="家庭住址">
                    <sc-row>
                        <sc-input placeholder="请输入内容"></sc-input>
                    </sc-row>
                </sc-form-item>
                <sc-form-item label="工作地点">
                    <sc-row>
                        <sc-input placeholder="请输入内容"></sc-input>
                    </sc-row>
                </sc-form-item>

                <sc-form-item>
                    <sc-button type="primary">提交</sc-button>
                    <sc-button type="default">取消</sc-button>
                </sc-form-item>
            </sc-form>
        </code-example>
        <br/>
        <code-example title="label对齐方式" :code="code3" :description="description3">
            <div class="margin-bottom-5 text-right">
                <sc-button-group>
                    <sc-button type="primary" @click="position='left'">左</sc-button>
                    <sc-button type="primary" @click="position='right'">右</sc-button>
                    <sc-button type="primary" @click="position='top'">上</sc-button>
                </sc-button-group>
            </div>
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
        </code-example>
        <br>
        <code-example title="验证" :code="code4" :description="description4">
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
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>

<script>
    import description from './description'
    import dataArray from './dataArray'
    import code1 from './code1.md'
    import code2 from './code2.md'
    import code3 from './code3.md'
    import code4 from './code4.md'
    export default {
        data() {
            return {
                dataArray: dataArray,
                description1: description.description1,
                code1: code1,
                description2: description.description2,
                code2: code2,
                description3: description.description3,
                code3: code3,
                description4: description.description4,
                code4: code4,
                position: null,
                name: null,
                age: null,
                work: null,
                workMessage: '正在请求服务器，请稍等……'
            }
        },
        methods: {
            nameValidate(model) {
                var reg = /^[\u4e00-\u9fa5]+$/
                if(reg.test(model)) {
                    return true
                }
                return false
            },
            ageValidate(model) {
                //true是验证成功
                if(model<=100&&/^[1-9]\d*$/.test(model)) {
                    return true
                }
                return false
            },
            numberValidate(model) {
                if(/^[0-9]*$/.test(model)){
                    return true
                }
                return false
            },
            promiseValidate(model) {
                //true是验证成功
                let promise = new Promise((resolve,reject)=> {
                    setTimeout(()=> {
                        resolve([true,null])
                        this.work = "这是服务器传来的描述信息哦！！！"
                    },2000)
                })
                //
                promise.result = false
                return promise
            },
            submitClick() {
                alert('提交了')
            }
        },
        mounted() {
        }
    }
</script>
