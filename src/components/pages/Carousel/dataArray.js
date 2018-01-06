export default {
    data:[{
    name: 'interval',
    type: 'Number',
    default: false,
    desc: '设置走马灯变换的时间，单位是毫秒'
  },{
    name: 'itemClick',
    type: '回调函数',
    default: null,
    desc: '点击切换的回调函数'
  },{
    name: 'card',
    type: 'Boolean',
    default: false,
    desc: '走马灯card类型'
  }]
}