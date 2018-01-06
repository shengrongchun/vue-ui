```html
<sc-modal name="modal4" :size="size" header title="标题" close>
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

handleSize(size) {
    this.size = size
    this.handleClick4()
}
```