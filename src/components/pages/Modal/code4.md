```html
<sc-modal name="modal5" position="top" header title="标题" close draggable>
    <template slot="modal-content">
        拖动弹框，可以移动弹框
    </template>
    <template slot="modal-footer">
        <sc-button type="plain" @click.prevent.stop="cancle5">取消</sc-button>
        <sc-button type="primary">确定</sc-button>
    </template>
</sc-modal>
<sc-button type="warning" @click="handleClick5">移动弹框</sc-button>
```