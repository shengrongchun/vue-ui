```html
<sc-modal name="modal3" :position="position" header title="标题" close>
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


handlePosition(pos) {
    this.position = pos
    this.handleClick3()
}
```