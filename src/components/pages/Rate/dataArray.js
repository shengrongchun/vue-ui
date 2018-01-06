export default {
    data:[{
    name: 'length',
    type: 'String,Number',
    default: null,
    desc: '设置呈现几颗星'
  },{
    name: 'value',
    type: 'String,Number',
    default: null,
    desc: '显示几颗星'
  },{
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'disabled来禁用组件'
  },{
    name: 'readonly',
    type: 'Boolean',
    default: false,
    desc: '只读模式'
  },{
    name: 'ratedesc',
    type: 'Array',
    default: '[]',
    desc: '显示不同程度的文字'
  },{
    name: 'showcount',
    type: 'Boolean',
    default: false,
    desc: '是否显示数字'
  },{
    name: 'beforeRate,afterRate',
    type: '事件',
    default: null,
    desc: '值改变前后的回调函数'
  }]
}