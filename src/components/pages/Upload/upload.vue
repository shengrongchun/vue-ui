<template>
    <div class="content-wrapper">
        <code-example title="基本使用" description="左边单选, 右边多选">
            <sc-row>
                <sc-col :span="12">
                    <sc-upload v-model="file" 
                        :action="url"
                        method="POST"
                        >
                        <sc-button @click="openClick" type="primary" icon=":fa fa-plus">选择文件</sc-button>
                        <sc-button @click="uploadClick" type="success" icon=":fa fa-upload">上传文件</sc-button>
                    </sc-upload>
                </sc-col>
                <sc-col :span="12">
                    <sc-upload v-model="file1" 
                        :action="url"
                        method="POST"
                        multiple
                        >
                        <sc-button @click="openClick1" type="primary" icon=":fa fa-plus">选择文件</sc-button>
                        <sc-button  type="success" icon=":fa fa-upload">上传文件</sc-button>
                    </sc-upload>
                </sc-col>
            </sc-row>
        </code-example>
        <br>
        <code-example title="拖拽选择">
            <sc-upload v-model="file2" 
                :action="url"
                method="POST"
                :drag="drag"
                >
                <!-- <sc-button @click="openClick" type="primary" icon=":fa fa-plus">选择文件</sc-button>
                <sc-button @click="uploadClick" type="success" icon=":fa fa-upload">上传文件</sc-button> -->
            </sc-upload>
        </code-example>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                file: null,
                file1: null,
                file2: null,
                url: '/upload/post',
                drag: true
            }
        },
        methods: {
            openClick() {
                this.file.open()
            },
            openClick1() {
                this.file1.open()
            },
            uploadClick() {
                let promise = this.file.upload()
                //
                promise.onload = function(evt) {
                    alert("上传成功")
                }
                //
                promise.onerror = function(evt) {
                    alert("上传失败")
                }
            }

        }
    }
</script>