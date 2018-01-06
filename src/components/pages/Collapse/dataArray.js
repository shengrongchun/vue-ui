export default {
    data:[{
    name: 'clickItem',
    type: '回调函数',
    default: null,
    desc: '点击每项的回调函数'
  },{
    name: 'accordion',
    type: 'Boolean',
    default: false,
    desc: '是否设置手风琴效果'
  },{
    name: 'type',
    type: 'String',
    default: null,
    desc: '设置折叠面板的类型（primary,success）'
  },{
    name: 'v-model',
    type: 'String',
    default: null,
    desc: '可以通过v-model来设置哪些或者哪一项默认展开'
  }]
}