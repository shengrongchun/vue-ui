export default {
    data:[{
    name: 'size',
    type: 'String',
    default: 'md',
    desc: '可以设置加载指令的大小（xl,lg,md,sm,xs）'
  },{
    name: 'type',
    type: 'String',
    default: 'default',
    desc: '可以设置加载指令的类型（circular,default,circular-wider,circular2,ball-pulse,line-scale）'
  },{
    name: 'color',
    type: 'String',
    default: 'primary',
    desc: '可以设置加载指令的颜色（primary,warning,danger,success,info,#000,yellow）'
  },{
    name: 'visible',
    type: 'Boolean',
    default: false,
    desc: '可以设置加载指令是否显示'
  },{
    name: 'clickClose',
    type: 'Boolean',
    default: false,
    desc: '可以设置加载指令是否点击消失'
  },{
    name: 'target',
    type: 'String',
    default: null,
    desc: 'js实例也可以在指定元素上显示，可以用target设置（class和id）'
  }]
}