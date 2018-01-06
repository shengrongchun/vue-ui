```html
<sc-row justify="space-between">
    <sc-col :span="7">
        <p class="margin-bottom-5 text-center">导航样式</p>
        <sc-menu dark>
            <sc-menu-item icon="fa-home" title="导航一">
            </sc-menu-item>
            <sc-menu-item icon="fa-cogs" title="导航二"></sc-menu-item>
            <sc-menu-item icon="fa-database" title="导航三"></sc-menu-item>
            <sc-menu-item icon="fa-connectdevelop" title="导航四">
            </sc-menu-item>
        </sc-menu>
    </sc-col>
    <sc-col :span="7">
        <p class="margin-bottom-5 text-center">分组样式</p>
        <sc-menu dark>
            <sc-menu-item-group title="分组一">
                <sc-menu-item title="选项1">
                </sc-menu-item>
                <sc-menu-item title="选项2">
                </sc-menu-item>
            </sc-menu-item-group>
            <sc-menu-item-group title="分组二">
                <sc-menu-item icon="fa-database" title="选项1"></sc-menu-item>
                <sc-menu-item icon="fa-connectdevelop" title="选项2">
                </sc-menu-item>
            </sc-menu-item-group>
        </sc-menu>
    </sc-col>
    <sc-col :span="7">
        <p class="margin-bottom-5 text-center">导航样式和分组样式结合</p>
        <sc-menu accordion dark>
            <sc-menu-item icon="fa-home" title="导航一">
                <sc-menu-item-group title="分组一">
                    <sc-menu-item title="选项1">
                    </sc-menu-item>
                    <sc-menu-item title="选项2">
                    </sc-menu-item>
                </sc-menu-item-group>
            </sc-menu-item>
            <sc-menu-item icon="fa-cogs" title="导航二"></sc-menu-item>
            <sc-menu-item icon="fa-database" title="导航三"></sc-menu-item>
            <sc-menu-item icon="fa-connectdevelop" title="导航四" openMenu>
                <sc-menu-item-group title="分组二">
                    <sc-menu-item icon="fa-database" title="选项1"></sc-menu-item>
                    <sc-menu-item icon="fa-connectdevelop" title="选项2">
                    </sc-menu-item>
                </sc-menu-item-group>
            </sc-menu-item>
        </sc-menu>
    </sc-col>
</sc-row>
```