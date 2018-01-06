export default {
    data:[{
    name: 'active',
    type: 'Number',
    default: null,
    desc: '设置步骤条第几项为选中状态，从`1`开始'
  },{
    name: 'width',
    type: 'String',
    default: null,
    desc: '设置每项步骤条的宽度，需要带单位如：`100px`'
  },{
    name: 'success',
    type: 'Boolean',
    default: false,
    desc: '是否显示`success`类型'
  }]
}