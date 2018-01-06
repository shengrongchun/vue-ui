export default {
    data:[{
    name: 'v-model',
    type: 'String',
    default: null,
    desc: '`sc-switch`值'
  },{
    name: 'on-text,off-text',
    type: 'String',
    default: null,
    desc: '设置显示文字'
  },{
    name: 'on-value,off-value',
    type: 'String',
    default: null,
    desc: '设置显示值，默认是true，false'
  },{
    name: 'on-color,off-color',
    type: 'String',
    default: false,
    desc: '设置选中或者不选中显示颜色'
  },{
    name: 'disabled',
    type: 'Boolean',
    default: false,
    desc: '设置禁用状态'
  },{
    name: 'change',
    type: '事件',
    default: false,
    desc: 'value值变动出发的回到函数'
  }]
}