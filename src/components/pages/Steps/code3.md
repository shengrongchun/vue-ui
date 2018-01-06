```html
<sc-steps :active="active1" success>
    <sc-step title="步骤1">这是描述文字</sc-step>
    <sc-step title="步骤2">这是描述文字</sc-step>
    <sc-step title="步骤3">这是描述文字</sc-step>
</sc-steps>
<sc-button type="primary" @click="nextStep1">下一步</sc-button>
<sc-button type="success" @click="preStep1">上一步</sc-button>
```