export default {
    data:[{
    name: 'label',
    type: 'String',
    default: null,
    desc: '`sc-radio`的value值'
  },{
    name: 'v-model',
    type: '',
    default: null,
    desc: '`sc-radio`的动态绑定值'
  },{
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '可以在`sc-radio`上增加disabled来禁用组件'
  },{
    name: 'change',
    type: '事件',
    default: null,
    desc: '可以在`sc-radio-group`上增加@change事件，当v-model值发生变化触发的回调函数'
  }]
}