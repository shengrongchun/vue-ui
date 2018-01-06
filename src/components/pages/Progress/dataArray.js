export default {
    data:[{
    name: 'v-model',
    type: 'String',
    default: null,
    desc: 'v-model可以指定loading的值，百分之几'
  },{
    name: 'show-percent',
    type: 'Boolean',
    default: false,
    desc: '是否显示百分比'
  },{
    name: 'type',
    type: 'String',
    default: 'primary',
    desc: '设置loading的类型，也就是颜色的不同（primary,danger,warning,success,info）'
  },{
    name: 'striped',
    type: 'Boolean',
    default: false,
    desc: '设置斑马样式'
  },{
    name: 'striped-active',
    type: 'Boolean',
    default: false,
    desc: '设置斑马动画样式'
  },{
    name: 'size',
    type: 'String',
    default: 'md',
    desc: '设置尺寸大小（lg,md,sm,mi,m）'
  }]
}