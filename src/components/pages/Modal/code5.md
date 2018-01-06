```html
<sc-modal name="modal6" position="top" header title="标题" close resizable :minWidth="50" :minHeight="50">
    <template slot="modal-content">
        缩放右下角的小标签，可以缩放弹框
    </template>
    <template slot="modal-footer">
        <sc-button type="plain" @click.prevent.stop="cancle6">取消</sc-button>
        <sc-button type="primary">确定</sc-button>
    </template>
</sc-modal>
<sc-button type="plain-success" @click="handleClick6">缩放弹框</sc-button>
```