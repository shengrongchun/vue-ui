```html
<sc-steps :active="active">
    <sc-step title="步骤1">这是描述文字</sc-step>
    <sc-step title="步骤2">这是描述文字</sc-step>
    <sc-step title="步骤3">这是描述文字</sc-step>
    <sc-step title="步骤4">这是描述文字</sc-step>
</sc-steps>
<sc-button type="primary" @click="nextStep">下一步</sc-button>
<sc-button type="success" @click="preStep">上一步</sc-button>
```