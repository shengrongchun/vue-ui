export default {
    data:[{
    name: 'v-model',
    type: null,
    default: false,
    desc: '`sc-checkbox`的动态绑定value值(true or false)。`sc-checkbox-group`的动态绑定值，他是选中值的数组'
  },{
    name: 'label',
    type: null,
    default: null,
    desc: '`sc-checkbox`的真正的value值，只有在多选组中才起作用'
  },{
    name: 'checked',
    type: 'Boolean',
    default: false,
    desc: '直接设置组件的选中状态'
  },{
    name: 'disabled',
    type: 'Boolean',
    default: false,
    desc: '可以在`sc-checkbox`上增加disabled来禁用组件'
  },{
    name: 'className',
    type: 'String',
    default: null,
    desc: '可以在`sc-checkbox` `sc-checkbox-group`上增加className来自定义类样式'
  },{
    name: 'vertical',
    type: 'Boolean',
    default: false,
    desc: '可以在`sc-checkbox-group`上增加vertical来呈现竖直摆放'
  },{
    name: 'click',
    type: '事件',
    default: null,
    desc: '点击组件发生的回调事件'
  }]
}