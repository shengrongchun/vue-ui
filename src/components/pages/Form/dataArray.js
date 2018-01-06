export default {
    data:[{
    name: 'inline',
    type: 'Boolean',
    default: false,
    desc: '设置为一行显示'
  },{
    name: 'label-position',
    type: 'String',
    default: 'left',
    desc: '设置`label`的对齐方式（left、right、top）'
  },{
    name: 'v-sc-validate',
    type: 'String',
    default: null,
    desc: '表单验证指令，如果必填，可以加required修饰符，其他自定义验证可以写在表达式里面，详情见代码部分'
  }]
}