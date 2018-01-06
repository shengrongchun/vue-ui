<template>
    <div class="sc-upload">
        <div v-if="drag" ref="drag" class="drag-area" @click.prevent="open">
            <div class="drag-area-icon">
                <sc-icon size="90" value=":fa fa-cloud-upload"></sc-icon>
            </div>
            <span class="drag-area-text">拖拽文件到此处</span>
            <sc-button type="success" size="mi" icon=":fa fa-upload" @click.prevent.stop="upload">上传文件</sc-button>
        </div>

        <slot></slot>
        <p v-if="accept">只能上传 {{accept}} 文件</p>
        <p v-if="size">文件大小不能超过 {{size | formatSize}}</p>

        <div class="file-list">
            <ul>
                <li v-for="(file, index) in files" :key="file.id">
                    <sc-icon :value="file.name | formatType"></sc-icon>&nbsp;
                    <span>{{file.name}}</span>&nbsp;
                    <span>{{file.size | formatSize}}</span>
                    <span v-if="file.error">{{file.error}}</span>
                    <span v-else-if="file.success">success</span>
                    <span v-else-if="file.active">active</span>
                    <span v-else></span>
                    <sc-icon value=":fa fa-close" class="drag-area-icon" @click.prevent="deleteItem(file)"></sc-icon>
                </li>
            </ul>
        </div>


        <input class="fileInput" type="file" ref="input" 
        :name="name"
        :id="id || name"
        :accept="accept"
        :webkitdirectory="directory"
        :directory="directory"
        :multiple="multiple"
        :size="size"
        @change="change"/>
    </div>
</template>

<script>
    export default {
        name: 'scUpload',
        data() {
            return {
                files: [],
            }
        },
        props: {
            value: {},
            name: String,
            id: [String,Number],
            size: Number,
            accept: String,
            directory: String,
            action: {
                type: String,
                default: '/upload/post'
            },
            method: {
                type: String,
                default: 'POST'
            },
            multiple: {
                type: Boolean,
                default: false
            },
            drag: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            change(e) {
                this.setFiles(e.target)
            },
            deleteItem(file) {
                this.files.splice(this.files.indexOf(file),1)
            },
            setFiles(el) {
                if (el.files) {
                    for (let i = 0; i < el.files.length; i++) {
                        let file = el.files[i]
                        this.files.push({
                        size: file.size,
                        name: file.webkitRelativePath || file.relativePath || file.name,
                        type: file.type,
                        file,
                        el})
                    }
                } else {
                    this.files.push({
                        name: el.value.replace(/^.*?([^\/\\\r\n]+)$/, '$1'),
                        el,
                    })
                }
                //
            },
            open() {
                this.$refs.input.click()
            },
            upload() {
                if(this.files.length<1) {
                    return
                }
                //
                return this.uploadFile()
            },
            progressFunction(evt) {

            },
            uploadFile() {
                var form = new FormData() // FormData 对象
                // 遍历图片文件列表，插入到表单数据中
                for (var i = 0, file; file = this.files[i]; i++) {
                    // 文件名称，文件对象
                    form.append(file.name, file)
                }
                var xhr = new XMLHttpRequest()  // XMLHttpRequest 对象
                xhr.open(this.method, this.action, true) //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
                //xhr.onload = uploadComplete; //请求完成
                //xhr.onerror =  uploadFailed; //请求失败
                xhr.upload.onprogress = this.progressFunction//【上传进度调用方法实现】
                xhr.upload.onloadstart = function(){//上传开始执行方法
                    
                }
                xhr.send(form) //开始上传，发送form数据
                //
                return xhr
            },
            dragActive() {
                // 移除挂载
                if (this.dropElement) {
                    try {
                      document.removeEventListener('dragenter', this.onDragenter, false)
                      document.removeEventListener('dragleave', this.onDragleave, false)
                      this.dropElement.removeEventListener('dragover', this.onDragover, false)
                      this.dropElement.removeEventListener('drop', this.onDrop, false)
                    } catch (e) {
                    }
                }
                //
                this.dropElement = this.$refs.drag
                //
                if(this.dropElement) {
                    document.addEventListener('dragenter', this.onDragenter, false)
                    document.addEventListener('dragleave', this.onDragleave, false)
                    this.dropElement.addEventListener('dragover', this.onDragover, false)
                    this.dropElement.addEventListener('drop', this.onDrop, false)
                }
            },
            onDragenter(e) {
                e.preventDefault()
            },
            onDragleave(e) {
                e.preventDefault()
            },
            onDragover(e) {
                e.preventDefault()
            },
            onDrop(e) {
                e.preventDefault()
                this.addDataTransfer(e.dataTransfer)
            },
            addDataTransfer(dataTransfer) {
                for(let i=0;i<dataTransfer.files.length;i++) {
                    this.files.push(dataTransfer.files[i])
                } 
            }
        },
        filters: {
            formatSize(size) {
                if (size > 1024 * 1024 * 1024 * 1024) {
                    return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB'
                } else if (size > 1024 * 1024 * 1024) {
                    return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB'
                } else if (size > 1024 * 1024) {
                    return (size / 1024 / 1024).toFixed(2) + ' MB'
                } else if (size > 1024) {
                    return (size / 1024).toFixed(2) + ' KB'
                }
                return size.toString() + ' B'
            },
            formatType(name) {
                let type = name.split('.')[1]
                if(type.indexOf('jpg')>-1||type.indexOf('JPG')>-1||type.indexOf('png')>-1||type.indexOf('PNG')>-1||type.indexOf('bmp')>-1||type.indexOf('BMP')>-1) {
                    type = ":fa fa-file-image-o"
                }else if(type.indexOf('doc')>-1||type.indexOf('DOC')>-1) {
                    type = ":fa fa-file-word-o"
                }else if(type.indexOf('pdf')>-1||type.indexOf('PDF')>-1) {
                    type = ":fa fa-file-pdf-o"
                }else if(type.indexOf('txt')>-1||type.indexOf('TXT')>-1) {
                    type = ":fa fa-file-text-o"
                }else if(type.indexOf('ppt')>-1||type.indexOf('PPT')>-1) {
                    type = ":fa fa-file-powerpoint-o"
                }else if(type.indexOf('xls')>-1||type.indexOf('XLS')>-1) {
                    type = ":fa fa-file-excel-o"
                }else if(type.indexOf('zip')>-1||type.indexOf('ZIP')>-1) {
                    type = ":fa fa-file-zip-o"
                }else {
                    type = ":fa fa-file-o"
                }
                return type
            }
        },
        watch: {
            drag: function(value) {
                if(!value) {
                    return 
                }
                //
                this.dragActive()  
            }
        },
        mounted() {
            if(this.drag) {this.dragActive()}
            this.$refs.input.open = this.open
            this.$refs.input.upload = this.upload
            this.$emit('input', this.$refs.input)
        }
    }
</script>