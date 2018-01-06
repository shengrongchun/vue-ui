<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-modal name="modal1" position="top" bgClose>
                <template slot="modal-content">
                    最基本的弹出框
                </template>
            </sc-modal>
            <sc-modal name="modal2" position="top" 
                header title="标题" close>
                <template slot="modal-content">
                    {{content}}
                </template>
                <template slot="modal-footer">
                    <sc-button type="plain" @click.prevent.stop="cancle2">取消</sc-button>
                    <sc-button type="primary">确定</sc-button>
                </template>
            </sc-modal>
            
            <sc-button type="primary" @click="handleClick1">基本弹框</sc-button>
            <sc-button type="success" @click="handleClick2">加头,加底弹框</sc-button>
        </code-example>
        <code-example title="位置弹框" :code="code2" :description="description2">
            <sc-modal name="modal3" :position="position"
                header title="标题" close>
                <template slot="modal-content">
                    大家好，我是不同位置的模态框
                </template>
                <template slot="modal-footer">
                    <sc-button type="plain" @click.prevent.stop="cancle3">取消</sc-button>
                    <sc-button type="primary">确定</sc-button>
                </template>
            </sc-modal>

            <sc-button type="plain-primary" @click="handlePosition('center')">center弹框</sc-button>
            <sc-button type="plain-success" @click="handlePosition('bottom')">bottom弹框</sc-button>
            <sc-button type="plain-warning" @click="handlePosition('left')">left弹框</sc-button>
            <sc-button type="plain-danger" @click="handlePosition('right')">right弹框</sc-button>
        </code-example>
        <br>
        <code-example title="大小弹框" :code="code3" :description="description3">
            <sc-modal name="modal4" :size="size"
                header title="标题" close>
                <template slot="modal-content">
                    大家好，我是不同大小的模态框
                </template>
                <template slot="modal-footer">
                    <sc-button type="plain" @click.prevent.stop="cancle4">取消</sc-button>
                    <sc-button type="primary">确定</sc-button>
                </template>
            </sc-modal>
        
            <sc-button type="primary" @click="handleSize('md')">一般弹框</sc-button>
            <sc-button type="success" @click="handleSize('lg')">超大弹框</sc-button>
            <sc-button type="danger" @click="handleSize('sm')">较小弹框</sc-button>
        </code-example>
        <br>
        <code-example title="移动弹框" :code="code4" :description="description4">
            <sc-modal name="modal5" position="top"
                header title="标题" close draggable>
                <template slot="modal-content">
                    拖动弹框，可以移动弹框
                </template>
                <template slot="modal-footer">
                    <sc-button type="plain" @click.prevent.stop="cancle5">取消</sc-button>
                    <sc-button type="primary">确定</sc-button>
                </template>
            </sc-modal>
            <sc-button type="warning" @click="handleClick5">移动弹框</sc-button>
        </code-example>
        <br>
        <code-example title="缩放弹框" :code="code5" :description="description5">
            <sc-modal name="modal6" position="top"
                header title="标题" close resizable :minWidth="50" :minHeight="50">
                <template slot="modal-content">
                    缩放右下角的小标签，可以缩放弹框
                </template>
                <template slot="modal-footer">
                    <sc-button type="plain" @click.prevent.stop="cancle6">取消</sc-button>
                    <sc-button type="primary">确定</sc-button>
                </template>
            </sc-modal>
            <sc-button type="plain-success" @click="handleClick6">缩放弹框</sc-button>
        </code-example>
        <code-table title="API" :data="dataArray.data"></code-table>
    </div>
</template>

<script>
    import dataArray from './dataArray'
    import description from './description'
    import code1 from './code1.md'
    import code2 from './code2.md'
    import code3 from './code3.md'
    import code4 from './code4.md'
    import code5 from './code5.md'
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
                description5: description.description5,
                code5: code5,
                position: 'top',
                size: 'md',
                content: '大家好，我是不断增长内容的模态框',
                interval: null
            }
        },
        methods: {
            handleClick1() {
                this.$modal.show("modal1", {})
            },
            cancle1() {
                this.$modal.hide("modal1")
            },
            handleClick2() {
                this.interval = setInterval(()=> {
                    this.content += '大家好，我是不断增长内容的模态框'
                },500)
                //
                this.$modal.show("modal2", {})
            },
            cancle2() {
                if(this.interval) {
                    clearInterval(this.interval)
                }
                this.$modal.hide("modal2")
            },
            handleClick3() {
                this.$modal.show("modal3", {})
            },
            cancle3() {
                this.$modal.hide("modal3")
            },
            handleClick4() {
                this.$modal.show("modal4", {})
            },
            cancle4() {
                this.$modal.hide("modal4")
            },
            handleClick5() {
                this.$modal.show("modal5", {})
            },
            cancle5() {
                this.$modal.hide("modal5")
            },
            handleClick6() {
                this.$modal.show("modal6", {})
            },
            cancle6() {
                this.$modal.hide("modal6")
            },
            handlePosition(pos) {
                this.position = pos
                this.handleClick3()
            },
            handleSize(size) {
                this.size = size
                this.handleClick4()
            }
        },
        mounted() {
            
        }
    }
</script>