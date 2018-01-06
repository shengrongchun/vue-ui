``` html
<sc-button>默认按钮 <sc-icon value="bell-o"/></sc-button>
<sc-button :disabled="true" type="primary" icon="bell-o">主要按钮</sc-button>
<sc-button type="danger" icon="pencil">危险按钮</sc-button>
<sc-button type="plain-warning" icon="plus" :icon-right="true">警告按钮</sc-button>
<sc-button type="plain-info" icon="circle-o-notch fa-spin fa-3x fa-fw">loading</sc-button>
<sc-button :disabled="true" type="primary" icon="spinner fa-spin fa-3x fa-fw">加载中</sc-button>
<sc-button type="primary" icon="spinner fa-pulse fa-3x fa-fw">加载中</sc-button>
<sc-button type="primary" icon="refresh fa-spin fa-3x fa-fw">加载中</sc-button>
```