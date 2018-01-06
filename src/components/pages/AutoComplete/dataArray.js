export default {
    data:[{
    name: 'v-model',
    type: 'String',
    default: null,
    desc: 'v-model可以指定key值'
  },{
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '禁用按钮'
  },{
    name: 'data',
    type: 'Array',
    default: '[]',
    desc: 'data属性是下拉数据，默认显示key的信息，当然也可以通过keyName属性设置'
  },{
    name: 'keyName',
    type: 'String',
    default: 'key',
    desc: '设置此值为true,可以让图标在文字右侧显示'
  },{
    name: 'size',
    type: 'String',
    default: 'md',
    desc: '可以在组件上增加size属性设置输入框的大小，详见`sc-input`组件'
  },{
    name: 'icon',
    type: 'String',
    default: '',
    desc: '可以设置input输入框的右边的图标，详情见图标组件'
  },{
    name: 'iconClear',
    type: 'Boolean',
    default: false,
    desc: '是否显示清除数据图标'
  },{
    name: 'position',
    type: 'String',
    default: 'button',
    desc: '下拉显示位置默认是bottom(top,bottom,left,right)'
  },{
    name: 'getData',
    type: 'Function',
    default: null,
    desc: '可以增加getData函数来设置远程服务器传来的信息data'
  },{
    name: 'dataLoading',
    type: 'Boolean',
    default: false,
    desc: '在远程服务器加载数据时，设置dataLoading来显示加载图标信息'
  },{
    name: 'customItem',
    type: 'String',
    default: '',
    desc: '可以自定义下拉框显示的条目信息，只要传入自定义组件的name即可'
  }]
}