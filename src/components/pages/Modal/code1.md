```html
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
```