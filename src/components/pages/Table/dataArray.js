export default {
    data:[{
    name: 'data',
    type: 'Array',
    default: null,
    desc: '表格数据'
  },{
    name: 'stripe',
    type: 'Boolean',
    default: false,
    desc: '是否显示斑马样式'
  },{
    name: 'border',
    type: 'Boolean',
    default: false,
    desc: '是否显示边框'
  },{
    name: 'small',
    type: 'Boolean',
    default: false,
    desc: '是否显示小尺寸'
  },{
    name: 'height',
    type: 'String',
    default: null,
    desc: '如果需要固定表头，可以设置一个高度如`100px`'
  },{
    name: 'sortable',
    type: 'Boolean',
    default: false,
    desc: '可以在表头增加此属相显示排序效果'
  },{
    name: 'filter',
    type: 'Boolean',
    default: false,
    desc: '可以在表头增加此属相显示过滤效果'
  }]
}