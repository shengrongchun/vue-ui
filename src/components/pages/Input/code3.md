```html
<sc-input placeholder="请输入内容">
    <span slot="after">
        <sc-icon value="search" @click="handleIconClick"></sc-icon>
    </span>
</sc-input> 
<div class="margin5"></div>
<sc-input placeholder="请输入内容" size="sm">
    <span slot="before">
        Http://
    </span>
    <span slot="after">
        Search
    </span>
</sc-input>
<div class="margin5"></div>
<sc-input placeholder="请输入内容" disabled size="lg">
    <span slot="before">
        Http://
    </span>
    <span slot="after">
        <sc-button type="success" size="sm">搜索</sc-button>
    </span>
</sc-input>
```