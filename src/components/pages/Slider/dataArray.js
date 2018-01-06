export default {
    data:[{
    name: 'v-model',
    type: 'String,Array',
    default: null,
    desc: '`sc-slider`组件值,数组可以显示范围'
  },{
    name: 'min,max',
    type: 'String,Number',
    default: null,
    desc: '设置最大、最小值'
  },{
    name: 'disabled',
    type: 'Boolean',
    default: false,
    desc: '是否禁用'
  },{
    name: 'tooltip',
    type: 'String',
    default: false,
    desc: '可以增加tooltip来显示'
  },{
    name: 'vertical',
    type: 'Boolean',
    default: false,
    desc: '是否竖直显示'
  }]
}