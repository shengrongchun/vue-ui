<template>
    <div class="content-wrapper">
        <code-example title="基本使用" :code="code1" :description="description1">
            <sc-row justify="space-between">
                <sc-col :span="7">
                    <p class="margin-bottom-5 text-center">导航样式</p>
                    <sc-menu>
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
                    <sc-menu>
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
                    <sc-menu accordion>
                        <sc-menu-item icon="fa-home" title="导航一" openMenu>
                            <sc-menu-item-group title="分组一">
                                <sc-menu-item title="选项1">
                                </sc-menu-item>
                                <sc-menu-item title="选项2">
                                </sc-menu-item>
                            </sc-menu-item-group>
                        </sc-menu-item>
                        <sc-menu-item icon="fa-cogs" title="导航二"></sc-menu-item>
                        <sc-menu-item icon="fa-database" title="导航三"></sc-menu-item>
                        <sc-menu-item icon="fa-connectdevelop" title="导航四">
                            <sc-menu-item-group title="分组二">
                                <sc-menu-item icon="fa-database" title="选项1"></sc-menu-item>
                                <sc-menu-item icon="fa-connectdevelop" title="选项2">
                                </sc-menu-item>
                            </sc-menu-item-group>
                        </sc-menu-item>
                    </sc-menu>
                </sc-col>
            </sc-row>
        </code-example>
        <br>
        <code-example title="dark样式" :code="code2">
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
        </code-example>
    </div>
</template>
<script>
    import description from './description'
    import code1 from './code1.md'
    import code2 from './code2.md'
    export default {
        data() {
            return {
                code1: code1,
                code2: code2,
                description1: description.description1
            }
        }
    }
</script>