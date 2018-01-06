export default {
    data:[{
    name: 'name',
    type: 'String',
    default: null,
    desc: '`sc-modal`上的`name`属性是必填项，在js实例调用时需要'
  },{
    name: 'bgClose',
    type: 'Boolean',
    default: false,
    desc: '`sc-modal`上的`bgClose`属性，设置是否点击模态背景消失弹框'
  },{
    name: 'size',
    type: 'String',
    default: 'md',
    desc: '`sc-modal`的大小设置（lg,md,sm）'
  },{
    name: 'position',
    type: 'String',
    default: 'top',
    desc: '`sc-modal`的位置方向（center,bottom,left,right）'
  },{
    name: 'header',
    type: 'Boolean',
    default: false,
    desc: '是否显示`sc-modal`的头部'
  },{
    name: 'resizable',
    type: 'Boolean',
    default: false,
    desc: '是否可以缩放'
  },{
    name: 'close',
    type: 'Boolean',
    default: false,
    desc: '是否显示关闭按钮'
  },{
    name: 'title',
    type: 'String',
    default: null,
    desc: '头部标题'
  },{
    name: 'draggable',
    type: 'Boolean',
    default: false,
    desc: '是否可以拖动'
  },{
    name: 'minWidth',
    type: 'Number',
    default: null,
    desc: '设置模态框的最小宽度值'
  },{
    name: 'minHeight',
    type: 'Number',
    default: null,
    desc: '设置模态框的最小高度值'
  }]
}