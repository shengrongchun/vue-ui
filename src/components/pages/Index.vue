<template>
    <div class="src-top">
        <div class="src-top-img">
            <img src="../../assets/images/img.png"/>
        </div>
        <div class="src-top-login">
            <sc-form label-position="right" @submit="submitClick">
                <sc-form-item label="用户名">
                    <sc-row>
                        <sc-col :span="16">
                            <sc-input v-model="user" v-sc-validate.required placeholder="请输入用户名"></sc-input>
                        </sc-col>
                    </sc-row>
                </sc-form-item>
                <sc-form-item label="密码">
                    <sc-row>
                        <sc-col :span="16">
                            <sc-input v-model="password" v-sc-validate.required placeholder="请输入密码" type="password"></sc-input>
                        </sc-col>
                    </sc-row>
                </sc-form-item>
                <sc-form-item>
                    <sc-button type="primary" nativeType="submit">确定</sc-button>
                    <sc-button type="default" @click="cancel">取消</sc-button>
                </sc-form-item>
            </sc-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                user: null,
                password: null
            }
        },
        methods: {
            cancel() {
                this.user = null
                this.password = null
            },
            submitClick() {
                this.$http.post('/login',{
                    user: this.user,
                    password: this.password
                }).then(function(res) {
                    this.$router.push('/layout')
                },function(res) {
                    this.$notify({
                        title: '错误提示',
                        content: res.data+' (用户名：sheng,密码：123)',
                        position: 'bottomRight',
                        type: 'danger',
                    }).then(function() {
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .src-top {
        position: relative;
        color: #fff;
        height: 100%;
        width: 100%;
        .src-top-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 60%;
            height: 100%;
        }
        .src-top-login {
            position: absolute;
            bottom: 40%;
            left: 60%;
            width: 40%;
            text-align: left;
        }
    }
</style>