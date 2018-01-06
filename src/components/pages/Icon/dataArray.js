export default {
    data:[{
    name: 'value',
    type: 'String',
    default: null,
    desc: '可以在`sc-icon`上增加value来定义各种图标，详见官网'
  },{
    name: 'size',
    type: 'String,Number',
    default: 14,
    desc: '可以在`sc-icon`上增加size来定义图标大小，单位是px'
  },{
    name: 'color',
    type: 'String',
    default: '#000',
    desc: '可以在`sc-icon`上增加color来定义图标颜色，#000，red等形式都行'
  },{
    name: 'className',
    type: 'String',
    default: null,
    desc: '可以在`sc-icon`上增加className来定义图标类，自定义图标的样式'
  },{
    name: 'click',
    type: '事件',
    default: null,
    desc: '可以在`sc-icon`上增加click，点击图标触发的回调函数'
  }]
}