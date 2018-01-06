export default {
    data:[{
    name: 'type',
    type: 'String',
    default: 'defalut',
    desc: '可以在`sc-button`上增加type来定义各种样式按钮'
  },{
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: '禁用按钮'
  },{
    name: 'icon',
    type: 'String',
    default: null,
    desc: '可以在`sc-button`增加图标，值详见``` sc-icon ```组件,默认图标在文字左侧'
  },{
    name: 'iconRight',
    type: 'Boolean',
    default: 'false',
    desc: '设置此值为true,可以让图标在文字右侧显示'
  },{
    name: 'size',
    type: 'String',
    default: 'md',
    desc: '可以在`sc-button`上增加size属性设置不同大小的值(lg,md,sm,mi)'
  },{
    name: 'iconSize',
    type: 'String,Number',
    default: '14',
    desc: '可以在`sc-button`上增加iconSize属性设置图标大小的值，详情见图标组件'
  },{
    name: 'nativeType',
    type: 'String',
    default: 'button',
    desc: '可以在`sc-button`上增加nativeType属性来改变按钮的点击性质(button,submit,reset)'
  },{
    name: 'href',
    type: 'String',
    default: null,
    desc: '可以在`sc-button`上增加href属性来让按钮变成链接标签'
  },{
    name: 'click',
    type: '事件',
    default: null,
    desc: '可以在`sc-button`上增加@click属性来设置点击按钮触发的事件'
  }]
}