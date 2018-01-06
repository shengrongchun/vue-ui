export default {
    data:[{
    name: 'v-model',
    type: null,
    default: null,
    desc: '可以在`sc-input`上增加v-model来绑定输入的值'
  },{
    name: 'type',
    type: 'String',
    default: 'text',
    desc: '可以在`sc-input`上增加type来设置任意input支持的类型'
  },{
    name: 'width,height',
    type: 'String',
    default: null,
    desc: 'width，height属性只对textarea类型有效，书写时必须加上单位，如px'
  },{
    name: 'autoSize',
    type: 'Boolean',
    default: 'false',
    desc: 'autoSize属性只对textarea类型有效，设置textarea是否缩放大小'
  },{
    name: 'disabled',
    type: 'Boolean',
    default: false,
    desc: '可以在`sc-input`上增加disabled来禁用，默认为false'
  },{
    name: 'icon',
    type: 'String',
    default: null,
    desc: '可以在`sc-input`上增加icon来增加图标'
  },{
    name: 'iconClick',
    type: '回调',
    default: null,
    desc: '定义icon之后，点击图标会产生iconClick回调'
  },{
    name: 'size',
    type: 'String',
    default: 'md',
    desc: '可以在`sc-iuput`上增加size，来设置组件的大小(lg,md,sm,mi)'
  },{
    name: 'required',
    type: 'Boolean',
    default: false,
    desc: '可以在`sc-iuput`上增加required，来设置必填'
  },{
    name: 'readonly',
    type: 'Boolean',
    default: false,
    desc: '可以在`sc-iuput`上增加readonly，来设置只读'
  }]
}