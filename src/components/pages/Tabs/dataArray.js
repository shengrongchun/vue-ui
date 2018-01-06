export default {
    data:[{
    name: 'v-model',
    type: 'String',
    default: null,
    desc: '`sc-tabs`上的`v-model`可以设置显示子项选中，对应子项的`name`属性'
  },{
    name: 'type',
    type: 'String',
    default: null,
    desc: '设置tab的样式（tabOne,tabTwo,tabThree）'
  },{
    name: 'disabled',
    type: 'Boolean',
    default: false,
    desc: '子项禁用'
  },{
    name: 'tabClick',
    type: '回调',
    default: false,
    desc: '点击子项的回调函数'
  }]
}