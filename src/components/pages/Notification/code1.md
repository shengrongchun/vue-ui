```html
<sc-notification title="确认标题" type="primary" @close="close">
</sc-notification>
<br>
<sc-notification title="成功标题" type="success">
</sc-notification>
<br>
<sc-notification title="消息标题" type="info">
</sc-notification>
<br>
<sc-notification title="危险标题" type="danger">
</sc-notification>
<br>
<sc-notification title="警告标题" type="warning">
</sc-notification>


close() {
    alert('这是回调')
}
```