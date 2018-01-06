```html
<sc-button type="primary" v-sc-tooltip.dark="options">top center</sc-button>
<sc-button type="warning" v-sc-tooltip.right="options1">custom content</sc-button>
options1: {
    customComponent: 'child-component' //自定义显示组件名称
},
options: {
    title: '标题',
    content: '这是内容111',
    //arrowWidth: 18,//箭头大小
    //space: 20//tooltip与元素间距

}
```